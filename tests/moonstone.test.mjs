import test from 'node:test';
import assert from 'node:assert/strict';
import { palette, buildTheme } from '../scripts/lib.mjs';
import { oklch } from '../scripts/color-metrics.mjs';

test('Moonstone keeps the sampled sky hue/chroma at Carmine lightness', () => {
  const reference = oklch('#90C2F5');
  const accent = oklch(palette.flavors.moonstone.accent);
  const hueGap = Math.abs(accent.h - reference.h);
  assert.ok(Math.min(hueGap, 360 - hueGap) < 1);
  assert.ok(Math.abs(accent.c - reference.c) < 0.003);
  assert.ok(Math.abs(accent.l - oklch(palette.colors.carmine).l) < 0.005);
  // Keep lightness separation from the two nearest cool syntax roles.
  for (const token of ['verdigris', 'wisteria']) assert.ok(oklch(palette.colors[token]).l - accent.l > 0.08);
});

test('Moonstone keeps the surface hierarchy while reducing chroma', () => {
  for (const key of ['crypt', 'boudoir', 'velvet', 'selection', 'sidebar', 'mauve']) {
    const base = oklch(palette.colors[key] || palette.ui[key]);
    const moonstone = oklch(palette.flavors.moonstone[key]);
    assert.ok(Math.abs(base.l - moonstone.l) < 0.003, key);
    assert.ok(moonstone.c < base.c, key);
  }
});

test('Moonstone preserves all non-accent syntax colors and styles', () => {
  const base = buildTheme();
  const moonstone = buildTheme('moonstone');
  const recolor = value => JSON.parse(JSON.stringify(value).replaceAll(palette.colors.carmine, palette.flavors.moonstone.accent));
  assert.deepEqual(moonstone.tokenColors, recolor(base.tokenColors));
  assert.deepEqual(moonstone.semanticTokenColors, recolor(base.semanticTokenColors));
});
