// detail/layouts.jsx — 8 layout modes for the detail view body.
// Each layout is a function: Layout({ hero, pageInAction, tokens, variants, pairings, meta, chrome })
//   - hero:         pre-rendered React node (the big artboard)
//   - pageInAction: pre-rendered React node (full designer page in this style)
//   - tokens:       pre-rendered React node (includes its own SectionTitle)
//   - variants:     pre-rendered React node (includes its own SectionTitle)
//   - pairings:     pre-rendered React node (includes its own SectionTitle)
//   - meta:         { name, desc, kind: 'palette' | 'style' }
//   - chrome:       { bg, text, primary, accent, surface, border, sub, isDark }
// Note: pre-rendered sections already include their SectionTitle,
// so layouts just drop them in without re-adding titles.

// 1. flow — straightforward vertical stack
function FlowLayout({ hero, pageInAction, tokens, variants, pairings, meta, chrome }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: '0 32px 40px' }}>
      <section>{hero}</section>
      <section>{pageInAction}</section>
      <section>{tokens}</section>
      <section>{variants}</section>
      <section>{pairings}</section>
    </div>
  );
}

// 2. bento — asymmetric grid; tokens left, hero right, pageInAction full
//    width below, then variants and pairings stacked
function BentoLayout({ hero, pageInAction, tokens, variants, pairings, meta, chrome }) {
  return (
    <div style={{ padding: '0 32px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)', gap: 24, alignItems: 'start' }}>
        <section>{tokens}</section>
        <section>{hero}</section>
      </div>
      <section>{pageInAction}</section>
      <section>{variants}</section>
      <section>{pairings}</section>
    </div>
  );
}

// 3. split-hero — hero fills the top half, pageInAction under it,
//    the other three sections sit in a tight 3-col band below
function SplitHeroLayout({ hero, pageInAction, tokens, variants, pairings, meta, chrome }) {
  return (
    <div style={{ padding: '0 32px 40px', display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section style={{ minHeight: 360 }}>{hero}</section>
      <section>{pageInAction}</section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24 }}>
        <section>{tokens}</section>
        <section>{variants}</section>
        <section>{pairings}</section>
      </div>
    </div>
  );
}

// 4. mosaic — playful, irregular tile sizes (Memphis vibe):
//    pageInAction full width, then 3-col mosaic of the rest
function MosaicLayout({ hero, pageInAction, tokens, variants, pairings, meta, chrome }) {
  return (
    <div style={{ padding: '0 32px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
      {hero}
      <section>{pageInAction}</section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: 24 }}>
        <div style={{ gridColumn: 'span 3' }}>{tokens}</div>
        <div style={{ gridColumn: 'span 3' }}>{variants}</div>
        <div style={{ gridColumn: 'span 6' }}>{pairings}</div>
      </div>
    </div>
  );
}

// 5. columned — editorial 3-col layout
function ColumnedLayout({ hero, pageInAction, tokens, variants, pairings, meta, chrome }) {
  return (
    <div style={{ padding: '0 32px 40px', display: 'flex', flexDirection: 'column', gap: 32 }}>
      <section>{hero}</section>
      <section>{pageInAction}</section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 32, alignItems: 'start' }}>
        <section>{tokens}</section>
        <section>{variants}</section>
        <section>{pairings}</section>
      </div>
    </div>
  );
}

// 6. minimal-centered — lots of breathing room, narrow centered column
function MinimalCenteredLayout({ hero, pageInAction, tokens, variants, pairings, meta, chrome }) {
  return (
    <div style={{ padding: '0 32px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48 }}>
      <div style={{ width: '100%', maxWidth: 720 }}>{hero}</div>
      <div style={{ width: '100%', maxWidth: 720 }}>{pageInAction}</div>
      <div style={{ width: '100%', maxWidth: 720 }}>{tokens}</div>
      <div style={{ width: '100%', maxWidth: 720 }}>{variants}</div>
      <div style={{ width: '100%', maxWidth: 720 }}>{pairings}</div>
    </div>
  );
}

// 7. full-bleed — each section is a full-width band with dividers
function FullBleedLayout({ hero, pageInAction, tokens, variants, pairings, meta, chrome }) {
  return (
    <div style={{ padding: '0 0 40px', display: 'flex', flexDirection: 'column' }}>
      <section style={{ width: '100%' }}>{hero}</section>
      <div style={{ padding: '40px 32px 0', borderTop: `1px solid ${chrome.border}` }}>
        {pageInAction}
      </div>
      <div style={{ padding: '40px 32px 0', borderTop: `1px solid ${chrome.border}` }}>
        {tokens}
      </div>
      <div style={{ padding: '40px 32px 0', borderTop: `1px solid ${chrome.border}` }}>
        {variants}
      </div>
      <div style={{ padding: '40px 32px 0', borderTop: `1px solid ${chrome.border}` }}>
        {pairings}
      </div>
    </div>
  );
}

// 8. dashboard — pageInAction sits between tokens/variants and pairings
function DashboardLayout({ hero, pageInAction, tokens, variants, pairings, meta, chrome }) {
  return (
    <div style={{ padding: '0 32px 40px', display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 5fr)', gap: 24, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <section>{tokens}</section>
        <section>{pageInAction}</section>
        <section>{variants}</section>
        <section>{pairings}</section>
      </div>
      <div style={{ position: 'sticky', top: 24 }}>{hero}</div>
    </div>
  );
}

const LAYOUTS = {
  flow: FlowLayout,
  bento: BentoLayout,
  'split-hero': SplitHeroLayout,
  mosaic: MosaicLayout,
  columned: ColumnedLayout,
  'minimal-centered': MinimalCenteredLayout,
  'full-bleed': FullBleedLayout,
  dashboard: DashboardLayout,
};

window.DetailLayouts = LAYOUTS;
