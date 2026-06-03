// A single demo "music player" card. Takes a palette and renders consistent content.
// All variations show the SAME content so user can compare colors apples-to-apples.

function PaletteCard({ p }) {
  const s = {
    wrap: {
      width: 320,
      background: p.bg,
      borderRadius: 16,
      padding: 20,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: p.text,
      border: `1px solid ${p.border}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },
    name: { fontSize: 14, fontWeight: 600, letterSpacing: 0.2 },
    desc: { fontSize: 11, color: p.sub },
    card: {
      background: p.surface,
      borderRadius: 12,
      padding: 14,
      border: `1px solid ${p.border}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },
    cardTitle: { fontSize: 13, fontWeight: 600 },
    cardSub: { fontSize: 11, color: p.sub },
    progressTrack: {
      height: 4, background: p.border, borderRadius: 2, overflow: 'hidden',
    },
    progressFill: { width: '62%', height: '100%', background: p.primary },
    controls: { display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'space-between' },
    btn: {
      background: p.primary,
      color: p.bg,
      padding: '8px 14px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
    },
    ghost: {
      background: 'transparent',
      color: p.text,
      padding: '8px 12px',
      borderRadius: 999,
      fontSize: 12,
      border: `1px solid ${p.border}`,
      cursor: 'pointer',
    },
    swatches: { display: 'flex', gap: 6 },
    swatch: { width: 22, height: 22, borderRadius: 6, border: `1px solid ${p.border}` },
    chip: {
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: 999,
      fontSize: 10,
      fontWeight: 600,
      background: p.accent,
      color: p.bg,
    },
  };
  return (
    <div style={s.wrap}>
      <div style={s.header}>
        <div>
          <div style={s.name}>{p.name}</div>
          <div style={s.desc}>{p.desc}</div>
        </div>
        <span style={s.chip}>NEW</span>
      </div>

      <div style={s.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={s.cardTitle}>夜的钢琴曲</div>
            <div style={s.cardSub}>石进 · 深夜电台</div>
          </div>
          <div style={{ ...s.cardSub, fontVariantNumeric: 'tabular-nums' }}>2:14 / 3:42</div>
        </div>
        <div style={s.progressTrack}>
          <div style={s.progressFill} />
        </div>
      </div>

      <div style={s.controls}>
        <button style={s.ghost}>← 上一首</button>
        <button style={s.btn}>▶ 播放</button>
        <button style={s.ghost}>下一首 →</button>
      </div>

      <div style={s.swatches}>
        {p.swatches.map((c, i) => (
          <div key={i} style={{ ...s.swatch, background: c }} title={c} />
        ))}
      </div>
    </div>
  );
}

window.PaletteCard = PaletteCard;
