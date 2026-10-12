import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { root, read, requireDev, palette, buildTheme } from './lib.mjs';

const { chromium } = requireDev('playwright');
const { default: AxeBuilder } = requireDev('@axe-core/playwright');
const capture = process.argv.includes('--capture');
const flavors = ['base', ...Object.keys(palette.flavors)];
const server = createServer((req, res) => {
  if (req.url !== '/') { res.writeHead(404); res.end(); return; }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(read('docs/index.html'));
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 1000 }, reducedMotion: 'reduce' });
  // Keep verification and images independent of Google Fonts or external network access.
  await context.route('https://**', route => route.abort());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const url = `http://127.0.0.1:${server.address().port}/`;
  await page.goto(url);
  for (const lang of ['pt', 'en']) {
    await page.locator(`[data-set-lang="${lang}"]`).click();
    for (const flavor of flavors) {
      await page.locator(`.flavor-switch [data-set-flavor="${flavor}"]`).click();
      const theme = buildTheme(flavor === 'base' ? undefined : flavor);
      const background = await page.locator('.editor').evaluate(el => getComputedStyle(el).backgroundColor);
      const rgb = theme.colors['editor.background'].slice(1).match(/../g).map(v => parseInt(v, 16));
      assert.equal(background, `rgb(${rgb.join(', ')})`, `${flavor}: showcase matches theme background`);
      const variables = await page.locator('html').evaluate(el => {
        const style = getComputedStyle(el);
        return Object.fromEntries(['crypt', 'boudoir', 'velvet', 'selection', 'carmine', 'carmine-hover'].map(key => [key, style.getPropertyValue('--' + key).trim()]));
      });
      for (const [variable, key] of Object.entries({ crypt: 'terminal.background', boudoir: 'editor.background', velvet: 'statusBar.background', selection: 'editor.selectionBackground', carmine: 'button.background', 'carmine-hover': 'button.hoverBackground' })) {
        assert.equal(variables[variable], theme.colors[key], `${flavor}: ${variable} matches shipped theme`);
      }
      assert.equal(await page.locator('meta[name="theme-color"]').getAttribute('content'), theme.colors['terminal.background']);
      await page.mouse.move(1200, 900);
      const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      assert.deepEqual(violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })), [], `${lang}/${flavor}: accessibility violations`);
      if (capture && lang === 'en') {
        await page.locator('#editor-preview').screenshot({
          path: root + `assets/preview${flavor === 'base' ? '' : '-' + flavor}.png`,
          style: '.lang-switch, .flavor-switch { visibility: hidden; } #editor-preview { padding: 24px; background: var(--crypt); border-radius: 16px; }',
        });
      }
    }
  }
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  assert.equal(await page.locator('html').getAttribute('data-flavor'), flavors.at(-1));
  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}: page overflow`);
    for (const selector of ['.code-area', '.editor-statusbar', '.token-map', '.flavors-grid']) {
      const box = await page.locator(selector).boundingBox();
      assert.ok(box.x >= 0 && box.x + box.width <= width, `${width}: ${selector} is clipped`);
    }
    const language = await page.locator('.lang-switch').boundingBox();
    const flavor = await page.locator('.flavor-switch').boundingBox();
    assert.ok(flavor.x + flavor.width <= language.x || flavor.y >= language.y + language.height, `${width}: controls overlap`);
  }
  for (const mode of ['blocked', 'invalid']) {
    const fresh = await context.newPage();
    fresh.on('pageerror', error => errors.push(error.message));
    await fresh.addInitScript(mode => {
      if (mode === 'blocked') Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Storage disabled', 'SecurityError'); } });
      else { localStorage.setItem('carmilla-lang', 'invalid'); localStorage.setItem('carmilla-flavor', 'invalid'); }
    }, mode);
    await fresh.goto(url);
    assert.equal(await fresh.locator('html').getAttribute('lang'), 'pt-BR');
    assert.equal(await fresh.locator('html').getAttribute('data-flavor'), 'base');
    await fresh.locator('[data-set-lang="en"]').click();
    await fresh.locator('.flavor-switch [data-set-flavor="moonstone"]').click();
    assert.equal(await fresh.locator('html').getAttribute('lang'), 'en');
    assert.equal(await fresh.locator('html').getAttribute('data-flavor'), 'moonstone');
    await fresh.close();
  }
  assert.deepEqual(errors, []);
  console.log(`Showcase passed: both languages, ${flavors.length} flavors, WCAG A/AA automated checks, mobile layout, persistence and unavailable/invalid storage.`);
  if (capture) console.log(`Updated ${flavors.length} TextMate previews in assets/.`);
} finally {
  await browser?.close();
  server.close();
}
