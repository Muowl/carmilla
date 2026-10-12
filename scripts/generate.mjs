import { writeFileSync } from 'node:fs';
import { buildTheme, root, read, palette } from './lib.mjs';
import { renderSample } from './tokenize.mjs';

const check = process.argv.includes('--check');
const outputs = new Map([
  ['ports/vscode/carmilla.json', JSON.stringify(buildTheme(), null, 2) + '\n'],
  ...Object.keys(palette.flavors).map(flavor => [`ports/vscode/carmilla-${flavor}.json`, JSON.stringify(buildTheme(flavor), null, 2) + '\n']),
  ['ports/vscode/CHANGELOG.md', read('CHANGELOG.md')],
]);
const start = '<!-- GENERATED SAMPLE START -->';
const end = '<!-- GENERATED SAMPLE END -->';
const page = read('docs/index.html');
if (!page.includes(start) || !page.includes(end)) throw new Error('Missing showcase sample markers');
outputs.set('docs/index.html', page.slice(0, page.indexOf(start) + start.length) + '\n' + await renderSample(buildTheme()) + '\n' + page.slice(page.indexOf(end)));
for (const [path, content] of outputs) {
  if (check) {
    let actual;
    try { actual = read(path); } catch { /* Report missing generated files as stale. */ }
    if (actual !== content) {
      console.error(`Out of date: ${path}. Run npm run generate in ports/vscode.`);
      process.exitCode = 1;
    }
  } else writeFileSync(root + path, content);
}
