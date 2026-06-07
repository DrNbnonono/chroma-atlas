(function(){
// src/detail/styles/pixel.jsx — Pixel 像素复古 整页
// 整页 = Game Boy 绿 LCD + 等宽像素字 + 8-bit 硬边 + 像素网格

const theme = {
  bg: '#9BBC0F',
  surface: '#8BAC0F',
  text: '#0F380F',
  sub: '#306230',
  primary: '#0F380F',
  accent: '#306230',
  border: '#0F380F',
  isDark: false,
  fontFamily: '"Press Start 2P","Courier New",monospace',
  lcdDark: '#0F380F',
  lcdLight: '#9BBC0F',
  lcdMid: '#8BAC0F',
  pixelSize: 4,
};

function PixelGrid() {
  const s = theme.pixelSize;
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      backgroundImage:
        'repeating-linear-gradient(0deg, transparent 0, transparent ' + s + 'px, rgba(15,56,15,0.06) ' + s + 'px, rgba(15,56,15,0.06) ' + (s * 2) + 'px),' +
        'repeating-linear-gradient(90deg, transparent 0, transparent ' + s + 'px, rgba(15,56,15,0.06) ' + s + 'px, rgba(15,56,15,0.06) ' + (s * 2) + 'px)',
    }} />
  );
}

function PixelHeader({ text }) {
  return <span style={{ fontFamily: theme.fontFamily, textTransform: 'uppercase', letterSpacing: 1 }}>{text}</span>;
}

function Page({ item, onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: theme.lcdLight, color: theme.text, fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden', imageRendering: 'pixelated' }}>
      <PixelGrid />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ height: 8, background: theme.lcdDark }} />

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
        <div style={{ width: 8, height: 8, background: theme.text }} />
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: theme.text, textTransform: 'uppercase' }}>[{String(index).padStart(2, '0')}]</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: theme.text, textTransform: 'uppercase' }}>&gt; {title}</div>
        <div style={{ flex: 1, height: 4, background: theme.text, marginLeft: 8 }} />
      </div>
      {children}
    </div>
  );
}

function Hero({ item }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: 32, alignItems: 'center' }}>
      <div style={{
        position: 'relative', minHeight: 480, padding: 28,
        background: theme.lcdLight, border: '4px solid ' + theme.lcdDark,
        boxShadow: '0 0 0 8px ' + theme.lcdMid,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '8px 14px', background: theme.lcdDark, color: theme.lcdLight, fontSize: 10, display: 'flex', justifyContent: 'space-between', letterSpacing: 1 }}>
          <span>■ FOLIO.SAAS.OS v1.0</span>
          <span>{new Date().toISOString().slice(0, 10).replace(/-/g, '.')}</span>
        </div>
        <div style={{ marginTop: 30 }}>
          <item.Comp />
        </div>
        <div style={{ position: 'absolute', bottom: 8, right: 12, fontSize: 8, color: theme.lcdDark, letterSpacing: 1 }}>&gt; READY_</div>
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 12px', background: theme.lcdDark, color: theme.lcdLight,
          fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700,
        }}>
          <span style={{ width: 6, height: 6, background: theme.lcdLight }} />
          [STYLE] VISUAL
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 700, color: theme.text, margin: '20px 0 12px', letterSpacing: -0.5, lineHeight: 1.1, textTransform: 'uppercase' }}>{item.name}</h1>
        <p style={{ fontSize: 13, color: theme.sub, lineHeight: 1.6, margin: 0, fontWeight: 700 }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 9, padding: '4px 10px', background: theme.lcdDark, color: theme.lcdLight }}>layout: {item.layout || 'full-bleed'}</span>
          {item.Variants && <span style={{ fontSize: 9, padding: '4px 10px', background: theme.lcdLight, color: theme.lcdDark, fontWeight: 700, border: '2px solid ' + theme.lcdDark }}>&gt; FLAGSHIP</span>}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <StatLine label="visual" value="8-BIT · GAME BOY · 等宽" />
          <StatLine label="mood" value="复古 · 游戏机 · 像素冒险" />
          <StatLine label="uses" value="独立游戏 · 复古博客 · 极客" />
        </div>
      </div>
    </section>
  );
}

function StatLine({ label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 10 }}>
      <span style={{ color: theme.sub, minWidth: 80, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}>{label}:</span>
      <span style={{ color: theme.text, fontWeight: 700 }}>{value}</span>
    </div>
  );
}

function PageInAction() {
  const p = window.PRODUCT;
  const B = window.ProductBlocks;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '8px 0' }}>
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
    { title: 'Typography', icon: 'Aa', bullets: ['等宽 monospace', '统一字号、统一大写', '无抗锯齿'] },
    { title: 'Color Roles', icon: '◐', bullets: ['4 色调色板', '硬边、无渐变', '点阵 8x8 网格'] },
    { title: 'Motion', icon: '⚡', bullets: ['离散帧动画', '无缓动', '字符块切换'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 10 }}>
      {cards.map((r, i) => (
        <div key={i} style={{
          background: theme.lcdLight, border: '4px solid ' + theme.lcdDark, borderRadius: 0, padding: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 28, height: 28, background: theme.lcdDark, color: theme.lcdLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>{r.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: theme.text, textTransform: 'uppercase' }}>&gt; {r.title}</div>
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 11, color: theme.text, lineHeight: 1.7, fontWeight: 700 }}>
            {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

window.STYLE_PAGES = window.STYLE_PAGES || {};
window.STYLE_PAGES.pixel = { theme, Page };
})();
