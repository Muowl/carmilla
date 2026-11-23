# Grammar fixtures

Vendored from Microsoft VS Code commit `eef761e9628e777317a554114f0202a070e98f0b` for offline TextMate regression tests and previews.

| Fixture | VS Code source | Upstream grammar | License |
|---------|----------------|------------------|---------|
| `typescript.json` | `extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json` | TypeScript-TmLanguage | `LICENSE-typescript.txt` |
| `python.json` | `extensions/python/syntaxes/MagicPython.tmLanguage.json` | MagicPython | `LICENSE-python.txt` |
| `rust.json` | `extensions/rust/syntaxes/rust.tmLanguage.json` | dustypomerleau/rust-syntax | `LICENSE-rust.txt` |
| `java.json` | `extensions/java/syntaxes/java.tmLanguage.json` | redhat-developer/vscode-java, derived from atom/language-java | `LICENSE-java.txt` |
| `c.json` | `extensions/cpp/syntaxes/c.tmLanguage.json` | jeff-hykin/better-c-syntax | `LICENSE-c.txt` |
| `cpp.json` | `extensions/cpp/syntaxes/cpp.tmLanguage.json` | jeff-hykin/better-cpp-syntax | `LICENSE-cpp.txt` |
| `csharp.json` | `extensions/csharp/syntaxes/csharp.tmLanguage.json` | dotnet/csharp-tmLanguage | `LICENSE-csharp.txt` |

The VS Code license is in `LICENSE.txt`. Upstream licenses follow the provenance recorded in each extension's `cgmanifest.json`.

Source: https://github.com/microsoft/vscode/tree/eef761e9628e777317a554114f0202a070e98f0b/extensions

The C++ grammar embeds `source.cpp.embedded.macro` inside `#define` bodies. That grammar is not vendored, so tests should not depend on how macro bodies are tokenized.

These are development fixtures, excluded from the VSIX. Update them deliberately and review token changes before accepting a new snapshot.
