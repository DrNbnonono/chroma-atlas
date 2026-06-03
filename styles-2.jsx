// More style variations — appended to window.STYLES

const C2 = { title: '夜的钢琴曲', artist: '石进 · 深夜电台', time: '2:14 / 3:42' };

/* ============== 13. Y2K 千禧未来 ============== */
function StyleY2K() {
  return (
    <div style={{
      width: 320, padding: 18, borderRadius: 20,
      background: 'linear-gradient(135deg, #C5E5FF 0%, #FFD5F0 50%, #E0D5FF 100%)',
      fontFamily: '"Arial Black", "Impact", sans-serif', color: '#1F1A4A',
      border: '2px solid #fff',
      boxShadow: '0 8px 24px rgba(150,120,200,0.3), inset 0 2px 0 rgba(255,255,255,0.8)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -10, right: -10, width: 80, height: 80, borderRadius: 999, background: 'radial-gradient(circle, #FFFFFF, #C5E5FF)', opacity: 0.7 }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{
          display: 'inline-block', width: 'fit-content',
          background: 'linear-gradient(90deg, #FF6BD0, #6BD0FF)',
          color: '#fff', padding: '4px 14px', borderRadius: 999,
          fontSize: 10, letterSpacing: 2, fontWeight: 900,
          boxShadow: '0 2px 6px rgba(255,107,208,0.5)',
        }}>★ MP3.PLAYER ★</div>
        <div style={{
          fontSize: 22, fontWeight: 900, letterSpacing: -0.5,
          background: 'linear-gradient(135deg, #FF4FA8, #6B8DE3)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          textShadow: '2px 2px 0 rgba(255,255,255,0.6)',
        }}>{C2.title}</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#5A4A8A' }}>♫ {C2.artist}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.5)', padding: 6, borderRadius: 999, border: '1px solid #fff' }}>
          <span style={{ fontSize: 9, fontWeight: 900, color: '#5A4A8A' }}>2:14</span>
          <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ width: '62%', height: '100%', background: 'linear-gradient(90deg, #FF4FA8, #6BD0FF)' }} />
          </div>
          <span style={{ fontSize: 9, fontWeight: 900, color: '#5A4A8A' }}>3:42</span>
        </div>
        <button style={{
          background: 'linear-gradient(135deg, #FF6BD0 0%, #6B8DE3 100%)',
          color: '#fff', border: '2px solid #fff', borderRadius: 999,
          padding: '10px', fontSize: 13, fontWeight: 900, letterSpacing: 3, cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(255,107,208,0.4), inset 0 1px 0 rgba(255,255,255,0.5)',
          fontFamily: 'inherit',
        }}>▶ PLAY ✦</button>
      </div>
    </div>
  );
}

/* ============== 14. Watercolor 水彩 ============== */
function StyleWatercolor() {
  return (
    <div style={{
      width: 320, padding: 28, borderRadius: 8,
      background: '#FBF9F2',
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      color: '#3A2E2A',
      position: 'relative', overflow: 'hidden',
      border: '1px solid #E8E0D0',
      boxShadow: '0 4px 16px rgba(150,120,90,0.1)',
    }}>
      {/* watercolor blobs */}
      <div style={{ position: 'absolute', top: -30, right: -40, width: 180, height: 180, borderRadius: '60% 40% 50% 50%', background: 'radial-gradient(circle, rgba(220,140,160,0.45) 0%, rgba(220,140,160,0) 70%)', filter: 'blur(8px)' }} />
      <div style={{ position: 'absolute', bottom: -50, left: -30, width: 200, height: 160, borderRadius: '50% 60% 40% 50%', background: 'radial-gradient(circle, rgba(150,180,200,0.4) 0%, rgba(150,180,200,0) 70%)', filter: 'blur(10px)' }} />
      <div style={{ position: 'absolute', top: 60, left: 60, width: 100, height: 80, borderRadius: '40% 60% 50% 50%', background: 'radial-gradient(circle, rgba(200,180,140,0.3) 0%, transparent 70%)', filter: 'blur(6px)' }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: '#A57878', fontStyle: 'italic' }}>~ a melody ~</div>
        <div style={{ fontSize: 30, fontStyle: 'italic', lineHeight: 1.1, fontWeight: 500 }}>{C2.title}</div>
        <div style={{ fontSize: 13, color: '#7A5848', fontStyle: 'italic' }}>— {C2.artist}</div>
        <div style={{ height: 2, background: 'linear-gradient(90deg, #B85A6A 0%, #B85A6A 62%, #E8D8C8 62%, #E8D8C8 100%)', opacity: 0.7 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#A57878', fontStyle: 'italic', fontVariantNumeric: 'tabular-nums' }}>
          <span>{C2.time}</span>
          <span>~ ♪ ~</span>
        </div>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', paddingTop: 4 }}>
          <button style={{ background: 'transparent', border: 'none', fontSize: 18, color: '#7A5848', cursor: 'pointer', fontStyle: 'italic' }}>‹</button>
          <button style={{ background: 'rgba(184,90,106,0.85)', color: '#FBF9F2', border: 'none', borderRadius: 999, padding: '8px 24px', fontSize: 14, fontStyle: 'italic', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 4px 12px rgba(184,90,106,0.3)' }}>▶ play</button>
          <button style={{ background: 'transparent', border: 'none', fontSize: 18, color: '#7A5848', cursor: 'pointer', fontStyle: 'italic' }}>›</button>
        </div>
      </div>
    </div>
  );
}

/* ============== 15. Vaporwave 蒸汽波 ============== */
function StyleVapor() {
  return (
    <div style={{
      width: 320, padding: 0, borderRadius: 4,
      background: 'linear-gradient(180deg, #1A0A2E 0%, #2A1A4A 50%, #FF4FA8 100%)',
      fontFamily: '"Times New Roman", serif', color: '#FFE5F5',
      border: '2px solid #00F0FF', position: 'relative', overflow: 'hidden',
      boxShadow: '0 0 40px rgba(255,79,168,0.4)',
    }}>
      {/* sun */}
      <div style={{ position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)', width: 120, height: 120, borderRadius: 999, background: 'radial-gradient(circle, #FFEC5C 0%, #FF4FA8 50%, transparent 80%)', opacity: 0.85 }} />
      {/* horizon grid */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'repeating-linear-gradient(90deg, transparent 0, transparent 18px, rgba(0,240,255,0.4) 18px, rgba(0,240,255,0.4) 19px), repeating-linear-gradient(0deg, transparent 0, transparent 12px, rgba(0,240,255,0.4) 12px, rgba(0,240,255,0.4) 13px)', transform: 'perspective(120px) rotateX(45deg)', transformOrigin: 'top' }} />

      <div style={{ position: 'relative', padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 11, letterSpacing: 6, textAlign: 'center', color: '#00F0FF', fontStyle: 'italic' }}>A E S T H E T I C</div>
        <div style={{ height: 80 }} />
        <div style={{
          fontSize: 26, fontWeight: 700, letterSpacing: 4, textAlign: 'center',
          color: '#FFE5F5', textShadow: '3px 3px 0 #00F0FF, 6px 6px 0 #FF4FA8',
          fontStyle: 'italic',
        }}>{C2.title}</div>
        <div style={{ fontSize: 11, letterSpacing: 3, textAlign: 'center', color: '#FFB8E0', fontStyle: 'italic' }}>― {C2.artist} ―</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 4 }}>
          <span style={{ fontSize: 18, color: '#00F0FF', cursor: 'pointer' }}>◁◁</span>
          <span style={{ fontSize: 22, color: '#FFEC5C', cursor: 'pointer', textShadow: '0 0 8px #FFEC5C' }}>▶</span>
          <span style={{ fontSize: 18, color: '#00F0FF', cursor: 'pointer' }}>▷▷</span>
        </div>
      </div>
    </div>
  );
}

/* ============== 16. Gradient Mesh 渐变网格 ============== */
function StyleMesh() {
  return (
    <div style={{
      width: 320, padding: 24, borderRadius: 24,
      background: '#fff',
      fontFamily: '-apple-system, sans-serif', color: '#1A1A2E',
      position: 'relative', overflow: 'hidden',
      border: '1px solid #F0F0F0',
      boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
    }}>
      {/* mesh blobs */}
      <div style={{ position: 'absolute', top: -60, left: -40, width: 220, height: 220, borderRadius: 999, background: 'radial-gradient(circle, #FF8A8A, transparent 60%)', filter: 'blur(40px)', opacity: 0.7 }} />
      <div style={{ position: 'absolute', top: 20, right: -60, width: 220, height: 220, borderRadius: 999, background: 'radial-gradient(circle, #8AB5FF, transparent 60%)', filter: 'blur(40px)', opacity: 0.7 }} />
      <div style={{ position: 'absolute', bottom: -80, left: 40, width: 220, height: 220, borderRadius: 999, background: 'radial-gradient(circle, #C58AFF, transparent 60%)', filter: 'blur(40px)', opacity: 0.65 }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: '#888', fontWeight: 600 }}>NOW PLAYING</div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.5 }}>{C2.title}</div>
          <div style={{ fontSize: 12, color: '#5A5A6E', marginTop: 4 }}>{C2.artist}</div>
        </div>
        <div style={{ height: 4, background: 'rgba(0,0,0,0.06)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', background: 'linear-gradient(90deg, #FF8A8A, #C58AFF, #8AB5FF)' }} />
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: '#888', fontVariantNumeric: 'tabular-nums' }}>2:14</span>
          <button style={{ background: 'linear-gradient(135deg, #FF8A8A, #C58AFF)', color: '#fff', border: 'none', borderRadius: 999, padding: '10px 28px', fontSize: 13, fontWeight: 600, cursor: 'pointer', boxShadow: '0 6px 16px rgba(197,138,255,0.4)' }}>▶ Play</button>
          <span style={{ fontSize: 11, color: '#888', fontVariantNumeric: 'tabular-nums' }}>3:42</span>
        </div>
      </div>
    </div>
  );
}

/* ============== 17. Terminal CLI 终端 ============== */
function StyleTerminal() {
  return (
    <div style={{
      width: 320, padding: 0, borderRadius: 8,
      background: '#0F0F0F',
      fontFamily: '"SF Mono", "Menlo", "Courier New", monospace',
      color: '#33FF66',
      border: '1px solid #1F1F1F', overflow: 'hidden',
    }}>
      <div style={{ background: '#1A1A1A', padding: '8px 12px', display: 'flex', gap: 6, alignItems: 'center', borderBottom: '1px solid #2A2A2A' }}>
        <div style={{ width: 10, height: 10, borderRadius: 999, background: '#FF5F56' }} />
        <div style={{ width: 10, height: 10, borderRadius: 999, background: '#FFBD2E' }} />
        <div style={{ width: 10, height: 10, borderRadius: 999, background: '#27C93F' }} />
        <div style={{ flex: 1, textAlign: 'center', fontSize: 11, color: '#888' }}>~/music — player.sh</div>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, lineHeight: 1.5 }}>
        <div><span style={{ color: '#888' }}>$</span> <span style={{ color: '#33FF66' }}>player</span> <span style={{ color: '#FFBD2E' }}>--now</span></div>
        <div style={{ color: '#888' }}>{'>>'} loading track...</div>
        <div style={{ color: '#fff' }}>♪ {C2.title}</div>
        <div style={{ color: '#7AB5FF' }}>  by {C2.artist}</div>
        <div style={{ color: '#888' }}>{'>>'} progress:</div>
        <div style={{ color: '#33FF66', letterSpacing: -1 }}>[██████████████░░░░░░░░] 62%</div>
        <div style={{ color: '#888', fontVariantNumeric: 'tabular-nums' }}>  elapsed: {C2.time}</div>
        <div style={{ marginTop: 6 }}>
          <span style={{ color: '#888' }}>$</span> <span style={{ color: '#33FF66' }}>_</span><span style={{ color: '#33FF66', animation: 'blink 1s infinite' }}>▊</span>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
          <button style={{ flex: 1, background: 'transparent', color: '#33FF66', border: '1px solid #33FF66', padding: '6px', fontSize: 10, fontFamily: 'inherit', cursor: 'pointer' }}>[p]rev</button>
          <button style={{ flex: 1, background: '#33FF66', color: '#0F0F0F', border: '1px solid #33FF66', padding: '6px', fontSize: 10, fontFamily: 'inherit', cursor: 'pointer', fontWeight: 700 }}>[SPACE]</button>
          <button style={{ flex: 1, background: 'transparent', color: '#33FF66', border: '1px solid #33FF66', padding: '6px', fontSize: 10, fontFamily: 'inherit', cursor: 'pointer' }}>[n]ext</button>
        </div>
      </div>
    </div>
  );
}

/* ============== 18. Risograph 油印 ============== */
function StyleRiso() {
  return (
    <div style={{
      width: 320, padding: 24, background: '#F5F0DC',
      fontFamily: '"Helvetica", sans-serif', color: '#1A2438',
      position: 'relative', overflow: 'hidden',
      border: '1px solid #1A2438',
      backgroundImage: 'radial-gradient(circle, rgba(26,36,56,0.04) 1px, transparent 1px)',
      backgroundSize: '4px 4px',
    }}>
      <div style={{
        position: 'absolute', top: -20, right: -20, width: 140, height: 140, borderRadius: 999,
        background: '#FF5C8A', mixBlendMode: 'multiply', opacity: 0.85,
      }} />
      <div style={{
        position: 'absolute', top: 30, right: 30, width: 110, height: 110, borderRadius: 999,
        background: '#5C8AFF', mixBlendMode: 'multiply', opacity: 0.75,
      }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 10, letterSpacing: 3, fontWeight: 800 }}>NO.42 / RISO PRINT</div>
        <div style={{ height: 80 }} />
        <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: -0.5, lineHeight: 1.1 }}>{C2.title}</div>
        <div style={{ fontSize: 12, fontWeight: 600 }}>{C2.artist}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, height: 4, background: '#1A2438', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '62%', top: -3, width: 10, height: 10, borderRadius: 999, background: '#FF5C8A', mixBlendMode: 'multiply' }} />
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{C2.time}</span>
        </div>
        <div style={{ display: 'flex', gap: 0, border: '1px solid #1A2438' }}>
          <button style={{ flex: 1, background: 'transparent', color: '#1A2438', border: 'none', borderRight: '1px solid #1A2438', padding: '10px', fontSize: 11, fontWeight: 800, cursor: 'pointer' }}>PREV</button>
          <button style={{ flex: 2, background: '#1A2438', color: '#F5F0DC', border: 'none', borderRight: '1px solid #1A2438', padding: '10px', fontSize: 12, fontWeight: 800, cursor: 'pointer' }}>▶ PLAY</button>
          <button style={{ flex: 1, background: 'transparent', color: '#1A2438', border: 'none', padding: '10px', fontSize: 11, fontWeight: 800, cursor: 'pointer' }}>NEXT</button>
        </div>
      </div>
    </div>
  );
}

/* ============== 19. Bento 便当格 ============== */
function StyleBento() {
  return (
    <div style={{
      width: 320, padding: 12,
      background: '#F0EEE5',
      fontFamily: '-apple-system, "PingFang SC", sans-serif', color: '#1F1E1B',
      borderRadius: 24,
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
    }}>
      <div style={{
        gridColumn: 'span 2', background: '#1F1E1B', color: '#FAF9F5',
        padding: 16, borderRadius: 18,
      }}>
        <div style={{ fontSize: 10, letterSpacing: 2, opacity: 0.6 }}>NOW PLAYING</div>
        <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>{C2.title}</div>
        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>{C2.artist}</div>
      </div>
      <div style={{ background: '#D97757', color: '#fff', padding: 16, borderRadius: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 90 }}>
        <div style={{ fontSize: 10, opacity: 0.85 }}>PROGRESS</div>
        <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1 }}>62<span style={{ fontSize: 14 }}>%</span></div>
      </div>
      <div style={{ background: '#FAF9F5', padding: 16, borderRadius: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 90, border: '1px solid #E5E2D6' }}>
        <div style={{ fontSize: 10, color: '#888' }}>ELAPSED</div>
        <div style={{ fontSize: 22, fontWeight: 700, fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>2:14</div>
      </div>
      <div style={{
        gridColumn: 'span 2', background: '#FAF9F5', padding: 14, borderRadius: 18,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #E5E2D6',
      }}>
        <button style={{ background: 'transparent', border: 'none', fontSize: 16, color: '#1F1E1B', cursor: 'pointer' }}>⏮</button>
        <button style={{ background: '#1F1E1B', color: '#FAF9F5', border: 'none', borderRadius: 999, padding: '10px 32px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>▶ Play</button>
        <button style={{ background: 'transparent', border: 'none', fontSize: 16, color: '#1F1E1B', cursor: 'pointer' }}>⏭</button>
      </div>
    </div>
  );
}

/* ============== 20. Dieter Rams 工业 ============== */
function StyleRams() {
  return (
    <div style={{
      width: 320, padding: 0, background: '#FAFAFA',
      fontFamily: '"Helvetica Neue", Arial, sans-serif', color: '#1A1A1A',
      border: '1px solid #D5D5D5',
    }}>
      <div style={{ background: '#F0F0F0', padding: '10px 16px', borderBottom: '1px solid #D5D5D5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: '#FF6B00' }} />
          <span style={{ fontSize: 10, letterSpacing: 2, fontWeight: 600 }}>BR-1000 / FM</span>
        </div>
        <span style={{ fontSize: 10, color: '#888' }}>108.0 MHz</span>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 10, letterSpacing: 2, color: '#888', fontWeight: 600, marginBottom: 8 }}>TRACK 04</div>
        <div style={{ fontSize: 18, fontWeight: 600 }}>{C2.title}</div>
        <div style={{ fontSize: 11, color: '#666', marginTop: 4 }}>{C2.artist}</div>
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 10, color: '#888', fontVariantNumeric: 'tabular-nums' }}>2:14</span>
          <div style={{ flex: 1, height: 2, background: '#D5D5D5' }}>
            <div style={{ width: '62%', height: '100%', background: '#FF6B00' }} />
          </div>
          <span style={{ fontSize: 10, color: '#888', fontVariantNumeric: 'tabular-nums' }}>3:42</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #D5D5D5' }}>
        {['◀◀', '▶', '■', '▶▶'].map((c, i) => (
          <button key={i} style={{
            background: i === 1 ? '#FF6B00' : '#FAFAFA', color: i === 1 ? '#fff' : '#1A1A1A',
            border: 'none', borderRight: i < 3 ? '1px solid #D5D5D5' : 'none',
            padding: '14px 0', fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>{c}</button>
        ))}
      </div>
    </div>
  );
}

/* ============== 21. Origami 折纸 ============== */
function StyleOrigami() {
  return (
    <div style={{
      width: 320, padding: 0,
      fontFamily: '"Hiragino Sans", "PingFang SC", -apple-system, sans-serif',
      color: '#2A2A2A', position: 'relative',
      filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.12))',
    }}>
      <svg viewBox="0 0 320 360" width="320" height="360" style={{ display: 'block' }}>
        <defs>
          <linearGradient id="ori1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F5E5C8" /><stop offset="1" stopColor="#E8C896" />
          </linearGradient>
          <linearGradient id="ori2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D88848" /><stop offset="1" stopColor="#B8682A" />
          </linearGradient>
          <linearGradient id="ori3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#F8F0DA" /><stop offset="1" stopColor="#EAD8A8" />
          </linearGradient>
        </defs>
        <polygon points="0,0 320,0 320,180 0,140" fill="url(#ori1)" />
        <polygon points="0,140 320,180 320,250 0,260" fill="url(#ori3)" />
        <polygon points="0,260 320,250 320,360 0,360" fill="url(#ori2)" />
        <line x1="0" y1="140" x2="320" y2="180" stroke="rgba(0,0,0,0.08)" />
        <line x1="0" y1="260" x2="320" y2="250" stroke="rgba(0,0,0,0.08)" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 4, color: '#7A5828' }}>♪ MUSIC · 折</div>
          <div style={{ fontSize: 24, fontWeight: 600, marginTop: 8, letterSpacing: -0.3 }}>{C2.title}</div>
          <div style={{ fontSize: 12, color: '#5A4828', marginTop: 4 }}>{C2.artist}</div>
        </div>
        <div style={{ alignSelf: 'center', fontSize: 11, color: '#5A4828', fontVariantNumeric: 'tabular-nums', letterSpacing: 1 }}>{C2.time}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#FAF5E5' }}>
          <span style={{ fontSize: 16, cursor: 'pointer' }}>⏮</span>
          <button style={{ background: '#FAF5E5', color: '#B8682A', border: 'none', borderRadius: 999, padding: '10px 28px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>▶ Play</button>
          <span style={{ fontSize: 16, cursor: 'pointer' }}>⏭</span>
        </div>
      </div>
    </div>
  );
}

/* ============== 22. Newspaper 报纸 ============== */
function StyleNewspaper() {
  return (
    <div style={{
      width: 320, padding: 18, background: '#EFE8D5',
      fontFamily: '"Times New Roman", "Georgia", serif',
      color: '#1A1A1A', border: '2px double #1A1A1A',
    }}>
      <div style={{ textAlign: 'center', borderBottom: '1px solid #1A1A1A', paddingBottom: 8, marginBottom: 12 }}>
        <div style={{ fontSize: 9, letterSpacing: 6, fontFamily: 'sans-serif' }}>EST. 2026</div>
        <div style={{ fontSize: 28, fontWeight: 900, fontStyle: 'italic', letterSpacing: -1, lineHeight: 1 }}>The Daily Score</div>
        <div style={{ fontSize: 9, fontFamily: 'sans-serif', marginTop: 4 }}>VOL. III · NO. 04 · APRIL 30, 2026 · ¥0</div>
      </div>
      <div style={{ borderTop: '3px double #1A1A1A', borderBottom: '1px solid #1A1A1A', padding: '6px 0', textAlign: 'center', fontSize: 9, letterSpacing: 4, fontFamily: 'sans-serif', fontWeight: 700, marginBottom: 12 }}>
        ♪ NOW PLAYING · MUSIC SECTION
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.1, letterSpacing: -0.3 }}>{C2.title}</div>
      <div style={{ fontSize: 10, fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: 2, marginTop: 6, fontWeight: 600 }}>By {C2.artist}</div>
      <div style={{ fontSize: 11, lineHeight: 1.5, marginTop: 10, columnCount: 2, columnGap: 12, columnRule: '1px solid #999' }}>
        A meditation in three minutes, forty-two seconds — captured live for the late-night airwaves. The pianist's most luminous work to date.
      </div>
      <div style={{ borderTop: '1px solid #1A1A1A', marginTop: 12, paddingTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <span style={{ fontSize: 10, fontVariantNumeric: 'tabular-nums' }}>{C2.time}</span>
        <button style={{ background: '#1A1A1A', color: '#EFE8D5', border: 'none', padding: '6px 14px', fontSize: 9, letterSpacing: 3, fontWeight: 700, cursor: 'pointer' }}>▶ LISTEN</button>
      </div>
    </div>
  );
}

/* ============== 23. Holographic 全息镭射 ============== */
function StyleHolo() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 20,
      background: 'conic-gradient(from 180deg at 50% 50%, #FF6BD0, #6BD0FF, #6BFFB5, #FFEC5C, #FF6BD0)',
      fontFamily: '"SF Pro Display", -apple-system, sans-serif', color: '#1A1A2E',
      position: 'relative',
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: 16, padding: 18,
        border: '1px solid rgba(255,255,255,0.7)',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{
            display: 'inline-block', padding: '3px 10px', borderRadius: 999,
            background: 'linear-gradient(90deg, #FF6BD0, #6BD0FF)', color: '#fff',
            fontSize: 10, fontWeight: 700, letterSpacing: 1,
          }}>HOLO ✦ PLAY</div>
          <div style={{ width: 24, height: 24, borderRadius: 999, background: 'conic-gradient(from 0deg, #FF6BD0, #6BD0FF, #6BFFB5, #FFEC5C, #FF6BD0)' }} />
        </div>
        <div>
          <div style={{
            fontSize: 22, fontWeight: 700, letterSpacing: -0.5,
            background: 'linear-gradient(135deg, #FF4FA8 0%, #5BC8FF 50%, #5BFFB5 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>{C2.title}</div>
          <div style={{ fontSize: 12, color: '#5A5A78', marginTop: 4 }}>{C2.artist}</div>
        </div>
        <div style={{ height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #FF6BD0 0%, #6BD0FF 62%, rgba(255,255,255,0.4) 62%)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#5A5A78', fontVariantNumeric: 'tabular-nums' }}>
          <span>2:14</span><span>3:42</span>
        </div>
        <button style={{
          background: 'linear-gradient(135deg, #FF6BD0, #6BD0FF, #6BFFB5)', color: '#fff',
          border: 'none', borderRadius: 999, padding: '10px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(107,208,255,0.5)',
        }}>▶ Play</button>
      </div>
    </div>
  );
}

/* ============== 24. Hand-drawn 手绘 ============== */
function StyleHand() {
  return (
    <div style={{
      width: 320, padding: 22,
      background: '#FFFCF5',
      fontFamily: '"Caveat", "Comic Sans MS", "Marker Felt", cursive',
      color: '#1A1A1A',
      border: '2px solid #1A1A1A',
      borderRadius: '20px 5px 18px 8px / 6px 22px 7px 20px',
      boxShadow: '4px 5px 0 rgba(0,0,0,0.1)',
      position: 'relative',
    }}>
      <svg style={{ position: 'absolute', top: 12, right: 14 }} width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6 Q22 8 22 16 Q22 24 16 26 Q10 24 10 16 Q10 8 16 6Z" stroke="#1A1A1A" strokeWidth="1.5" fill="#FFE066" strokeLinecap="round" />
        <circle cx="14" cy="14" r="1" fill="#1A1A1A" /><circle cx="18" cy="14" r="1" fill="#1A1A1A" />
        <path d="M13 18 Q16 20 19 18" stroke="#1A1A1A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
      <div style={{ fontSize: 14, letterSpacing: 1 }}>♪ ~ now playing ~ ♪</div>
      <div style={{ fontSize: 30, fontWeight: 700, marginTop: 8, lineHeight: 1.05 }}>{C2.title}</div>
      <div style={{ fontSize: 16, marginTop: 4 }}>by {C2.artist}</div>
      <div style={{ marginTop: 14, height: 14, position: 'relative' }}>
        <svg width="100%" height="14" viewBox="0 0 280 14" preserveAspectRatio="none">
          <path d="M2 7 Q70 4, 140 7 T278 7" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M2 7 Q40 5, 80 7 T174 7" stroke="#FF6B6B" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="174" cy="7" r="5" fill="#FF6B6B" stroke="#1A1A1A" strokeWidth="1.5" />
        </svg>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginTop: 4 }}>
        <span>2:14</span><span>3:42</span>
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 14 }}>
        {['◁', '▶ play!', '▷'].map((c, i) => (
          <button key={i} style={{
            background: i === 1 ? '#FFE066' : '#FFFCF5',
            border: '2px solid #1A1A1A', borderRadius: i === 1 ? '999px / 50%' : '999px / 60%',
            padding: i === 1 ? '8px 20px' : '8px 14px',
            fontSize: i === 1 ? 18 : 16, fontFamily: 'inherit', cursor: 'pointer',
            transform: `rotate(${i === 0 ? -2 : i === 2 ? 2 : 0}deg)`,
          }}>{c}</button>
        ))}
      </div>
    </div>
  );
}

// Append to existing STYLES
window.STYLES = (window.STYLES || []).concat([
  { id: 'y2k',        name: 'Y2K 千禧未来',     desc: '糖果渐变、塑料光泽、千禧风',           Comp: StyleY2K },
  { id: 'watercolor', name: 'Watercolor 水彩',   desc: '柔和水彩晕染、衬线斜体',               Comp: StyleWatercolor },
  { id: 'vapor',      name: 'Vaporwave 蒸汽波',  desc: '紫粉夕阳网格、80s 复古未来',           Comp: StyleVapor },
  { id: 'mesh',       name: 'Gradient Mesh 网格', desc: '柔和模糊渐变球，干净现代',            Comp: StyleMesh },
  { id: 'terminal',   name: 'Terminal 终端',     desc: '命令行、等宽字体、绿色字符',           Comp: StyleTerminal },
  { id: 'riso',       name: 'Risograph 油印',    desc: '套色油印、网点、混色叠印',             Comp: StyleRiso },
  { id: 'bento',      name: 'Bento 便当格',      desc: '方块组合、Apple 发布会风',             Comp: StyleBento },
  { id: 'rams',       name: 'Industrial 工业',   desc: 'Dieter Rams、博朗收音机美学',          Comp: StyleRams },
  { id: 'origami',    name: 'Origami 折纸',      desc: '几何折面、和风、暖橙渐变',             Comp: StyleOrigami },
  { id: 'newspaper',  name: 'Newspaper 报纸',    desc: '复古报刊、衬线、双栏',                 Comp: StyleNewspaper },
  { id: 'holo',       name: 'Holographic 全息',  desc: '镭射彩虹渐变、未来感',                 Comp: StyleHolo },
  { id: 'hand',       name: 'Hand-drawn 手绘',   desc: '手写字、粗糙线条、温暖',               Comp: StyleHand },
]);
