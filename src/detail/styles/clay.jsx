(function(){
// src/detail/styles/clay.jsx — Clay 黏土 3D 整页
// 整页 = 暖橙渐变 + 立体内外阴影 + 厚实圆角 + 立体感 + 黏土质感

const theme = {
  bg: 'linear-gradient(180deg, #FFE4C8 0%, #F5C8A0 100%)',
  bgFallback: '#FFD3A8',
  surface: 'rgba(255,255,255,0.55)',
  text: '#5A2E18',
  sub: '#8B4A28',
  primary: '#B84418',
  accent: '#D88848',
  border: 'rgba(255,255,255,0.6)',
  isDark: false,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif',
  innerLight: 'inset 0 2px 0 rgba(255,255,255,0.7)',
  innerDark: 'inset 0 -3px 6px rgba(180,90,40,0.35)',
  outerLight: '0 8px 24px rgba(220,140,80,0.4)',
  card3d: 'inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -3px 6px rgba(180,90,40,0.35), 0 8px 24px rgba(220,140,80,0.4)',
};

function Page({ item, onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: theme.bgFallback, color: theme.text, fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: theme.bg, zIndex: 0 }} />
      {/* 立体感光斑 */}
      <div style={{ position: 'fixed', top: 100, left: 100, width: 300, height: 300, borderRadius: 150, background: 'radial-gradient(circle, rgba(255,220,180,0.5), transparent 70%)', filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: 50, right: 80, width: 260, height: 260, borderRadius: 130, background: 'radial-gradient(circle, rgba(255,160,100,0.4), transparent 70%)', filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ height: 6, background: 'linear-gradient(180deg, ' + theme.primary + ', ' + theme.accent + ')', boxShadow: theme.outerLight }} />

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
        <div style={{ width: 18, height: 18, borderRadius: 9, background: theme.primary, boxShadow: theme.card3d }} />
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: theme.primary, textTransform: 'uppercase' }}>{String(index).padStart(2, '0')}</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: theme.text, letterSpacing: -0.3 }}>{title}</div>
        <div style={{ flex: 1, height: 3, background: 'linear-gradient(90deg, ' + theme.accent + ', transparent)', marginLeft: 8, borderRadius: 2 }} />
      </div>
      {children}
    </div>
  );
}

function Hero({ item }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: 32, alignItems: 'center' }}>
      <div style={{
        position: 'relative', minHeight: 480, borderRadius: 28, padding: 28,
        background: theme.surface, border: '1px solid rgba(255,255,255,0.5)',
        boxShadow: theme.card3d,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <item.Comp />
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 16px', background: theme.primary, color: theme.surface,
          borderRadius: 999, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 800,
          boxShadow: theme.card3d,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 4, background: theme.surface }} />
          Visual Style
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 800, color: theme.text, margin: '20px 0 12px', letterSpacing: -1.5, lineHeight: 1.0, textShadow: '0 2px 0 rgba(255,255,255,0.4)' }}>{item.name}</h1>
        <p style={{ fontSize: 16, color: theme.sub, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, padding: '5px 12px', background: theme.surface, border: '1px solid rgba(255,255,255,0.6)', borderRadius: 999, color: theme.text, boxShadow: theme.card3d, fontWeight: 700 }}>layout: {item.layout || 'full-bleed'}</span>
          {item.Variants && <span style={{ fontSize: 10, padding: '5px 12px', background: theme.primary, color: theme.surface, borderRadius: 999, fontWeight: 800, boxShadow: theme.card3d }}>Flagship</span>}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <StatLine label="visual" value="黏土 · 立体 · 厚实 · 圆角" />
          <StatLine label="mood" value="温暖 · 友好 · 童趣 · 体积感" />
          <StatLine label="uses" value="儿童 App · 美食 · 玩具 · 教育" />
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
    { title: 'Typography', icon: 'Aa', bullets: ['系统 sans-serif', '粗体 700 + 圆角', '柔和阴影层次'] },
    { title: 'Color Roles', icon: '◐', bullets: ['暖橙 + 高光', '双重 inset 阴影模拟立体', '无硬边'] },
    { title: 'Motion', icon: '⚡', bullets: ['按下 scale(0.97)', '弹跳回弹', '光晕渐变'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
      {cards.map((r, i) => (
        <div key={i} style={{
          background: theme.surface, border: '1px solid rgba(255,255,255,0.6)', borderRadius: 22, padding: 22,
          boxShadow: theme.card3d,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: theme.primary, color: theme.surface, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800, boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)' }}>{r.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: theme.text, letterSpacing: -0.2 }}>{r.title}</div>
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: theme.text, lineHeight: 1.7, fontWeight: 600 }}>
            {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

window.STYLE_PAGES = window.STYLE_PAGES || {};
window.STYLE_PAGES.clay = { theme, Page };
})();
