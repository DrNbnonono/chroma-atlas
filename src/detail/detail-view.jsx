// src/detail/detail-view.jsx — full-page detail view for a palette or
// style. Composes 5 sections (Hero / Page in Action / Tokens / Variants /
// Pairings) and dispatches to one of 8 layout modes based on the item'\''s
// `layout` property.
//
// For style items with a per-style Page in window.STYLE_PAGES[id], that
// Page takes over the whole view (its theme drives the chrome, its
// sections fully render in the style'\''s own visual language). Otherwise
// we fall back to the layout-mode dispatch, with the style'\''s own theme
// colouring the chrome.

const DETAIL_FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif';

function DetailView({ item, kind, onBack }) {
  // 1) Per-style immersive page (10 flagship styles each have their
  //    own .jsx under src/detail/styles/ that renders the WHOLE page in
  //    the style'\''s own visual language).
  if (kind === 'style' && window.STYLE_PAGES && window.STYLE_PAGES[item.id]) {
    const Page = window.STYLE_PAGES[item.id].Page;
    return <Page item={item} onBack={onBack} />;
  }

  // 2) Default flow with theme-aware chrome (covers palettes + the
  //    other 26 styles). For styles, we attach the per-style theme so
  //    the chrome at least uses the style'\''s colors.
  const chrome = kind === 'palette'
    ? window.LibChrome.chromeFromPalette(item)
    : window.LibChrome.chromeFromStyle(item);
  const LayoutComp = (window.DetailLayouts && window.DetailLayouts[item.layout || 'flow']) || window.DetailLayouts?.flow;

  const hero = <window.DetailHero item={item} kind={kind} chrome={chrome} />;
  const pageInAction = (
    <div>
      <window.SectionTitle index={2} title="Page in Action" chrome={chrome} />
      <window.DetailPageInAction item={item} kind={kind} chrome={chrome} />
    </div>
  );
  const tokens = (
    <div>
      <window.SectionTitle index={3} title="Tokens" chrome={chrome} />
      <window.DetailTokens item={item} kind={kind} chrome={chrome} />
    </div>
  );
  const variants = (
    <div>
      <window.SectionTitle index={4} title="Variants" chrome={chrome} />
      <window.DetailVariants item={item} kind={kind} chrome={chrome} />
    </div>
  );
  const pairings = (
    <div>
      <window.SectionTitle index={5} title="Pairings" chrome={chrome} />
      <window.DetailPairings item={item} kind={kind} chrome={chrome} />
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: chrome.bg, color: chrome.text, fontFamily: DETAIL_FONT }}>
      <BackBar onBack={onBack} item={item} kind={kind} chrome={chrome} />
      <div style={{ borderTop: `8px solid ${chrome.primary}` }} />
      <div style={{ padding: '40px 60px 80px', maxWidth: 1400, margin: '0 auto' }}>
        <LayoutComp
          hero={hero} pageInAction={pageInAction} tokens={tokens} variants={variants} pairings={pairings}
          meta={{ name: item.name, desc: item.desc, kind }} chrome={chrome}
        />
      </div>
    </div>
  );
}

function BackBar({ onBack, item, kind, chrome }) {
  return (
    <div style={{
      height: 64, padding: '0 60px', background: chrome.surface,
      borderBottom: `1px solid ${chrome.border}`,
      display: 'flex', alignItems: 'center', gap: 16,
    }}>
      <button onClick={onBack}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '6px 14px 6px 10px', background: 'transparent',
          border: `1px solid ${chrome.border}`, borderRadius: 999,
          color: chrome.text, fontSize: 13, fontWeight: 500, cursor: 'pointer',
          transition: 'background .12s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = chrome.bg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11L5 7l4-4" />
        </svg>
        返回
      </button>
      <div style={{ flex: 1, fontSize: 12, color: chrome.sub, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          fontSize: 10, padding: '2px 8px', background: chrome.accent,
          color: '#fff', borderRadius: 3, fontWeight: 700, letterSpacing: 0.5,
        }}>{kind === 'palette' ? 'PALETTE' : 'STYLE'}</span>
        <span style={{ color: chrome.text, fontWeight: 600 }}>{item.name}</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span style={{ opacity: 0.7, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>{item.desc}</span>
      </div>
      <window.CopyButton kind={kind} item={item} size="md" />
    </div>
  );
}

window.DetailView = DetailView;