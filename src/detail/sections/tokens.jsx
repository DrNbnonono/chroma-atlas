// src/detail/sections/tokens.jsx — the tokens section of a detail page.
// For palettes: 8 color role cards + on-bg sample + button + status bar.
// For styles:   3 mini-cards with typography / color / motion rules.

function SectionTitle({ index, title, chrome }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <div style={{ width: 6, height: 6, borderRadius: 3, background: chrome.accent }} />
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: chrome.accent, textTransform: 'uppercase', fontVariantNumeric: 'tabular-nums' }}>
        {String(index).padStart(2, '0')}
      </div>
      <div style={{ fontSize: 22, fontWeight: 600, color: chrome.text, letterSpacing: -0.3 }}>{title}</div>
      <div style={{ flex: 1, height: 1, background: chrome.border, marginLeft: 8 }} />
    </div>
  );
}

function DetailTokens({ item, kind, chrome }) {
  if (kind === 'palette') return <PaletteTokens p={item} chrome={chrome} />;
  return <StyleTokens st={item} chrome={chrome} />;
}

function PaletteTokens({ p, chrome }) {
  const roles = [
    { name: 'bg',      val: p.bg,      desc: '页面底色' },
    { name: 'surface', val: p.surface, desc: '卡片表面' },
    { name: 'text',    val: p.text,    desc: '主要文字' },
    { name: 'sub',     val: p.sub,     desc: '次级文字' },
    { name: 'primary', val: p.primary, desc: '主色 / CTA' },
    { name: 'accent',  val: p.accent,  desc: '强调点缀' },
    { name: 'border',  val: p.border,  desc: '描边/分隔' },
    { name: 'text-on-bg', val: p.text, desc: '底色上的文字', onBg: p.bg },
  ];
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
        {roles.map((r, i) => (
          <div key={i} style={{ background: chrome.surface, border: `1px solid ${chrome.border}`, borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ height: 80, background: r.val, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              {r.onBg ? (
                <span style={{ fontSize: 18, fontWeight: 600, color: r.val, fontFamily: 'monospace' }}>Aa</span>
              ) : (
                <span style={{ fontSize: 11, color: r.val, opacity: 0.35, fontFamily: 'monospace' }}>{r.val}</span>
              )}
            </div>
            <div style={{ padding: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: chrome.text }}>{r.name}</span>
                <span style={{ fontSize: 10, color: chrome.sub, fontFamily: 'monospace' }}>{r.val}</span>
              </div>
              <div style={{ fontSize: 10, color: chrome.sub, marginTop: 2 }}>{r.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, padding: 16, background: chrome.surface, border: `1px solid ${chrome.border}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <button style={{ background: p.primary, color: p.bg, padding: '10px 20px', borderRadius: 999, border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>▶ Play</button>
        <button style={{ background: 'transparent', color: p.text, padding: '10px 20px', borderRadius: 999, border: `1px solid ${p.border}`, fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>+ Add to library</button>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, flex: 1, maxWidth: 320, minWidth: 200 }}>
          <div style={{ flex: 1, height: 4, background: p.border, borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ width: '62%', height: '100%', background: p.primary }} />
          </div>
          <span style={{ fontSize: 11, color: p.sub, fontVariantNumeric: 'tabular-nums' }}>2:14 / 3:42</span>
        </div>
      </div>
    </div>
  );
}

function StyleTokens({ st, chrome }) {
  const rules = [
    { title: 'Typography', icon: 'Aa', bullets: inferType(st) },
    { title: 'Color Roles', icon: '◐', bullets: inferColors(st) },
    { title: 'Motion', icon: '↯', bullets: inferMotion(st) },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
      {rules.map((r, i) => (
        <div key={i} style={{ background: chrome.surface, border: `1px solid ${chrome.border}`, borderRadius: 10, padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: chrome.accent + '22', color: chrome.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>{r.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: chrome.text, letterSpacing: 0.3 }}>{r.title}</div>
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: chrome.text, lineHeight: 1.7 }}>
            {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function inferType(st) {
  const map = {
    cyber:     ['等宽 monospace', '大字重、字距 2', '强调色阴影发光'],
    glass:     ['系统 sans-serif', '中字重、字距 0', '高亮透明白'],
    memphis:   ['几何 sans', '粗体 700 + 标题大', '不规则字距与方向'],
    pixel:     ['等宽 monospace', '统一字号、统一大写', '无抗锯齿'],
    bento:     ['系统 sans-serif', 'SF Pro 风，字距 -0.3', '字号阶梯清晰'],
    editorial: ['Georgia 衬线', '正标题斜体、栏间距宽', '首字母 drop-cap'],
    clay:      ['系统 sans-serif', '粗体 700 + 圆角', '柔和阴影层次'],
    vapor:     ['Times 衬线 + 等宽', '斜体标题、装饰线', '全大写 + 日式符号'],
    holo:      ['系统 sans-serif', '渐变填充文字', '彩虹色谱'],
    softui:    ['Inter / SF Pro', '中字重、字距 -0.2', '清晰的字号层级'],
  };
  return map[st.id] || ['系统 sans-serif', '字重 500-700', '字距 0-0.2'];
}
function inferColors(st) {
  const map = {
    cyber:     ['霓虹紫粉为主、青色辅助', '高对比 + 发光描边', '深色背景上叠加扫描线'],
    glass:     ['半透明白 + 彩色渐变', '高模糊 backdropFilter', '内阴影 + 1px 透明边'],
    memphis:   ['80s 大胆原色', '强对比、纯色块', '黑色粗描边 + 错位阴影'],
    pixel:     ['4 色限制调色板', '硬边、无渐变', '点阵 8x8 网格'],
    bento:     ['白底 + 1 张强调图', '柔和阴影分层', '圆角 12-16px'],
    editorial: ['纸色 + 黑墨 + 1 强调色', '高对比、纸纹感', '细线分割'],
    clay:      ['暖色 + 高光', '双重 inset 阴影模拟光', '无硬边'],
    vapor:     ['紫粉青夕阳', '霓虹渐变', '复古日本符号'],
    holo:      ['彩虹多色', 'conic / linear 渐变', '透明叠加'],
    softui:    ['白 + 1 强调色', '极柔阴影', '渐变与圆角'],
  };
  return map[st.id] || ['主色 + 中性', '60-30-10 分配', '中等对比'];
}
function inferMotion(st) {
  const map = {
    cyber:     ['无缓动、瞬时切换', '霓虹闪烁 @ 0.5s', '扫描线循环动画'],
    glass:     ['200-300ms ease-out', '渐显 + 上滑', '按钮按下轻微缩放'],
    memphis:   ['弹跳 cubic-bezier', '元素入场旋转', '0 描边跳跃'],
    pixel:     ['离散帧动画', '无缓动', '字符块切换'],
    bento:     ['350ms ease-in-out', '缩放 + 透明度', '内容入场按序错峰'],
    editorial: ['600ms 缓入', '栏宽过渡', '翻页感'],
    clay:      ['按下 scale(0.97)', '弹簧回弹', '光晕渐变'],
    vapor:     ['慢速 800ms 渐变', '网格滚动', '淡入淡出'],
    holo:      ['连续渐变扫描', '鼠标交互式倾斜', '高光追随'],
    softui:    ['250ms ease-out', '缩放 + 阴影联动', '按下内阴影切换'],
  };
  return map[st.id] || ['200-400ms 缓入', '微缩放', '透明度过渡'];
}

window.DetailTokens = DetailTokens;
window.SectionTitle = SectionTitle;
