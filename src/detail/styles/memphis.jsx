(function(){
// src/detail/styles/memphis.jsx — Memphis 孟菲斯 80s 整页
// 整页 = 米色底 + 几何形状装饰(三角/圆点/锯齿) + 强对比原色 + 黑色手描边

const theme = {
  bg: '#FFF4E0',
  surface: '#FFFFFF',
  text: '#1A1A1A',
  sub: '#5A4A38',
  primary: '#FF3366',
  accent: '#0066FF',
  border: '#1A1A1A',
  isDark: false,
  fontFamily: '"Trebuchet MS","Helvetica Neue",sans-serif',
  // 装饰色
  colors: { pink: '#FF3366', blue: '#0066FF', yellow: '#FFD93D', teal: '#00C2A8', purple: '#7C5BC2' },
};

function MemphisDecor() {
  return (
    <>
      {/* 左上角三角 */}
      <div style={{ position: 'fixed', top: 80, left: 30, width: 0, height: 0, borderLeft: '40px solid transparent', borderRight: '40px solid transparent', borderBottom: '70px solid ' + theme.colors.pink, zIndex: 1, pointerEvents: 'none', transform: 'rotate(-15deg)' }} />
      {/* 右上圆点 */}
      <div style={{ position: 'fixed', top: 120, right: 60, width: 60, height: 60, borderRadius: 30, background: theme.colors.yellow, border: '3px solid ' + theme.border, zIndex: 1, pointerEvents: 'none' }} />
      {/* 锯齿条 */}
      <div style={{ position: 'fixed', top: 200, right: 100, width: 80, height: 16, background: 'repeating-linear-gradient(45deg, ' + theme.colors.teal + ' 0 8px, transparent 8px 16px)', zIndex: 1, pointerEvents: 'none' }} />
      {/* 大圆圈 */}
      <div style={{ position: 'fixed', bottom: 100, left: 50, width: 140, height: 140, borderRadius: 70, border: '4px solid ' + theme.colors.blue, zIndex: 1, pointerEvents: 'none' }} />
      {/* 方块 */}
      <div style={{ position: 'fixed', bottom: 200, right: 30, width: 50, height: 50, background: theme.colors.purple, border: '3px solid ' + theme.border, transform: 'rotate(20deg)', zIndex: 1, pointerEvents: 'none' }} />
      {/* 散落小点 */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: 'fixed',
          top: (300 + i * 80) + 'px',
          left: ((i * 130) % 1200 + 100) + 'px',
          width: 12, height: 12, borderRadius: 6,
          background: [theme.colors.pink, theme.colors.blue, theme.colors.yellow, theme.colors.teal][i % 4],
          zIndex: 1, pointerEvents: 'none',
        }} />
      ))}
    </>
  );
}

function Page({ item, onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.text, fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden' }}>
      <MemphisDecor />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ height: 8, background: 'repeating-linear-gradient(90deg, ' + theme.colors.pink + ' 0 20px, ' + theme.colors.yellow + ' 20px 40px, ' + theme.colors.blue + ' 40px 60px)' }} />

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
        <div style={{ width: 6, height: 6, borderRadius: 3, background: theme.primary, border: '2px solid ' + theme.border }} />
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: theme.primary, textTransform: 'uppercase' }}>{String(index).padStart(2, '0')}</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: theme.text, letterSpacing: -0.3 }}>{title}</div>
        <div style={{ flex: 1, height: 3, background: theme.border, marginLeft: 8, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 80, height: '100%', background: theme.colors.yellow }} />
        </div>
      </div>
      {children}
    </div>
  );
}

function Hero({ item }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: 32, alignItems: 'center' }}>
      <div style={{
        position: 'relative', minHeight: 480, borderRadius: 12, padding: 28,
        background: '#FFFFFF', border: '4px solid ' + theme.border,
        boxShadow: '12px 12px 0 ' + theme.colors.pink,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <item.Comp />
        {/* 卡角装饰 */}
        <div style={{ position: 'absolute', top: 12, right: 12, width: 20, height: 20, borderRadius: 10, background: theme.colors.yellow, border: '2px solid ' + theme.border }} />
        <div style={{ position: 'absolute', bottom: 12, left: 12, width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '20px solid ' + theme.colors.blue }} />
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 14px', background: theme.colors.yellow,
          border: '3px solid ' + theme.border, borderRadius: 6,
          fontSize: 11, color: theme.text, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 800,
          transform: 'rotate(-2deg)',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 4, background: theme.primary }} />
          Visual Style
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 900, color: theme.text, margin: '20px 0 12px', letterSpacing: -1.5, lineHeight: 1.0 }}>{item.name}</h1>
        <p style={{ fontSize: 16, color: theme.sub, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, padding: '4px 10px', background: '#FFFFFF', border: '2px solid ' + theme.border, borderRadius: 4, color: theme.text, fontFamily: 'monospace' }}>layout: {item.layout || 'mosaic'}</span>
          {item.Variants && <span style={{ fontSize: 10, padding: '4px 10px', background: theme.primary, color: '#FFFFFF', border: '2px solid ' + theme.border, borderRadius: 4, fontWeight: 800, transform: 'rotate(2deg)' }}>Flagship</span>}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <StatLine label="visual" value="几何 · 原色 · 黑色手描边" />
          <StatLine label="mood" value="玩心 · 80s · 派对 · 朋克" />
          <StatLine label="uses" value="儿童 · 文创 · 复古潮牌 · 海报" />
        </div>
      </div>
    </section>
  );
}

function StatLine({ label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
      <span style={{ color: theme.sub, minWidth: 60, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}>{label}：</span>
      <span style={{ color: theme.text, fontWeight: 700 }}>{value}</span>
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
    { title: 'Typography', icon: 'Aa', bullets: ['几何 sans', '粗体 700 + 标题大', '不规则字距与方向'] },
    { title: 'Color Roles', icon: '◐', bullets: ['80s 大胆原色', '强对比、纯色块', '黑色手描边 + 错位阴影'] },
    { title: 'Motion', icon: '⚡', bullets: ['弹跳 cubic-bezier', '元素入场旋转', '0 边缘跳跃'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
      {cards.map((r, i) => {
        const shadows = ['6px 6px 0 ' + theme.colors.pink, '6px 6px 0 ' + theme.colors.blue, '6px 6px 0 ' + theme.colors.yellow];
        const rot = 'rotate(' + ((i % 2 === 0) ? -0.5 : 0.5) + 'deg)';
        return (
        <div key={i} style={{
          background: theme.surface, border: '3px solid ' + theme.border, borderRadius: 8, padding: 18,
          boxShadow: shadows[i % 3], transform: rot,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 6, background: theme.colors.yellow, color: theme.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, border: '2px solid ' + theme.border }}>{r.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: theme.text, letterSpacing: 0.3 }}>{r.title}</div>
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: theme.text, lineHeight: 1.7, fontWeight: 600 }}>
            {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
        );
      })}
    </div>
  );
}

window.STYLE_PAGES = window.STYLE_PAGES || {};
window.STYLE_PAGES.memphis = { theme, Page };
})();
