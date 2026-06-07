// src/detail/sections/variants.jsx — the variants section of a detail page.
// For palettes: 3 product-themed components driven by palette colors
//                (Hero card, Pricing card, CTA).
// For styles: 3 components from the style'\''s Variants array
//              (FeatureCard / PricingCard / TestimonialCard), or a fallback
//              that shows the main Comp if Variants is null.

function DetailVariants({ item, kind, chrome }) {
  if (kind === 'palette') return <PaletteVariants p={item} chrome={chrome} />;
  return <StyleVariants st={item} chrome={chrome} />;
}

function PaletteVariants({ p, chrome }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ padding: 24, background: p.bg, border: '1px solid ' + chrome.border, borderRadius: 10 }}>
        <div style={{ fontSize: 10, color: p.sub, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8, fontWeight: 600 }}>HERO on {p.bg}</div>
        <div style={{ fontSize: 26, fontWeight: 800, color: p.text, lineHeight: 1.1, letterSpacing: -0.5, marginBottom: 6 }}>{window.PRODUCT.tagline}</div>
        <div style={{ fontSize: 13, color: p.sub, lineHeight: 1.5 }}>{window.PRODUCT.subhead.slice(0, 90)}\u2026</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
        <div style={{ padding: 18, background: p.surface, border: '1px solid ' + p.border, borderRadius: 10 }}>
          <div style={{ fontSize: 10, color: p.sub, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>Pricing tier</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: p.text }}>$19</span>
            <span style={{ fontSize: 11, color: p.sub }}>/ mo</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: p.text, marginTop: 6 }}>Studio plan</div>
          <div style={{ fontSize: 11, color: p.sub, marginTop: 2 }}>20 clients \u00B7 100 GB</div>
          <span style={{ display: 'inline-block', marginTop: 8, fontSize: 9, fontWeight: 700, padding: '3px 8px', background: p.accent, color: p.bg, borderRadius: 999, letterSpacing: 0.5 }}>MOST POPULAR</span>
        </div>
        <div style={{ padding: 18, background: p.surface, border: '1px solid ' + p.border, borderRadius: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontSize: 10, color: p.sub, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>Button + Status</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ background: p.primary, color: p.bg, padding: '8px 16px', borderRadius: 999, border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Start free trial</button>
            <button style={{ background: 'transparent', color: p.text, padding: '8px 16px', borderRadius: 999, border: '1px solid ' + p.border, fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>Watch demo</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ flex: 1, height: 4, background: p.border, borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ width: '62%', height: '100%', background: p.primary }} />
            </div>
            <span style={{ fontSize: 10, color: p.sub, fontVariantNumeric: 'tabular-nums' }}>2:14 / 3:42</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StyleVariants({ st, chrome }) {
  if (!st.Variants || !Array.isArray(st.Variants) || st.Variants.length === 0) {
    return (
      <div style={{
        padding: 32, background: chrome.surface, border: '1px solid ' + chrome.border,
        borderRadius: 10, color: chrome.sub, fontSize: 13, textAlign: 'center',
      }}>
        <div style={{ fontSize: 14, color: chrome.text, fontWeight: 600, marginBottom: 8 }}>该风格尚未提供变体组件</div>
        <div style={{ marginBottom: 20 }}>以下展示主 Demo 作为预览</div>
        <div style={{ display: 'inline-block' }}><st.Comp /></div>
      </div>
    );
  }
  const [FeatureCard, PricingCard, TestimonialCard] = st.Variants;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <VariantBlock label="FeatureCard" chrome={chrome}><FeatureCard /></VariantBlock>
      <VariantBlock label="PricingCard" chrome={chrome}><PricingCard /></VariantBlock>
      <VariantBlock label="TestimonialCard" chrome={chrome}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}><TestimonialCard /></div>
      </VariantBlock>
    </div>
  );
}

function VariantBlock({ label, chrome, children }) {
  return (
    <div>
      <div style={{
        fontSize: 10, color: chrome.sub, letterSpacing: 1.5,
        textTransform: 'uppercase', fontWeight: 700, marginBottom: 8,
      }}>{label}</div>
      {children}
    </div>
  );
}

window.DetailVariants = DetailVariants;
