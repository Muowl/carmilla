import { readFileSync, writeFileSync } from 'node:fs';
import { root, requireDev } from './lib.mjs';

// Export sizes only: the approved artwork stays in assets/brand/icon-source.png.
const { chromium } = requireDev('playwright');
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox'] });
try {
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  const source = readFileSync(root + 'assets/brand/icon-source.png').toString('base64');
  await page.setContent(`<style>html,body{margin:0;background:#141219}img{display:block;width:100vw;height:100vh}</style><img alt="Carmilla Arco" src="data:image/png;base64,${source}">`);
  await page.locator('img').evaluate(image => image.decode());
  for (const [size, paths] of [
    [256, ['assets/brand/icon.png', 'ports/vscode/icon.png', 'docs/icon.png']],
    [32, ['docs/favicon-32.png']],
  ]) {
    await page.setViewportSize({ width: size, height: size });
    const png = await page.screenshot();
    for (const path of paths) writeFileSync(root + path, png);
  }
  console.log('Exported Arco at 256px for the extension, README and touch icon, and 32px for the favicon.');
} finally { await browser.close(); }
