(function(){
// src/detail/styles/cyber.jsx — Cyberpunk 赛博朋克 整页沉浸式详情页
// 整页 = 深紫底 + 霓虹粉青 + 等宽字体 + 扫描线 + 荧光阴影
// 不只是 demo 卡片,而是背景、字体、分隔、组件、按钮全在赛博朋克语言中

const theme = {
  bg: '#0A0118',
  surface: '#1A0A2E',
  text: '#E5D9FF',
  sub: '#8E7AB5',
  primary: '#FF2E97',
  accent: '#00F0FF',
  border: '#3A1F5C',
  isDark: true,
  fontFamily: '"JetBrains Mono","Courier New",monospace',
  // 装饰：扫描线 + 霓虹光晕
  scanLines: { color: 'rgba(0,240,255,0.05)', size: 3 },
  glowAccent: '0 0 18px rgba(0,240,255,0.45)',
  glowPrimary: '0 0 14px rgba(255,46,151,0.45)',
};

function ScanLines({ color, size }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 100,
      backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent ' + size + 'px, ' + color + ' ' + size + 'px, ' + color + ' ' + (size + 1) + 'px)',
    }} />
  );
}

function GlitchText({ text, color, shadow, fontSize, weight }) {
  return (
    <span style={{
      color, fontSize, fontWeight: weight || 700,
      textShadow: shadow, letterSpacing: -0.5,
    }}>{text}</span>
  );
}

function Page({ item, onBack }) {
  const p = window.PRODUCT;
  return (
    <div style={{
      minHeight: '100vh', background: theme.bg, color: theme.text,
      fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden',
    }}>
      <ScanLines color={theme.scanLines.color} size={theme.scanLines.size} />
      {/* 全局背景网格 */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage:
          'linear-gradient(' + theme.accent + '22 1px, transparent 1px),' +
          'linear-gradient(90deg, ' + theme.accent + '22 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ borderTop: '6px solid ' + theme.primary, boxShadow: theme.glowPrimary }} />

        <div style={{ padding: '40px 60px 80px', maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          {/* HERO */}
          <Hero item={item} />

          {/* PAGE IN ACTION */}
          <div style={{ marginTop: 60 }}>
            <window.StyleShared.SharedSectionTitle index={2} title="Page in Action" theme={theme} />
            <PageInAction />
          </div>

          {/* TOKENS */}
          <div style={{ marginTop: 60 }}>
            <window.StyleShared.SharedSectionTitle index={3} title="Tokens" theme={theme} />
            <Tokens item={item} />
          </div>

          {/* VARIANTS */}
          <div style={{ marginTop: 60 }}>
            <window.StyleShared.SharedSectionTitle index={4} title="Variants" theme={theme} />
            <Variants item={item} />
          </div>

          {/* PAIRINGS */}
          <div style={{ marginTop: 60 }}>
            <window.StyleShared.SharedSectionTitle index={5} title="Pairings" theme={theme} />
            <window.StyleShared.SharedPairings item={item} theme={theme} currentKind="style" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero({ item }) {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)',
      gap: 32, alignItems: 'center',
    }}>
      {/* 大型 Folio 演示卡 */}
      <div style={{
        position: 'relative', minHeight: 480, borderRadius: 4,
        background: 'linear-gradient(135deg, ' + theme.bg + ' 0%, ' + theme.surface + ' 100%)',
        border: '1px solid ' + theme.primary,
        boxShadow: theme.glowPrimary + ', inset 0 0 32px rgba(0,240,255,0.08)',
        padding: 28, overflow: 'hidden',
      }}>
        {/* 终端标题栏 */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 32,
          background: theme.surface, borderBottom: '1px solid ' + theme.border,
          display: 'flex', alignItems: 'center', padding: '0 14px', gap: 8,
        }}>
          <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FF5F57' }} />
          <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FFBD2E' }} />
          <span style={{ width: 10, height: 10, borderRadius: 5, background: '#28CA42' }} />
          <span style={{ flex: 1, textAlign: 'center', fontSize: 11, color: theme.sub, letterSpacing: 1 }}>~/folio.sys_v2.6</span>
        </div>
        <div style={{ marginTop: 30 }}>
          <item.Comp />
        </div>
        <div style={{ position: 'absolute', bottom: 12, right: 16, fontSize: 9, color: '#FFD600', letterSpacing: 2, textShadow: '0 0 4px #FFD600' }}>// FOLIO.SYS_V2.6</div>
      </div>

      {/* 右侧元信息 */}
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 12px', background: theme.surface,
          border: '1px solid ' + theme.primary, borderRadius: 999,
          fontSize: 11, color: theme.accent, letterSpacing: 2,
          textTransform: 'uppercase', fontWeight: 700,
          boxShadow: theme.glowAccent,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: theme.accent, boxShadow: '0 0 6px ' + theme.accent }} />
          Visual Style
        </div>
        <h1 style={{
          fontSize: 56, fontWeight: 900, color: theme.text,
          margin: '20px 0 12px', letterSpacing: -2, lineHeight: 1.0,
          textShadow: '2px 0 ' + theme.primary + ', -2px 0 ' + theme.accent,
        }}>{item.name}</h1>
        <p style={{ fontSize: 16, color: theme.sub, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 10, padding: '4px 10px', background: theme.surface,
            border: '1px solid ' + theme.border, borderRadius: 4,
            color: theme.text, letterSpacing: 0.5,
          }}>layout: {item.layout || 'flow'}</span>
          {item.Variants && (
            <span style={{
              fontSize: 10, padding: '4px 10px', background: theme.primary,
              color: theme.bg, borderRadius: 4, letterSpacing: 0.5, fontWeight: 700,
            }}>Flagship</span>
          )}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <StatLine label="visual" value="霓虹 · 扫描线 · 等宽" />
          <StatLine label="mood" value="末世 · 黑客 · 合成波" />
          <StatLine label="uses" value="游戏 · 音乐 · 个人主页 · 加密" />
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
  const h = (idx, title) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: theme.accent, textShadow: theme.glowAccent, fontVariantNumeric: 'tabular-nums' }}>0{idx}</div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: theme.text, textTransform: 'uppercase' }}>{title}</div>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, ' + theme.accent + ', transparent)' }} />
    </div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, padding: '8px 0' }}>
      <div>
        {h(1, 'Hero')}
        <B.HeroBlock p={p} chrome={theme} />
        <div style={{ marginTop: 18 }}>
          <B.HeroScreenshot p={p} chrome={theme} idx={0} />
        </div>
      </div>
      <div>
        {h(2, 'Trusted by')}
        <B.LogosBlock p={p} chrome={theme} />
      </div>
      <div>
        {h(3, 'Features')}
        <B.FeaturesBlock p={p} chrome={theme} count={6} />
      </div>
      <div>
        {h(4, 'Screenshots')}
        <B.ScreenshotsBlock p={p} chrome={theme} count={4} />
      </div>
      <div>
        {h(5, 'Numbers')}
        <B.StatsBlock p={p} chrome={theme} />
      </div>
      <div>
        {h(6, 'Testimonials')}
        <B.TestimonialsBlock p={p} chrome={theme} count={3} />
      </div>
      <div>
        {h(7, 'Pricing')}
        <B.PricingBlock p={p} chrome={theme} />
      </div>
      <div>
        {h(8, 'FAQ')}
        <B.FAQBlock p={p} chrome={theme} />
      </div>
      <div>
        {h(9, 'Get started')}
        <B.CTABlock p={p} chrome={theme} />
        <div style={{ marginTop: 16 }}>
          <B.SocialRow p={p} chrome={theme} />
        </div>
      </div>
    </div>
  );
}

function Tokens({ item }) {
  const cards = [
    { title: 'Typography', icon: 'Aa', bullets: ['等宽 monospace', '大重量、字距 -2', '强调色阴影发光'] },
    { title: 'Color Roles', icon: '◐', bullets: ['霓虹紫粉为主、青色辅助', '高对比 + 发光描边', '深色背景上叠加扫描线'] },
    { title: 'Motion', icon: '⚡', bullets: ['无缓动、瞬时切换', '霓虹闪烁 @ 0.5s', '扫描线循环动画'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
      {cards.map((r, i) => (
        <div key={i} style={{
          background: theme.surface, border: '1px solid ' + theme.primary,
          borderRadius: 4, padding: 18, boxShadow: theme.glowPrimary,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 4, background: theme.accent + '22',
              color: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 700, boxShadow: theme.glowAccent,
            }}>{r.icon}</div>
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

function Variants({ item }) {
  return <window.DetailVariants item={item} kind="style" chrome={theme} />;
}

window.STYLE_PAGES = window.STYLE_PAGES || {};
window.STYLE_PAGES.cyber = { theme, Page };
})();
