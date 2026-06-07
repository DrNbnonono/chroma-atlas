(function(){
// src/detail/styles/softui.jsx — Soft UI 柔光卡片 整页
// 整页 = 现代 SaaS 风 + 圆角 + 柔和双色阴影 + 微高光 + 极简信息层

const theme = {
  bg: '#F4F6FA',
  surface: '#FFFFFF',
  text: '#0F172A',
  sub: '#64748B',
  primary: '#6366F1',
  accent: '#F472B6',
  border: '#E2E8F0',
  isDark: false,
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif',
  softShadow: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
  softShadowHover: '0 4px 8px rgba(15,23,42,0.06), 0 16px 40px rgba(15,23,42,0.1)',
};

function Page({ item, onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.text, fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden' }}>
      {/* 装饰光斑 */}
      <div style={{ position: 'fixed', top: -100, right: -100, width: 400, height: 400, borderRadius: 200, background: 'radial-gradient(circle, rgba(99,102,241,0.1), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: -100, left: -100, width: 400, height: 400, borderRadius: 200, background: 'radial-gradient(circle, rgba(244,114,182,0.1), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ height: 4, background: 'linear-gradient(90deg, ' + theme.primary + ', ' + theme.accent + ')' }} />

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
        <div style={{ width: 8, height: 8, borderRadius: 4, background: theme.primary }} />
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: theme.primary, textTransform: 'uppercase' }}>{String(index).padStart(2, '0')}</div>
        <div style={{ fontSize: 24, fontWeight: 700, color: theme.text, letterSpacing: -0.6 }}>{title}</div>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, ' + theme.border + ', transparent)', marginLeft: 8 }} />
      </div>
      {children}
    </div>
  );
}

function Hero({ item }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: 32, alignItems: 'center' }}>
      <div style={{
        position: 'relative', minHeight: 480, borderRadius: 24, padding: 28,
        background: theme.surface, boxShadow: theme.softShadow,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <item.Comp />
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px', background: theme.surface, borderRadius: 999,
          fontSize: 11, color: theme.sub, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600,
          boxShadow: theme.softShadow,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: theme.primary }} />
          Visual Style
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 800, color: theme.text, margin: '20px 0 12px', letterSpacing: -1.8, lineHeight: 1.0 }}>{item.name}</h1>
        <p style={{ fontSize: 17, color: theme.sub, lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, padding: '5px 12px', background: theme.surface, border: '1px solid ' + theme.border, borderRadius: 999, color: theme.sub, fontWeight: 600, boxShadow: theme.softShadow }}>layout: {item.layout || 'split-hero'}</span>
          {item.Variants && <span style={{ fontSize: 10, padding: '5px 12px', background: theme.primary, color: '#fff', borderRadius: 999, fontWeight: 700, boxShadow: '0 4px 12px ' + theme.primary + '40' }}>Flagship</span>}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <StatLine label="visual" value="柔光卡片 · 微高光 · 现代 SaaS" />
          <StatLine label="mood" value="专业 · 友好 · 高级 · 现代" />
          <StatLine label="uses" value="SaaS 仪表盘 · 工具 · 协作平台" />
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
    { title: 'Typography', icon: 'Aa', bullets: ['Inter / SF Pro', '中字重、字距 -0.2', '清晰的字峰层叠'] },
    { title: 'Color Roles', icon: '◐', bullets: ['白 + 1 强调色', '极柔阴影', '渐变与圆角'] },
    { title: 'Motion', icon: '⚡', bullets: ['250ms ease-out', '缩放 + 阴影联动', '按下内阴影切换'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
      {cards.map((r, i) => (
        <div key={i} style={{
          background: theme.surface, border: '1px solid ' + theme.border, borderRadius: 18, padding: 22,
          boxShadow: theme.softShadow,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: theme.primary + '15', color: theme.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 }}>{r.icon}</div>
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
window.STYLE_PAGES.softui = { theme, Page };
})();
