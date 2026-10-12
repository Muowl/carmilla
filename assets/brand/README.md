# Carmilla · Lua

Lua is the approved Carmilla icon: a broad crescent with tapered tips with a Carmine → Amethyst → Moonstone gradient. A fine pink/blue fringe adds a restrained chromatic aberration effect. The broad crescent and generous cutout keep the mark readable at Marketplace sizes.

- `icon-source.png` is the approved full-resolution artwork.
- `icon.png` is the 256 × 256 export used in the repository README.
- The same export is copied to `ports/vscode/icon.png` and `docs/icon.png`.
- `docs/favicon-32.png` is the 32 × 32 browser export.

To re-export after an artwork update, run `npm run brand` in `ports/vscode/` with Playwright Chromium installed. `CHROMIUM_PATH` can select an existing Chromium executable. Exporting only changes size; it preserves the approved artwork. Commit all exports together.
