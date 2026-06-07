// Style variations — each one is a fully custom-rendered demo card showcasing a visual treatment.
// Same content, very different visual languages.

// Shared content for all style demos
const CONTENT = {
  title: '夜的钢琴曲',
  artist: '石进 · 深夜电台',
  time: '2:14 / 3:42',
};

/* ============== 1. Cyberpunk 赛博朋克 ============== */
function StyleCyber() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 4,
      background: 'linear-gradient(135deg, #0A0118 0%, #1A0A2E 100%)',
      fontFamily: '"Courier New", monospace', color: '#00F0FF',
      border: '1px solid #FF2E97',
      boxShadow: '0 0 24px rgba(255,46,151,0.4), inset 0 0 24px rgba(0,240,255,0.1)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(0,240,255,0.04) 3px, rgba(0,240,255,0.04) 4px)',
      }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: 2 }}>
          <span style={{ color: '#FF2E97' }}>// CYBER.SYS</span>
          <span style={{ color: '#FFD600' }}>● REC</span>
        </div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#FF2E97', textShadow: '0 0 8px #FF2E97', letterSpacing: 1 }}>{CONTENT.title}</div>
          <div style={{ fontSize: 11, color: '#8E7AB5', marginTop: 4 }}>&gt; {CONTENT.artist}</div>
        </div>
        <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 36 }}>
          {[40, 70, 30, 90, 55, 80, 25, 60, 95, 45, 70, 35, 80, 50, 65, 30, 85, 40].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i < 11 ? '#FF2E97' : '#3A1F5C', boxShadow: i < 11 ? '0 0 4px #FF2E97' : 'none' }} />
          ))}
        </div>
        <div style={{ fontSize: 10, color: '#00F0FF', letterSpacing: 1, fontVariantNumeric: 'tabular-nums' }}>[{CONTENT.time}]</div>
        <button style={{
          background: 'transparent', color: '#00F0FF',
          border: '1px solid #00F0FF', padding: '10px',
          fontFamily: 'inherit', fontSize: 12, letterSpacing: 3, fontWeight: 700,
          cursor: 'pointer', textShadow: '0 0 8px #00F0FF',
        }}>▶ EXECUTE</button>
      </div>
    </div>
  );
}

/* ============== 2. Glassmorphism 琉璃毛玻璃 ============== */
function StyleGlass() {
  return (
    <div style={{
      width: 320, padding: 4, borderRadius: 24,
      background: 'linear-gradient(135deg, #FF6B9D 0%, #C66FBC 35%, #6B8DE3 100%)',
      fontFamily: '-apple-system, sans-serif',
    }}>
      <div style={{
        padding: 20, borderRadius: 22,
        background: 'rgba(255,255,255,0.18)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.4)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 24px rgba(0,0,0,0.15)',
        color: '#fff',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 11, opacity: 0.85, letterSpacing: 1 }}>NOW PLAYING</div>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>♥</div>
        </div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.3 }}>{CONTENT.title}</div>
          <div style={{ fontSize: 13, opacity: 0.8, marginTop: 4 }}>{CONTENT.artist}</div>
        </div>
        <div style={{ height: 4, background: 'rgba(255,255,255,0.25)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', background: 'rgba(255,255,255,0.95)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, opacity: 0.85, fontVariantNumeric: 'tabular-nums' }}>
          <span>2:14</span><span>3:42</span>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center', marginTop: 4 }}>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 14, cursor: 'pointer' }}>⏮</button>
          <button style={{ width: 56, height: 56, borderRadius: 999, background: 'rgba(255,255,255,0.95)', border: 'none', color: '#C66FBC', fontSize: 20, cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>▶</button>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 14, cursor: 'pointer' }}>⏭</button>
        </div>
      </div>
    </div>
  );
}

/* ============== 3. Neumorphism 新拟态 ============== */
function StyleNeumorph() {
  const bg = '#E0E5EC';
  return (
    <div style={{
      width: 320, padding: 24, borderRadius: 24,
      background: bg, fontFamily: '-apple-system, sans-serif', color: '#3D4654',
      boxShadow: '12px 12px 24px #B8BEC7, -12px -12px 24px #FFFFFF',
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      <div style={{
        padding: 16, borderRadius: 16, background: bg,
        boxShadow: 'inset 4px 4px 8px #B8BEC7, inset -4px -4px 8px #FFFFFF',
      }}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>{CONTENT.title}</div>
        <div style={{ fontSize: 11, color: '#7A8499', marginTop: 4 }}>{CONTENT.artist}</div>
      </div>
      <div style={{
        height: 8, borderRadius: 999, background: bg,
        boxShadow: 'inset 2px 2px 4px #B8BEC7, inset -2px -2px 4px #FFFFFF',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '62%', height: '100%', borderRadius: 999, background: 'linear-gradient(90deg, #6B8DE3, #9BB0F0)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {['⏮', '▶', '⏭'].map((c, i) => (
          <button key={i} style={{
            width: i === 1 ? 56 : 44, height: i === 1 ? 56 : 44, borderRadius: 999,
            background: bg, border: 'none', color: i === 1 ? '#6B8DE3' : '#7A8499',
            fontSize: i === 1 ? 18 : 14, cursor: 'pointer',
            boxShadow: '4px 4px 8px #B8BEC7, -4px -4px 8px #FFFFFF',
          }}>{c}</button>
        ))}
        <div style={{ fontSize: 11, color: '#7A8499', fontVariantNumeric: 'tabular-nums' }}>{CONTENT.time}</div>
      </div>
    </div>
  );
}

/* ============== 4. Cartoon 卡通 ============== */
function StyleCartoon() {
  return (
    <div style={{
      width: 320, padding: 20, borderRadius: 24,
      background: '#FFE066', border: '3px solid #1A1A1A',
      fontFamily: '"Comic Sans MS", "Marker Felt", system-ui, sans-serif',
      color: '#1A1A1A',
      boxShadow: '6px 6px 0 #1A1A1A',
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ background: '#FF6B6B', color: '#fff', padding: '4px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700, border: '2px solid #1A1A1A' }}>♪ MUSIC</span>
        <span style={{ fontSize: 22 }}>★</span>
      </div>
      <div style={{
        background: '#fff', border: '3px solid #1A1A1A', borderRadius: 16,
        padding: 14, boxShadow: '3px 3px 0 #1A1A1A',
      }}>
        <div style={{ fontSize: 18, fontWeight: 800 }}>{CONTENT.title}</div>
        <div style={{ fontSize: 12, marginTop: 4 }}>{CONTENT.artist}</div>
        <div style={{ marginTop: 10, height: 10, background: '#fff', border: '2px solid #1A1A1A', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', background: '#FF6B6B' }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button style={{ background: '#4ECDC4', border: '3px solid #1A1A1A', borderRadius: 999, padding: '8px 14px', fontSize: 14, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer', boxShadow: '3px 3px 0 #1A1A1A' }}>⏮</button>
        <button style={{ background: '#FF6B6B', color: '#fff', border: '3px solid #1A1A1A', borderRadius: 999, padding: '8px 24px', fontSize: 16, fontWeight: 800, fontFamily: 'inherit', cursor: 'pointer', boxShadow: '3px 3px 0 #1A1A1A' }}>▶ PLAY!</button>
        <button style={{ background: '#4ECDC4', border: '3px solid #1A1A1A', borderRadius: 999, padding: '8px 14px', fontSize: 14, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer', boxShadow: '3px 3px 0 #1A1A1A' }}>⏭</button>
      </div>
    </div>
  );
}

/* ============== 5. Brutalism 粗野风 ============== */
function StyleBrutal() {
  return (
    <div style={{
      width: 320, padding: 0, background: '#F5F5F0',
      border: '3px solid #000', fontFamily: '"Helvetica Neue", Arial, sans-serif',
      color: '#000',
    }}>
      <div style={{ background: '#000', color: '#FFFF00', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 900, letterSpacing: 2 }}>
        <span>NOW.PLAYING</span><span>2026/04/30</span>
      </div>
      <div style={{ padding: 18, borderBottom: '3px solid #000' }}>
        <div style={{ fontSize: 32, fontWeight: 900, lineHeight: 1, letterSpacing: -1 }}>{CONTENT.title}</div>
        <div style={{ fontSize: 12, marginTop: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{CONTENT.artist}</div>
      </div>
      <div style={{ padding: '12px 18px', borderBottom: '3px solid #000', display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
        <span>{CONTENT.time}</span>
        <span>—————————————→</span>
      </div>
      <div style={{ display: 'flex', borderBottom: '3px solid #000' }}>
        <button style={{ flex: 1, background: '#F5F5F0', border: 'none', borderRight: '3px solid #000', padding: '14px 0', fontSize: 14, fontWeight: 900, cursor: 'pointer' }}>PREV</button>
        <button style={{ flex: 2, background: '#FF3D00', color: '#fff', border: 'none', borderRight: '3px solid #000', padding: '14px 0', fontSize: 16, fontWeight: 900, cursor: 'pointer' }}>▶ PLAY</button>
        <button style={{ flex: 1, background: '#F5F5F0', border: 'none', padding: '14px 0', fontSize: 14, fontWeight: 900, cursor: 'pointer' }}>NEXT</button>
      </div>
      <div style={{ padding: '8px 16px', fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>
        ※ NO COMPROMISE / RAW UI / EST.2026
      </div>
    </div>
  );
}

/* ============== 6. Skeuomorphism 拟物 ============== */
function StyleSkeuo() {
  return (
    <div style={{
      width: 320, padding: 16, borderRadius: 18,
      background: 'linear-gradient(180deg, #6B6B70 0%, #2A2A2D 100%)',
      fontFamily: '-apple-system, sans-serif', color: '#fff',
      boxShadow: '0 8px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)',
      border: '1px solid #1A1A1D',
    }}>
      <div style={{
        background: 'linear-gradient(180deg, #C5E5A8 0%, #95C575 100%)',
        borderRadius: 8, padding: 14, marginBottom: 14,
        border: '1px solid #1A1A1D',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.15)',
        color: '#1A2A0F', fontFamily: '"Courier New", monospace',
      }}>
        <div style={{ fontSize: 10, opacity: 0.7 }}>♪ NOW PLAYING</div>
        <div style={{ fontSize: 16, fontWeight: 700, marginTop: 2 }}>{CONTENT.title}</div>
        <div style={{ fontSize: 11, marginTop: 4 }}>{CONTENT.artist}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, fontVariantNumeric: 'tabular-nums' }}>
          <span>{CONTENT.time}</span>
          <span>♫♫♫</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {['⏮', '▶', '⏭'].map((c, i) => (
          <button key={i} style={{
            width: i === 1 ? 64 : 48, height: i === 1 ? 64 : 48, borderRadius: 999,
            background: 'radial-gradient(circle at 30% 30%, #909095 0%, #4A4A4D 70%, #2A2A2D 100%)',
            border: '1px solid #1A1A1D', color: '#fff', fontSize: i === 1 ? 22 : 16,
            cursor: 'pointer',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.5)',
          }}>{c}</button>
        ))}
      </div>
    </div>
  );
}

/* ============== 7. Memphis 孟菲斯几何 ============== */
function StyleMemphis() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 8,
      background: '#F5F0E8', position: 'relative', overflow: 'hidden',
      border: '2px solid #1A1A1A',
      fontFamily: '"Helvetica Neue", sans-serif', color: '#1A1A1A',
    }}>
      {/* decorative shapes */}
      <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: 999, background: '#FFB84D' }} />
      <div style={{ position: 'absolute', top: 30, right: 20, width: 30, height: 30, background: '#FF4D6D', transform: 'rotate(45deg)' }} />
      <div style={{ position: 'absolute', bottom: 40, left: -10, width: 60, height: 8, background: '#3DB5E0' }} />
      <div style={{ position: 'absolute', bottom: 70, left: 20, width: 40, height: 40, border: '3px solid #1A1A1A', borderRadius: 999, background: 'transparent' }} />
      <div style={{
        position: 'absolute', bottom: 0, right: 0, width: 60, height: 60,
        backgroundImage: 'radial-gradient(circle, #1A1A1A 1.5px, transparent 1.5px)',
        backgroundSize: '8px 8px',
      }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'inline-block', width: 'fit-content', background: '#1A1A1A', color: '#FFB84D', padding: '4px 10px', fontSize: 10, fontWeight: 800, letterSpacing: 2 }}>VIBES.FM</div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>{CONTENT.title}</div>
          <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>{CONTENT.artist}</div>
        </div>
        <div style={{ height: 6, background: '#fff', border: '2px solid #1A1A1A', position: 'relative' }}>
          <div style={{ width: '62%', height: '100%', background: '#FF4D6D' }} />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ flex: 1, background: '#3DB5E0', color: '#1A1A1A', border: '2px solid #1A1A1A', padding: '10px', fontSize: 13, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit' }}>▶ PLAY</button>
          <button style={{ width: 44, background: '#FFB84D', border: '2px solid #1A1A1A', cursor: 'pointer', fontSize: 14 }}>♥</button>
        </div>
      </div>
    </div>
  );
}

/* ============== 8. Liquid Glass 流体光感 ============== */
function StyleLiquid() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 28,
      background: 'radial-gradient(ellipse at top left, #FFE5F0 0%, #E5F0FF 40%, #F0E5FF 100%)',
      fontFamily: '-apple-system, "SF Pro Display", sans-serif',
      color: '#2A1F3A', position: 'relative', overflow: 'hidden',
      boxShadow: '0 12px 32px rgba(180,160,220,0.25), inset 0 1px 1px rgba(255,255,255,0.8)',
      border: '1px solid rgba(255,255,255,0.6)',
    }}>
      {/* glossy highlights */}
      <div style={{ position: 'absolute', top: -40, left: -20, width: 200, height: 100, background: 'radial-gradient(ellipse, rgba(255,255,255,0.7), transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, right: -40, width: 200, height: 200, borderRadius: 999, background: 'radial-gradient(circle, rgba(255,180,220,0.4), transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{
          display: 'inline-block', width: 'fit-content',
          background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)',
          padding: '4px 12px', borderRadius: 999, fontSize: 10, fontWeight: 600,
          color: '#7A5BA8', letterSpacing: 1,
          border: '1px solid rgba(255,255,255,0.7)',
        }}>♪ AMBIENT</div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: -0.5,
            background: 'linear-gradient(135deg, #7A5BA8 0%, #E08AC4 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>{CONTENT.title}</div>
          <div style={{ fontSize: 12, marginTop: 4, color: '#7A6890' }}>{CONTENT.artist}</div>
        </div>
        <div style={{
          height: 6, borderRadius: 999,
          background: 'rgba(255,255,255,0.5)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.6)', overflow: 'hidden',
        }}>
          <div style={{ width: '62%', height: '100%', background: 'linear-gradient(90deg, #B084E8, #E8A4D4)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#7A6890', fontVariantNumeric: 'tabular-nums' }}>
          <span>2:14</span><span>3:42</span>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
          {['⏮', '▶', '⏭'].map((c, i) => (
            <button key={i} style={{
              width: i === 1 ? 56 : 44, height: i === 1 ? 56 : 44, borderRadius: 999,
              background: i === 1 ? 'linear-gradient(135deg, #B084E8, #E8A4D4)' : 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.7)',
              color: i === 1 ? '#fff' : '#7A5BA8', fontSize: i === 1 ? 18 : 14,
              cursor: 'pointer',
              boxShadow: i === 1 ? '0 4px 12px rgba(176,132,232,0.4), inset 0 1px 0 rgba(255,255,255,0.6)' : 'inset 0 1px 0 rgba(255,255,255,0.8)',
            }}>{c}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== 9. Pixel / Retro 像素复古 ============== */
function StylePixel() {
  return (
    <div style={{
      width: 320, padding: 16, borderRadius: 0,
      background: '#1B2D3A',
      border: '4px solid #6BC4E8',
      boxShadow: '0 0 0 4px #1B2D3A, 0 0 0 8px #6BC4E8',
      fontFamily: '"Courier New", "Press Start 2P", monospace',
      color: '#A8E0FF', imageRendering: 'pixelated',
    }}>
      <div style={{ borderBottom: '2px dashed #6BC4E8', paddingBottom: 8, marginBottom: 12, display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: 1 }}>
        <span>★ PLAYER v1.0</span>
        <span>♥♥♥</span>
      </div>
      <div style={{ background: '#0F1F2A', padding: 12, marginBottom: 12, border: '2px solid #2A4A5C' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#FFEC5C', textTransform: 'uppercase', letterSpacing: 1 }}>{CONTENT.title}</div>
        <div style={{ fontSize: 10, color: '#6BC4E8', marginTop: 4 }}>{CONTENT.artist}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, marginBottom: 12, fontVariantNumeric: 'tabular-nums' }}>
        <span>2:14</span>
        <span style={{ flex: 1, color: '#FFEC5C', overflow: 'hidden', whiteSpace: 'nowrap', letterSpacing: -1 }}>
          ████████████░░░░░░░
        </span>
        <span>3:42</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ flex: 1, background: '#2A4A5C', color: '#A8E0FF', border: '2px solid #6BC4E8', padding: '8px', fontFamily: 'inherit', fontSize: 11, fontWeight: 700, cursor: 'pointer', letterSpacing: 1 }}>◀ PREV</button>
        <button style={{ flex: 1.5, background: '#FFEC5C', color: '#1B2D3A', border: '2px solid #1B2D3A', padding: '8px', fontFamily: 'inherit', fontSize: 12, fontWeight: 700, cursor: 'pointer', letterSpacing: 1 }}>▶ START</button>
        <button style={{ flex: 1, background: '#2A4A5C', color: '#A8E0FF', border: '2px solid #6BC4E8', padding: '8px', fontFamily: 'inherit', fontSize: 11, fontWeight: 700, cursor: 'pointer', letterSpacing: 1 }}>NEXT ▶</button>
      </div>
    </div>
  );
}

/* ============== 10. Minimal 极简 ============== */
function StyleMinimal() {
  return (
    <div style={{
      width: 320, padding: 28, background: '#fff', border: '1px solid #EAEAEA',
      fontFamily: '-apple-system, "Helvetica Neue", sans-serif', color: '#0A0A0A',
      display: 'flex', flexDirection: 'column', gap: 20,
    }}>
      <div style={{ fontSize: 10, letterSpacing: 3, color: '#999' }}>NOW PLAYING</div>
      <div>
        <div style={{ fontSize: 26, fontWeight: 300, letterSpacing: -0.8 }}>{CONTENT.title}</div>
        <div style={{ fontSize: 12, color: '#666', marginTop: 8, letterSpacing: 0.5 }}>{CONTENT.artist}</div>
      </div>
      <div style={{ height: 1, background: '#0A0A0A', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '62%', top: -3, width: 7, height: 7, borderRadius: 999, background: '#0A0A0A' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#999', fontVariantNumeric: 'tabular-nums' }}>
        <span>2:14</span><span>3:42</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 4 }}>
        <button style={{ background: 'none', border: 'none', fontSize: 14, color: '#999', cursor: 'pointer', padding: 0 }}>← prev</button>
        <button style={{ background: 'none', border: 'none', fontSize: 18, color: '#0A0A0A', cursor: 'pointer', padding: 0, fontWeight: 300 }}>▶  Play</button>
        <button style={{ background: 'none', border: 'none', fontSize: 14, color: '#999', cursor: 'pointer', padding: 0 }}>next →</button>
      </div>
    </div>
  );
}

/* ============== 11. Clay 3D 黏土 ============== */
function StyleClay() {
  return (
    <div style={{
      width: 320, padding: 24, borderRadius: 28,
      background: 'linear-gradient(135deg, #FFE4D6 0%, #FFD4C2 100%)',
      fontFamily: '"Nunito", "Quicksand", -apple-system, sans-serif',
      color: '#5C3A28',
      boxShadow: '0 14px 30px rgba(220,140,100,0.25), inset 0 -6px 0 rgba(220,140,100,0.15), inset 0 6px 0 rgba(255,255,255,0.5)',
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{
          width: 56, height: 56, borderRadius: 18,
          background: 'linear-gradient(135deg, #FFA985, #FF7A50)',
          boxShadow: '0 6px 12px rgba(255,122,80,0.4), inset 0 -3px 0 rgba(180,80,40,0.3), inset 0 3px 0 rgba(255,255,255,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26, color: '#fff',
        }}>♪</div>
        <div style={{
          padding: '6px 14px', borderRadius: 999,
          background: '#fff', fontSize: 11, fontWeight: 700, color: '#FF7A50',
          boxShadow: '0 4px 8px rgba(220,140,100,0.2), inset 0 -2px 0 rgba(220,140,100,0.1)',
        }}>♥ Liked</div>
      </div>
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.3 }}>{CONTENT.title}</div>
        <div style={{ fontSize: 13, marginTop: 4, color: '#A57555', fontWeight: 600 }}>{CONTENT.artist}</div>
      </div>
      <div style={{
        height: 12, borderRadius: 999, background: '#fff',
        boxShadow: 'inset 0 3px 6px rgba(220,140,100,0.3)',
        overflow: 'hidden',
      }}>
        <div style={{ width: '62%', height: '100%', borderRadius: 999, background: 'linear-gradient(90deg, #FFA985, #FF7A50)', boxShadow: 'inset 0 -2px 0 rgba(180,80,40,0.3), inset 0 2px 0 rgba(255,255,255,0.4)' }} />
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        {['⏮', '▶', '⏭'].map((c, i) => (
          <button key={i} style={{
            width: i === 1 ? 64 : 50, height: i === 1 ? 64 : 50, borderRadius: i === 1 ? 22 : 18,
            background: i === 1 ? 'linear-gradient(135deg, #FFA985, #FF7A50)' : '#fff',
            color: i === 1 ? '#fff' : '#FF7A50',
            border: 'none', fontSize: i === 1 ? 22 : 16, fontWeight: 800, cursor: 'pointer',
            boxShadow: i === 1
              ? '0 6px 14px rgba(255,122,80,0.4), inset 0 -3px 0 rgba(180,80,40,0.3), inset 0 3px 0 rgba(255,255,255,0.4)'
              : '0 6px 12px rgba(220,140,100,0.25), inset 0 -3px 0 rgba(220,140,100,0.15)',
          }}>{c}</button>
        ))}
      </div>
    </div>
  );
}

/* ============== 12. Editorial 杂志风 ============== */
function StyleEditorial() {
  return (
    <div style={{
      width: 320, padding: 0, background: '#FAF7F2',
      fontFamily: 'Georgia, "Playfair Display", serif',
      color: '#1A1A1A', border: '1px solid #1A1A1A',
    }}>
      <div style={{ padding: '14px 20px', borderBottom: '1px solid #1A1A1A', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 9, letterSpacing: 4, fontFamily: 'sans-serif', fontWeight: 700 }}>VOL.III · ISSUE 04</span>
        <span style={{ fontSize: 9, letterSpacing: 2, fontFamily: 'sans-serif' }}>APR 2026</span>
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ fontSize: 10, letterSpacing: 3, fontFamily: 'sans-serif', fontWeight: 700, color: '#8B0000', marginBottom: 12 }}>♪ FEATURED PIECE</div>
        <div style={{ fontSize: 30, fontStyle: 'italic', lineHeight: 1.05, letterSpacing: -0.5 }}>{CONTENT.title}</div>
        <div style={{ width: 40, height: 1, background: '#1A1A1A', margin: '14px 0' }} />
        <div style={{ fontSize: 12, lineHeight: 1.6, color: '#3A3A3A' }}>
          A nocturne by <em>{CONTENT.artist.split('·')[0].trim()}</em>, broadcast on the late-night airwaves —
          a meditation in three minutes, forty-two seconds.
        </div>
      </div>
      <div style={{ padding: '14px 20px', borderTop: '1px solid #1A1A1A', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, fontFamily: 'sans-serif', fontVariantNumeric: 'tabular-nums' }}>{CONTENT.time}</span>
        <button style={{ background: '#1A1A1A', color: '#FAF7F2', border: 'none', padding: '8px 16px', fontSize: 10, letterSpacing: 3, fontFamily: 'sans-serif', fontWeight: 700, cursor: 'pointer' }}>▶ LISTEN</button>
      </div>
    </div>
  );
}

window.STYLES = [
  { id: 'cyber', name: 'Cyberpunk 赛博朋克', desc: '霓虹紫粉青、扫描线、未来感', Comp: StyleCyber, layout: 'flow', theme: { bg: '#0A0118', surface: '#1A0A2E', text: '#00F0FF', sub: 'rgba(0,240,255,0.65)', primary: '#FF2E97', accent: '#FFD600', border: '#FF2E97', isDark: true, fontFamily: '"Courier New", monospace' } },
  { id: 'glass', name: 'Glassmorphism 毛玻璃', desc: '半透明模糊 + 渐变背景', Comp: StyleGlass, layout: 'flow', theme: { bg: 'linear-gradient(135deg, #FFB6D9 0%, #B6E1FF 100%)', surface: 'rgba(255,255,255,0.25)', text: '#1F1A38', sub: '#5A4A78', primary: '#FF4FA8', accent: '#5BC8FF', border: 'rgba(255,255,255,0.4)', isDark: false, fontFamily: '-apple-system, sans-serif' } },
  { id: 'liquid', name: 'Liquid Glass 流体光感', desc: '苹果新拟物、柔光高光', Comp: StyleLiquid, layout: 'flow', theme: { bg: 'linear-gradient(135deg, #FFD1E8 0%, #C5E1FF 50%, #D1C5FF 100%)', surface: 'rgba(255,255,255,0.35)', text: '#1A1438', sub: '#5A4A78', primary: '#5C3D99', accent: '#FF6B9D', border: 'rgba(255,255,255,0.5)', isDark: false, fontFamily: '-apple-system, sans-serif' } },
  { id: 'neumorph', name: 'Neumorphism 新拟态', desc: '柔和凹凸阴影、单色', Comp: StyleNeumorph, layout: 'flow', theme: { bg: '#E0E5EC', surface: '#E0E5EC', text: '#2C3E50', sub: '#6B7A8F', primary: '#5A6A85', accent: '#7A8AB5', border: '#FFFFFF', isDark: false, fontFamily: '-apple-system, sans-serif' } },
  { id: 'cartoon', name: 'Cartoon 卡通', desc: '粗黑边、硬阴影、明亮色块', Comp: StyleCartoon, layout: 'flow', theme: { bg: '#FFE066', surface: '#FFFFFF', text: '#0F0F0F', sub: '#3A3A3A', primary: '#FF4FA8', accent: '#5BC8FF', border: '#0F0F0F', isDark: false, fontFamily: '"Comic Sans MS", system-ui, sans-serif' } },
  { id: 'brutal', name: 'Brutalism 粗野', desc: '原始、粗体、高对比、分块', Comp: StyleBrutal, layout: 'flow', theme: { bg: '#FFE066', surface: '#FF4FA8', text: '#0F0F0F', sub: '#1A1A1A', primary: '#0F0F0F', accent: '#5BC8FF', border: '#0F0F0F', isDark: false, fontFamily: '"Helvetica Neue", "Arial Black", sans-serif' } },
  { id: 'skeuo', name: 'Skeuomorphism 拟物', desc: '金属质感、LCD 屏幕', Comp: StyleSkeuo, layout: 'flow', theme: { bg: '#2A2A2A', surface: '#3A3A3A', text: '#F5E6B8', sub: '#C9B57A', primary: '#D4B25F', accent: '#F5B83A', border: '#1A1A1A', isDark: true, fontFamily: '"Lucida Grande", "Helvetica Neue", sans-serif' } },
  { id: 'memphis', name: 'Memphis 孟菲斯', desc: '80s 几何形状、大胆色块', Comp: StyleMemphis, layout: 'flow', theme: { bg: '#FFE0F0', surface: '#FFFFFF', text: '#1A1438', sub: '#5A4A78', primary: '#FF4FA8', accent: '#FFD600', border: '#1A1438', isDark: false, fontFamily: '"Comic Sans MS", "Trebuchet MS", sans-serif' } },
  { id: 'pixel', name: 'Pixel 像素复古', desc: '8-bit、单色屏、游戏机', Comp: StylePixel, layout: 'flow', theme: { bg: '#0F0F1A', surface: '#1A1A2E', text: '#9BFF4F', sub: '#7ACC3A', primary: '#9BFF4F', accent: '#FF6B9D', border: '#9BFF4F', isDark: true, fontFamily: '"Courier New", monospace' } },
  { id: 'minimal', name: 'Minimal 极简', desc: '黑白、细线、留白、衬线', Comp: StyleMinimal, layout: 'flow', theme: { bg: '#FFFFFF', surface: '#FAFAFA', text: '#0F0F0F', sub: '#7A7A7A', primary: '#0F0F0F', accent: '#C96442', border: '#E5E5E5', isDark: false, fontFamily: 'Georgia, "Times New Roman", serif' } },
  { id: 'clay', name: 'Clay 黏土 3D', desc: '柔和体积感、内外阴影', Comp: StyleClay, layout: 'flow', theme: { bg: '#F8D5E0', surface: '#FFE5EE', text: '#5A2A4A', sub: '#8A5A78', primary: '#E88AA8', accent: '#A878D8', border: 'rgba(232,138,168,0.4)', isDark: false, fontFamily: '-apple-system, sans-serif' } },
  { id: 'editorial', name: 'Editorial 杂志', desc: '衬线、栏线、印刷气质', Comp: StyleEditorial, layout: 'flow', theme: { bg: '#F5F1EA', surface: '#FFFFFF', text: '#0F0F0F', sub: '#5A5A5A', primary: '#0F0F0F', accent: '#C84838', border: '#E8E2D6', isDark: false, fontFamily: 'Georgia, "Times New Roman", serif' } },
];
