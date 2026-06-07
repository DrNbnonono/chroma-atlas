(function(){
// src/detail/styles/bento.jsx — Bento 便当格 整页
// 整页 = 浅米灰底 + 圆角大块卡片 + 柔和阴影 + 信息密度 + Apple 发布会风

const theme = {
  bg: '#F5F5F7',
  surface: '#FFFFFF',
  text: '#1D1D1F',
  sub: '#6E6E73',
  primary: '#1D1D1F',
  accent: '#FF3D00',
  border: '#E5E5E7',
  isDark: false,
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang SC", sans-serif',
};

function Page({ item, onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.text, fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ height: 6, background: 'linear-gradient(90deg, #FF3D00, #FF8C42, #FFB800)' }} />

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
        <div style={{ width: 6, height: 6, borderRadius: 3, background: theme.accent }} />
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: theme.accent, textTransform: 'uppercase' }}>{String(index).padStart(2, '0')}</div>
        <div style={{ fontSize: 24, fontWeight: 700, color: theme.text, letterSpacing: -0.5 }}>{title}</div>
        <div style={{ flex: 1, height: 1, background: theme.border, marginLeft: 8 }} />
      </div>
      {children}
    </div>
  );
}

function Hero({ item }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: 24, alignItems: 'center' }}>
      <div style={{
        position: 'relative', minHeight: 480, borderRadius: 28, padding: 28,
        background: theme.surface,
        boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <item.Comp />
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 14px', background: theme.surface,
          borderRadius: 999, fontSize: 11, color: theme.sub, letterSpacing: 1.5,
          textTransform: 'uppercase', fontWeight: 700,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: theme.accent }} />
          Visual Style
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 700, color: theme.text, margin: '20px 0 12px', letterSpacing: -1.8, lineHeight: 1.05 }}>{item.name}</h1>
        <p style={{ fontSize: 17, color: theme.sub, lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, padding: '4px 10px', background: theme.surface, border: '1px solid ' + theme.border, borderRadius: 6, color: theme.text }}>layout: {item.layout || 'bento'}</span>
          {item.Variants && <span style={{ fontSize: 10, padding: '4px 10px', background: theme.accent, color: '#fff', borderRadius: 6, fontWeight: 700 }}>Flagship</span>}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <StatLine label="visual" value="大圆角卡片 · 阴影分层 · 信息密度" />
          <StatLine label="mood" value="现代 · 简洁 · Apple 发布会 · 高级" />
          <StatLine label="uses" value="SaaS 落地页 · 产品发布 · 仪表盘" />
        </div>
      </div>
    </section>
  );
}

function StatLine({ label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
      <span style={{ color: theme.sub, minWidth: 60, letterSpacing: 0.5, textTransform: 'uppercase' }}>{label}</span>
      <span style={{ color: theme.text, fontWeight: 500 }}>{value}</span>
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
    { title: 'Typography', icon: 'Aa', bullets: ['系统 sans-serif', 'SF Pro 风，字距 -0.3', '字号阶梯清晰'] },
    { title: 'Color Roles', icon: '◐', bullets: ['白底 + 1 强强调色', '柔和阴影分层', '圆角 12-16px'] },
    { title: 'Motion', icon: '⚡', bullets: ['350ms ease-in-out', '缩放 + 透明度', '内容入场按序列错开'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
      {cards.map((r, i) => (
        <div key={i} style={{
          background: theme.surface, border: '1px solid ' + theme.border, borderRadius: 20, padding: 22,
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: theme.accent + '15', color: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 }}>{r.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: theme.text, letterSpacing: -0.2 }}>{r.title}</div>
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: theme.text, lineHeight: 1.7 }}>
            {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

window.STYLE_PAGES = window.STYLE_PAGES || {};
window.STYLE_PAGES.bento = { theme, Page };
})();
