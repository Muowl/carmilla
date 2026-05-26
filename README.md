<h1 align="center">🥀 Carmilla</h1>

<p align="center"><em>Crypt warmth for nights of code.</em></p>

<p align="center">
  An original dark theme with a <strong>boudoir/wine</strong> identity — a rosé-wine background and warm accents:
  carmine, wisteria, absinthe mint, peach velvet and champagne.
</p>

<p align="center">
  <a href="https://muowl.github.io/carmilla/"><strong>🔗 See the live showcase</strong></a>
</p>

---

> **Status:** v1 in development, heading toward publication (VS Code Marketplace and other editors).
> The name *Carmilla* is a tribute to Sheridan Le Fanu's gothic novella (1872), a classic of vampire literature.

## Why it exists

Most dark themes lean to the cold side of the spectrum (icy blues and purples). Carmilla does the opposite:
**thermal coherence** — everything leans warm. The detail that defines its identity is the comments in
**Ash Mauve**, which converse with the background instead of clashing with it.

## Preview

<p align="center">
  <img src="preview.png" alt="Carmilla theme showcase: palette, editor mockup and token map" width="720">
</p>

See it [live](https://muowl.github.io/carmilla/) or open [`index.html`](index.html) locally in your browser.

## Palette

| Token          | Hex        | Use                                              |
|----------------|------------|--------------------------------------------------|
| Crypt          | `#16101A`  | Deepest background — page, gutter                |
| Boudoir        | `#2E1B2D`  | Main background — editor, panels                 |
| Velvet         | `#3A2438`  | Elevated surface — cards, status bar             |
| Selection      | `#4A3245`  | Current line, selection, ranges                  |
| Pearl          | `#F4ECE3`  | Primary text / foreground                        |
| Carmine        | `#FF5FA2`  | Keywords, storage (`const`, `class`, `return`)   |
| Wisteria       | `#D5A6FF`  | Language instances (`this`, `super`, `null`)     |
| Verdigris      | `#7AD9C2`  | Classes, types, support                          |
| Absinthe       | `#7AE0A6`  | Functions, methods                               |
| Champagne      | `#F3E2AB`  | Strings, template literals                       |
| Peach Velvet   | `#FFAE8A`  | Numbers, booleans                                |
| Pomegranate    | `#E84B6E`  | Errors, deletions, alerts                        |
| Ash Mauve      | `#9E83A4`  | Comments, disabled code                          |

Full specification, design rationale and TextMate mapping in [`PALETTE.md`](PALETTE.md).

## Installation

While it's not on the Marketplace yet, the project is already a packageable extension.

### From a `.vsix` file

1. Build the package: `npm run package` (uses [`@vscode/vsce`](https://github.com/microsoft/vscode-vsce) via `npx`, producing `carmilla-1.0.0.vsix`).
2. In VS Code: command palette (`Ctrl+Shift+P`) → **Extensions: Install from VSIX...** → pick the generated `.vsix`.
3. Activate it under **Color Theme** (`Ctrl+K Ctrl+T`) → **Carmilla**.

### For development

Open this folder in VS Code and press `F5` to launch an *Extension Development Host* window with the theme already loaded.

## Files

| File             | Role                                                             |
|------------------|------------------------------------------------------------------|
| `PALETTE.md`     | Source of truth — portable spec and rationale                    |
| `carmilla.json`  | VS Code theme (UI + syntax + ANSI terminal + git)                |
| `package.json`   | Extension manifest (`contributes.themes`)                        |
| `index.html`     | Visual showcase                                                  |

## License

[MIT](LICENSE). No hex is a direct copy of another theme, so there's no third-party attribution requirement.
