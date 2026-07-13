<h1 align="center">🥀 Carmilla</h1>

<p align="center"><em>Crypt warmth for nights of code.</em></p>

<p align="center">
  An original dark theme with a <strong>boudoir/wine</strong> identity — a rosé-wine background and warm accents:
  carmine, wisteria, absinthe mint, peach velvet and champagne.
</p>

<p align="center">
  <a href="https://muowl.dev/"><strong>🔗 See the live showcase</strong></a>
</p>

---

> The name *Carmilla* is a tribute to Sheridan Le Fanu's gothic novella (1872), a classic of vampire literature.

## Why it exists

Most dark themes lean to the cold side of the spectrum (icy blues and purples). Carmilla does the opposite:
**thermal coherence** — everything leans warm. The detail that defines its identity is the comments in
**Ash Mauve**, which converse with the background instead of clashing with it.

## Preview

<p align="center">
  <img src="https://github.com/Muowl/carmilla/raw/main/assets/preview.png" alt="Carmilla theme showcase: palette, editor mockup and token map" width="720">
</p>

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

Full specification, design rationale and TextMate mapping in
[`PALETTE.md`](https://github.com/Muowl/carmilla/blob/main/palette/PALETTE.md).

## Flavors

The extension ships two themes. **Carmilla** is the rosé-wine base. **Carmilla Amethyst** is a
violet reading of it — the signature accent becomes an orchid purple, Amethyst `#C474D3`
(hover `#D38CDC`), and the wine backgrounds rotate to dusk violet (editor `#2A1B2E`) at identical
lightness, so every contrast figure carries over. The content colours stay constant across
flavors: a flavor reads as the same theme in a different light.

## Installation

Open the Extensions view in VS Code (`Ctrl+Shift+X`), search for **Carmilla**, and click **Install** — or run:

```sh
code --install-extension muowl.carmilla
```

Then activate it under **Color Theme** (`Ctrl+K Ctrl+T`) → **Carmilla**.

## License

[MIT](https://github.com/Muowl/carmilla/blob/main/LICENSE). Every colour is original to this palette — no third-party attribution required.
