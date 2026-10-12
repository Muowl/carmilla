import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTheme, contrast, palette, read, manifest } from '../scripts/lib.mjs';

for (const flavor of [undefined, ...Object.keys(palette.flavors)]) {
  const theme = buildTheme(flavor);
  const c = theme.colors;
  test(`${theme.name}: readable text and focus states`, () => {
    for (const [fg, bg, minimum] of [
      [c['editor.foreground'], c['editor.background'], 7],
      [theme.semanticTokenColors.keyword, c['editor.background'], 4.5],
      [theme.semanticTokenColors.comment.foreground, c['editor.background'], 4.5],
      [c['editor.selectionForeground'], c['editor.selectionBackground'], 4.5],
      [c['input.placeholderForeground'], c['input.background'], 4.5],
      [c['inlineChatInput.placeholderForeground'], c['inlineChatInput.background'], 4.5],
      [c.focusBorder, c['input.background'], 3],
      [c['inlineChatInput.focusBorder'], c['inlineChatInput.background'], 3],
      [c['button.foreground'], c['button.background'], 4.5],
    ]) assert.ok(contrast(fg, bg) >= minimum, `${fg} on ${bg}: ${contrast(fg, bg).toFixed(2)} < ${minimum}`);
  });
  test(`${theme.name}: valid colors and portable ANSI mapping`, () => {
    for (const [key, value] of Object.entries(c)) assert.match(value, /^#[0-9A-F]{6}([0-9A-F]{2})?$/, key);
    for (const mode of ['normal', 'bright']) {
      for (const [color, hex] of Object.entries(palette.terminal[mode])) {
        const key = `terminal.ansi${mode === 'bright' ? 'Bright' : ''}${color[0].toUpperCase()}${color.slice(1)}`;
        let expected = hex;
        if (flavor && color === 'magenta') expected = palette.flavors[flavor][mode === 'bright' ? 'accent-hover' : 'accent'];
        if (flavor && mode === 'normal' && color === 'black') expected = palette.flavors[flavor].crypt;
        assert.equal(c[key], expected, key);
      }
    }
  });
}
test('extension contributes every generated theme without executable entrypoints', () => {
  assert.deepEqual(manifest.contributes.themes.map(t => t.path).sort(), ['./carmilla.json', ...Object.keys(palette.flavors).map(f => `./carmilla-${f}.json`)].sort());
  for (const contribution of manifest.contributes.themes) {
    const theme = JSON.parse(read(`ports/vscode/${contribution.path.replace('./', '')}`));
    assert.equal(theme.name, contribution.label);
    assert.equal(theme.type, 'dark');
    assert.equal(theme.semanticHighlighting, true);
  }
  assert.equal(manifest.main, undefined);
  assert.equal(manifest.browser, undefined);
  assert.equal(manifest.dependencies, undefined);
});
