// src/components/home-grid.jsx — home page gallery.
// Single-page scrollable layout: one page, two sections (Color
// Palettes / Visual Styles) separated by a labeled divider. URL hash
// (#/palettes | #/styles) jumps the viewport to the matching section
// so anchor links from the header work as well as the tab UI used to.

const SECTION_PALETTES = 'palettes';
const SECTION_STYLES = 'styles';
const SECTIONS = [
  { key: SECTION_PALETTES, label: 'Color Palettes', subtitle: '配色方案', countKey: 'PALETTES', hint: '同一结构,仅替换色板 · 点击任一卡片查看详情' },
  { key: SECTION_STYLES,   label: 'Visual Styles',   subtitle: '风格方案', countKey: 'STYLES',   hint: '同一种产品,36 种完全不同的视觉语言 · 点击任一卡片查看整页沉浸' },
];

function HomeGrid() {
  const onPickPalette = (id) => window.LibRouter.navigate('/palette/' + id);
  const onPickStyle = (id) => window.LibRouter.navigate('/style/' + id);

  const palettes = window.PALETTES || [];
  const styles = window.STYLES || [];

  return (
    <div style={{
      minHeight: '100%', background: '#F5F1EA',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
    }}>
      <div style={{ padding: '48px 60px 0', maxWidth: 1400, margin: '0 auto' }}>
        <SectionHeader
          kicker="Index"
          title="配色 × 风格参考库"
          desc="同一个『Folio SaaS 产品』落地页,用 44 种配色 × 36 种风格演绎 — 向下滚动浏览,点击任意卡片进入完整详情页"
        />
        <SectionSummary palettes={palettes.length} styles={styles.length} />
      </div>

      <Section
        meta={SECTIONS[0]}
        palettes={palettes}
        styles={styles}
        onPickPalette={onPickPalette}
        onPickStyle={onPickStyle}
      />

      <SectionDivider />

      <Section
        meta={SECTIONS[1]}
        palettes={palettes}
        styles={styles}
        onPickPalette={onPickPalette}
        onPickStyle={onPickStyle}
      />

      <div style={{ height: 80 }} />
    </div>
  );
}

function SectionHeader({ kicker, title, desc }) {
  return (
    <div style={{ padding: '8px 0 24px', borderBottom: '1px solid #E8E2D6' }}>
      <div style={{ fontSize: 11, color: '#C96442', letterSpacing: 2, fontWeight: 700, textTransform: 'uppercase' }}>{kicker}</div>
      <h1 style={{ fontSize: 40, fontWeight: 800, color: '#1F1A14', margin: '8px 0 8px', letterSpacing: -1.2, lineHeight: 1.05 }}>{title}</h1>
      <p style={{ fontSize: 14, color: '#6B635A', margin: 0, maxWidth: 720, lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function SectionSummary({ palettes, styles }) {
  const total = palettes + styles;
  return (
    <div style={{ display: 'flex', gap: 32, padding: '20px 0 32px', alignItems: 'baseline' }}>
      <div>
        <div style={{ fontSize: 28, fontWeight: 800, color: '#1F1A14', fontVariantNumeric: 'tabular-nums', letterSpacing: -0.5 }}>{palettes}</div>
        <div style={{ fontSize: 11, color: '#6B635A', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginTop: 2 }}>Palettes</div>
      </div>
      <div style={{ fontSize: 24, color: '#C96442', fontWeight: 300 }}>×</div>
      <div>
        <div style={{ fontSize: 28, fontWeight: 800, color: '#1F1A14', fontVariantNumeric: 'tabular-nums', letterSpacing: -0.5 }}>{styles}</div>
        <div style={{ fontSize: 11, color: '#6B635A', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginTop: 2 }}>Styles</div>
      </div>
      <div style={{ fontSize: 24, color: '#C96442', fontWeight: 300 }}>=</div>
      <div>
        <div style={{ fontSize: 28, fontWeight: 800, color: '#C96442', fontVariantNumeric: 'tabular-nums', letterSpacing: -0.5 }}>{total}</div>
        <div style={{ fontSize: 11, color: '#6B635A', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, marginTop: 2 }}>Combinations</div>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '40px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ flex: 1, height: 1, background: '#E8E2D6' }} />
      <div style={{ fontSize: 11, color: '#C96442', letterSpacing: 3, fontWeight: 700, textTransform: 'uppercase' }}>·  ·  ·</div>
      <div style={{ flex: 1, height: 1, background: '#E8E2D6' }} />
    </div>
  );
}

function Section({ meta, palettes, styles, onPickPalette, onPickStyle }) {
  const isPalettes = meta.key === SECTION_PALETTES;
  return (
    <section id={'section-' + meta.key} style={{ padding: '8px 60px 0', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20, gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: '#1F1A14', margin: 0, letterSpacing: -0.6 }}>{meta.label}</h2>
            <span style={{ fontSize: 14, color: '#6B635A' }}>{meta.subtitle}</span>
            <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 10px', background: '#1F1A14', color: '#F5F1EA', borderRadius: 999, fontVariantNumeric: 'tabular-nums' }}>
              {isPalettes ? palettes.length : styles.length}
            </span>
          </div>
          <p style={{ fontSize: 12, color: '#6B635A', margin: '6px 0 0' }}>{meta.hint}</p>
        </div>
      </div>
      {isPalettes ? (
        <PanelGrid>
          {palettes.map((p) => (
            <PaletteCardFrame key={p.id} p={p} onClick={() => onPickPalette(p.id)} />
          ))}
        </PanelGrid>
      ) : (
        <PanelGrid>
          {styles.map((st) => (
            <StyleCardFrame key={st.id} st={st} onClick={() => onPickStyle(st.id)} />
          ))}
        </PanelGrid>
      )}
    </section>
  );
}

const panelGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: 24,
};

function PanelGrid({ children }) {
  return <div style={panelGridStyle}>{children}</div>;
}

function PaletteCardFrame({ p, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative', height: 380, borderRadius: 12, overflow: 'hidden',
        background: p.bg, border: '1px solid ' + p.border, cursor: 'pointer',
        boxShadow: '0 1px 3px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)',
        transition: 'transform .2s, box-shadow .2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)';
      }}
    >
      <div style={{ position: 'absolute', top: 10, left: 10, fontSize: 9, fontWeight: 700, letterSpacing: 1.5, padding: '2px 8px', background: 'rgba(255,255,255,0.85)', color: '#1F1A14', borderRadius: 4, backdropFilter: 'blur(6px)', zIndex: 5 }}>PALETTE</div>
      <div style={{ position: 'absolute', top: 6, right: 6, zIndex: 5 }}>
        <window.CopyButton kind="palette" item={p} size="sm" />
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <window.PaletteCard p={p} />
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))', color: '#fff' }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</div>
        <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>{p.desc}</div>
      </div>
    </div>
  );
}

function StyleCardFrame({ st, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative', height: 420, borderRadius: 12, overflow: 'hidden',
        background: '#F5F5F5', border: '1px solid #E8E2D6', cursor: 'pointer',
        boxShadow: '0 1px 3px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)',
        transition: 'transform .2s, box-shadow .2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)';
      }}
    >
      <div style={{ position: 'absolute', top: 10, left: 10, fontSize: 9, fontWeight: 700, letterSpacing: 1.5, padding: '2px 8px', background: 'rgba(0,0,0,0.7)', color: '#fff', borderRadius: 4, zIndex: 5 }}>STYLE</div>
      <div style={{ position: 'absolute', top: 6, right: 6, zIndex: 5 }}>
        <window.CopyButton kind="style" item={st} size="sm" />
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, gap: 12 }}>
        <st.Comp />
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{st.name}</div>
          {st.layout && st.layout !== 'flow' && (
            <span style={{ fontSize: 9, padding: '2px 6px', background: 'rgba(255,255,255,0.2)', borderRadius: 3, fontFamily: 'monospace', letterSpacing: 0.5 }}>{st.layout}</span>
          )}
        </div>
        <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>{st.desc}</div>
      </div>
    </div>
  );
}

window.HomeGrid = HomeGrid;
window.SCROLL_SECTION_PALETTES = SECTION_PALETTES;
window.SCROLL_SECTION_STYLES = SECTION_STYLES;