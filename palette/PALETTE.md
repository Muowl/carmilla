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

A flavor is defined by exactly eight hex substitutions, applied globally to the base theme
(workbench, semantic tokens and TextMate scopes alike): the accent, its hover/bright tint, the
four background tokens (Crypt, Boudoir, Velvet, Selection), the deep side-bar surface
(`#231522`), and the structural wine-mauve (`#6B4F6A`: line numbers, ignored files). The
machine-readable overrides live in `carmilla.toml` under `[flavors.*]`.

> Two earlier variants — **Cinnabar** (ember orange) and **Larimar** (a cool sibling with its own
> full palette) — are preserved on the [`flavors`](https://github.com/Muowl/carmilla/tree/flavors)
> branch and may return in a future release.

### Amethyst

A violet reading of Carmilla — the boudoir at dusk rather than by candlelight. Designed around an
orchid-purple inspiration of `#7A4186` (OKLCH hue ≈ 320°): that hue is kept **exact**, but the
inspiration itself sits at only ≈ 2.2:1 on Boudoir, so the accent is the same purple lifted into
legibility (L 0.47 → 0.68, chroma 0.124 → 0.159) rather than the raw swatch.

| Role         | Base (Carmine)    | Amethyst           |
|--------------|-------------------|--------------------|
| Accent       | `#FF5FA2` carmine | `#C474D3` amethyst |
| Accent hover | `#FF8BB0`         | `#D38CDC`          |
| Crypt        | `#16101A`         | `#18101A`          |
| Boudoir      | `#2E1B2D`         | `#2A1B2E`          |
| Velvet       | `#3A2438`         | `#35243A`          |
| Selection    | `#523950`         | `#4C3952`          |

The accent is named for the stone — the same register as Cinnabar (mineral) and Larimar (stone),
with the ecclesiastical, crypt-adjacent resonance the theme trades in. It sits at Cinnabar's
deliberate lightness (OKLCH L 0.68, one step below Carmine-parity) for the same reason Cinnabar
did: parity would read neon, and the step down protects the lightness gap against its nearest
content colour — here Wisteria (L 0.80), which keeps ΔL ≈ 0.12 and ≈ 13° of OKLCH hue on top.
Contrast on its Boudoir ≈ 5.2:1 (AA; family register is Cinnabar 5.0 – Carmine 5.7).

The backgrounds follow the flavor method: the wine family's HSL saturation and lightness are kept
**exactly**, with the hue rotated from wine (≈ 303°) to dusk violet (286°, the inspiration's own
hue region) — so Pearl holds AAA (≈ 13.6:1), comments hold ≈ 4.8:1, selection-vs-editor holds the
base's 1.56:1, and every syntax hue keeps its contrast within a rounding error of the base. The
wine-mauve line numbers/ignored-file grey re-tempers to a violet mauve `#654F6B` (same lightness
and subtlety as the base's `#6B4F6A`).

**Known limitations (Amethyst).** A purple accent moves toward two purple neighbours at once.
Against **Wisteria** (`this`/`super`/`null`) it keeps ΔL 0.12 + higher chroma + Wisteria's italics;
against **Ash-Mauve comments** it shares the hue (both ≈ 320°) and separates by chroma
(0.159 vs 0.057) plus the comments' full-line italics. Notably, that second pair is *stronger*
here than in the base under protanopia (ΔE_OK ≈ 7.9 vs the base's 2.3 for Carmine × Ash-Mauve) —
the flavor softens the base's worst CVD collision rather than adding a new one. In the terminal,
the family convention (accent occupies the magenta slot) puts an orchid magenta next to Wisteria's
lavender blue slot; colour-keyed programs disambiguate by lightness. Accepted: convention over
slot semantics, as everywhere else in the family.

Theme file: `../ports/vscode/carmilla-amethyst.json`.

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

## Files

- `PALETTE.md` — this spec (human-readable source of truth: rationale, contrast figures, mappings).
- `carmilla.toml` — machine-readable palette (core tokens + ANSI terminal colors) for ports and tooling.
- `../ports/` — one directory per platform port (VS Code, and future ones), each consuming these tokens.
- `../docs/index.html` — visual showcase of the palette + code sample.

When a hex changes, update **both** files here first, then propagate to every port in the same commit.

## To publish (VS Code port)

1. From `ports/vscode/`: `npm run package` / `npm run publish` (requires a Marketplace publisher + PAT).
2. License: MIT. Every hex is original to this palette, so there's no attribution dependency.
