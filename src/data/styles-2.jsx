// src/data/styles-2.jsx — 12 more style demo cards (SaaS product).

// MiniProduct is defined in styles.jsx and re-used here.

/* ============== 13. Y2K 千禧 ============== */
// MiniProduct: a tiny demo card used by the 24 styles in styles-2/3.jsx.
// Renders a compact product card using window.PRODUCT and the
// per-style chrome (colors) passed in.
function MiniProduct({ chrome }) {
  return <window.ProductBlocks.MiniProductCard p={window.PRODUCT} chrome={chrome} />;
}

function StyleY2K() {
  return (
    <div style={{
      width: 320, padding: 20, borderRadius: 18,
      background: 'linear-gradient(135deg, #FFB8E0 0%, #C5B8FF 50%, #B8E8FF 100%)',
      fontFamily: '"Trebuchet MS", system-ui, sans-serif', color: '#3D0A2E',
      border: '2px solid #FF4FA8', boxShadow: '0 0 24px rgba(255,79,168,0.4), inset 0 0 16px rgba(255,255,255,0.4)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 8, right: 14, fontSize: 11, color: '#FF4FA8', fontWeight: 800, letterSpacing: 2 }}>✨ Y2K</div>
      <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.5)', text: '#3D0A2E', sub: '#7A2A60', primary: '#FF4FA8', accent: '#5BC8FF', border: '#FF4FA8', isDark: false }} />
    </div>
  );
}

/* ============== 14. Watercolor 水彩 ============== */
function StyleWatercolor() {
  return (
    <div style={{
      width: 320, padding: 20, borderRadius: 14,
      background: '#F8F4ED', fontFamily: 'Georgia, serif', color: '#3D2C1E',
      boxShadow: '0 4px 18px rgba(180,150,120,0.25)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -30, right: -20, width: 120, height: 120, borderRadius: 60, background: 'radial-gradient(circle, rgba(220,180,160,0.5), transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: -20, left: -10, width: 100, height: 100, borderRadius: 50, background: 'radial-gradient(circle, rgba(160,200,180,0.5), transparent 70%)' }} />
      <div style={{ position: 'relative' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.6)', text: '#3D2C1E', sub: '#7B6A5A', primary: '#A07852', accent: '#C26B5B', border: 'rgba(180,150,120,0.4)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 15. Vaporwave 蒸汽波 ============== */
function StyleVapor() {
  return (
    <div style={{
      width: 320, padding: 18, borderRadius: 12,
      background: 'linear-gradient(180deg, #FF6B9D 0%, #C66FBC 50%, #6B8DE3 100%)',
      fontFamily: '"Times New Roman", serif', color: '#fff',
      border: '2px solid #fff', boxShadow: '0 0 30px rgba(255,107,157,0.5)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(0deg, transparent 0%, rgba(0,0,0,0.3) 100%)' }} />
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#FFE0F0', letterSpacing: 2, marginBottom: 10 }}>
          <span>▼ FOLIO.AESTHETIC</span>
          <span>1986</span>
        </div>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.18)', text: '#fff', sub: 'rgba(255,255,255,0.85)', primary: '#FFE0F0', accent: '#FFD600', border: 'rgba(255,255,255,0.5)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 16. Gradient Mesh 网格 ============== */
function StyleMesh() {
  return (
    <div style={{
      width: 320, padding: 20, borderRadius: 18, position: 'relative', overflow: 'hidden',
      background: '#F5F7FA', fontFamily: '-apple-system, sans-serif', color: '#1A2A38',
      boxShadow: '0 6px 24px rgba(100,120,160,0.15)',
    }}>
      <div style={{ position: 'absolute', top: -50, left: -30, width: 200, height: 200, borderRadius: 100, background: 'radial-gradient(circle, #B8D8FF 0%, transparent 70%)', filter: 'blur(20px)' }} />
      <div style={{ position: 'absolute', bottom: -40, right: -20, width: 180, height: 180, borderRadius: 90, background: 'radial-gradient(circle, #D8B8FF 0%, transparent 70%)', filter: 'blur(20px)' }} />
      <div style={{ position: 'relative' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.75)', text: '#1A2A38', sub: '#5A6878', primary: '#3A5878', accent: '#7A8AB5', border: 'rgba(255,255,255,0.8)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 17. Terminal 终端 ============== */
function StyleTerminal() {
  return (
    <div style={{
      width: 320, background: '#0A0A0A', border: '1px solid #1A4A1A',
      fontFamily: '"Courier New", monospace', color: '#00FF66',
      boxShadow: '0 0 20px rgba(0,255,102,0.2)',
    }}>
      <div style={{ background: '#1A1A1A', padding: '6px 12px', display: 'flex', gap: 6, alignItems: 'center', borderBottom: '1px solid #1A4A1A' }}>
        <div style={{ width: 8, height: 8, borderRadius: 4, background: '#FF5F57' }} />
        <div style={{ width: 8, height: 8, borderRadius: 4, background: '#FFBD2E' }} />
        <div style={{ width: 8, height: 8, borderRadius: 4, background: '#28CA42' }} />
        <span style={{ flex: 1, fontSize: 9, color: '#00FF66', letterSpacing: 1 }}>~/folio.app — bash</span>
      </div>
      <div style={{ padding: 16 }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: '#1A1A1A', text: '#00FF66', sub: '#00CC52', primary: '#00FF66', accent: '#00CC52', border: '#1A4A1A', isDark: true }} />
        <div style={{ marginTop: 8, fontSize: 10, color: '#00FF66' }}>$ <span style={{ background: '#00FF66', color: '#0A0A0A', animation: 'blink 1s infinite' }}>█</span></div>
      </div>
    </div>
  );
}

/* ============== 18. Risograph 油印 ============== */
function StyleRiso() {
  return (
    <div style={{
      width: 320, padding: 20, background: '#F0E8D0', position: 'relative', overflow: 'hidden',
      fontFamily: '"Courier New", monospace', color: '#1F1A38',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, rgba(124,91,194,0.15) 1px, transparent 1px)', backgroundSize: '6px 6px' }} />
      <div style={{ position: 'relative' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.5)', text: '#1F1A38', sub: '#3A3A6A', primary: '#7C5BC2', accent: '#E88A5C', border: 'rgba(31,26,56,0.3)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 19. Bento 便当格 ============== */
function StyleBento() {
  return (
    <div style={{
      width: 320, padding: 16, background: '#F5F5F7', borderRadius: 18,
      fontFamily: '-apple-system, sans-serif', color: '#1D1D1F',
      display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'auto auto', gap: 8,
    }}>
      <div style={{ gridColumn: 'span 2', padding: 14, background: '#FFFFFF', borderRadius: 14, boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: '#FFFFFF', text: '#1D1D1F', sub: '#6E6E73', primary: '#FF3D00', accent: '#FF8C42', border: '#E5E5E7', isDark: false }} />
      </div>
      <div style={{ padding: 12, background: '#FF3D00', color: '#fff', borderRadius: 12, fontSize: 11, fontWeight: 700 }}>NEW</div>
      <div style={{ padding: 12, background: '#1D1D1F', color: '#fff', borderRadius: 12, fontSize: 11, fontWeight: 700, textAlign: 'right' }}>12k+</div>
    </div>
  );
}

/* ============== 20. Industrial 工业 ============== */
function StyleRams() {
  return (
    <div style={{
      width: 320, padding: 22, background: '#E8E6E0', borderRadius: 4,
      fontFamily: 'Helvetica, "Helvetica Neue", sans-serif', color: '#1A1A1A',
      border: '1px solid #1A1A1A',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1A1A1A', paddingBottom: 8, marginBottom: 12, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>
        <span>BRAUN · FOLIO</span><span>SK4</span>
      </div>
      <MiniProduct chrome={{ bg: 'transparent', surface: '#FFFFFF', text: '#1A1A1A', sub: '#5A5A5A', primary: '#1A1A1A', accent: '#C84838', border: '#1A1A1A', isDark: false }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 9, color: '#5A5A5A' }}>
        <span>01 / 04</span><span>— Dieter Rams —</span>
      </div>
    </div>
  );
}

/* ============== 21. Origami 折纸 ============== */
function StyleOrigami() {
  return (
    <div style={{
      width: 320, padding: 20, borderRadius: 12,
      background: 'linear-gradient(135deg, #FFE4C8 0%, #F5C896 100%)',
      fontFamily: '-apple-system, sans-serif', color: '#3D2010',
      position: 'relative', overflow: 'hidden',
      boxShadow: '0 6px 18px rgba(180,100,40,0.2)',
    }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 60, height: 60, background: 'linear-gradient(135deg, transparent 50%, #D88848 50%)' }} />
      <div style={{ position: 'relative' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.5)', text: '#3D2010', sub: '#7B4A28', primary: '#B84418', accent: '#D88848', border: 'rgba(180,100,40,0.3)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 22. Newspaper 报纸 ============== */
function StyleNewspaper() {
  return (
    <div style={{
      width: 320, padding: 18, background: '#F0EAD8',
      fontFamily: 'Georgia, "Times New Roman", serif', color: '#0F0F0F',
      border: '2px solid #0F0F0F',
    }}>
      <div style={{ textAlign: 'center', borderBottom: '2px solid #0F0F0F', paddingBottom: 8, marginBottom: 12 }}>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>THE FOLIO TIMES</div>
        <div style={{ fontSize: 9, fontStyle: 'italic', marginTop: 2 }}>Vol. II · No. 12 · SaaS Edition</div>
      </div>
      <MiniProduct chrome={{ bg: 'transparent', surface: 'transparent', text: '#0F0F0F', sub: '#3A3A3A', primary: '#0F0F0F', accent: '#8B2828', border: '#0F0F0F', isDark: false }} />
    </div>
  );
}

/* ============== 23. Holographic 全息 ============== */
function StyleHolo() {
  return (
    <div style={{
      width: 320, padding: 20, borderRadius: 16,
      background: 'linear-gradient(135deg, #F5E0FF 0%, #E0F0FF 25%, #E0FFE5 50%, #FFF5E0 75%, #FFE0F0 100%)',
      backgroundSize: '200% 200%',
      fontFamily: '-apple-system, sans-serif', color: '#1F1A38',
      border: '1px solid rgba(255,255,255,0.6)',
      boxShadow: '0 8px 24px rgba(180,140,255,0.3), inset 0 0 20px rgba(255,255,255,0.4)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.55)', text: '#1F1A38', sub: '#5A4A78', primary: '#7C5BC2', accent: '#FF6B9D', border: 'rgba(255,255,255,0.6)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 24. Hand-drawn 手绘 ============== */
function StyleHand() {
  return (
    <div style={{
      width: 320, padding: 20, background: '#FBF5E5', border: '2px dashed #6B5A3A',
      borderRadius: 6, fontFamily: '"Comic Sans MS", "Marker Felt", cursive', color: '#3D2818',
      boxShadow: '4px 4px 0 rgba(107,90,58,0.2)',
    }}>
      <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.5)', text: '#3D2818', sub: '#6B5A3A', primary: '#B84418', accent: '#5C7340', border: 'rgba(107,90,58,0.4)', isDark: false }} />
    </div>
  );
}

const STYLES_2 = [
  { id: 'y2k',        name: 'Y2K 千禧',          desc: '泡泡糖粉蓝、镭射、未来怀旧',          Comp: StyleY2K,        layout: 'flow', theme: { bg: '#FFE0F0', surface: 'rgba(255,255,255,0.6)', text: '#3D0A2E', sub: '#7A2A60', primary: '#FF4FA8', accent: '#5BC8FF', border: '#FF4FA8', isDark: false, fontFamily: '"Trebuchet MS", system-ui, sans-serif' } },
  { id: 'watercolor', name: 'Watercolor 水彩',   desc: '水彩晕染、纸感、柔边',                Comp: StyleWatercolor, layout: 'flow', theme: { bg: '#F8F4ED', surface: 'rgba(255,255,255,0.7)', text: '#3D2C1E', sub: '#7B6A5A', primary: '#A07852', accent: '#C26B5B', border: 'rgba(180,150,120,0.4)', isDark: false, fontFamily: 'Georgia, serif' } },
  { id: 'vapor',      name: 'Vaporwave 蒸汽波',  desc: '紫粉夕阳网格、80s 复古未来',           Comp: StyleVapor,      layout: 'split-hero',   Variants: null, theme: { bg: '#C66FBC', surface: 'rgba(255,255,255,0.15)', text: '#FFFFFF', sub: 'rgba(255,224,240,0.9)', primary: '#FFE0F0', accent: '#FFD600', border: 'rgba(255,255,255,0.45)', isDark: false, fontFamily: '"Times New Roman", serif' } },
  { id: 'mesh',       name: 'Gradient Mesh 网格', desc: '柔和模糊渐变球，干净现代',            Comp: StyleMesh,       layout: 'flow', theme: { bg: '#F5F7FA', surface: 'rgba(255,255,255,0.85)', text: '#1A2A38', sub: '#5A6878', primary: '#3A5878', accent: '#7A8AB5', border: 'rgba(255,255,255,0.8)', isDark: false, fontFamily: '-apple-system, sans-serif' } },
  { id: 'terminal',   name: 'Terminal 终端',     desc: '命令行、等宽字体、绿色字符',           Comp: StyleTerminal,   layout: 'flow', theme: { bg: '#0A0A0A', surface: '#1A1A1A', text: '#00FF66', sub: '#00CC52', primary: '#00FF66', accent: '#00CC52', border: '#1A4A1A', isDark: true, fontFamily: '"Courier New", monospace' } },
  { id: 'riso',       name: 'Risograph 油印',    desc: '套色油印、网点、混色叠印',             Comp: StyleRiso,       layout: 'flow', theme: { bg: '#F0E8D0', surface: 'rgba(255,255,255,0.5)', text: '#1F1A38', sub: '#3A3A6A', primary: '#7C5BC2', accent: '#E88A5C', border: 'rgba(31,26,56,0.3)', isDark: false, fontFamily: '"Courier New", monospace' } },
  { id: 'bento',      name: 'Bento 便当格',      desc: '方块组合、Apple 发布会风',             Comp: StyleBento,      layout: 'bento',        Variants: null, theme: { bg: '#F5F5F7', surface: '#FFFFFF', text: '#1D1D1F', sub: '#6E6E73', primary: '#1D1D1F', accent: '#FF3D00', border: '#E5E5E7', isDark: false, fontFamily: '-apple-system, sans-serif' } },
  { id: 'rams',       name: 'Industrial 工业',   desc: 'Dieter Rams、博朗收音机美学',          Comp: StyleRams,       layout: 'flow', theme: { bg: '#E8E6E0', surface: '#FFFFFF', text: '#1A1A1A', sub: '#5A5A5A', primary: '#1A1A1A', accent: '#C84838', border: '#1A1A1A', isDark: false, fontFamily: 'Helvetica, sans-serif' } },
  { id: 'origami',    name: 'Origami 折纸',      desc: '几何折面、和风、暖橙渐变',             Comp: StyleOrigami,    layout: 'flow', theme: { bg: '#F5C896', surface: 'rgba(255,255,255,0.5)', text: '#3D2010', sub: '#7B4A28', primary: '#B84418', accent: '#D88848', border: 'rgba(180,100,40,0.3)', isDark: false, fontFamily: '-apple-system, sans-serif' } },
  { id: 'newspaper',  name: 'Newspaper 报纸',    desc: '复古报刊、衬线、双栏',                 Comp: StyleNewspaper,  layout: 'flow', theme: { bg: '#F0EAD8', surface: '#FAF5EA', text: '#0F0F0F', sub: '#3A3A3A', primary: '#0F0F0F', accent: '#8B2828', border: '#0F0F0F', isDark: false, fontFamily: 'Georgia, serif' } },
  { id: 'holo',       name: 'Holographic 全息',  desc: '镭射彩虹渐变、未来感',                 Comp: StyleHolo,       layout: 'full-bleed',   Variants: null, theme: { bg: '#F0E5FF', surface: 'rgba(255,255,255,0.5)', text: '#1F1A38', sub: '#5A4A78', primary: '#7C5BC2', accent: '#FF6B9D', border: 'rgba(255,255,255,0.7)', isDark: false, fontFamily: '-apple-system, sans-serif' } },
  { id: 'hand',       name: 'Hand-drawn 手绘',   desc: '手写字、粗糙线条、温暖',               Comp: StyleHand,       layout: 'flow', theme: { bg: '#FBF5E5', surface: 'rgba(255,255,255,0.6)', text: '#3D2818', sub: '#6B5A3A', primary: '#B84418', accent: '#5C7340', border: 'rgba(107,90,58,0.4)', isDark: false, fontFamily: '"Comic Sans MS", cursive' } },
];

window.STYLES = (window.STYLES || []).concat(STYLES_2);