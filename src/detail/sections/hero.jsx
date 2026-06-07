// src/detail/sections/hero.jsx — the hero (top) section of a detail page.
// For palette pages: shows a compact Folio product preview in the palette
//   colors.
// For style pages: shows the style'\''s main Comp (the compact product card
//   the user already saw on the home page) so the style'\''s visual language
//   is immediately visible.

function DetailHero({ item, kind, chrome }) {
  const isPalette = kind === 'palette';
  const previewBg = isPalette ? item.bg : '#F5F5F5';
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
      gap: 40,
      alignItems: 'center',
    }}>
      <div style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        background: previewBg,
        padding: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid ' + chrome.border,
        boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
      }}>
        {isPalette ? <ProductHeroPreview item={item} chrome={chrome} /> : <item.Comp />}
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 12px', background: chrome.surface,
          border: '1px solid ' + chrome.border, borderRadius: 999,
          fontSize: 11, color: chrome.sub, letterSpacing: 1.5,
          textTransform: 'uppercase', fontWeight: 700,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: chrome.accent }} />
          {isPalette ? 'Color Palette' : 'Visual Style'}
        </div>
        <h1 style={{
          fontSize: 48, fontWeight: 700, color: chrome.text,
          margin: '20px 0 12px', letterSpacing: -1.5, lineHeight: 1.05,
        }}>{item.name}</h1>
        <p style={{ fontSize: 16, color: chrome.sub, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
        {isPalette && (
          <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
            {item.swatches.map((c, i) => (
              <div key={i} title={c} style={{
                width: 44, height: 44, borderRadius: 10,
                background: c, border: '1px solid ' + chrome.border,
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              }} />
            ))}
          </div>
        )}
        {!isPalette && item.layout && (
          <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: 10, padding: '4px 10px', background: chrome.surface,
              border: '1px solid ' + chrome.border, borderRadius: 6,
              color: chrome.text, fontFamily: 'monospace', letterSpacing: 0.5,
            }}>layout: {item.layout}</span>
            {item.Variants && (
              <span style={{
                fontSize: 10, padding: '4px 10px', background: chrome.accent,
                color: '#fff', borderRadius: 6, letterSpacing: 0.5, fontWeight: 700,
              }}>Flagship</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductHeroPreview({ item, chrome }) {
  return (
    <div style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <window.ProductBlocks.BrandBlock p={window.PRODUCT} chrome={chrome} size={28} />
      <div style={{ fontSize: 28, fontWeight: 800, color: chrome.text, lineHeight: 1.1, letterSpacing: -0.8 }}>{window.PRODUCT.tagline}</div>
      <div style={{ fontSize: 13, color: chrome.sub, lineHeight: 1.5 }}>{window.PRODUCT.subhead.slice(0, 100)}\u2026</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ padding: '10px 16px', background: chrome.primary, color: chrome.bg, border: 'none', borderRadius: 999, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>{window.PRODUCT.ctaPrimary}</button>
        <button style={{ padding: '10px 16px', background: 'transparent', color: chrome.text, border: '1px solid ' + chrome.border, borderRadius: 999, fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>{window.PRODUCT.ctaSecondary}</button>
      </div>
      <window.ProductBlocks.HeroScreenshot p={window.PRODUCT} chrome={chrome} idx={0} />
    </div>
  );
}

window.DetailHero = DetailHero;
