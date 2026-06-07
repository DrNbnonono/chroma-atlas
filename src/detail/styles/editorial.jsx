(function(){
// src/detail/styles/editorial.jsx — Editorial 杂志 整页
// 整页 = 米黄底 + 衬线字体 + 黑色细栏线 + drop-cap + 印刷感 + ISSUE 编号

const theme = {
  bg: '#F5F0E5',
  surface: '#FAF5EA',
  text: '#1A1814',
  sub: '#6B5E47',
  primary: '#1A1814',
  accent: '#8B2828',
  border: '#D9CFB6',
  isDark: false,
  fontFamily: 'Georgia, "Times New Roman", "Songti SC", "Source Han Serif", serif',
  ruleColor: '#1A1814',
};

function RuleDouble() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <div style={{ height: 2, background: theme.ruleColor }} />
      <div style={{ height: 1, background: theme.ruleColor }} />
    </div>
  );
}

function Page({ item, onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.text, fontFamily: theme.fontFamily, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <window.StyleShared.SharedBackBar onBack={onBack} item={item} kind="style" theme={theme} />
        <div style={{ padding: '0 60px' }}>
          <RuleDouble />
        </div>

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
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: theme.accent, textTransform: 'uppercase', fontFamily: theme.fontFamily }}>№ {String(index).padStart(2, '0')}</div>
        <div style={{ fontSize: 28, fontWeight: 700, color: theme.text, fontStyle: 'italic', letterSpacing: -0.5, fontFamily: theme.fontFamily }}>{title}.</div>
      </div>
      <div style={{ height: 2, background: theme.ruleColor, marginBottom: 24 }} />
      {children}
    </div>
  );
}

function Hero({ item }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: 40, alignItems: 'center' }}>
      <div style={{
        position: 'relative', minHeight: 480, padding: 28,
        background: theme.surface, border: '1px solid ' + theme.ruleColor,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <item.Comp />
        <div style={{ position: 'absolute', top: 12, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', fontSize: 9, letterSpacing: 2, color: theme.text, textTransform: 'uppercase' }}>
          <span>Vol. II · No. 12</span>
          <span>Folio Quarterly</span>
        </div>
        <div style={{ position: 'absolute', bottom: 12, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', fontSize: 9, fontStyle: 'italic', color: theme.sub }}>
          <span>pp. 04</span>
          <span>— continued —</span>
        </div>
      </div>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '4px 12px', borderTop: '2px solid ' + theme.ruleColor, borderBottom: '1px solid ' + theme.ruleColor,
          fontSize: 10, color: theme.text, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700,
        }}>
          Visual Style · 风格
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 700, color: theme.text, margin: '20px 0 12px', letterSpacing: -1.5, lineHeight: 1.0, fontStyle: 'italic' }}>{item.name}.</h1>
        <div style={{ height: 1, background: theme.ruleColor, margin: '8px 0 16px' }} />
        <p style={{ fontSize: 16, color: theme.sub, lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>{item.desc}</p>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, padding: '4px 10px', background: theme.surface, border: '1px solid ' + theme.ruleColor, borderRadius: 0, color: theme.text, fontFamily: 'monospace' }}>layout · {item.layout || 'columned'}</span>
          {item.Variants && <span style={{ fontSize: 10, padding: '4px 10px', background: theme.accent, color: theme.surface, fontWeight: 700, fontStyle: 'italic' }}>Flagship</span>}
        </div>
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8, fontStyle: 'italic' }}>
          <StatLine label="visual" value="衬线 · 栏线 · 印刷气质" />
          <StatLine label="mood" value="典雅 · 内敛 · 知识感" />
          <StatLine label="uses" value="杂志 · 出版 · 文学 · 评论" />
        </div>
      </div>
    </section>
  );
}

function StatLine({ label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, fontSize: 14 }}>
      <span style={{ color: theme.sub, minWidth: 70, letterSpacing: 1, textTransform: 'uppercase', fontSize: 10, fontStyle: 'normal' }}>{label}</span>
      <span style={{ color: theme.text }}>{value}</span>
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
    { title: 'Typography', icon: 'Aa', bullets: ['Georgia 衬线', '正标题斜体、栏间距宽', '首字大写 drop-cap'] },
    { title: 'Color Roles', icon: '◐', bullets: ['纸色 + 黑墨 + 1 强调色', '高对比、纸张感', '细线分栏'] },
    { title: 'Motion', icon: '⚡', bullets: ['600ms 缓入', '栏宽过渡', '翻页感'] },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
      {cards.map((r, i) => (
        <div key={i} style={{
          background: theme.surface, border: '1px solid ' + theme.ruleColor, borderRadius: 0, padding: 22,
          borderTop: '3px double ' + theme.ruleColor,
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
            <div style={{ fontSize: 18, fontStyle: 'italic', color: theme.accent, fontWeight: 700 }}>{r.icon}</div>
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
window.STYLE_PAGES.editorial = { theme, Page };
})();
