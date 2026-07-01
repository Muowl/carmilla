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
| Accent       | `#FF5FA2` carmine | `#E86F24` cinnabar|
| Accent hover | `#FF8BB0`         | `#F5842E`         |
| Crypt        | `#16101A`         | `#1A1310`         |
| Boudoir      | `#2E1B2D`         | `#2E211B`         |
| Velvet       | `#3A2438`         | `#3B2B23`         |
| Selection    | `#523950`         | `#534138`         |

The accent is named for the mineral pigment — same register as Carmine (cochineal) and
Verdigris (copper patina). It sits **one deliberate step darker** than strict role-parity with
Carmine (L\* 60.5 vs 63.4; ≈ 5.0:1 on its Boudoir, AA) — the parity-exact orange read neon,
and darkening it widens the lightness gap against Peach-Velvet numbers (see the limitation
below). The backgrounds keep the wine family's lightness, rotated to the ember temperature,
so Pearl holds AAA (≈ 13:1) and every syntax hue keeps its contrast. The wine-mauve line
numbers/ignored-file grey is re-tempered to an ember mauve `#6F5142` (same lightness and
subtlety as the base's `#6B4F6A`). Theme file: `carmilla-cinnabar.json`.

**Known limitation (Cinnabar).** An orange accent lands almost on Peach-Velvet's hue
(OKLCH ≈ 47° vs 45°), so keywords vs numbers lose the hue separation the base enjoys (~47°
apart there). They stay distinguishable by lightness (accent L 0.68 vs Peach 0.82) and by
context — numbers are numeric literals — and the darkened accent exists partly to protect that
lightness gap. The same peach also serves as the warning colour, which in Cinnabar reads
closer to a faded accent; accepted, since the flavor contract keeps content colours constant.

### Larimar — a cool sibling (not a flavor)

Where the flavors keep the content colours constant and only re-temperature the accent +
backgrounds, **Larimar** is a *moonlit* reading of Carmilla that carries its **own full 13-token
palette**. It is a deliberate exception to the theme's thermal-coherence rule — the base and its
flavors stay warm; Larimar is the one cool member of the family. Theme file: `carmilla-larimar.json`.

| Token         | Hex        | Role (Larimar)                                    |
|---------------|------------|---------------------------------------------------|
| `crypt`       | `#12151F`  | Deepest background (gutter, activity bar)         |
| `boudoir`     | `#1A1F2E`  | Main background (editor, panel)                   |
| `velvet`      | `#232A3D`  | Elevated surface (status bar, popups)             |
| `selection`   | `#303A54`  | Current line, selection                           |
| `pearl`       | `#E6E9F3`  | Primary text (cooled toward moonlight)            |
| `larimar`     | `#2CD3CE`  | **Signature** — keywords/storage, cursor, badges  |
| `larimar` hov | `#57E4DA`  | Hover/bright tint (buttons, links, bright cyan)   |
| `lilac`       | `#C9A6F2`  | Language instances (`this`, `super`, `null`)      |
| `cornflower`  | `#86A8FF`  | Classes, types, support                           |
| `mint`        | `#57DB86`  | Functions, methods                                |
| `sand`        | `#D8C79C`  | Strings (a warm anchor, kept on purpose)          |
| `peach`       | `#EEA98F`  | Numbers, booleans (heirloom from base Carmilla)   |
| `crimson`     | `#F0576E`  | Errors, deletions, alerts                         |
| `gloam`       | `#74839E`  | Comments (a slate-grey that recedes)              |

**Design notes.** A cool-only scheme crowds its hues between ~140° and ~270°, so the two **warm
anchors** — Sand strings and Peach numbers — are retained deliberately to keep the syntax roles
legible (and Peach threads a line of continuity back to the base). Keyword-turquoise vs
function-mint sit ~37° apart (below the 45° target), disambiguated by lightness and the `()` after
calls — the same non-colour channel the base relies on. Contrast holds AAA (Pearl ≈ 13.5:1 on
Boudoir, Larimar ≈ 8.9:1); comments are ~4.2:1, subtle by design. Terminal ANSI follows the family
convention (the signature accent occupies the magenta slot) — which in Larimar means the
magenta slot renders turquoise and the cyan slot renders cornflower blue, a visible semantic
shift for colour-keyed terminal programs (`ls --color`, htop). Accepted: convention over
slot semantics, as everywhere else in the family.

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
