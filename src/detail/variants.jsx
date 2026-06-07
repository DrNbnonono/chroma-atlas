// src/detail/variants.jsx — 30 component variants for 10 flagship styles.
// Each flagship style contributes 3 product-page components:
//   - FeatureCard    (a single product feature card)
//   - PricingCard    (a single pricing tier card)
//   - TestimonialCard (a single client testimonial card)
//
// All variants use the same content from window.PRODUCT so the user can
// compare side-by-side. Each variant is a React component that takes no
// props (since data is static) and returns its visual.

const P = () => window.PRODUCT;

/* ============== 1. cyber 赛博 ============== */
const CyberVariants = [
  () => (
    <div style={{ width: 240, padding: 14, background: '#0A0118', border: '1px solid #FF2E97', borderRadius: 2, fontFamily: '"Courier New", monospace', boxShadow: '0 0 12px rgba(255,46,151,0.3)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 22, color: '#00F0FF', textShadow: '0 0 4px #00F0FF' }}>{P().features[0].icon}</span>
        <span style={{ fontSize: 9, color: '#FFD600', fontWeight: 700, letterSpacing: 1 }}>{P().features[0].tag}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: '#FF2E97', textShadow: '0 0 4px rgba(255,46,151,0.4)' }}>{P().features[0].name}</div>
      <div style={{ fontSize: 10, color: '#8E7AB5', marginTop: 4, lineHeight: 1.4 }}>{P().features[0].desc}</div>
      <button style={{ marginTop: 10, width: '100%', padding: '6px', background: 'transparent', color: '#00F0FF', border: '1px solid #00F0FF', fontSize: 10, letterSpacing: 2, cursor: 'pointer' }}>// TRY_IT</button>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: '#0A0118', border: '1px solid #FF2E97', borderRadius: 2, fontFamily: '"Courier New", monospace', boxShadow: '0 0 12px rgba(255,46,151,0.3)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '2px 6px', background: '#FF2E97', color: '#0A0118', fontWeight: 700, letterSpacing: 1 }}>// POPULAR</div>
        <div style={{ fontSize: 11, color: '#8E7AB5', letterSpacing: 1, textTransform: 'uppercase' }}>{it.name}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 26, fontWeight: 700, color: '#00F0FF', textShadow: '0 0 6px #00F0FF' }}>{it.price}</span>
          <span style={{ fontSize: 11, color: '#8E7AB5', marginLeft: 2 }}>{it.period}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 10, color: '#E5D9FF', lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>{f}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '8px', background: '#FF2E97', color: '#0A0118', border: 'none', fontSize: 11, fontWeight: 700, letterSpacing: 2, cursor: 'pointer' }}>&gt; {it.cta}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 14, background: '#0A0118', border: '1px solid #00F0FF', borderRadius: 2, fontFamily: '"Courier New", monospace', boxShadow: '0 0 8px rgba(0,240,255,0.2)' }}>
      <div style={{ fontSize: 11, color: '#E5D9FF', lineHeight: 1.5, marginBottom: 10 }}>&gt; {P().testimonials[0].quote}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderTop: '1px solid #3A1F5C', paddingTop: 8 }}>
        <div style={{ width: 24, height: 24, borderRadius: 12, background: 'linear-gradient(135deg, #FF2E97, #00F0FF)', color: '#0A0118', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{P().testimonials[0].avatar.initials}</div>
        <div>
          <div style={{ fontSize: 10, color: '#00F0FF' }}>{P().testimonials[0].author}</div>
          <div style={{ fontSize: 9, color: '#8E7AB5' }}>{P().testimonials[0].role}</div>
        </div>
      </div>
    </div>
  ),
];
/* ============== 2. glass 毛玻璃 ============== */
const GlassVariants = [
  () => (
    <div style={{ width: 240, padding: 14, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 16, color: '#fff', fontFamily: '-apple-system, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 22, color: '#fff' }}>{P().features[0].icon}</span>
        <span style={{ fontSize: 9, padding: '2px 8px', background: 'rgba(255,255,255,0.3)', borderRadius: 999, fontWeight: 700, letterSpacing: 1 }}>{P().features[0].tag}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700 }}>{P().features[0].name}</div>
      <div style={{ fontSize: 11, opacity: 0.85, marginTop: 4, lineHeight: 1.4 }}>{P().features[0].desc}</div>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 16, color: '#fff', fontFamily: '-apple-system, sans-serif', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '3px 8px', background: 'rgba(255,255,255,0.4)', color: '#fff', borderRadius: 999, fontWeight: 700, letterSpacing: 1 }}>MOST POPULAR</div>
        <div style={{ fontSize: 11, opacity: 0.8, letterSpacing: 1, textTransform: 'uppercase' }}>{it.name}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 700 }}>{it.price}</span>
          <span style={{ fontSize: 11, opacity: 0.8, marginLeft: 2 }}>{it.period}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 11, lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>{f}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '10px', background: 'rgba(255,255,255,0.95)', color: '#C66FBC', border: 'none', borderRadius: 999, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>{it.cta}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 14, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 16, color: '#fff', fontFamily: '-apple-system, sans-serif' }}>
      <div style={{ fontSize: 18, color: '#fff', lineHeight: 0.5, fontFamily: 'Georgia, serif' }}>\u201C</div>
      <div style={{ fontSize: 12, lineHeight: 1.5, margin: '6px 0 10px' }}>{P().testimonials[0].quote}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: 'linear-gradient(135deg, hsl(200 70% 60%), hsl(240 80% 50%))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{P().testimonials[0].avatar.initials}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600 }}>{P().testimonials[0].author}</div>
          <div style={{ fontSize: 9, opacity: 0.8 }}>{P().testimonials[0].role}</div>
        </div>
      </div>
    </div>
  ),
];

/* ============== 3. memphis 孟菲斯 ============== */
const MemphisVariants = [
  () => (
    <div style={{ position: 'relative', width: 240, padding: 14, background: '#FFF8E7', border: '3px solid #1A1A1A', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'absolute', top: -6, right: -6, width: 18, height: 18, background: '#FF3E80', borderRadius: 9, border: '2px solid #1A1A1A' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 22, color: '#1A1A1A' }}>{P().features[0].icon}</span>
        <span style={{ fontSize: 9, padding: '2px 6px', background: '#FFD93D', border: '2px solid #1A1A1A', color: '#1A1A1A', fontWeight: 700 }}>{P().features[0].tag}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 800, color: '#1A1A1A' }}>{P().features[0].name}</div>
      <div style={{ fontSize: 10, color: '#1A1A1A', lineHeight: 1.4, marginTop: 4 }}>{P().features[0].desc}</div>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: '#FFD93D', border: '3px solid #1A1A1A', position: 'relative', fontFamily: 'sans-serif' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '2px 6px', background: '#FF3E80', color: '#fff', border: '2px solid #1A1A1A', fontWeight: 700 }}>POPULAR</div>
        <div style={{ fontSize: 11, color: '#1A1A1A', letterSpacing: 1, textTransform: 'uppercase' }}>{it.name}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 800, color: '#1A1A1A' }}>{it.price}</span>
          <span style={{ fontSize: 11, color: '#1A1A1A', marginLeft: 2 }}>{it.period}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 11, color: '#1A1A1A', lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>{f}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '10px', background: '#3DA9FC', color: '#fff', border: '2px solid #1A1A1A', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>{it.cta}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 14, background: '#FFD93D', border: '3px solid #1A1A1A', position: 'relative', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'absolute', top: 8, right: 8, width: 16, height: 16, background: '#3DA9FC', transform: 'rotate(45deg)', border: '2px solid #1A1A1A' }} />
      <div style={{ fontSize: 12, color: '#1A1A1A', lineHeight: 1.5, marginBottom: 10 }}>{P().testimonials[0].quote}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 26, height: 26, borderRadius: 13, background: '#FF3E80', border: '2px solid #1A1A1A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800 }}>{P().testimonials[0].avatar.initials}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#1A1A1A' }}>{P().testimonials[0].author}</div>
          <div style={{ fontSize: 9, color: '#1A1A1A' }}>{P().testimonials[0].role}</div>
        </div>
      </div>
    </div>
  ),
];
/* ============== 4. pixel 像素 ============== */
const PixelVariants = [
  () => (
    <div style={{ width: 240, padding: 14, background: '#9BBC0F', border: '4px solid #0F380F', fontFamily: '"Courier New", monospace', color: '#0F380F' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 22, color: '#0F380F' }}>{P().features[0].icon}</span>
        <span style={{ fontSize: 9, color: '#0F380F', letterSpacing: 1, fontWeight: 700 }}>[{P().features[0].tag}]</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>{P().features[0].name.toUpperCase()}</div>
      <div style={{ fontSize: 10, color: '#306230', marginTop: 4, lineHeight: 1.4 }}>{P().features[0].desc.toUpperCase()}</div>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: '#9BBC0F', border: '4px solid #0F380F', fontFamily: '"Courier New", monospace', color: '#0F380F', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '2px 6px', background: '#0F380F', color: '#9BBC0F', fontWeight: 700, letterSpacing: 1 }}>[POPULAR]</div>
        <div style={{ fontSize: 11, color: '#306230', letterSpacing: 1, textTransform: 'uppercase' }}>{it.name.toUpperCase()}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: '#0F380F' }}>{it.price.toUpperCase()}</span>
          <span style={{ fontSize: 11, color: '#306230', marginLeft: 2 }}>{it.period.toUpperCase()}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 10, color: '#0F380F', lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>&gt; {f.toUpperCase()}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '10px', background: '#0F380F', color: '#9BBC0F', border: 'none', fontSize: 11, fontWeight: 700, letterSpacing: 2, cursor: 'pointer' }}>{it.cta.toUpperCase()}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 14, background: '#9BBC0F', border: '4px solid #0F380F', fontFamily: '"Courier New", monospace', color: '#0F380F' }}>
      <div style={{ fontSize: 10, letterSpacing: 1, marginBottom: 6, fontWeight: 700 }}>&gt; REVIEW.LOG:</div>
      <div style={{ fontSize: 11, lineHeight: 1.5, marginBottom: 8 }}>{P().testimonials[0].quote.toUpperCase()}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderTop: '2px solid #0F380F', paddingTop: 8 }}>
        <div style={{ width: 24, height: 24, background: '#0F380F', color: '#9BBC0F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{P().testimonials[0].avatar.initials}</div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>{P().testimonials[0].author.toUpperCase()}</div>
          <div style={{ fontSize: 9, color: '#306230' }}>{P().testimonials[0].role.toUpperCase()}</div>
        </div>
      </div>
    </div>
  ),
];

/* ============== 5. bento 便当格 ============== */
const BentoVariants = [
  () => (
    <div style={{ width: 240, padding: 14, background: '#FFFFFF', borderRadius: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.05)', fontFamily: '-apple-system, sans-serif', color: '#0A0A0A' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 22, color: '#5B6BFF' }}>{P().features[0].icon}</span>
        <span style={{ fontSize: 9, padding: '2px 6px', background: '#F5F5F7', borderRadius: 4, color: '#737373', fontWeight: 700, letterSpacing: 1 }}>{P().features[0].tag}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: -0.2 }}>{P().features[0].name}</div>
      <div style={{ fontSize: 11, color: '#737373', marginTop: 4, lineHeight: 1.4 }}>{P().features[0].desc}</div>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: '#FFFFFF', borderRadius: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.05)', fontFamily: '-apple-system, sans-serif', color: '#0A0A0A', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '3px 8px', background: '#0A0A0A', color: '#fff', borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>POPULAR</div>
        <div style={{ fontSize: 11, color: '#737373', letterSpacing: 1, textTransform: 'uppercase' }}>{it.name}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 700 }}>{it.price}</span>
          <span style={{ fontSize: 11, color: '#737373', marginLeft: 2 }}>{it.period}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 11, lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>{f}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '10px', background: '#0A0A0A', color: '#fff', border: 'none', borderRadius: 999, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>{it.cta}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 14, background: '#FFFFFF', borderRadius: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.05)', fontFamily: '-apple-system, sans-serif', color: '#0A0A0A' }}>
      <div style={{ fontSize: 11, lineHeight: 1.5, color: '#0A0A0A' }}>{P().testimonials[0].quote}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, paddingTop: 10, borderTop: '1px solid #E5E5E5' }}>
        <div style={{ width: 24, height: 24, borderRadius: 12, background: 'linear-gradient(135deg, hsl(200 70% 60%), hsl(240 80% 50%))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{P().testimonials[0].avatar.initials}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600 }}>{P().testimonials[0].author}</div>
          <div style={{ fontSize: 9, color: '#737373' }}>{P().testimonials[0].role}</div>
        </div>
      </div>
    </div>
  ),
];
/* ============== 6. editorial 杂志 ============== */
const EditorialVariants = [
  () => (
    <div style={{ width: 240, padding: 16, background: '#F5F0E5', border: '1px solid #1A1814', fontFamily: 'Georgia, "Times New Roman", serif', color: '#1A1814' }}>
      <div style={{ fontSize: 9, letterSpacing: 3, color: '#8B2828', fontWeight: 700, marginBottom: 6 }}>FEATURE \u00B7 {P().features[0].tag}</div>
      <div style={{ fontSize: 24, fontWeight: 700, fontStyle: 'italic', lineHeight: 1.1, marginBottom: 8 }}>{P().features[0].name}</div>
      <div style={{ width: 40, height: 2, background: '#1A1814', marginBottom: 8 }} />
      <div style={{ fontSize: 11, color: '#6B5E47', lineHeight: 1.5 }}>{P().features[0].desc}</div>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: '#F5F0E5', borderLeft: '3px solid #1A1814', fontFamily: 'Georgia, "Times New Roman", serif', color: '#1A1814', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '3px 8px', background: '#8B2828', color: '#fff', fontWeight: 700, letterSpacing: 1 }}>POPULAR</div>
        <div style={{ fontSize: 11, color: '#6B5E47', letterSpacing: 1, textTransform: 'uppercase' }}>{it.name}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 700, fontStyle: 'italic' }}>{it.price}</span>
          <span style={{ fontSize: 11, color: '#6B5E47', marginLeft: 2 }}>{it.period}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 11, lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>{f}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '10px', background: '#1A1814', color: '#F5F0E5', border: 'none', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>{it.cta}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 18, background: '#F5F0E5', fontFamily: 'Georgia, "Times New Roman", serif', color: '#1A1814' }}>
      <div style={{ fontSize: 11, fontStyle: 'italic', lineHeight: 1.6, marginBottom: 10, color: '#3A2A18' }}>\u201C{P().testimonials[0].quote}\u201D</div>
      <div style={{ fontSize: 10, color: '#6B5E47', letterSpacing: 1, textTransform: 'uppercase' }}>\u2014 {P().testimonials[0].author}, {P().testimonials[0].role}</div>
    </div>
  ),
];

/* ============== 7. clay 黏土 3D ============== */
const ClayVariants = [
  () => (
    <div style={{ width: 240, padding: 14, background: 'linear-gradient(180deg, #FFE4C8 0%, #F5C8A0 100%)', borderRadius: 16, boxShadow: '0 8px 20px rgba(220,140,80,0.35), inset 0 -3px 6px rgba(180,90,40,0.3), inset 0 3px 6px rgba(255,255,255,0.5)', fontFamily: '-apple-system, sans-serif', color: '#5A2E18' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 22, color: '#B84418' }}>{P().features[0].icon}</span>
        <span style={{ fontSize: 9, padding: '2px 6px', background: '#5A2E18', color: '#FFE4C8', borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>{P().features[0].tag}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700 }}>{P().features[0].name}</div>
      <div style={{ fontSize: 11, color: '#8B4A28', marginTop: 4, lineHeight: 1.4 }}>{P().features[0].desc}</div>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: 'linear-gradient(180deg, #FFE4C8 0%, #F5C8A0 100%)', borderRadius: 16, boxShadow: '0 8px 20px rgba(220,140,80,0.35), inset 0 -3px 6px rgba(180,90,40,0.3), inset 0 3px 6px rgba(255,255,255,0.5)', fontFamily: '-apple-system, sans-serif', color: '#5A2E18', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '3px 8px', background: '#B84418', color: '#FFE4C8', borderRadius: 8, fontWeight: 700, letterSpacing: 1 }}>POPULAR</div>
        <div style={{ fontSize: 11, color: '#8B4A28', letterSpacing: 1, textTransform: 'uppercase' }}>{it.name}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 800 }}>{it.price}</span>
          <span style={{ fontSize: 11, color: '#8B4A28', marginLeft: 2 }}>{it.period}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 11, lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>{f}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '10px', background: '#B84418', color: '#FFE4C8', border: 'none', borderRadius: 999, fontSize: 11, fontWeight: 700, cursor: 'pointer', boxShadow: 'inset 0 -2px 3px rgba(120,50,10,0.3), inset 0 2px 3px rgba(255,200,150,0.4)' }}>{it.cta}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 16, background: 'linear-gradient(180deg, #FFE4C8 0%, #F5C8A0 100%)', borderRadius: 16, boxShadow: '0 6px 16px rgba(220,140,80,0.3), inset 0 -2px 4px rgba(180,90,40,0.25), inset 0 2px 4px rgba(255,255,255,0.5)', fontFamily: '-apple-system, sans-serif', color: '#5A2E18' }}>
      <div style={{ fontSize: 11, lineHeight: 1.6, marginBottom: 10 }}>{P().testimonials[0].quote}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: 'linear-gradient(135deg, hsl(200 70% 60%), hsl(240 80% 50%))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.2)' }}>{P().testimonials[0].avatar.initials}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700 }}>{P().testimonials[0].author}</div>
          <div style={{ fontSize: 9, color: '#8B4A28' }}>{P().testimonials[0].role}</div>
        </div>
      </div>
    </div>
  ),
];
/* ============== 8. vapor 蒸汽波 ============== */
const VaporVariants = [
  () => (
    <div style={{ width: 240, padding: 14, background: 'linear-gradient(180deg, #FF6B9D 0%, #C66FBC 50%, #6B8DE3 100%)', border: '2px solid #fff', borderRadius: 8, fontFamily: '"Times New Roman", serif', color: '#fff', boxShadow: '0 0 16px rgba(255,107,157,0.4)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 22, color: '#FFE0F0' }}>{P().features[0].icon}</span>
        <span style={{ fontSize: 9, padding: '2px 6px', background: 'rgba(0,0,0,0.4)', color: '#fff', fontWeight: 700, letterSpacing: 1 }}>{P().features[0].tag}</span>
      </div>
      <div style={{ fontSize: 16, fontWeight: 700, fontStyle: 'italic' }}>{P().features[0].name}</div>
      <div style={{ fontSize: 11, color: '#FFE0F0', marginTop: 4, lineHeight: 1.4 }}>// {P().features[0].desc}</div>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: 'rgba(255,255,255,0.18)', border: '2px solid #fff', fontFamily: '"Times New Roman", serif', color: '#fff', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '2px 6px', background: '#FFD600', color: '#1A0A2E', fontWeight: 700, letterSpacing: 1 }}>POPULAR</div>
        <div style={{ fontSize: 11, color: '#FFE0F0', letterSpacing: 1, textTransform: 'uppercase', fontStyle: 'italic' }}>{it.name}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 700, fontStyle: 'italic' }}>{it.price}</span>
          <span style={{ fontSize: 11, color: '#FFE0F0', marginLeft: 2 }}>{it.period}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 11, lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>{f}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '10px', background: '#fff', color: '#C66FBC', border: 'none', fontSize: 11, fontWeight: 700, fontStyle: 'italic', cursor: 'pointer' }}>~ {it.cta}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 14, background: 'rgba(255,255,255,0.18)', border: '1px solid #fff', fontFamily: '"Times New Roman", serif', color: '#fff' }}>
      <div style={{ fontSize: 12, fontStyle: 'italic', lineHeight: 1.5, marginBottom: 10 }}>\u201C{P().testimonials[0].quote}\u201D</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderTop: '1px solid rgba(255,255,255,0.4)', paddingTop: 8 }}>
        <div style={{ width: 26, height: 26, borderRadius: 13, background: 'linear-gradient(135deg, #FFD600, #6B8DE3)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{P().testimonials[0].avatar.initials}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700 }}>~ {P().testimonials[0].author}</div>
          <div style={{ fontSize: 9, color: '#FFE0F0' }}>{P().testimonials[0].role}</div>
        </div>
      </div>
    </div>
  ),
];

/* ============== 9. holo 全息 ============== */
const HoloVariants = [
  () => (
    <div style={{ width: 240, padding: 14, background: 'linear-gradient(135deg, #F5E0FF 0%, #E0F0FF 50%, #FFE0F0 100%)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 6px 20px rgba(180,140,255,0.4), inset 0 0 12px rgba(255,255,255,0.4)', fontFamily: '-apple-system, sans-serif', color: '#1F1A38', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ fontSize: 22, color: '#7C5BC2' }}>{P().features[0].icon}</span>
          <span style={{ fontSize: 9, padding: '2px 6px', background: 'rgba(255,255,255,0.4)', borderRadius: 4, color: '#1F1A38', fontWeight: 700, letterSpacing: 1 }}>{P().features[0].tag}</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, background: 'linear-gradient(90deg, #FF6B9D, #7C5BC2, #4EC4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{P().features[0].name}</div>
        <div style={{ fontSize: 11, color: '#5A4A78', marginTop: 4, lineHeight: 1.4 }}>{P().features[0].desc}</div>
      </div>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: 'linear-gradient(135deg, rgba(245,224,255,0.6), rgba(224,240,255,0.6))', borderRadius: 14, border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 6px 20px rgba(180,140,255,0.4)', fontFamily: '-apple-system, sans-serif', color: '#1F1A38', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '3px 8px', background: 'linear-gradient(90deg, #FF6B9D, #7C5BC2)', color: '#fff', borderRadius: 999, fontWeight: 700, letterSpacing: 1 }}>POPULAR</div>
        <div style={{ fontSize: 11, color: '#5A4A78', letterSpacing: 1, textTransform: 'uppercase' }}>{it.name}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 800, background: 'linear-gradient(90deg, #FF6B9D, #7C5BC2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{it.price}</span>
          <span style={{ fontSize: 11, color: '#5A4A78', marginLeft: 2 }}>{it.period}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 11, lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>{f}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '10px', background: 'linear-gradient(90deg, #FF6B9D, #7C5BC2)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>{it.cta}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 14, background: 'linear-gradient(135deg, rgba(245,224,255,0.5), rgba(224,240,255,0.5))', borderRadius: 12, border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 4px 12px rgba(180,140,255,0.3)', fontFamily: '-apple-system, sans-serif', color: '#1F1A38' }}>
      <div style={{ fontSize: 11, lineHeight: 1.5, marginBottom: 10 }}>{P().testimonials[0].quote}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 26, height: 26, borderRadius: 13, background: 'linear-gradient(135deg, #FF6B9D, #7C5BC2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{P().testimonials[0].avatar.initials}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700 }}>{P().testimonials[0].author}</div>
          <div style={{ fontSize: 9, color: '#5A4A78' }}>{P().testimonials[0].role}</div>
        </div>
      </div>
    </div>
  ),
];

/* ============== 10. softui 柔光 ============== */
const SoftUIVariants = [
  () => (
    <div style={{ width: 240, padding: 14, background: '#EEF1F8', borderRadius: 16, boxShadow: '0 10px 24px rgba(180,200,230,0.4), inset 0 -2px 4px rgba(255,255,255,0.7), inset 0 2px 4px rgba(120,140,180,0.15)', fontFamily: 'Inter, -apple-system, sans-serif', color: '#1A2A38' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 22, color: '#3A5878' }}>{P().features[0].icon}</span>
        <span style={{ fontSize: 9, padding: '2px 8px', background: '#FFFFFF', color: '#5A6878', borderRadius: 999, fontWeight: 700, letterSpacing: 1, boxShadow: '0 1px 2px rgba(120,140,180,0.2)' }}>{P().features[0].tag}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: -0.2 }}>{P().features[0].name}</div>
      <div style={{ fontSize: 11, color: '#5A6878', marginTop: 4, lineHeight: 1.4 }}>{P().features[0].desc}</div>
    </div>
  ),
  () => {
    const it = P().pricing[1];
    return (
      <div style={{ width: 240, padding: 16, background: '#EEF1F8', borderRadius: 16, boxShadow: '0 10px 24px rgba(180,200,230,0.4), inset 0 -2px 4px rgba(255,255,255,0.7), inset 0 2px 4px rgba(120,140,180,0.15)', fontFamily: 'Inter, -apple-system, sans-serif', color: '#1A2A38', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, fontSize: 9, padding: '3px 8px', background: '#3A5878', color: '#fff', borderRadius: 999, fontWeight: 700, letterSpacing: 1 }}>POPULAR</div>
        <div style={{ fontSize: 11, color: '#5A6878', letterSpacing: 1, textTransform: 'uppercase' }}>{it.name}</div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontSize: 28, fontWeight: 700 }}>{it.price}</span>
          <span style={{ fontSize: 11, color: '#5A6878', marginLeft: 2 }}>{it.period}</span>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 16, fontSize: 11, lineHeight: 1.6 }}>
          {it.features.map((f, j) => <li key={j}>{f}</li>)}
        </ul>
        <button style={{ marginTop: 12, width: '100%', padding: '10px', background: '#3A5878', color: '#EEF1F8', border: 'none', borderRadius: 999, fontSize: 11, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 4px rgba(58,88,120,0.4)' }}>{it.cta}</button>
      </div>
    );
  },
  () => (
    <div style={{ padding: 16, background: '#EEF1F8', borderRadius: 14, boxShadow: '0 8px 20px rgba(180,200,230,0.35), inset 0 -2px 4px rgba(255,255,255,0.7), inset 0 2px 4px rgba(120,140,180,0.15)', fontFamily: 'Inter, -apple-system, sans-serif', color: '#1A2A38' }}>
      <div style={{ fontSize: 11, lineHeight: 1.6, marginBottom: 10 }}>{P().testimonials[0].quote}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: 'linear-gradient(135deg, #7A8AB5, #3A5878)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{P().testimonials[0].avatar.initials}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700 }}>{P().testimonials[0].author}</div>
          <div style={{ fontSize: 9, color: '#5A6878' }}>{P().testimonials[0].role}</div>
        </div>
      </div>
    </div>
  ),
];

const VARIANTS_BY_STYLE = {
  cyber: CyberVariants,
  glass: GlassVariants,
  memphis: MemphisVariants,
  pixel: PixelVariants,
  bento: BentoVariants,
  editorial: EditorialVariants,
  clay: ClayVariants,
  vapor: VaporVariants,
  holo: HoloVariants,
  softui: SoftUIVariants,
};

if (window.STYLES) {
  window.STYLES = window.STYLES.map((s) => {
    const v = VARIANTS_BY_STYLE[s.id];
    if (v) {
      const { Variants, ...rest } = s;
      return { ...rest, Variants: v };
    }
    return s;
  });
}
