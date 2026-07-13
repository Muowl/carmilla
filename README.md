<h1 align="center">🥀 Carmilla</h1>

<p align="center"><em>Crypt warmth for nights of code.</em></p>

<p align="center">
  An original dark theme with a <strong>boudoir/wine</strong> identity — a rosé-wine background and warm accents:
  carmine, wisteria, absinthe mint, peach velvet and champagne.
</p>

<p align="center">
  <a href="https://muowl.dev/"><strong>🔗 See the live showcase</strong></a>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=muowl.carmilla"><img src="https://img.shields.io/badge/VS_Code-Install_Carmilla-FF5FA2?style=flat-square&logo=visualstudiocode&logoColor=white&labelColor=2E1B2D" alt="Install from the VS Code Marketplace"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-D5A6FF?style=flat-square&labelColor=2E1B2D" alt="MIT license"></a>
</p>

---

> The name *Carmilla* is a tribute to Sheridan Le Fanu's gothic novella (1872), a classic of vampire literature.

## Why it exists

Most dark themes lean to the cold side of the spectrum (icy blues and purples). Carmilla does the opposite:
**thermal coherence** — everything leans warm. The detail that defines its identity is the comments in
**Ash Mauve**, which converse with the background instead of clashing with it.

## Preview

<p align="center">
  <img src="assets/preview.png" alt="Carmilla theme showcase: palette, editor mockup and token map" width="720">
</p>

See it [live](https://muowl.dev/) or open [`docs/index.html`](docs/index.html) locally in your browser.

## Ports

Carmilla is one palette, ported to many platforms. Each port lives in its own directory under [`ports/`](ports/).

| Platform | Status       | Directory / install                                                                 |
|----------|--------------|--------------------------------------------------------------------------------------|
| VS Code  | ✅ Published | [`ports/vscode`](ports/vscode) — [Marketplace](https://marketplace.visualstudio.com/items?itemName=muowl.carmilla) |
| Zed      | 🕯️ Planned   | —                                                                                      |
| Alacritty| 🕯️ Planned   | —                                                                                      |
| Chrome   | 🕯️ Planned   | —                                                                                      |
| GNOME Shell | 🕯️ Planned | —                                                                                     |

Want Carmilla somewhere else? [Open an issue](https://github.com/Muowl/carmilla/issues) — or port it yourself
from [`palette/carmilla.toml`](palette/carmilla.toml) and send a PR.

## Palette

| Token          | Hex        | Use                                              |
|----------------|------------|--------------------------------------------------|
| Crypt          | `#16101A`  | Deepest background — page, gutter                |
| Boudoir        | `#2E1B2D`  | Main background — editor, panels                 |
| Velvet         | `#3A2438`  | Elevated surface — cards, status bar             |
| Selection      | `#523950`  | Current line, selection, ranges                  |
| Pearl          | `#F5EADA`  | Primary text / foreground                        |
| Carmine        | `#FF5FA2`  | Keywords, storage (`const`, `class`, `return`)   |
| Wisteria       | `#D5A6FF`  | Language instances (`this`, `super`, `null`)     |
| Verdigris      | `#5ED0D8`  | Classes, types, support                          |
| Absinthe       | `#7AE0A6`  | Functions, methods                               |
| Champagne      | `#EDD795`  | Strings, template literals                       |
| Peach Velvet   | `#FFAE8A`  | Numbers, booleans                                |
| Pomegranate    | `#E84B6E`  | Errors, deletions, alerts                        |
| Ash Mauve      | `#9E83A4`  | Comments, disabled code                          |

Full specification, design rationale and TextMate mapping in [`palette/PALETTE.md`](palette/PALETTE.md).
The machine-readable source of truth (core tokens + ANSI terminal colors) is [`palette/carmilla.toml`](palette/carmilla.toml).

## Flavors

Flavors swap the signature accent **and** re-temperature the neutral backgrounds to match; the
content colours stay constant, so a flavor reads as the same theme in a different light.

| Flavor                | Accent                | Mood                                       |
|-----------------------|-----------------------|--------------------------------------------|
| **Carmilla** (base)   | Carmine `#FF5FA2`     | Rosé-wine boudoir by candlelight           |
| **Carmilla Amethyst** | Amethyst `#C474D3`    | The same boudoir at dusk — violet twilight |

Both ship in the VS Code extension; pick one under **Color Theme** (`Ctrl+K Ctrl+T`).
Design rationale, contrast figures and known limitations in [`palette/PALETTE.md`](palette/PALETTE.md#flavors).
(Two earlier variants, Cinnabar and Larimar, are preserved on the [`flavors`](https://github.com/Muowl/carmilla/tree/flavors) branch.)

## Installation (VS Code)

### From the Marketplace

Open the Extensions view in VS Code (`Ctrl+Shift+X`), search for **Carmilla**, and click **Install** — or run:

```sh
code --install-extension muowl.carmilla
```

Then activate it under **Color Theme** (`Ctrl+K Ctrl+T`) → **Carmilla**.

### From a `.vsix` file

1. Build the package from the port directory: `cd ports/vscode && npm run package` (uses [`@vscode/vsce`](https://github.com/microsoft/vscode-vsce) via `npx`, producing `carmilla-1.6.0.vsix`).
2. In VS Code: command palette (`Ctrl+Shift+P`) → **Extensions: Install from VSIX...** → pick the generated `.vsix`.
3. Activate it under **Color Theme** (`Ctrl+K Ctrl+T`) → **Carmilla**.

### For development

Open [`ports/vscode/`](ports/vscode) in VS Code and press `F5` to launch an *Extension Development Host* window with the theme already loaded.

## Repository structure

| Path                    | Role                                                              |
|-------------------------|-------------------------------------------------------------------|
| `palette/PALETTE.md`    | Human source of truth — portable spec and design rationale        |
| `palette/carmilla.toml` | Machine-readable palette — core tokens + ANSI terminal colors     |
| `ports/vscode/`         | VS Code extension (UI + syntax + ANSI terminal + git)             |
| `docs/`                 | Visual showcase site (GitHub Pages → [muowl.dev](https://muowl.dev/)) |
| `assets/`               | Shared brand assets (preview image)                               |

## License

[MIT](LICENSE). Every colour is original to this palette — no third-party attribution required.
