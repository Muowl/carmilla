<p align="center">
  <img src="https://raw.githubusercontent.com/Muowl/carmilla/main/ports/vscode/icon.png" alt="Carmilla Lua icon" width="96" height="96">
</p>
<h1 align="center">Carmilla</h1>
<p align="center"><em>Crypt warmth for nights of code.</em></p>
<p align="center">
  Cream text, mauve comments, and a choice of wine, violet or slate-blue backgrounds.
</p>
<p align="center">
  <a href="https://muowl.dev/themes/carmilla/">Explore Carmilla</a> ·
  <a href="https://github.com/Muowl/carmilla">GitHub</a> ·
  <a href="https://github.com/Muowl/carmilla/blob/main/CHANGELOG.md">Changelog</a>
</p>

Carmilla is a dark theme family with a gothic atmosphere and a warm syntax palette. Each flavor changes the accent and surrounding surfaces while preserving the cream foreground, mauve comments and familiar colors for types, functions and strings.

## Install

Install **Carmilla** by **muowl**, then open the command palette and run **Preferences: Color Theme** to choose a flavor.

You can also install from the terminal:

```sh
code --install-extension muowl.carmilla
```

## Choose your light

| Theme | Accent | Atmosphere |
|-------|--------|------------|
| **Carmilla** | Carmine `#FF5FA2` | Rosé wine by candlelight |
| **Carmilla Amethyst** | Amethyst `#C474D3` | Soft violet dusk |
| **Carmilla Moonstone** | Moonstone `#75A6D8` | Rem-inspired sky blue over quiet slate |

Version 1.7.0 includes all three flavors and the Lua icon. Choose one under **Preferences: Color Theme** (`Ctrl+K Ctrl+T`).

## Preview

### Carmilla

<img src="https://raw.githubusercontent.com/Muowl/carmilla/main/assets/preview.png" alt="Carmilla: carmine keywords on a wine background" width="800">

### Amethyst

<img src="https://raw.githubusercontent.com/Muowl/carmilla/main/assets/preview-amethyst.png" alt="Carmilla Amethyst: orchid keywords on a violet background" width="800">

### Moonstone

<img src="https://raw.githubusercontent.com/Muowl/carmilla/main/assets/preview-moonstone.png" alt="Carmilla Moonstone: sky-blue keywords on a slate background" width="800">

Previews are generated from the theme’s TextMate rules and a TypeScript grammar. Language servers can refine highlighting in VS Code.

## Thoughtful details

- A consistent palette across the editor, sidebar, tabs, command palette, suggestions, notifications and chat.
- TextMate and semantic highlighting, plus all 16 ANSI terminal colors.
- Git decorations, diffs and merge highlights that fit the surrounding interface.
- Focus, placeholder and selected-text colors checked for contrast in each flavor.
- A declarative theme with no executable extension code.

The [palette specification](https://github.com/Muowl/carmilla/blob/main/palette/PALETTE.md) explains the color choices, measured contrast and known limitations. Python’s TextMate fallback gives `True`, `False` and `None` the same scope, so all three use Wisteria.

Named after Sheridan Le Fanu’s gothic novella *Carmilla* (1872).

[Report an issue](https://github.com/Muowl/carmilla/issues) · [MIT license](https://github.com/Muowl/carmilla/blob/main/LICENSE)
