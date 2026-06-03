// Third batch of styles — appended to window.STYLES

const C3 = { title: '夜的钢琴曲', artist: '石进 · 深夜电台', time: '2:14 / 3:42' };

/* ============== 25. Sticker 贴纸拼贴 ============== */
function StyleSticker() {
  return (
    <div style={{
      width: 320, padding: 24,
      background: '#FFF8E0',
      fontFamily: '"Comic Sans MS", "Marker Felt", sans-serif',
      color: '#1A1A1A', position: 'relative',
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
      backgroundSize: '12px 12px',
      border: '2px dashed #1A1A1A',
    }}>
      <div style={{ position: 'absolute', top: 8, right: 14, transform: 'rotate(12deg)', background: '#FF5C8A', color: '#fff', padding: '4px 10px', borderRadius: 4, fontSize: 11, fontWeight: 700, border: '2px solid #1A1A1A', boxShadow: '2px 2px 0 #1A1A1A' }}>HOT! 🔥</div>
      <div style={{ position: 'absolute', top: 50, left: -8, transform: 'rotate(-10deg)', background: '#5BC8FF', padding: '3px 9px', borderRadius: 4, fontSize: 10, fontWeight: 700, border: '2px solid #1A1A1A', boxShadow: '2px 2px 0 #1A1A1A' }}>NEW</div>

      <div style={{ marginTop: 18, transform: 'rotate(-2deg)', background: '#fff', padding: 14, border: '2px solid #1A1A1A', boxShadow: '4px 4px 0 #1A1A1A' }}>
        <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.1 }}>{C3.title}</div>
        <div style={{ fontSize: 12, marginTop: 4 }}>♬ {C3.artist}</div>
      </div>
      <div style={{ marginTop: 16, transform: 'rotate(1deg)', background: '#FFE066', padding: '8px 12px', border: '2px solid #1A1A1A', boxShadow: '3px 3px 0 #1A1A1A', fontSize: 12, fontWeight: 700 }}>
        ▶ {C3.time} ▮▮▮▮▮▮▮▮▯▯▯▯▯
      </div>
      <div style={{ marginTop: 14, display: 'flex', gap: 10, justifyContent: 'center' }}>
        <button style={{ background: '#7AE8B5', border: '2px solid #1A1A1A', borderRadius: 999, padding: '8px 14px', fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer', boxShadow: '3px 3px 0 #1A1A1A', transform: 'rotate(-3deg)' }}>⏮ prev</button>
        <button style={{ background: '#FF5C8A', color: '#fff', border: '2px solid #1A1A1A', borderRadius: 999, padding: '8px 22px', fontFamily: 'inherit', fontWeight: 800, cursor: 'pointer', boxShadow: '3px 3px 0 #1A1A1A', fontSize: 14 }}>▶ play!</button>
        <button style={{ background: '#7AE8B5', border: '2px solid #1A1A1A', borderRadius: 999, padding: '8px 14px', fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer', boxShadow: '3px 3px 0 #1A1A1A', transform: 'rotate(3deg)' }}>next ⏭</button>
      </div>
    </div>
  );
}

/* ============== 26. Bauhaus 包豪斯 ============== */
function StyleBauhaus() {
  return (
    <div style={{
      width: 320, padding: 0, background: '#F2EBD5',
      fontFamily: '"Futura", "Helvetica Neue", sans-serif',
      color: '#1A1A1A', border: '4px solid #1A1A1A',
    }}>
      <div style={{ display: 'flex', borderBottom: '4px solid #1A1A1A' }}>
        <div style={{ flex: 1, height: 80, background: '#E84A1F' }} />
        <div style={{ width: 80, height: 80, background: '#FFD12B', borderLeft: '4px solid #1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 50, height: 50, borderRadius: 999, background: '#1A1A1A' }} />
        </div>
        <div style={{ width: 60, height: 80, background: '#1A1A1A', borderLeft: '4px solid #1A1A1A' }} />
      </div>
      <div style={{ padding: 18, borderBottom: '4px solid #1A1A1A' }}>
        <div style={{ fontSize: 9, letterSpacing: 4, fontWeight: 700, marginBottom: 8 }}>FORM FOLLOWS FUNCTION</div>
        <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: -0.5, lineHeight: 1.05 }}>{C3.title}</div>
        <div style={{ fontSize: 11, fontWeight: 700, marginTop: 6, textTransform: 'uppercase', letterSpacing: 2 }}>{C3.artist}</div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, background: '#1A1A1A', color: '#F2EBD5', padding: 14, fontSize: 11, fontWeight: 700, fontVariantNumeric: 'tabular-nums', letterSpacing: 1 }}>{C3.time}</div>
        <button style={{ width: 110, background: '#3878E0', color: '#fff', border: 'none', borderLeft: '4px solid #1A1A1A', padding: 14, fontSize: 13, fontWeight: 900, letterSpacing: 2, cursor: 'pointer', fontFamily: 'inherit' }}>▶ PLAY</button>
      </div>
    </div>
  );
}

/* ============== 27. Embossed Metal 金属浮雕 ============== */
function StyleMetal() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 16,
      background: 'linear-gradient(180deg, #B5BBC5 0%, #8A909C 50%, #5A6070 100%)',
      fontFamily: '"Helvetica Neue", sans-serif', color: '#F0F2F5',
      border: '1px solid #3A4050',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.3), 0 6px 16px rgba(0,0,0,0.4)',
    }}>
      <div style={{
        background: 'linear-gradient(180deg, #2A3038, #1A1F28)',
        padding: 14, borderRadius: 10,
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,255,255,0.1)',
        marginBottom: 14, border: '1px solid #0A0F18',
      }}>
        <div style={{ fontSize: 9, letterSpacing: 3, color: '#7A95B5', textShadow: '0 1px 0 rgba(0,0,0,0.5)' }}>◢ TRACK 04 ◣</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4, color: '#E0F0FF', textShadow: '0 1px 0 rgba(0,0,0,0.6), 0 0 8px rgba(122,149,181,0.3)' }}>{C3.title}</div>
        <div style={{ fontSize: 11, color: '#9AB0C5', marginTop: 4 }}>{C3.artist}</div>
      </div>
      <div style={{
        height: 8, background: 'linear-gradient(180deg, #3A4050, #5A6070)', borderRadius: 999,
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)', marginBottom: 14, padding: 1,
      }}>
        <div style={{ width: '62%', height: '100%', borderRadius: 999, background: 'linear-gradient(180deg, #C5D8E8, #7A95B5)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)' }} />
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
        {['⏮', '▶', '⏭'].map((c, i) => (
          <button key={i} style={{
            width: i === 1 ? 56 : 44, height: i === 1 ? 56 : 44, borderRadius: 999,
            background: 'linear-gradient(180deg, #D5DCE8 0%, #8A909C 50%, #5A6070 100%)',
            color: '#1A1F28', border: '1px solid #3A4050', fontSize: i === 1 ? 18 : 14, cursor: 'pointer',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 2px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.4)',
            fontWeight: 700,
          }}>{c}</button>
        ))}
      </div>
    </div>
  );
}

/* ============== 28. Risograph Print 复古油印（深紫橙） ============== */
function StyleZine() {
  return (
    <div style={{
      width: 320, padding: 0, background: '#FFF8E0',
      fontFamily: '"Helvetica", "Arial Narrow", sans-serif', color: '#1A1A1A',
      border: '2px solid #1A1A1A', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 40, left: -30, width: 180, height: 180,
        background: '#7842D9', mixBlendMode: 'multiply', borderRadius: 999, opacity: 0.85,
      }} />
      <div style={{
        position: 'absolute', top: 80, left: 60, width: 160, height: 160,
        background: '#FF6B2A', mixBlendMode: 'multiply', borderRadius: 999, opacity: 0.8,
      }} />
      <div style={{ position: 'relative', padding: 18 }}>
        <div style={{ fontSize: 9, letterSpacing: 6, fontWeight: 800, marginBottom: 8 }}>VOL.04 / ZINE</div>
        <div style={{ height: 200 }} />
        <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: -0.8, lineHeight: 1, transform: 'rotate(-1deg)' }}>
          {C3.title}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, marginTop: 6, textTransform: 'uppercase', letterSpacing: 2 }}>↳ {C3.artist}</div>
        <div style={{ borderTop: '2px solid #1A1A1A', marginTop: 12, paddingTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, fontVariantNumeric: 'tabular-nums', letterSpacing: 1 }}>{C3.time}</span>
          <button style={{ background: '#1A1A1A', color: '#FFF8E0', border: 'none', padding: '6px 14px', fontSize: 10, letterSpacing: 3, fontWeight: 800, cursor: 'pointer' }}>► PLAY</button>
        </div>
      </div>
    </div>
  );
}

/* ============== 29. Tactile Card 触感卡 ============== */
function StyleTactile() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 16,
      background: '#1F1E1B', color: '#FAF9F5',
      fontFamily: '-apple-system, sans-serif',
      backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(217,119,87,0.18), transparent 50%), radial-gradient(circle at 90% 90%, rgba(217,119,87,0.1), transparent 40%)',
      border: '1px solid #2E2D2A',
      boxShadow: '0 12px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'linear-gradient(135deg, #D97757, #B85A38)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 4px 10px rgba(217,119,87,0.4)' }}>♪</div>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 2, opacity: 0.5 }}>NOW PLAYING</div>
            <div style={{ fontSize: 11, fontWeight: 600, marginTop: 2 }}>Late Night Radio</div>
          </div>
        </div>
        <div style={{ width: 28, height: 28, borderRadius: 999, border: '1px solid #3A3A38', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#D97757' }}>♥</div>
      </div>
      <div>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.3 }}>{C3.title}</div>
        <div style={{ fontSize: 12, opacity: 0.6, marginTop: 4 }}>{C3.artist}</div>
      </div>
      <div style={{ marginTop: 16, height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 999, position: 'relative' }}>
        <div style={{ width: '62%', height: '100%', borderRadius: 999, background: '#D97757', boxShadow: '0 0 12px rgba(217,119,87,0.6)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, opacity: 0.5, marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>
        <span>2:14</span><span>3:42</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
        <button style={{ background: 'transparent', border: 'none', color: '#FAF9F5', fontSize: 16, opacity: 0.6, cursor: 'pointer' }}>⏮</button>
        <button style={{ width: 56, height: 56, borderRadius: 999, background: '#D97757', color: '#fff', border: 'none', fontSize: 18, cursor: 'pointer', boxShadow: '0 6px 16px rgba(217,119,87,0.5)' }}>▶</button>
        <button style={{ background: 'transparent', border: 'none', color: '#FAF9F5', fontSize: 16, opacity: 0.6, cursor: 'pointer' }}>⏭</button>
      </div>
    </div>
  );
}

/* ============== 30. Tape / Cassette 磁带 ============== */
function StyleTape() {
  return (
    <div style={{
      width: 320, padding: 0,
      background: 'linear-gradient(180deg, #2A2520 0%, #1A1814 100%)',
      fontFamily: '"Courier New", monospace', color: '#F0E5C5',
      border: '1px solid #3A3530', borderRadius: 4, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        background: 'repeating-linear-gradient(90deg, #4A4035 0, #4A4035 4px, #3A3530 4px, #3A3530 8px)',
        height: 8,
      }} />
      <div style={{ padding: '14px 18px', borderBottom: '1px dashed #5A5045' }}>
        <div style={{ fontSize: 9, letterSpacing: 4, color: '#A09870', fontWeight: 700 }}>◀ SIDE A · 90 MIN ▶</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6, fontFamily: '"Marker Felt", "Caveat", cursive', transform: 'rotate(-1deg)' }}>{C3.title}</div>
        <div style={{ fontSize: 11, marginTop: 4, fontFamily: '"Marker Felt", cursive', color: '#D5C898' }}>~ {C3.artist}</div>
      </div>
      {/* tape window with reels */}
      <div style={{ background: '#1A1814', padding: '18px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderBottom: '1px solid #3A3530' }}>
        {[0, 1].map(i => (
          <div key={i} style={{
            width: 60, height: 60, borderRadius: 999,
            background: 'radial-gradient(circle, #2A2520 30%, #4A4035 31%, #5A5045 60%, #3A3530 100%)',
            border: '2px solid #5A5045',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: '#F0E5C5', border: '2px solid #2A2520' }} />
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, color: '#A09870', fontVariantNumeric: 'tabular-nums', letterSpacing: 1 }}>[ {C3.time} ]</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {['◀◀', '▶', '■', '▶▶'].map((c, i) => (
            <button key={i} style={{ background: '#3A3530', color: '#F0E5C5', border: '1px solid #5A5045', padding: '4px 8px', fontSize: 10, fontFamily: 'inherit', cursor: 'pointer' }}>{c}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== 31. Mondrian 蒙德里安 ============== */
function StyleMondrian() {
  return (
    <div style={{
      width: 320, padding: 0,
      background: '#F5F5F0', border: '5px solid #1A1A1A',
      fontFamily: '"Helvetica Neue", sans-serif', color: '#1A1A1A',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr', gridTemplateRows: '1fr 1fr 1fr',
      minHeight: 360, gap: 0,
    }}>
      <div style={{ background: '#E84A1F', borderRight: '5px solid #1A1A1A', borderBottom: '5px solid #1A1A1A', gridColumn: 1, gridRow: '1 / 3', padding: 16, color: '#F5F5F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 9, letterSpacing: 3, fontWeight: 700 }}>♪ NOW</div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: -0.5, lineHeight: 1 }}>{C3.title}</div>
          <div style={{ fontSize: 11, marginTop: 8, fontWeight: 700 }}>{C3.artist}</div>
        </div>
      </div>
      <div style={{ background: '#FFD12B', borderBottom: '5px solid #1A1A1A', gridColumn: 2, gridRow: 1, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 48, height: 48, borderRadius: 999, background: '#1A1A1A' }} />
      </div>
      <div style={{ background: '#F5F5F0', borderBottom: '5px solid #1A1A1A', gridColumn: 2, gridRow: 2, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>
        {C3.time}
      </div>
      <div style={{ background: '#1A1A1A', color: '#F5F5F0', borderRight: '5px solid #1A1A1A', gridColumn: 1, gridRow: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 900, cursor: 'pointer' }}>▶ PLAY</div>
      <div style={{ background: '#3878E0', gridColumn: 2, gridRow: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-around', color: '#F5F5F0', fontSize: 18, fontWeight: 800 }}>
        <span style={{ cursor: 'pointer' }}>⏮</span>
        <span style={{ cursor: 'pointer' }}>⏭</span>
      </div>
    </div>
  );
}

/* ============== 32. Soft UI 柔光卡 ============== */
function StyleSoftUI() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 24,
      background: '#FAF9F5',
      fontFamily: '-apple-system, "Inter", sans-serif', color: '#1F1E1B',
      boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
      border: '1px solid #F0EEE5',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: 'linear-gradient(135deg, #FFE5DC, #FFD0C0)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#D97757',
        }}>♪</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, letterSpacing: 2, color: '#9C9890' }}>NOW PLAYING</div>
          <div style={{ fontSize: 16, fontWeight: 600, marginTop: 2, letterSpacing: -0.2 }}>{C3.title}</div>
          <div style={{ fontSize: 11, color: '#7A766F', marginTop: 2 }}>{C3.artist}</div>
        </div>
      </div>
      <div style={{ background: '#F5F2EA', padding: 14, borderRadius: 14, marginBottom: 14 }}>
        <div style={{ height: 4, background: '#E8E2D0', borderRadius: 999, position: 'relative', marginBottom: 8 }}>
          <div style={{ width: '62%', height: '100%', borderRadius: 999, background: '#D97757' }} />
          <div style={{ position: 'absolute', left: '62%', top: -3, transform: 'translateX(-50%)', width: 10, height: 10, borderRadius: 999, background: '#fff', border: '2px solid #D97757' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#9C9890', fontVariantNumeric: 'tabular-nums' }}>
          <span>2:14</span><span>3:42</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: '#F5F2EA', border: 'none', color: '#1F1E1B', fontSize: 13, cursor: 'pointer' }}>⏮</button>
        <button style={{ flex: 1, margin: '0 10px', height: 44, borderRadius: 12, background: '#1F1E1B', color: '#FAF9F5', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>▶  Play</button>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: '#F5F2EA', border: 'none', color: '#1F1E1B', fontSize: 13, cursor: 'pointer' }}>⏭</button>
      </div>
    </div>
  );
}

/* ============== 33. Frosted Dark 暗黑磨砂 ============== */
function StyleFrosted() {
  return (
    <div style={{
      width: 320, padding: 4, borderRadius: 24,
      background: 'linear-gradient(135deg, #1A1530 0%, #4A2858 50%, #1A2A50 100%)',
      fontFamily: '-apple-system, "SF Pro Display", sans-serif',
    }}>
      <div style={{
        padding: 22, borderRadius: 22,
        background: 'rgba(20,15,40,0.55)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: '#fff',
        display: 'flex', flexDirection: 'column', gap: 14,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 12px 30px rgba(0,0,0,0.5)',
      }}>
        <div style={{
          display: 'inline-block', width: 'fit-content',
          background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: 999,
          fontSize: 10, letterSpacing: 2, color: '#C5B8E5',
          border: '1px solid rgba(255,255,255,0.15)',
        }}>♪ NOW PLAYING</div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: -0.3 }}>{C3.title}</div>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>{C3.artist}</div>
        </div>
        <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', background: 'linear-gradient(90deg, #C5A8FF, #7AC5FF)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, opacity: 0.6, fontVariantNumeric: 'tabular-nums' }}>
          <span>2:14</span><span>3:42</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: 14, cursor: 'pointer' }}>⏮</button>
          <button style={{
            width: 56, height: 56, borderRadius: 999,
            background: 'linear-gradient(135deg, #C5A8FF, #7AC5FF)',
            color: '#1A1530', border: 'none', fontSize: 20, cursor: 'pointer',
            boxShadow: '0 6px 18px rgba(122,197,255,0.4), inset 0 1px 0 rgba(255,255,255,0.5)',
          }}>▶</button>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: 14, cursor: 'pointer' }}>⏭</button>
        </div>
      </div>
    </div>
  );
}

/* ============== 34. Doodle / Notebook 笔记本涂鸦 ============== */
function StyleDoodle() {
  return (
    <div style={{
      width: 320, padding: 22,
      background: '#FFFCF5',
      backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 27px, #C5DAEC 27px, #C5DAEC 28px)',
      fontFamily: '"Caveat", "Marker Felt", cursive',
      color: '#2A3A5A',
      border: '1px solid #D5D5D5', position: 'relative',
      borderLeft: '3px solid #FF6B6B',
    }}>
      <div style={{ position: 'absolute', left: 38, top: 0, bottom: 0, width: 1, background: '#FFB8B8' }} />
      <div style={{ paddingLeft: 22 }}>
        <div style={{ fontSize: 15, color: '#7A8AA5', marginBottom: 6 }}>April 30, 2026 — playlist ♪</div>
        <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.1, color: '#1A2A4A' }}>{C3.title}</div>
        <div style={{ fontSize: 16, color: '#5A6A8A', marginTop: 4 }}>↳ {C3.artist}</div>
        <svg width="100%" height="20" viewBox="0 0 240 20" style={{ marginTop: 12 }}>
          <path d="M2 10 Q60 4, 120 10 T238 10" stroke="#C5DAEC" strokeWidth="1.5" fill="none" />
          <path d="M2 10 Q40 6, 80 10 T148 10" stroke="#FF6B6B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="148" cy="10" r="4" fill="#FFE066" stroke="#1A2A4A" strokeWidth="1.5" />
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#7A8AA5', marginTop: 4 }}>
          <span>2:14</span>
          <span style={{ fontStyle: 'italic' }}>~ so good ~</span>
          <span>3:42</span>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 18, cursor: 'pointer' }}>‹‹</span>
          <button style={{
            background: '#FFE066', color: '#1A2A4A',
            border: '2px solid #1A2A4A', borderRadius: '999px / 60%',
            padding: '4px 18px', fontSize: 16, fontFamily: 'inherit', fontWeight: 700, cursor: 'pointer',
            transform: 'rotate(-1deg)',
          }}>▶ play !</button>
          <span style={{ fontSize: 18, cursor: 'pointer' }}>››</span>
          <span style={{ marginLeft: 'auto', fontSize: 22 }}>♥</span>
        </div>
      </div>
    </div>
  );
}

/* ============== 35. Swiss / Grid 瑞士网格 ============== */
function StyleSwiss() {
  return (
    <div style={{
      width: 320, padding: 24, background: '#fff',
      fontFamily: '"Helvetica Neue", "Akzidenz-Grotesk", sans-serif',
      color: '#1A1A1A',
      border: '1px solid #1A1A1A',
      display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 0,
      lineHeight: 1.2,
    }}>
      <div style={{ gridColumn: '1 / 13', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1A1A1A', paddingBottom: 6, marginBottom: 14, fontSize: 9, letterSpacing: 2 }}>
        <span>NO. 04</span><span>2026.04.30</span><span>04 / 12</span>
      </div>
      <div style={{ gridColumn: '1 / 4', fontSize: 9, letterSpacing: 2, marginBottom: 4, color: '#666' }}>TITLE</div>
      <div style={{ gridColumn: '4 / 13', fontSize: 22, fontWeight: 500, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 18 }}>{C3.title}</div>
      <div style={{ gridColumn: '1 / 4', fontSize: 9, letterSpacing: 2, marginBottom: 4, color: '#666' }}>ARTIST</div>
      <div style={{ gridColumn: '4 / 13', fontSize: 13, marginBottom: 18 }}>{C3.artist}</div>
      <div style={{ gridColumn: '1 / 4', fontSize: 9, letterSpacing: 2, marginBottom: 4, color: '#666' }}>DURATION</div>
      <div style={{ gridColumn: '4 / 13', fontSize: 13, fontVariantNumeric: 'tabular-nums', marginBottom: 18 }}>{C3.time}</div>
      <div style={{ gridColumn: '1 / 13', height: 1, background: '#1A1A1A', marginBottom: 4 }} />
      <div style={{ gridColumn: '1 / 13', height: 4, background: '#FF3B00', width: '62%', marginBottom: 18 }} />
      <div style={{ gridColumn: '1 / 13', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <button style={{ background: 'none', border: 'none', fontSize: 11, fontFamily: 'inherit', cursor: 'pointer', letterSpacing: 2 }}>← PREV</button>
        <button style={{ background: '#1A1A1A', color: '#fff', border: 'none', padding: '8px 20px', fontSize: 12, fontFamily: 'inherit', fontWeight: 600, letterSpacing: 3, cursor: 'pointer' }}>▶ PLAY</button>
        <button style={{ background: 'none', border: 'none', fontSize: 11, fontFamily: 'inherit', cursor: 'pointer', letterSpacing: 2 }}>NEXT →</button>
      </div>
    </div>
  );
}

/* ============== 36. Aurora Glow 极光辉光 ============== */
function StyleAurora() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 20,
      background: '#0A1428',
      fontFamily: '-apple-system, sans-serif', color: '#E5F5F0',
      position: 'relative', overflow: 'hidden',
      border: '1px solid #1F2A45',
    }}>
      <div style={{ position: 'absolute', top: -50, left: -30, width: 240, height: 160, background: 'radial-gradient(ellipse, rgba(91,255,181,0.45), transparent 60%)', filter: 'blur(20px)' }} />
      <div style={{ position: 'absolute', top: -20, right: -50, width: 200, height: 140, background: 'radial-gradient(ellipse, rgba(155,91,255,0.45), transparent 60%)', filter: 'blur(20px)' }} />
      <div style={{ position: 'absolute', bottom: -40, left: 40, width: 180, height: 120, background: 'radial-gradient(ellipse, rgba(91,180,255,0.4), transparent 60%)', filter: 'blur(20px)' }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: '#5BFFB5' }}>✦ AURORA</div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: -0.3,
            background: 'linear-gradient(135deg, #5BFFB5 0%, #5BB5FF 50%, #9B5BFF 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>{C3.title}</div>
          <div style={{ fontSize: 12, color: '#7AA8B5', marginTop: 4 }}>{C3.artist}</div>
        </div>
        <div style={{ height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 999 }}>
          <div style={{ width: '62%', height: '100%', borderRadius: 999, background: 'linear-gradient(90deg, #5BFFB5, #5BB5FF, #9B5BFF)', boxShadow: '0 0 12px rgba(91,255,181,0.6)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#7AA8B5', fontVariantNumeric: 'tabular-nums' }}>
          <span>2:14</span><span>3:42</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, alignItems: 'center' }}>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(91,255,181,0.3)', color: '#5BFFB5', fontSize: 14, cursor: 'pointer' }}>⏮</button>
          <button style={{
            width: 56, height: 56, borderRadius: 999,
            background: 'linear-gradient(135deg, #5BFFB5, #5BB5FF, #9B5BFF)',
            color: '#0A1428', border: 'none', fontSize: 20, cursor: 'pointer', fontWeight: 800,
            boxShadow: '0 0 24px rgba(91,180,255,0.7)',
          }}>▶</button>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(155,91,255,0.3)', color: '#9B5BFF', fontSize: 14, cursor: 'pointer' }}>⏭</button>
        </div>
      </div>
    </div>
  );
}

window.STYLES = (window.STYLES || []).concat([
  { id: 'sticker',   name: 'Sticker 贴纸拼贴',  desc: '彩色贴纸、虚线边、点状底纹',     Comp: StyleSticker },
  { id: 'bauhaus',   name: 'Bauhaus 包豪斯',    desc: '红黄蓝、几何分块、强结构',       Comp: StyleBauhaus },
  { id: 'metal',     name: 'Embossed Metal 金属', desc: '金属拉丝、内嵌液晶屏',         Comp: StyleMetal },
  { id: 'zine',      name: 'Zine 独立刊物',     desc: '叠印油墨、紫橙混色、排版',       Comp: StyleZine },
  { id: 'tactile',   name: 'Tactile 暗夜质感卡', desc: '深色 + 暖光晕，有质量感',       Comp: StyleTactile },
  { id: 'tape',      name: 'Cassette 磁带',     desc: '复古卡带，标签字体、卷轴',       Comp: StyleTape },
  { id: 'mondrian',  name: 'Mondrian 蒙德里安', desc: '红黄蓝色块、黑粗线分割',         Comp: StyleMondrian },
  { id: 'softui',    name: 'Soft UI 柔光卡片',  desc: '现代柔和 SaaS 卡片风',           Comp: StyleSoftUI },
  { id: 'frosted',   name: 'Frosted Dark 暗黑磨砂', desc: '深紫蓝磨砂玻璃 + 渐变高亮',  Comp: StyleFrosted },
  { id: 'doodle',    name: 'Doodle 笔记涂鸦',   desc: '横线笔记本、手写、彩色高光',     Comp: StyleDoodle },
  { id: 'swiss',     name: 'Swiss 瑞士网格',    desc: '严格 12 栏、留白、信息层级',     Comp: StyleSwiss },
  { id: 'aurora',    name: 'Aurora 极光辉光',   desc: '深夜极光辉光、流光渐变',         Comp: StyleAurora },
]);
