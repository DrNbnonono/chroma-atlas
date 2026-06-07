// src/components/demo-card.jsx — palette demo card.
// Renders the SAME product (Folio SaaS landing page) in compact form,
// recoloured by the palette. Style Comp on the home grid is handled by
// the style authors themselves.

function PaletteCard({ p }) {
  const isDark = p.bg && p.bg.startsWith('#') && (function () {
    const h = p.bg.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5;
  })();
  const chrome = {
    bg: p.bg, surface: p.surface || p.bg, text: p.text, sub: p.sub,
    primary: p.primary, accent: p.accent, border: p.border, isDark: isDark,
  };
  return (
    <div style={{
      width: 320, padding: 18, background: p.bg,
      border: '1px solid ' + p.border, borderRadius: 16,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
      color: p.text, display: 'flex', flexDirection: 'column', gap: 12,
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <window.ProductBlocks.HeroBlock p={window.PRODUCT} chrome={chrome} compact />
      <window.ProductBlocks.FeaturesRow p={window.PRODUCT} chrome={chrome} count={3} />
      <window.ProductBlocks.HeroScreenshot p={window.PRODUCT} chrome={chrome} idx={0} />
      <div style={{ display: 'flex', gap: 6, marginTop: 2 }}>
        {p.swatches.map((c, i) => (
          <div key={i} title={c} style={{
            width: 22, height: 22, borderRadius: 6, background: c,
            border: '1px solid ' + p.border,
          }} />
        ))}
      </div>
    </div>
  );
}

window.PaletteCard = PaletteCard;
