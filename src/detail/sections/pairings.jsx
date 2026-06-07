// src/detail/sections/pairings.jsx — the pairings section of a detail page.
// For a palette: shows 2-3 recommended styles. For a style: shows 2-3
// recommended palettes. Each card is clickable and navigates to that
// item's detail page via the hash router.

function DetailPairings({ item, kind, chrome }) {
  const list = (kind === 'palette'
    ? (window.PAIRINGS?.byPalette?.[item.id] || [])
    : (window.PAIRINGS?.byStyle?.[item.id] || [])
  ).slice(0, 6);
  const targetCollection = kind === 'palette' ? window.STYLES : window.PALETTES;
  const findById = (id) => targetCollection.find((x) => x.id === id);
  const go = (other) => {
    const route = kind === 'palette' ? 'style' : 'palette';
    window.LibRouter.navigate('/' + route + '/' + other.id);
  };
  if (list.length === 0) {
    return (
      <div style={{ padding: 24, background: chrome.surface, border: `1px solid ${chrome.border}`, borderRadius: 10, color: chrome.sub, fontSize: 13, textAlign: 'center' }}>
        暂无推荐搭配 — 试试看其它组合
      </div>
    );
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
      {list.map((p, i) => {
        const other = findById(kind === 'palette' ? p.styleId : p.paletteId);
        if (!other) return null;
        return (
          <button key={i} onClick={() => go(other)}
            style={{
              textAlign: 'left', background: chrome.surface,
              border: `1px solid ${chrome.border}`, borderRadius: 10,
              padding: 14, cursor: 'pointer',
              transition: 'transform .15s, box-shadow .15s',
              fontFamily: 'inherit', display: 'block',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              {kind === 'palette' ? (
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
                <div style={{ fontSize: 13, fontWeight: 600, color: chrome.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{other.name}</div>
                <div style={{ fontSize: 10, color: chrome.sub, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{other.desc}</div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: chrome.text, opacity: 0.75, lineHeight: 1.5 }}>{p.reason}</div>
            <div style={{ marginTop: 10, fontSize: 10, color: chrome.accent, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>View →</div>
          </button>
        );
      })}
    </div>
  );
}

window.DetailPairings = DetailPairings;
