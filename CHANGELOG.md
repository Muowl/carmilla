# Changelog

All notable changes to the Carmilla theme are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/).

## [1.2.0] — 2026-06-30

### Added
- **Flavors** — Carmilla now ships variants that swap the signature accent **and** shift the neutral backgrounds to match its temperature. The content colours (Pearl, the syntax hues and Ash Mauve comments) stay constant, so a flavor reads as the same theme in a different light.
- **Carmilla Cinnabar** — the first flavor: an ember-orange accent **Cinnabar** `#F47C30` (hover/bright tint `#FF9340`) in place of Carmine, over a warmed *hearth* background family (Crypt `#1A1310`, Boudoir `#2E211B`, Velvet `#3B2B23`, Selection `#534138`). Tuned for equal visual weight (Pearl stays AAA ≈ 13:1, accent ≈ 5.8:1) so it reads as a true sibling of the base theme. Selectable under **Color Theme** → **Carmilla Cinnabar**.

## [1.1.0] — 2026-06-09

### Changed
- **Verdigris** `#7AD9C2` → `#5ED0D8` — classes/types moved to a true teal, 45° away from Absinthe's mint. The types-vs-functions pair — previously near-identical in lightness and hue — now stays distinguishable under protanopia, deuteranopia and tritanopia.
- **Pearl** `#F4ECE3` → `#F5EADA` — main foreground warmed one step toward cream, reinforcing the boudoir identity (contrast on the editor background stays AAA, ≈13.5:1).
- **Champagne** `#F3E2AB` → `#EDD795` — strings deepened one step so they read distinctly from plain text at a glance (still AAA, ≈11.3:1).
- **Selection** `#4A3245` → `#523950` — current line/selection raised from 1.40:1 to 1.57:1 against the editor background, same wine hue.
- **New icon** — a rose nested inside a "C": gradient ring (carmine → wisteria) with the carmine bloom at its heart. Designed to stay legible at the Marketplace's 44 px and 24 px sizes.
- **Hover/bright tint** `#FF80B8` → `#FF8BB0` (button hover, bright magenta, active links) — fine-tuned during a full-project colour audit; visually equivalent, more distinctly Carmilla.

### Added
- ~110 new workbench colors: suggest/hover widgets, quick input & command center, menus, dropdowns, links, minimap, breadcrumbs, bracket-pair colorization, input validation, inlay hints, CodeLens, merge/diff line backgrounds, keybinding labels, toolbar, banner and notification surfaces — previously these fell back to VS Code's cool-gray defaults, breaking the theme's warm coherence.
- Explicit `semanticTokenColors` so LSP-powered languages (TypeScript, Rust, Go, Python…) color tokens consistently with the TextMate scopes.
- `PALETTE.md`: documented contrast figures, a new design principle (types ≠ functions under color-vision deficiency) and a known-limitations note.

## [1.0.1] — 2026-06-02

### Changed
- Documentation and showcase ported to English; the README now points to Marketplace install.
- Replaced the Marketplace status badges — shields.io retired its dynamic VS Marketplace badges — with stable static ones.

> Docs/metadata release only — the theme colours are unchanged from 1.0.0.

## [1.0.0] — 2026-05-26

### Added
- First release of the Carmilla dark theme.
- Full workbench UI theming (activity bar, side bar, tabs, status bar, panels, lists, inputs).
- Syntax highlighting via TextMate scopes, with semantic highlighting enabled.
- Terminal ANSI palette (16 colors) and Git decoration colors.
- Boudoir/wine palette: Carmine, Wisteria, Verdigris, Absinthe, Champagne, Peach Velvet, Pomegranate, Ash Mauve, Pearl.
