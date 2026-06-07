(function(){
// src/detail/styles/holo.jsx — Holographic 全息 整页
// 整页 = 彩虹渐变 + 镭射 + 倾斜条纹 + 流光闪烁 + 多色霓虹

const theme = {
  bg: 'linear-gradient(135deg, #FFE0F0 0%, #E0F0FF 25%, #E0FFE5 50%, #FFF5E0 75%, #FFE0F0 100%)',
  bgSize: '200% 200%',
  bgFallback: '#F0E5FF',
  surface: 'rgba(255,255,255,0.5)',
  text: '#1F1A38',
  sub: '#5A4A78',
  primary: '#7C5BC2',
  accent: '#FF6B9D',
  border: 'rgba(255,255,255,0.7)',
  isDark: false,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif',
  iridescent: 'linear-gradient(135deg, #FF6B9D, #FFD93D, #6BCB77, #4D96FF, #9B5BFF, #FF6B9D)',
};

function HoloSheen() {
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
      backgroundSize: '200% 200%',
    }} />
  );
}

function HoloBorder() {
  return (
    <div style={{
      position: 'fixed', inset: 12, pointerEvents: 'none', zIndex: 1,
      border: '2px solid transparent',
      borderImage: theme.iridescent + ' 1',
      borderRadius: 18,
    }} />
  );
}

function Page({ item, onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: theme.bgFallback, color: theme.text, fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: theme.bg, backgroundSize: theme.bgSize, zIndex: 0 }} />
      <HoloSheen />
      <HoloBorder />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ height: 6, background: theme.iridescent, backgroundSize: '200% 100%' }} />

        <div style={{ padding: '40px 60px 80px', maxWidth: 1400, margin: '0 auto' }}>
          <Hero item={item} />
          <Section index={2} title="Page in Action"><PageInAction /></Section>
          <Section index={3} title="Tokens"><Tokens /></Section>
          <Section index={4} title="Variants"><window.DetailVariants item={item} kind="style" chrome={theme} /></Section>
          <Section index={5} title="Pairings"><window.StyleShared.SharedPairings item={item} theme={theme} currentKind="style" /></Section>
        </div>
      </div>
    </div>
  );
}

function Section({ index, title, children }) {
  return (
    <div style={{ marginTop: 56 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 16, height: 16, borderRadius: 8, background: theme.iridescent, backgroundSize: '200% 200%' }} />
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: theme.primary, textTransform: 'uppercase' }}>{String(index).padStart(2, '0')}</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: theme.text, letterSpacing: -0.3, background: theme.iridescent, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{title}</div>
        <div style={{ flex: 1, height: 2, background: theme.iridescent, backgroundSize: '200% 100%', marginLeft: 8, borderRadius: 1 }} />
      </div>
      {children}
    </div>
  );
}

function Hero({ item }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: 32, alignItems: 'center' }}>
      <div style={{
        position: 'relative', minHeight: 480, borderRadius: 22, padding: 28,
        background: theme.surface, border: '1px solid rgba(255,255,255,0.7)',
        boxShadow: '0 8px 32px rgba(180,140,255,0.35), inset 0 0 32px rgba(255,255,255,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,107,157,0.15), rgba(155,91,255,0.15), rgba(77,150,255,0.15))' }} />
        <div style={{ position: 'relative' }}>
          <item.Comp />
        </div>
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)',
          borderRadius: 999, fontSize: 11, color: theme.text, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700,
          border: '1px solid rgba(255,255,255,0.7)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: theme.iridescent, backgroundSize: '200% 200%' }} />
          Visual Style
        </div>
        <h1 style={{
          fontSize: 56, fontWeight: 800, color: theme.text, margin: '20px 0 12px',
          letterSpacing: -1.5, lineHeight: 1.0,
          background: theme.iridescent, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>{item.name}</h1>
        <p style={{ fontSize: 16, color: theme.sub, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, padding: '5px 12px', background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.7)', borderRadius: 999, color: theme.text, backdropFilter: 'blur(8px)' }}>layout: {item.layout || 'full-bleed'}</span>
          {item.Variants && <span style={{ fontSize: 10, padding: '5px 12px', background: theme.iridescent, backgroundSize: '200% 100%', color: '#fff', borderRadius: 999, fontWeight: 700 }}>Flagship</span>}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <StatLine label="visual" value="彩虹渐变 · 镭射 · 流光" />
          <StatLine label="mood" value="梦幻 · 迷幻 · 未来 · 闪烁" />
          <StatLine label="uses" value="化妆品 · NFT · 数字时尚 · 卡片" />
        </div>
      </div>
    </section>
  );
}

function StatLine({ label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
      <span style={{ color: theme.sub, minWidth: 60, letterSpacing: 1, textTransform: 'uppercase' }}>{label}：</span>
      <span style={{ color: theme.text, fontWeight: 600 }}>{value}</span>
    </div>
  );
}

function PageInAction() {
  const p = window.PRODUCT;
  const B = window.ProductBlocks;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '8px 0' }}>
      <B.HeroBlock p={p} chrome={theme} />
      <B.HeroScreenshot p={p} chrome={theme} idx={0} />
      <B.LogosBlock p={p} chrome={theme} />
      <B.FeaturesBlock p={p} chrome={theme} count={6} />
      <B.ScreenshotsBlock p={p} chrome={theme} count={4} />
      <B.StatsBlock p={p} chrome={theme} />
      <B.TestimonialsBlock p={p} chrome={theme} count={3} />
      <B.PricingBlock p={p} chrome={theme} />
      <B.FAQBlock p={p} chrome={theme} />
      <B.CTABlock p={p} chrome={theme} />
      <B.SocialRow p={p} chrome={theme} />
    </div>
  );
}

function Tokens() {
  const cards = [
    { title: 'Typography', icon: 'Aa', bullets: ['系统 sans-serif', '渐变填充文字', '霓虹色描边'] },
    { title: 'Color Roles', icon: '◐', bullets: ['镭射多色', 'conic / linear 渐变', '透明叠加'] },
    { title: 'Motion', icon: '⚡', bullets: ['连续渐变扫描', '鼠标交互式虹彩', '高光跟随'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
      {cards.map((r, i) => (
        <div key={i} style={{
          background: theme.surface, border: '1px solid rgba(255,255,255,0.7)', borderRadius: 18, padding: 20,
          boxShadow: '0 6px 20px rgba(180,140,255,0.2), inset 0 0 16px rgba(255,255,255,0.4)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: theme.iridescent, backgroundSize: '200% 200%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>{r.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: theme.text, letterSpacing: -0.2 }}>{r.title}</div>
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: theme.text, lineHeight: 1.7, fontWeight: 500 }}>
            {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

window.STYLE_PAGES = window.STYLE_PAGES || {};
window.STYLE_PAGES.holo = { theme, Page };
})();
