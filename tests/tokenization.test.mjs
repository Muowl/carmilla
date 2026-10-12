import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTheme, palette } from '../scripts/lib.mjs';
import { tokenize } from '../scripts/tokenize.mjs';

test('Windows source has the same tokens as LF source', async () => {
  const source = 'const a = null;\n// a comment\nconsole.log(a);\n';
  const theme = buildTheme();
  assert.deepEqual(await tokenize(theme, 'source.ts', source.replaceAll('\n', '\r\n')), await tokenize(theme, 'source.ts', source));
});

for (const flavor of [undefined, ...Object.keys(palette.flavors)]) {
  const theme = buildTheme(flavor);
  test(`${theme.name}: TypeScript language constants, functions and operators`, async () => {
    const lines = await tokenize(theme, 'source.ts', 'const a = null; const b = undefined; const c = true; console.error(42);');
    const tokens = lines.flat();
    for (const [text, color] of [
      ['null', palette.colors.wisteria], ['undefined', palette.colors.wisteria],
      ['true', palette.colors['peach-velvet']], ['42', palette.colors['peach-velvet']],
      ['error', palette.colors.absinthe], ['const', theme.semanticTokenColors.keyword],
    ]) assert.ok(tokens.some(t => t.text.trim() === text && t.color === color), `Missing ${text} in ${color}`);
    assert.ok(tokens.some(t => t.text.includes('=') && t.color === palette.colors.pearl));
    assert.ok(tokens.find(t => t.text === 'null').italic);
    assert.equal(tokens.find(t => t.text === 'true').italic, false);
  });
  test(`${theme.name}: Python shared-scope limitation stays explicit`, async () => {
    const tokens = (await tokenize(theme, 'source.python', 'x = None; y = True; z = False')).flat();
    for (const text of ['None', 'True', 'False']) assert.ok(tokens.some(t => t.text === text && t.color === palette.colors.wisteria));
  });
}
