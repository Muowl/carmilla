import { readFileSync } from 'node:fs';
import { read, requireDev } from './lib.mjs';

const tm = requireDev('vscode-textmate');
const onig = requireDev('vscode-oniguruma');
const wasm = readFileSync(requireDev.resolve('vscode-oniguruma/release/onig.wasm'));
await onig.loadWASM(wasm.buffer.slice(wasm.byteOffset, wasm.byteOffset + wasm.byteLength));

export async function tokenize(theme, scope, source) {
  const registry = new tm.Registry({
    theme: { settings: [{ settings: { foreground: theme.colors['editor.foreground'], background: theme.colors['editor.background'] } }, ...theme.tokenColors] },
    onigLib: Promise.resolve({ createOnigScanner: patterns => new onig.OnigScanner(patterns), createOnigString: text => new onig.OnigString(text) }),
    loadGrammar: async name => {
      const file = { 'source.ts': 'typescript', 'source.python': 'python' }[name];
      return file ? tm.parseRawGrammar(read(`tests/grammars/${file}.json`), `${file}.json`) : null;
    },
  });
  try {
    const grammar = await registry.loadGrammar(scope);
    let stack = tm.INITIAL;
    return source.trimEnd().split('\n').map(line => {
      const result = grammar.tokenizeLine2(line, stack);
      stack = result.ruleStack;
      const colors = registry.getColorMap();
      const tokens = [];
      for (let i = 0; i < result.tokens.length; i += 2) {
        const metadata = result.tokens[i + 1];
        tokens.push({ text: line.slice(result.tokens[i], result.tokens[i + 2] ?? line.length), color: colors[(metadata >>> 15) & 511], italic: Boolean((metadata >>> 11) & 1) });
      }
      return tokens;
    });
  } finally { registry.dispose(); }
}

export async function renderSample(theme) {
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const tokens = await tokenize(theme, 'source.ts', read('tests/fixtures/countess.ts'));
  const lines = tokens.map(line => line.map(token => {
    const color = token.color === theme.semanticTokenColors.keyword ? 'var(--carmine)' : token.color;
    return `<span style="color:${color}${token.italic ? ';font-style:italic' : ''}">${escape(token.text)}</span>`;
  }).join('')).join('\n');
  return `<div class="gutter" aria-hidden="true">${tokens.map((_, i) => `<div class="ln">${i + 1}</div>`).join('')}</div>\n<div class="code-area" tabindex="0" aria-label="TypeScript preview"><pre><code>${lines}</code></pre></div>`;
}
