import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTheme, palette } from '../scripts/lib.mjs';
import { tokenize } from '../scripts/tokenize.mjs';

// One small, idiomatic source per language, tokenized with the vendored VS Code grammars.
const sources = {
  'source.rust': `use std::fmt;
#[derive(Debug)]
struct Crypt<'a> { name: &'a str }
fn main() { let awake = true; println!("{}\\n", awake); match guest { Some(v) => v, None => 0 }; self.name; }`,
  'source.java': `package dev.crypt;
import java.util.List;
enum Era { ANCIENT, IMMORTAL }
class Countess {
    private String name;
    private List<Integer> ages;
    @Override
    public String toString() { int n = ages.isEmpty() ? 0 : 1; return name; }
}`,
  'source.c': `static int counter = 0x1F;
void whisper(void) { size_t n = sizeof(int); printf("%s\\n", "guest"); }`,
  'source.cpp': `namespace crypt {
enum class Era { Ancient, Immortal };
[[nodiscard]] std::string whisper(bool awake = true) {
    auto p = new int(2);
    double ratio = 2.0f;
    return static_cast<std::string>("guest");
}
}`,
  'source.cs': `public enum Era { Ancient, Immortal }
class Countess { string Whisper(string name) => $"{name}\\n"; bool awake = true; }`,
  'source.python': `"""Module docs."""
from dataclasses import dataclass

@dataclass
class Countess:
    """Class docs."""
    @property
    def era(self) -> str:
        return f"{self.name}\\n" if self and self.name else 0x1F`,
  'source.ts': `enum Era { Ancient, Immortal }
@Injectable()
class Countess {
    big = 42n;
    pattern = /blood/gi;
    whisper(guest: string) { return \`\${guest}\\n\`; }
}`,
};

// Returns the single color/italic shared by every character of the nth occurrence of `needle`.
async function painter(theme, scope) {
  const lines = await tokenize(theme, scope, sources[scope]);
  const styles = [];
  lines.forEach((line, i) => {
    for (const token of line) for (let k = 0; k < token.text.length; k++) styles.push(token);
    if (i < lines.length - 1) styles.push({ color: null, italic: null });
  });
  const text = lines.map(line => line.map(t => t.text).join('')).join('\n');
  return (needle, nth = 0) => {
    let index = -1;
    for (let k = 0; k <= nth; k++) {
      index = text.indexOf(needle, index + 1);
      assert.ok(index >= 0, `${scope}: missing ${needle} #${nth}`);
    }
    const span = styles.slice(index, index + needle.length);
    assert.equal(new Set(span.map(s => s.color)).size, 1, `${scope}: ${needle} spans several colors`);
    assert.equal(new Set(span.map(s => s.italic)).size, 1, `${scope}: ${needle} mixes font styles`);
    return span[0];
  };
}

// [scope, needle, role, italic?, occurrence?]; "keyword" is the flavor accent.
const expectations = [
  ['source.rust', 'true', 'peach-velvet', false],
  ['source.rust', 'println!', 'absinthe'],
  ['source.rust', "'a", 'verdigris'],
  ['source.rust', 'std', 'verdigris'],
  ['source.rust', '#[derive(Debug)]', 'peach-velvet'],
  ['source.rust', 'Some', 'peach-velvet'],
  ['source.rust', '\\n', 'peach-velvet'],
  ['source.rust', 'self', 'wisteria', true],
  ['source.java', 'dev', 'verdigris'],
  ['source.java', 'java', 'verdigris'],
  ['source.java', 'List', 'verdigris'],
  ['source.java', '.', 'pearl', undefined, 2],
  ['source.java', 'String', 'verdigris'],
  ['source.java', 'Integer', 'verdigris'],
  ['source.java', 'int', 'keyword'],
  ['source.java', '@Override', 'peach-velvet'],
  ['source.java', 'ANCIENT', 'peach-velvet'],
  ['source.java', '?', 'pearl'],
  ['source.c', '0x', 'peach-velvet'],
  ['source.c', 'sizeof', 'keyword'],
  ['source.c', '%s', 'peach-velvet'],
  ['source.c', '\\n', 'peach-velvet'],
  ['source.cpp', 'crypt', 'verdigris'],
  ['source.cpp', 'Ancient', 'peach-velvet'],
  ['source.cpp', 'nodiscard', 'peach-velvet'],
  ['source.cpp', 'std', 'verdigris'],
  ['source.cpp', 'true', 'peach-velvet', false],
  ['source.cpp', 'new', 'keyword'],
  ['source.cpp', '2.0f', 'peach-velvet'],
  ['source.cpp', 'static_cast', 'keyword'],
  ['source.cs', 'Ancient', 'peach-velvet'],
  ['source.cs', '{', 'peach-velvet', undefined, 2],
  ['source.cs', '\\n', 'peach-velvet'],
  ['source.cs', 'true', 'peach-velvet', false],
  ['source.python', '"""Module docs."""', 'ash-mauve', true],
  ['source.python', '"""Class docs."""', 'ash-mauve', true],
  ['source.python', '@dataclass', 'peach-velvet'],
  ['source.python', '@property', 'peach-velvet'],
  ['source.python', 'self', 'wisteria', true],
  ['source.python', 'self', 'wisteria', true, 1],
  ['source.python', 'and', 'keyword'],
  ['source.python', 'f"', 'champagne'],
  ['source.python', '{', 'peach-velvet'],
  ['source.python', '\\n', 'peach-velvet'],
  ['source.python', '0x', 'peach-velvet'],
  ['source.ts', 'Ancient', 'peach-velvet'],
  ['source.ts', '@', 'peach-velvet'],
  ['source.ts', 'Injectable', 'absinthe'],
  ['source.ts', '42n', 'peach-velvet'],
  ['source.ts', 'gi', 'champagne'],
  ['source.ts', '${', 'peach-velvet'],
  ['source.ts', '\\n', 'peach-velvet'],
];

// Semantic rules must agree with the TextMate color of the same construct, so starting a
// language server does not recolor it. [selector, scope, needle, occurrence?]
const agreements = [
  ['macro', 'source.rust', 'println!'],
  ['boolean', 'source.rust', 'true'],
  ['selfKeyword', 'source.rust', 'self'],
  ['lifetime', 'source.rust', "'a"],
  ['namespace', 'source.rust', 'std'],
  ['enumMember', 'source.rust', 'Some'],
  ['enumMember', 'source.java', 'ANCIENT'],
  ['enumMember', 'source.cpp', 'Ancient'],
  ['enumMember', 'source.cs', 'Ancient'],
  ['enumMember', 'source.ts', 'Ancient'],
  ['namespace', 'source.java', 'java'],
  ['class', 'source.java', 'String'],
  ['annotation', 'source.java', '@Override'],
  ['namespace', 'source.cpp', 'crypt'],
  ['newOperator', 'source.cpp', 'new'],
  ['stringEscapeCharacter', 'source.cs', '\\n'],
  ['selfParameter', 'source.python', 'self'],
  ['*.decorator', 'source.python', '@dataclass'],
];

for (const flavor of [undefined, ...Object.keys(palette.flavors)]) {
  const theme = buildTheme(flavor);
  const color = role => role === 'keyword' ? theme.semanticTokenColors.keyword : palette.colors[role];
  const painters = {};
  const paint = async scope => (painters[scope] ??= await painter(theme, scope));

  test(`${theme.name}: Rust, Java, C, C++, C#, Python and TypeScript roles`, async () => {
    for (const [scope, needle, role, italic, nth] of expectations) {
      const style = (await paint(scope))(needle, nth);
      assert.equal(style.color, color(role), `${scope}: ${needle} should be ${role}`);
      if (italic !== undefined) assert.equal(style.italic, italic, `${scope}: ${needle} italic`);
    }
  });

  test(`${theme.name}: semantic tokens keep the TextMate colors`, async () => {
    for (const [selector, scope, needle, nth] of agreements) {
      const rule = theme.semanticTokenColors[selector];
      assert.ok(rule, `Missing semantic rule ${selector}`);
      const style = (await paint(scope))(needle, nth);
      assert.equal(typeof rule === 'string' ? rule : rule.foreground, style.color, `${selector} vs ${scope} ${needle}`);
      if (rule.fontStyle !== undefined) assert.equal(style.italic, rule.fontStyle.includes('italic'), `${selector} italic`);
    }
  });
}

test('Pylance decorator modifier wins ties against the symbol kind', () => {
  // VS Code scores "*.decorator" and "function" equally; the later rule wins.
  const keys = Object.keys(buildTheme().semanticTokenColors);
  for (const kind of ['class', 'function', 'method', 'variable', 'property']) {
    assert.ok(keys.indexOf('*.decorator') > keys.indexOf(kind), `*.decorator must follow ${kind}`);
  }
});
