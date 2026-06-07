// src/lib/chrome.js — palette-aware theme derivation.
// Given a palette, returns a chrome object the detail view uses for
// background, text, and accent colors. Dark palettes auto-flip to a
// darker surface so contrast stays comfortable.

function isColorDark(hex) {
  if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) return false;
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  // ITU-R BT.601 perceived luminance
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum < 0.5;
}

// Neutral "museum" chrome — the default when no palette/style is involved.
const NEUTRAL_CHROME = {
  bg: '#F5F1EA',
  surface: '#FFFFFF',
  text: '#1F1A14',
  sub: '#6B635A',
  primary: '#1F1A14',
  accent: '#C96442',
  border: '#E8E2D6',
  isDark: false,
};

// Build a chrome from a palette's color tokens.
function chromeFromPalette(p) {
  if (!p) return NEUTRAL_CHROME;
  return {
    bg: p.bg,
    surface: p.surface,
    text: p.text,
    sub: p.sub,
    primary: p.primary,
    accent: p.accent,
    border: p.border,
    isDark: isColorDark(p.bg),
  };
}

// Build a chrome from a style — uses the style's own theme (provided
// per-style in src/detail/styles/<id>.jsx) when available, otherwise
// derives from the style's own Comp colors, and finally falls back
// to the neutral chrome.
function chromeFromStyle(st) {
  if (!st) return NEUTRAL_CHROME;
  // 1) per-style theme (preferred)
  if (st.theme && typeof st.theme === 'object') {
    return Object.assign({}, NEUTRAL_CHROME, st.theme, {
      isDark: isColorDark(st.theme.bg || NEUTRAL_CHROME.bg),
    });
  }
  // 2) legacy: derive from style's primary colors if exposed
  if (st.chrome) return st.chrome;
  return NEUTRAL_CHROME;
}

window.LibChrome = { NEUTRAL_CHROME, chromeFromPalette, chromeFromStyle, isColorDark };