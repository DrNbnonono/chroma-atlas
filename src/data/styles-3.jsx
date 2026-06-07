// src/data/styles-3.jsx — final 12 style demo cards (SaaS product).

// MiniProduct is defined in styles.jsx and re-used here.

/* ============== 25. Sticker 贴纸 ============== */
// MiniProduct: a tiny demo card used by the 24 styles in styles-2/3.jsx.
// Renders a compact product card using window.PRODUCT and the
// per-style chrome (colors) passed in.
function MiniProduct({ chrome }) {
  return <window.ProductBlocks.MiniProductCard p={window.PRODUCT} chrome={chrome} />;
}

function StyleSticker() {
  return (
    <div style={{
      width: 320, padding: 18, background: '#A8D8FF', borderRadius: 14,
      fontFamily: '"Comic Sans MS", system-ui, sans-serif', color: '#0F2848',
      position: 'relative', overflow: 'visible',
    }}>
      <div style={{
        position: 'absolute', top: -8, right: 14,
        padding: '4px 10px', background: '#FFD93D', border: '2px solid #0F2848', borderRadius: 4,
        fontSize: 9, fontWeight: 800, transform: 'rotate(8deg)',
        boxShadow: '2px 2px 0 #0F2848',
      }}>NEW!</div>
      <div style={{ background: '#FFFFFF', padding: 14, borderRadius: 10, border: '2px solid #0F2848', boxShadow: '4px 4px 0 #0F2848' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: '#FFFFFF', text: '#0F2848', sub: '#3A5878', primary: '#FF6B6B', accent: '#FFD93D', border: '#0F2848', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 26. Bauhaus 包豪斯 ============== */
function StyleBauhaus() {
  return (
    <div style={{
      width: 320, padding: 18, background: '#F0E8D8', position: 'relative', overflow: 'hidden',
      fontFamily: '"Futura", "Helvetica Neue", sans-serif', color: '#0F0F0F',
      border: '1px solid #0F0F0F',
    }}>
      <div style={{ position: 'absolute', top: 8, left: 8, width: 40, height: 40, borderRadius: 20, background: '#C84838' }} />
      <div style={{ position: 'absolute', bottom: 8, right: 8, width: 30, height: 30, background: '#3D7BD4' }} />
      <div style={{ position: 'relative' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.5)', text: '#0F0F0F', sub: '#3A3A3A', primary: '#C84838', accent: '#F5B83A', border: 'rgba(0,0,0,0.2)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 27. Embossed Metal 金属 ============== */
function StyleMetal() {
  return (
    <div style={{
      width: 320, padding: 20, borderRadius: 12,
      background: 'linear-gradient(180deg, #4A4A4A 0%, #2A2A2A 50%, #1A1A1A 100%)',
      fontFamily: '"Courier New", monospace', color: '#F5E6B8',
      border: '2px solid #6B6B6B', boxShadow: '0 6px 18px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'repeating-linear-gradient(180deg, transparent 0, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px)' }} />
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#F5B83A', letterSpacing: 1, marginBottom: 10 }}>
          <span>■ FOLIO.METAL</span><span>No. 026</span>
        </div>
        <MiniProduct chrome={{ bg: 'transparent', surface: '#1A1A1A', text: '#F5E6B8', sub: '#8A7B58', primary: '#D4B25F', accent: '#F5B83A', border: '#6B6B6B', isDark: true }} />
      </div>
    </div>
  );
}

/* ============== 28. Zine 独立刊物 ============== */
function StyleZine() {
  return (
    <div style={{
      width: 320, padding: 20, background: '#F0E8D0', position: 'relative', overflow: 'hidden',
      fontFamily: '"Courier New", monospace', color: '#0F0F0F', border: '2px solid #0F0F0F',
    }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '40%', background: 'rgba(124,91,194,0.35)', mixBlendMode: 'multiply' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60%', height: '40%', background: 'rgba(232,138,92,0.4)', mixBlendMode: 'multiply' }} />
      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: -1, marginBottom: 8, lineHeight: 1 }}>FOLIO<br/>ZINE</div>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.5)', text: '#0F0F0F', sub: '#1A1438', primary: '#0F0F0F', accent: '#C84838', border: 'rgba(0,0,0,0.3)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 29. Tactile 暗夜质感卡 ============== */
function StyleTactile() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 14,
      background: 'linear-gradient(180deg, #2A2018 0%, #1A1208 100%)',
      fontFamily: '-apple-system, sans-serif', color: '#F5E5D5',
      border: '1px solid #3A2C22', boxShadow: '0 8px 28px rgba(0,0,0,0.5), inset 0 1px 0 rgba(245,180,120,0.15)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 10, right: 10, width: 80, height: 80, borderRadius: 40, background: 'radial-gradient(circle, rgba(232,74,31,0.4), transparent 70%)', filter: 'blur(10px)' }} />
      <div style={{ position: 'relative' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.05)', text: '#F5E5D5', sub: 'rgba(245,180,120,0.7)', primary: '#E8A057', accent: '#E84A1F', border: 'rgba(245,180,120,0.2)', isDark: true }} />
      </div>
    </div>
  );
}

/* ============== 30. Cassette 磁带 ============== */
function StyleTape() {
  return (
    <div style={{
      width: 320, padding: 18, background: 'linear-gradient(180deg, #D8B898 0%, #B89878 100%)',
      fontFamily: '"Courier New", monospace', color: '#3D2010',
      border: '2px solid #3D2010', position: 'relative',
    }}>
      <div style={{ background: '#FFFFFF', padding: 8, marginBottom: 10, border: '1px solid #3D2010', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 9, letterSpacing: 2 }}>SIDE A</span>
        <span style={{ fontSize: 9, fontStyle: 'italic' }}>FOLIO.MIX.04</span>
      </div>
      <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.3)', text: '#3D2010', sub: '#7B4A28', primary: '#3D2010', accent: '#B84418', border: 'rgba(61,32,16,0.4)', isDark: false }} />
    </div>
  );
}

/* ============== 31. Mondrian 蒙德里安 ============== */
function StyleMondrian() {
  return (
    <div style={{
      width: 320, height: 240, padding: 0, background: '#FFFFFF', position: 'relative',
      fontFamily: 'Helvetica, sans-serif', color: '#1F1A38',
      border: '3px solid #1F1A38',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '55%', background: '#FF3D00' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '30%', background: '#FFD93D' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '50%', width: '30%', height: '45%', background: '#4D96FF' }} />
      <div style={{ position: 'absolute', top: '30%', right: 0, width: '50%', height: '70%', background: '#FFFFFF', padding: 14, border: '3px solid #1F1A38', borderRight: 0, borderBottom: 0 }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,232,124,0.5)', text: '#1F1A38', sub: '#3A3A6A', primary: '#FF6B6B', accent: '#5BC8FF', border: 'rgba(31,26,56,0.3)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 32. Soft UI 柔光卡片 ============== */
function StyleSoftUI() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 22,
      background: '#F4F6FA', fontFamily: 'Inter, -apple-system, sans-serif', color: '#0F172A',
      boxShadow: '8px 8px 16px #DCE0E8, -8px -8px 16px #FFFFFF',
    }}>
      <MiniProduct chrome={{ bg: 'transparent', surface: '#FFFFFF', text: '#0F172A', sub: '#64748B', primary: '#6366F1', accent: '#F472B6', border: '#E2E8F0', isDark: false }} />
    </div>
  );
}

/* ============== 33. Frosted Dark 暗黑磨砂 ============== */
function StyleFrosted() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 20,
      background: 'linear-gradient(135deg, #2A1A4E 0%, #1A0A3E 100%)',
      fontFamily: '-apple-system, sans-serif', color: '#F0E5FF',
      border: '1px solid rgba(155,91,255,0.3)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 20%, rgba(155,91,255,0.3), transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,107,157,0.3), transparent 50%)' }} />
      <div style={{ position: 'relative' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.08)', text: '#F0E5FF', sub: 'rgba(240,229,255,0.6)', primary: '#9B5BFF', accent: '#FF6B9D', border: 'rgba(255,255,255,0.15)', isDark: true }} />
      </div>
    </div>
  );
}

/* ============== 34. Doodle 笔记涂鸦 ============== */
function StyleDoodle() {
  return (
    <div style={{
      width: 320, padding: 20, position: 'relative', fontFamily: '"Comic Sans MS", "Marker Felt", cursive', color: '#1F1A38',
      background: '#FBFBF2', border: '2px solid #1F1A38',
      backgroundImage:
        'repeating-linear-gradient(0deg, transparent 0, transparent 22px, #B8C8E0 22px, #B8C8E0 23px)',
      backgroundPosition: '0 12px',
    }}>
      <div style={{ background: '#FBFBF2', position: 'relative', zIndex: 1 }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,232,124,0.5)', text: '#1F1A38', sub: '#3A3A6A', primary: '#FF6B6B', accent: '#5BC8FF', border: 'rgba(31,26,56,0.3)', isDark: false }} />
      </div>
    </div>
  );
}

/* ============== 35. Swiss 瑞士网格 ============== */
function StyleSwiss() {
  return (
    <div style={{
      width: 320, padding: 16, background: '#FFFFFF',
      fontFamily: 'Helvetica, Arial, sans-serif', color: '#0A0A0A',
      display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 0,
    }}>
      <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #0A0A0A', paddingBottom: 4, marginBottom: 10 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2 }}>FOLIO / 2026</span>
        <span style={{ fontSize: 10, color: '#737373' }}>01</span>
      </div>
      <div style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <window.ProductBlocks.BrandBlock p={window.PRODUCT} chrome={{ bg: 'transparent', surface: '#FFFFFF', text: '#0A0A0A', sub: '#737373', primary: '#0A0A0A', accent: '#FF3D00', border: '#E5E5E5', isDark: false }} size={26} />
        <div style={{ fontSize: 22, fontWeight: 800, color: '#0A0A0A', lineHeight: 1.05, letterSpacing: -0.5 }}>{window.PRODUCT.tagline}</div>
        <div style={{ fontSize: 11, color: '#737373', lineHeight: 1.5 }}>{window.PRODUCT.subhead.slice(0, 90)}…</div>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {window.PRODUCT.features.slice(0, 6).map((f, i) => (
            <span key={i} style={{ fontSize: 9, padding: '3px 8px', background: '#0A0A0A', color: '#FFFFFF', fontWeight: 700, letterSpacing: 1 }}>{f.name.toUpperCase()}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== 36. Aurora 极光辉光 ============== */
function StyleAurora() {
  return (
    <div style={{
      width: 320, padding: 22, borderRadius: 16, position: 'relative', overflow: 'hidden',
      background: '#0A1A2E', fontFamily: '-apple-system, sans-serif', color: '#E5F5F0',
      border: '1px solid rgba(91,255,181,0.2)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
    }}>
      <div style={{ position: 'absolute', top: -40, left: -40, width: 200, height: 200, borderRadius: 100, background: 'radial-gradient(circle, rgba(91,255,181,0.4), transparent 70%)', filter: 'blur(20px)' }} />
      <div style={{ position: 'absolute', bottom: -40, right: -40, width: 200, height: 200, borderRadius: 100, background: 'radial-gradient(circle, rgba(155,91,255,0.4), transparent 70%)', filter: 'blur(20px)' }} />
      <div style={{ position: 'relative' }}>
        <MiniProduct chrome={{ bg: 'transparent', surface: 'rgba(255,255,255,0.05)', text: '#E5F5F0', sub: 'rgba(255,255,255,0.7)', primary: '#5BFFB5', accent: '#9B5BFF', border: 'rgba(255,255,255,0.1)', isDark: true }} />
      </div>
    </div>
  );
}

const STYLES_3 = [
  { id: 'sticker',  name: 'Sticker 贴纸',         desc: '贴纸错位、卡通高光',                   Comp: StyleSticker,  layout: 'flow', theme: { bg: '#A8D8FF', surface: '#FFFFFF', text: '#0F2848', sub: '#3A5878', primary: '#FF6B6B', accent: '#FFD93D', border: '#0F2848', isDark: false, fontFamily: '"Comic Sans MS", system-ui, sans-serif' } },
  { id: 'bauhaus',  name: 'Bauhaus 包豪斯',       desc: '原色几何、形式追随功能',                 Comp: StyleBauhaus,  layout: 'flow', theme: { bg: '#F0E8D8', surface: 'rgba(255,255,255,0.5)', text: '#0F0F0F', sub: '#3A3A3A', primary: '#C84838', accent: '#F5B83A', border: 'rgba(0,0,0,0.2)', isDark: false, fontFamily: '"Futura", "Helvetica Neue", sans-serif' } },
  { id: 'metal',    name: 'Embossed Metal 金属', desc: '金属拉丝、内嵌液晶屏',         Comp: StyleMetal,    layout: 'flow', theme: { bg: '#1A1A1A', surface: '#1A1A1A', text: '#F5E6B8', sub: '#8A7B58', primary: '#D4B25F', accent: '#F5B83A', border: '#6B6B6B', isDark: true, fontFamily: '"Courier New", monospace' } },
  { id: 'zine',     name: 'Zine 独立刊物',     desc: '叠印油墨、紫橙混色、排版',       Comp: StyleZine,     layout: 'flow', theme: { bg: '#F0E8D0', surface: 'rgba(255,255,255,0.5)', text: '#0F0F0F', sub: '#1A1438', primary: '#0F0F0F', accent: '#C84838', border: 'rgba(0,0,0,0.3)', isDark: false, fontFamily: '"Courier New", monospace' } },
  { id: 'tactile',  name: 'Tactile 暗夜质感卡', desc: '深色 + 暖光晕，有质量感',       Comp: StyleTactile,  layout: 'flow', theme: { bg: '#1A1208', surface: 'rgba(255,255,255,0.05)', text: '#F5E5D5', sub: 'rgba(245,180,120,0.7)', primary: '#E8A057', accent: '#E84A1F', border: 'rgba(245,180,120,0.2)', isDark: true, fontFamily: '-apple-system, sans-serif' } },
  { id: 'tape',     name: 'Cassette 磁带',     desc: '复古卡带，标签字体、卷轴',       Comp: StyleTape,     layout: 'flow', theme: { bg: '#D8B898', surface: 'rgba(255,255,255,0.3)', text: '#3D2010', sub: '#7B4A28', primary: '#3D2010', accent: '#B84418', border: 'rgba(61,32,16,0.4)', isDark: false, fontFamily: '"Courier New", monospace' } },
  { id: 'mondrian', name: 'Mondrian 蒙德里安', desc: '红黄蓝色块、黑粗线分割',         Comp: StyleMondrian, layout: 'flow', theme: { bg: '#FFFFFF', surface: 'rgba(255,232,124,0.5)', text: '#1F1A38', sub: '#3A3A6A', primary: '#FF3D00', accent: '#5BC8FF', border: 'rgba(31,26,56,0.3)', isDark: false, fontFamily: 'Helvetica, sans-serif' } },
  { id: 'softui',   name: 'Soft UI 柔光卡片',  desc: '现代柔和 SaaS 卡片风',           Comp: StyleSoftUI,   layout: 'split-hero',   Variants: null, theme: { bg: '#F4F6FA', surface: '#FFFFFF', text: '#0F172A', sub: '#64748B', primary: '#6366F1', accent: '#F472B6', border: '#E2E8F0', isDark: false, fontFamily: 'Inter, -apple-system, sans-serif' } },
  { id: 'frosted',  name: 'Frosted Dark 暗黑磨砂', desc: '深紫蓝磨砂玻璃 + 渐变高亮',  Comp: StyleFrosted,  layout: 'flow', theme: { bg: '#1A0A3E', surface: 'rgba(255,255,255,0.08)', text: '#F0E5FF', sub: 'rgba(240,229,255,0.6)', primary: '#9B5BFF', accent: '#FF6B9D', border: 'rgba(255,255,255,0.15)', isDark: true, fontFamily: '-apple-system, sans-serif' } },
  { id: 'doodle',   name: 'Doodle 笔记涂鸦',   desc: '横线笔记本、手写、彩色高光',     Comp: StyleDoodle,   layout: 'flow', theme: { bg: '#FBFBF2', surface: 'rgba(255,232,124,0.5)', text: '#1F1A38', sub: '#3A3A6A', primary: '#FF6B6B', accent: '#5BC8FF', border: 'rgba(31,26,56,0.3)', isDark: false, fontFamily: '"Comic Sans MS", "Marker Felt", cursive' } },
  { id: 'swiss',    name: 'Swiss 瑞士网格',    desc: '严格 12 栏、留白、信息层级',     Comp: StyleSwiss,    layout: 'flow', theme: { bg: '#FFFFFF', surface: '#FFFFFF', text: '#0A0A0A', sub: '#737373', primary: '#0A0A0A', accent: '#FF3D00', border: '#E5E5E5', isDark: false, fontFamily: 'Helvetica, Arial, sans-serif' } },
  { id: 'aurora',   name: 'Aurora 极光辉光',   desc: '深夜极光辉光、流光渐变',         Comp: StyleAurora,   layout: 'flow', theme: { bg: '#0A1A2E', surface: 'rgba(255,255,255,0.05)', text: '#E5F5F0', sub: 'rgba(255,255,255,0.7)', primary: '#5BFFB5', accent: '#9B5BFF', border: 'rgba(255,255,255,0.1)', isDark: true, fontFamily: '-apple-system, sans-serif' } },
];

window.STYLES = (window.STYLES || []).concat(STYLES_3);