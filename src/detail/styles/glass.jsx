(function(){
// src/detail/styles/glass.jsx — Glassmorphism 毛玻璃 整页
// 整页 = 渐变彩色背景 + 半透明白卡片 + backdrop-blur + 内白光

const theme = {
  bg: 'linear-gradient(135deg, #FF6B9D 0%, #C66FBC 35%, #6B8DE3 100%)',
  bgFallback: '#C66FBC',
  surface: 'rgba(255,255,255,0.22)',
  text: '#FFFFFF',
  sub: 'rgba(255,255,255,0.78)',
  primary: '#FFFFFF',
  accent: '#FFE5F0',
  border: 'rgba(255,255,255,0.42)',
  isDark: false,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif',
  cardBg: 'rgba(255,255,255,0.18)',
  blur: 'blur(24px)',
  blobColor1: 'rgba(255,200,220,0.55)',
  blobColor2: 'rgba(180,200,255,0.55)',
  blobColor3: 'rgba(255,255,200,0.45)',
};

function Blobs() {
  return (
    <>
      <div style={{ position: 'fixed', top: -100, right: -80, width: 380, height: 380, borderRadius: 190, background: theme.blobColor1, filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: -120, left: -100, width: 420, height: 420, borderRadius: 210, background: theme.blobColor2, filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', top: '40%', left: '30%', width: 280, height: 280, borderRadius: 140, background: theme.blobColor3, filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
    </>
  );
}

function Page({ item, onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: theme.bgFallback, color: theme.text, fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: theme.bg, zIndex: 0 }} />
      <Blobs />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ height: 6, background: 'linear-gradient(90deg, #FF6B9D, #FFE5F0, #6B8DE3)' }} />

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
        <div style={{ fontSize: 22, fontWeight: 600, color: theme.text, letterSpacing: -0.3 }}>{title}</div>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.3)', marginLeft: 8 }} />
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
        background: theme.cardBg, backdropFilter: theme.blur, WebkitBackdropFilter: theme.blur,
        border: '1px solid ' + theme.border,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 12px 36px rgba(0,0,0,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <item.Comp />
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 14px', background: theme.cardBg, backdropFilter: 'blur(12px)',
          border: '1px solid ' + theme.border, borderRadius: 999,
          fontSize: 11, color: theme.text, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: theme.accent }} />
          Visual Style
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 800, color: theme.text, margin: '20px 0 12px', letterSpacing: -1.5, lineHeight: 1.0, textShadow: '0 2px 24px rgba(0,0,0,0.15)' }}>{item.name}</h1>
        <p style={{ fontSize: 16, color: theme.sub, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, padding: '4px 10px', background: theme.cardBg, backdropFilter: 'blur(8px)', border: '1px solid ' + theme.border, borderRadius: 6, color: theme.text }}>layout: {item.layout || 'flow'}</span>
          {item.Variants && <span style={{ fontSize: 10, padding: '4px 10px', background: theme.text, color: '#6B8DE3', borderRadius: 6, fontWeight: 700 }}>Flagship</span>}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <StatLine label="visual" value="半透 · 模糊 · 多层玻璃" />
          <StatLine label="mood" value="轻盈 · 流动 · 现代奢华" />
          <StatLine label="uses" value="Apple 风格 · 数字产品 · 个人主页" />
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
    { title: 'Typography', icon: 'Aa', bullets: ['系统 sans-serif', '中字重、字距 0', '高亮透明白'] },
    { title: 'Color Roles', icon: '◐', bullets: ['半透明白 + 彩色渐变', '高模糊 backdropFilter', '内白高光 + 1px 透明边'] },
    { title: 'Motion', icon: '⚡', bullets: ['200-300ms ease-out', '渐显 + 上滑', '按钮按下轻微缩放'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
      {cards.map((r, i) => (
        <div key={i} style={{
          background: theme.cardBg, backdropFilter: theme.blur, WebkitBackdropFilter: theme.blur,
          border: '1px solid ' + theme.border, borderRadius: 18, padding: 18,
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,255,255,0.3)', color: theme.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>{r.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: theme.text, letterSpacing: 0.3 }}>{r.title}</div>
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
window.STYLE_PAGES.glass = { theme, Page };
})();
