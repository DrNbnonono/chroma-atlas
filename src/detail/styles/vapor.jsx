(function(){
// src/detail/styles/vapor.jsx — Vaporwave 蒸汽波 整页
// 整页 = 紫粉蓝渐变 + 棕榈剪影 + 网格 + 80s 复古未来 + 衬线大标

const theme = {
  bg: 'linear-gradient(180deg, #FF6B9D 0%, #C66FBC 50%, #6B8DE3 100%)',
  bgFallback: '#C66FBC',
  surface: 'rgba(255,255,255,0.15)',
  text: '#FFFFFF',
  sub: 'rgba(255,224,240,0.9)',
  primary: '#FFE0F0',
  accent: '#FFD600',
  border: 'rgba(255,255,255,0.45)',
  isDark: false,
  fontFamily: '"Times New Roman", "Songti SC", "Source Han Serif", serif',
  gridColor: 'rgba(255,255,255,0.18)',
};

function VaporGrid() {
  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, height: '50%', pointerEvents: 'none', zIndex: 1,
      backgroundImage:
        'linear-gradient(' + theme.gridColor + ' 1px, transparent 1px),' +
        'linear-gradient(90deg, ' + theme.gridColor + ' 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      transform: 'perspective(600px) rotateX(60deg)',
      transformOrigin: 'center bottom',
      maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
    }} />
  );
}

function SunDecor() {
  return (
    <div style={{
      position: 'fixed', top: 120, right: 80, width: 200, height: 200, zIndex: 1, pointerEvents: 'none',
      background: 'radial-gradient(circle, #FFD600 0%, #FF6B9D 70%, transparent 100%)',
      borderRadius: '50%',
      boxShadow: '0 0 100px rgba(255,214,0,0.5)',
    }} />
  );
}

function Page({ item, onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: theme.bgFallback, color: theme.text, fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: theme.bg, zIndex: 0 }} />
      <SunDecor />
      <VaporGrid />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ height: 6, background: 'linear-gradient(90deg, #FF6B9D, #FFD600, #6B8DE3)' }} />

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
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 4, color: theme.accent, textTransform: 'uppercase' }}>CH.{String(index).padStart(2, '0')}</div>
        <div style={{ fontSize: 28, fontWeight: 700, color: theme.text, fontStyle: 'italic', letterSpacing: -0.5, textShadow: '2px 2px 0 ' + theme.accent }}>{title}</div>
        <div style={{ flex: 1, height: 1, background: theme.border, marginLeft: 8 }} />
      </div>
      {children}
    </div>
  );
}

function Hero({ item }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: 32, alignItems: 'center' }}>
      <div style={{
        position: 'relative', minHeight: 480, borderRadius: 14, padding: 28,
        background: theme.surface, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        border: '2px solid #fff', boxShadow: '0 0 32px rgba(255,107,157,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <item.Comp />
        <div style={{ position: 'absolute', top: 12, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', fontSize: 10, color: theme.primary, letterSpacing: 3, textTransform: 'uppercase' }}>
          <span>▼ AESTHETIC.WAVES</span>
          <span>1986</span>
        </div>
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px', background: theme.accent, color: '#1A0838',
          fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 800,
          boxShadow: '4px 4px 0 rgba(0,0,0,0.3)',
        }}>
          <span style={{ width: 8, height: 8, background: '#1A0838' }} />
          Visual Style
        </div>
        <h1 style={{
          fontSize: 64, fontWeight: 700, color: theme.text, margin: '20px 0 12px',
          letterSpacing: -1, lineHeight: 1.0, fontStyle: 'italic',
          textShadow: '3px 3px 0 ' + theme.accent + ', 6px 6px 0 rgba(0,0,0,0.3)',
        }}>{item.name}</h1>
        <p style={{ fontSize: 16, color: theme.sub, lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, padding: '5px 12px', background: theme.surface, border: '1px solid ' + theme.border, borderRadius: 0, color: theme.text, fontFamily: 'monospace' }}>layout: {item.layout || 'split-hero'}</span>
          {item.Variants && <span style={{ fontSize: 10, padding: '5px 12px', background: theme.accent, color: '#1A0838', fontWeight: 800, fontStyle: 'italic' }}>★ Flagship</span>}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8, fontStyle: 'italic' }}>
          <StatLine label="visual" value="紫粉夕阳 · 网格 · 80s 复古未来" />
          <StatLine label="mood" value="梦幻 · 怀旧 · 迷失 · 末世" />
          <StatLine label="uses" value="音乐节 · 复古博客 · 个人主页" />
        </div>
      </div>
    </section>
  );
}

function StatLine({ label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
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
    { title: 'Typography', icon: 'Aa', bullets: ['Times 衬线 + 等宽', '斜体标题、装裱白线', '全大写 + 日式符号'] },
    { title: 'Color Roles', icon: '◐', bullets: ['紫粉渐变', '霓虹黄强调', '复古日本符号'] },
    { title: 'Motion', icon: '⚡', bullets: ['慢速 800ms 渐变', '网格滚动', '淡入淡出'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
      {cards.map((r, i) => (
        <div key={i} style={{
          background: theme.surface, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          border: '2px solid #fff', borderRadius: 0, padding: 18,
          boxShadow: '4px 4px 0 ' + theme.accent,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 32, height: 32, background: theme.accent, color: '#1A0838', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, fontStyle: 'italic' }}>{r.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: theme.text, fontStyle: 'italic' }}>{r.title}</div>
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: theme.text, lineHeight: 1.7, fontStyle: 'italic' }}>
            {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

window.STYLE_PAGES = window.STYLE_PAGES || {};
window.STYLE_PAGES.vapor = { theme, Page };
})();
