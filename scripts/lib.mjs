import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const requireDev = createRequire(new URL('../ports/vscode/package.json', import.meta.url));
export const read = path => readFileSync(root + path, 'utf8');
export const palette = requireDev('@iarna/toml').parse(read('palette/carmilla.toml'));
export const manifest = JSON.parse(read('ports/vscode/package.json'));

export function buildTheme(flavor) {
  const tokens = structuredClone(palette);
  if (flavor) {
    const f = palette.flavors[flavor];
    for (const key of ['crypt', 'boudoir', 'velvet', 'selection']) tokens.colors[key] = f[key];
    tokens.colors.carmine = f.accent;
    tokens.ui = { sidebar: f.sidebar, mauve: f.mauve, 'accent-hover': f['accent-hover'] };
  }
  function resolve(value) {
    if (Array.isArray(value)) return value.map(resolve);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolve(v)]));
    if (typeof value !== 'string' || !value.startsWith('@')) return value;
    const [path, alpha] = value.slice(1).split('/');
    const color = path.split('.').reduce((obj, key) => obj?.[key], tokens);
    if (!/^#[A-F0-9]{6}$/.test(color) || (alpha && !/^[A-F0-9]{2}$/.test(alpha))) throw new Error(`Invalid token: ${value}`);
    return color + (alpha || '');
  }
  const theme = resolve(JSON.parse(read('ports/vscode/theme.template.json')));
  if (flavor) theme.name = theme.displayName = palette.flavors[flavor].name;
  return theme;
}

export function contrast(foreground, background) {
  const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
  const alpha = foreground.length === 9 ? parseInt(foreground.slice(7), 16) / 255 : 1;
  const bg = rgb(background);
  const fg = rgb(foreground).map((v, i) => v * alpha + bg[i] * (1 - alpha));
  const luminance = values => values.map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4).reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
  const values = [luminance(fg), luminance(bg)].sort((a, b) => a - b);
  return (values[1] + 0.05) / (values[0] + 0.05);
}
