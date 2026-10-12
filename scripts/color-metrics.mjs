import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { palette, buildTheme, contrast } from './lib.mjs';

// OKLab: https://bottosson.github.io/posts/oklab/
const multiply = (matrix, vector) => matrix.map(row => row.reduce((sum, value, i) => sum + value * vector[i], 0));
const linear = hex => [1, 3, 5].map(i => {
  const v = parseInt(hex.slice(i, i + 2), 16) / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
});
const labFromLinear = rgb => multiply([
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766],
], multiply([
  [0.4122214708, 0.5363325363, 0.0514459929],
  [0.2119034982, 0.6806995451, 0.1073969566],
  [0.0883024619, 0.2817188376, 0.6299787005],
], rgb).map(Math.cbrt));
export const oklab = hex => labFromLinear(linear(hex));
export function oklch(hex) {
  const [l, a, b] = oklab(hex);
  return { l, c: Math.hypot(a, b), h: (Math.atan2(b, a) * 180 / Math.PI + 360) % 360 };
}

// Machado et al. (2009), severity 1.0, applied in linear sRGB with gamut clipping.
// https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html
const simulations = {
  typical: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  protanopia: [[0.152286, 1.052583, -0.204868], [0.114503, 0.786281, 0.099216], [-0.003882, -0.048116, 1.051998]],
  deuteranopia: [[0.367322, 0.860646, -0.227968], [0.280085, 0.672501, 0.047413], [-0.011820, 0.042940, 0.968881]],
  tritanopia: [[1.255528, -0.076749, -0.178779], [-0.078411, 0.930809, 0.147602], [0.004733, 0.691367, 0.303900]],
};
export function distance(first, second, vision = 'typical') {
  const simulate = hex => labFromLinear(multiply(simulations[vision], linear(hex)).map(v => Math.max(0, Math.min(1, v))));
  const a = simulate(first), b = simulate(second);
  return 100 * Math.hypot(...a.map((value, i) => value - b[i]));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const moonstone = palette.flavors.moonstone;
  const theme = buildTheme('moonstone');
  console.table(Object.entries({ 'hair reference': '#90C2F5', accent: moonstone.accent, hover: moonstone['accent-hover'], editor: moonstone.boudoir }).map(([role, hex]) => {
    const { l, c, h } = oklch(hex);
    return { role, hex, L: l.toFixed(4), C: c.toFixed(4), hue: h.toFixed(2) };
  }));
  console.table(Object.entries({ Pearl: palette.colors.pearl, Moonstone: moonstone.accent, 'Ash Mauve': palette.colors['ash-mauve'] }).map(([role, hex]) => ({ role, background: moonstone.boudoir, contrast: contrast(hex, moonstone.boudoir).toFixed(2) })));
  console.log('Selection:', contrast(theme.colors['editor.selectionForeground'], moonstone.selection).toFixed(2));
  console.table(Object.keys(simulations).map(vision => Object.fromEntries([
    ['vision', vision],
    ...['verdigris', 'absinthe', 'wisteria', 'ash-mauve', 'champagne', 'peach-velvet'].map(token => [token, distance(moonstone.accent, palette.colors[token], vision).toFixed(2)]),
  ])));
  console.log('Distances are 100 × Euclidean OKLab after simulation, not WCAG ratios or universal perceptual thresholds.');
}
