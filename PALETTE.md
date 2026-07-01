# Carmilla — Palette v1

A dark theme with a rosé-wine background and warm accents (pink, lavender, mint, peach, champagne).
Inspired by a boudoir / vampire-crypt atmosphere — restrained, original, with an identity of its own.

> Working name: **Carmilla** (Sheridan Le Fanu, 1872 — a classic gothic vampire novella).
> Rename freely before publishing.

---

## Tokens

| Token            | Hex        | Use                                                        |
|------------------|------------|------------------------------------------------------------|
| `crypt`          | `#16101A`  | Deepest background (page, gutter)                          |
| `boudoir`        | `#2E1B2D`  | Main background (editor, panel)                            |
| `velvet`         | `#3A2438`  | Elevated surface (cards, popups, status bar)               |
| `selection`      | `#523950`  | Current line, selection, range highlight                   |
| `pearl`          | `#F5EADA`  | Primary text / foreground / punctuation                    |
| `carmine`        | `#FF5FA2`  | Keywords, storage (`const`, `let`, `class`, `if`, `return`)|
| `wisteria`       | `#D5A6FF`  | Language instances (`this`, `super`, `null`, `undefined`)  |
| `verdigris`      | `#5ED0D8`  | Classes, types, support                                    |
| `absinthe`       | `#7AE0A6`  | Functions, methods, function declarations                  |
| `champagne`      | `#EDD795`  | Strings, template literals                                 |
| `peach-velvet`   | `#FFAE8A`  | Numbers, booleans                                          |
| `pomegranate`    | `#E84B6E`  | Errors, deletions, alerts                                  |
| `ash-mauve`      | `#9E83A4`  | Comments, disabled code                                    |

## Design principles

1. **Thermal coherence.** Everything leans to the warm side of the spectrum — instead of the icy blue/purple that dominates most dark themes.
2. **Comments in mauve, not blue.** Comments at `#9E83A4` blend into the rosé background's atmosphere instead of clashing as a cold blue.
3. **Saturated pink accent.** `#FF5FA2` (Carmine) leans toward magenta/rosé — asserting its own identity.
4. **Less electric green.** Absinthe `#7AE0A6` is an elegant mint, far from the usual neon green.
5. **WCAG contrast.** Pearl on Boudoir ≈ 13.5:1 (AAA). Carmine on Boudoir ≈ 5.7:1 (AA). Ash Mauve on Boudoir ≈ 4.8:1 (AA for comments, deliberately subtle).
6. **Types ≠ functions, even for colorblind eyes.** Verdigris `#5ED0D8` sits at a true teal (OKLCH hue ≈ 202°), a full 45° from Absinthe's mint — the pair stays distinguishable under protanopia, deuteranopia and tritanopia, where a mint-on-mint pairing would collapse.

## Known limitations

Under **protanopia** (≈1% of men), two pairs lose most of their hue separation: Carmine × Ash Mauve (keywords vs comments) and Absinthe × Champagne (functions vs strings). Both are left as-is deliberately: comments are italicized full lines and strings are quote-delimited, so a non-color channel always disambiguates — and "fixing" them would mean sacrificing two pillars of the theme's identity.

## Flavors

Carmilla ships **flavors** — variants that swap the signature accent **and** pull the neutral
backgrounds toward that accent's temperature. The content colours (Pearl, the syntax hues, and
Ash-Mauve comments) stay constant across every flavor, so a flavor reads as the same theme in a
different light — not a different theme.

### Cinnabar

An ember-orange reading of Carmilla — a *hearth* boudoir rather than a wine one.

| Role         | Base (Carmine)    | Cinnabar          |
|--------------|-------------------|-------------------|
| Accent       | `#FF5FA2` carmine | `#F47C30` cinnabar|
| Accent hover | `#FF8BB0`         | `#FF9340`         |
| Crypt        | `#16101A`         | `#1A1310`         |
| Boudoir      | `#2E1B2D`         | `#2E211B`         |
| Velvet       | `#3A2438`         | `#3B2B23`         |
| Selection    | `#523950`         | `#534138`         |

The accent is named for the mineral pigment — same register as Carmine (cochineal) and
Verdigris (copper patina) — and tuned for **role-parity** with Carmine: matching visual weight
(L\* 64.9 vs 63.4) and contrast (≈ 5.8:1 on its Boudoir), with the hue rotated from rosé to
ember (~22°). The backgrounds keep the wine family's lightness, rotated to the same ember
temperature, so Pearl holds AAA (≈ 13:1) and every syntax hue keeps its contrast. Theme file:
`carmilla-cinnabar.json`.

## TextMate mapping (summary)

```
comment                                  → ash-mauve  (italic)
keyword, storage, keyword.control        → carmine
variable.language, constant.language     → wisteria
entity.name.type, entity.name.class,
support.class, support.type              → verdigris
entity.name.function, support.function   → absinthe
string, string.template                  → champagne
constant.numeric, constant.language.boolean → peach-velvet
invalid, invalid.illegal                 → pomegranate
text, punctuation, source                → pearl
```

## Files in this directory

- `PALETTE.md` — this spec (source of truth).
- `index.html` — visual showcase of the palette + code sample.
- `carmilla.json` — VS Code theme (ready to package as an extension).

## To publish

1. Rename if you like (update `name`/`displayName` in `package.json`).
2. Build and publish: `npm run package` / `npm run publish` (requires a Marketplace publisher + PAT).
3. Suggested license: MIT. Every hex is original to this palette, so there's no attribution dependency.
