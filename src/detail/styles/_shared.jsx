// src/detail/styles/_shared.jsx — chrome-agnostic helpers used by
// per-style page files. These are intentionally minimal: they provide
// structural scaffolding (back bar, section title, pairings list) so
// each style file can focus on its own visual treatment. Nothing here
// imposes colors, fonts, or decoration on the style — everything is
// driven by the style's own `theme` object.

function SharedBackBar({ onBack, item, kind, theme }) {
  return (
    <div style={{
      height: 64, padding: '0 60px', background: theme.surface,
      borderBottom: `1px solid ${theme.border}`,
      display: 'flex', alignItems: 'center', gap: 16,
      position: 'relative', zIndex: 5,
    }}>
      <button onClick={onBack}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '6px 14px 6px 10px', background: 'transparent',
          border: `1px solid ${theme.border}`, borderRadius: 999,
          color: theme.text, fontSize: 13, fontWeight: 500, cursor: 'pointer',
          transition: 'background .12s',
          fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = theme.bg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11L5 7l4-4" />
        </svg>
        返回
      </button>
      <div style={{ flex: 1, fontSize: 12, color: theme.sub, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          fontSize: 10, padding: '2px 8px', background: theme.accent,
          color: theme.isDark ? theme.bg : '#fff', borderRadius: 3, fontWeight: 700, letterSpacing: 0.5,
        }}>{kind === 'palette' ? 'PALETTE' : 'STYLE'}</span>
        <span style={{ color: theme.text, fontWeight: 600 }}>{item.name}</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span style={{ opacity: 0.7, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>{item.desc}</span>
      </div>
      <window.CopyButton kind={kind} item={item} size="md" />
    </div>
  );
}

function SharedSectionTitle({ index, title, theme }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <div style={{ width: 6, height: 6, borderRadius: 3, background: theme.accent }} />
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: theme.accent, textTransform: 'uppercase', fontVariantNumeric: 'tabular-nums' }}>
        {String(index).padStart(2, '0')}
      </div>
      <div style={{ fontSize: 22, fontWeight: 600, color: theme.text, letterSpacing: -0.3 }}>{title}</div>
      <div style={{ flex: 1, height: 1, background: theme.border, marginLeft: 8 }} />
    </div>
  );
}

function SharedPairings({ item, theme, currentKind, onNavigate }) {
  const list = (currentKind === 'palette'
    ? (window.PAIRINGS?.byPalette?.[item.id] || [])
    : (window.PAIRINGS?.byStyle?.[item.id] || [])
  ).slice(0, 6);
  const targetCollection = currentKind === 'palette' ? window.STYLES : window.PALETTES;
  const findById = (id) => targetCollection.find((x) => x.id === id);
  const go = (other) => {
    const route = currentKind === 'palette' ? 'style' : 'palette';
    window.LibRouter.navigate('/' + route + '/' + other.id);
  };
  if (list.length === 0) {
    return (
      <div style={{ padding: 24, background: theme.surface, border: '1px solid ' + theme.border, borderRadius: 10, color: theme.sub, fontSize: 13, textAlign: 'center' }}>
        暂无推荐搭配 — 看看其它组合
      </div>
    );
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
      {list.map((p, i) => {
        const other = findById(currentKind === 'palette' ? p.styleId : p.paletteId);
        if (!other) return null;
        return (
          <button key={i} onClick={() => go(other)}
            style={{
              textAlign: 'left', background: theme.surface,
              border: '1px solid ' + theme.border, borderRadius: 10,
              padding: 14, cursor: 'pointer',
              transition: 'transform .15s, box-shadow .15s',
              fontFamily: 'inherit', display: 'block', color: theme.text,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              {currentKind === 'palette' ? (
                <div style={{
                  width: 44, height: 44, borderRadius: 8, background: '#F5F5F5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                }}>
                  <div style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}>
                    <other.Comp />
                  </div>
                </div>
              ) : (
                <div style={{ width: 44, height: 44, borderRadius: 8, display: 'flex', overflow: 'hidden' }}>
                  {other.swatches?.slice(0, 3).map((c, j) => <div key={j} style={{ flex: 1, background: c }} />)}
                </div>
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: theme.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{other.name}</div>
                <div style={{ fontSize: 10, color: theme.sub, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{other.desc}</div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: theme.text, opacity: 0.75, lineHeight: 1.5 }}>{p.reason}</div>
            <div style={{ marginTop: 10, fontSize: 10, color: theme.accent, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>View →</div>
          </button>
        );
      })}
    </div>
  );
}

window.StyleShared = { SharedBackBar, SharedSectionTitle, SharedPairings };