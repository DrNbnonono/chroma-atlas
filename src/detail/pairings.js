// pairings.js — curated recommendations of palette ↔ style pairings.
// Hand-picked ~50 entries from 44 palettes × 36 styles = 1584 total combos
// (we surface only the strongest aesthetic matches; non-exhaustive by design).
//
// Each entry: { paletteId, styleId, reason }
//  - reason: short sentence explaining why these two go well together
//
// Lookups: window.PAIRINGS.byPalette[id] and .byStyle[id] for O(1) reads from
// the detail view.

const PAIRINGS = [
  // ===== Morandi 莫兰迪 (×5) =====
  { paletteId: 'morandi', styleId: 'editorial', reason: '纸感米色 + 衬线排版，杂志内页' },
  { paletteId: 'morandi', styleId: 'minimal',   reason: '灰调高级感同极简黑白气质一致' },
  { paletteId: 'morandi', styleId: 'newspaper', reason: '复古印刷灰 + 报纸双栏' },
  { paletteId: 'morandi', styleId: 'rams',      reason: '柔和莫兰迪同博朗的克制哲学' },
  { paletteId: 'morandi', styleId: 'watercolor',reason: '灰调 + 水彩晕染都走低饱和' },

  // ===== Warm Sand 暖沙橙 (×4) =====
  { paletteId: 'sand', styleId: 'origami',   reason: '沙漠暖橙同折纸和风暖色' },
  { paletteId: 'sand', styleId: 'clay',      reason: '暖沙 + 黏土 3D 体积感' },
  { paletteId: 'sand', styleId: 'editorial', reason: '沙色 + 杂志印刷非常契合' },
  { paletteId: 'sand', styleId: 'softui',    reason: '温暖 SaaS 卡片配色' },

  // ===== Claude (×4) =====
  { paletteId: 'claude', styleId: 'minimal',  reason: 'Claude 品牌同极简一致' },
  { paletteId: 'claude', styleId: 'editorial',reason: '暖橙 + 杂志刊号风格' },
  { paletteId: 'claude', styleId: 'softui',   reason: '奶油 + 暖橙是经典 SaaS 配色' },
  { paletteId: 'claude', styleId: 'rams',     reason: '克制博朗风' },

  // ===== Monochrome 极简黑白 (×4) =====
  { paletteId: 'mono', styleId: 'brutal',    reason: '纯黑高对比 + 粗野粗体' },
  { paletteId: 'mono', styleId: 'minimal',   reason: '最克制 + 最克制的绝配' },
  { paletteId: 'mono', styleId: 'swiss',     reason: '黑白 + 瑞士网格信息层级' },
  { paletteId: 'mono', styleId: 'editorial', reason: '黑白 + 印刷排版' },

  // ===== Nordic 北欧冷雾 (×4) =====
  { paletteId: 'nordic', styleId: 'minimal',  reason: '冷灰蓝同极简北欧气质' },
  { paletteId: 'nordic', styleId: 'editorial',reason: '冷雾 + 杂志冷静气质' },
  { paletteId: 'nordic', styleId: 'newspaper',reason: '冷色报刊' },
  { paletteId: 'nordic', styleId: 'rams',     reason: '博朗设计同北欧冷调' },

  // ===== Matcha 抹茶 (×3) =====
  { paletteId: 'matcha', styleId: 'origami',  reason: '抹茶 + 折纸和风' },
  { paletteId: 'matcha', styleId: 'clay',     reason: '抹茶 + 黏土 3D 自然系' },
  { paletteId: 'matcha', styleId: 'watercolor',reason: '抹茶 + 水彩晕染' },

  // ===== Sakura 樱花粉 (×3) =====
  { paletteId: 'sakura', styleId: 'watercolor',reason: '樱粉 + 水彩晕染非常日系' },
  { paletteId: 'sakura', styleId: 'y2k',      reason: '柔粉 + 千禧糖果' },
  { paletteId: 'sakura', styleId: 'origami',  reason: '樱粉 + 折纸春日' },

  // ===== Mocha 咖啡 (×3) =====
  { paletteId: 'mocha', styleId: 'tape',     reason: '咖啡棕 + 卡带标签复古' },
  { paletteId: 'mocha', styleId: 'editorial',reason: '咖啡 + 印刷杂志' },
  { paletteId: 'mocha', styleId: 'newspaper',reason: '复古报纸配色' },

  // ===== Oceanic 深海蓝 (×3) =====
  { paletteId: 'oceanic', styleId: 'glass',   reason: '深海青绿 + 毛玻璃流体' },
  { paletteId: 'oceanic', styleId: 'aurora',  reason: '深蓝青 + 极光辉光' },
  { paletteId: 'oceanic', styleId: 'frosted', reason: '深海青绿同暗夜磨砂' },

  // ===== Sunset 日落橘紫 (×3) =====
  { paletteId: 'sunset', styleId: 'vapor',    reason: '橘紫日落同蒸汽波夕阳' },
  { paletteId: 'sunset', styleId: 'aurora',   reason: '橘紫渐变同极光' },
  { paletteId: 'sunset', styleId: 'holo',     reason: '橘紫同全息镭射' },

  // ===== Forest 深林墨绿 (×3) =====
  { paletteId: 'forest', styleId: 'origami',  reason: '深林绿 + 折纸自然系' },
  { paletteId: 'forest', styleId: 'clay',     reason: '墨绿 + 黏土自然质感' },
  { paletteId: 'forest', styleId: 'riso',     reason: '深林 + 油印叠色' },

  // ===== Lavender 薰衣草 (×2) =====
  { paletteId: 'lavender', styleId: 'watercolor',reason: '薰衣草 + 水彩' },
  { paletteId: 'lavender', styleId: 'glass',     reason: '薰衣草 + 毛玻璃梦幻' },

  // ===== Terracotta 陶土 (×2) =====
  { paletteId: 'terracotta', styleId: 'origami', reason: '陶土 + 折纸' },
  { paletteId: 'terracotta', styleId: 'riso',    reason: '陶土 + 油印叠色' },

  // ===== Cyberpunk 赛博霓虹 (×3) =====
  { paletteId: 'cyberpunk', styleId: 'cyber',   reason: '赛博霓虹同赛博朋克本家' },
  { paletteId: 'cyberpunk', styleId: 'vapor',   reason: '紫粉霓虹同蒸汽波' },
  { paletteId: 'cyberpunk', styleId: 'terminal',reason: '紫粉青 + 终端绿' },

  // ===== Kraft 牛皮纸 (×2) =====
  { paletteId: 'kraft', styleId: 'zine',     reason: '牛皮纸 + 独立刊物' },
  { paletteId: 'kraft', styleId: 'newspaper',reason: '牛皮纸 + 复古报纸' },

  // ===== Mint 薄荷清新 (×2) =====
  { paletteId: 'mint', styleId: 'softui',    reason: '薄荷 + 现代 SaaS 卡片' },
  { paletteId: 'mint', styleId: 'glass',     reason: '薄荷 + 毛玻璃清爽' },

  // ===== Midnight 午夜深紫 (×3) =====
  { paletteId: 'midnight', styleId: 'aurora',  reason: '深夜紫 + 极光' },
  { paletteId: 'midnight', styleId: 'frosted', reason: '午夜紫 + 暗夜磨砂' },
  { paletteId: 'midnight', styleId: 'editorial',reason: '午夜金 + 杂志奢华' },

  // ===== Rice Paper 宣纸水墨 (×2) =====
  { paletteId: 'ricepaper', styleId: 'editorial',reason: '宣纸 + 杂志印刷' },
  { paletteId: 'ricepaper', styleId: 'hand',     reason: '宣纸 + 手绘' },

  // ===== Gameboy 复古绿屏 (×2) =====
  { paletteId: 'gameboy', styleId: 'pixel',   reason: '绿屏 + 像素复古本家' },
  { paletteId: 'gameboy', styleId: 'terminal',reason: '绿屏 + 终端字符' },

  // ===== Peach 蜜桃乌龙 (×2) =====
  { paletteId: 'peach', styleId: 'origami',  reason: '蜜桃 + 折纸和风' },
  { paletteId: 'peach', styleId: 'clay',     reason: '蜜桃 + 黏土温柔' },

  // ===== Graphite 石墨蓝 (×2) =====
  { paletteId: 'graphite', styleId: 'rams',    reason: '石墨蓝 + 博朗工业' },
  { paletteId: 'graphite', styleId: 'glass',   reason: '石墨蓝 + 毛玻璃' },

  // ===== Dunes 沙丘 (×2) =====
  { paletteId: 'dunes', styleId: 'origami',  reason: '沙丘驼色 + 折纸' },
  { paletteId: 'dunes', styleId: 'tape',     reason: '沙丘 + 卡带复古' },

  // ===== Ice 冰川蓝白 (×2) =====
  { paletteId: 'ice', styleId: 'glass',     reason: '冰川蓝 + 毛玻璃' },
  { paletteId: 'ice', styleId: 'softui',    reason: '冰川 + 柔光卡片' },

  // ===== Wine 酒红丝绒 (×2) =====
  { paletteId: 'wine', styleId: 'editorial', reason: '酒红 + 杂志印刷' },
  { paletteId: 'wine', styleId: 'cartoon',   reason: '酒红丝绒 + 卡通粗黑边' },

  // ===== Tropical 热带丛林 (×2) =====
  { paletteId: 'tropical', styleId: 'origami',reason: '热带 + 折纸' },
  { paletteId: 'tropical', styleId: 'riso',   reason: '热带 + 油印叠色' },

  // ===== Bubblegum 泡泡糖 (×2) =====
  { paletteId: 'bubblegum', styleId: 'y2k',   reason: '糖果粉蓝 + 千禧未来本家' },
  { paletteId: 'bubblegum', styleId: 'vapor', reason: '泡泡糖 + 蒸汽波' },

  // ===== Noir 黑金电影 (×2) =====
  { paletteId: 'noir', styleId: 'holo',      reason: '黑金同全息镭射' },
  { paletteId: 'noir', styleId: 'frosted',   reason: '黑金 + 暗夜磨砂' },

  // ===== Pistachio 开心果 (×1) =====
  { paletteId: 'pistachio', styleId: 'softui', reason: '开心果 + 柔光卡片' },

  // ===== Denim 牛仔靛蓝 (×2) =====
  { paletteId: 'denim', styleId: 'editorial', reason: '牛仔 + 杂志' },
  { paletteId: 'denim', styleId: 'newspaper', reason: '牛仔 + 复古报纸' },

  // ===== Aurora 极光 (×2) =====
  { paletteId: 'aurora', styleId: 'aurora',   reason: '极光 + 极光本家' },
  { paletteId: 'aurora', styleId: 'holo',     reason: '极光 + 全息' },

  // ===== Cream Soda 奶油苏打 (×1) =====
  { paletteId: 'creamsoda', styleId: 'softui', reason: '奶油 + 柔光卡片' },

  // ===== Cherry 樱桃软糖 (×1) =====
  { paletteId: 'cherry', styleId: 'riso',     reason: '樱桃 + 油印叠色' },

  // ===== Eggshell 蛋壳米 (×2) =====
  { paletteId: 'eggshell', styleId: 'minimal',  reason: '蛋壳米 + 极简' },
  { paletteId: 'eggshell', styleId: 'editorial',reason: '蛋壳 + 杂志' },

  // ===== Jade 翡翠青瓷 (×2) =====
  { paletteId: 'jade', styleId: 'origami',  reason: '翡翠 + 折纸' },
  { paletteId: 'jade', styleId: 'riso',     reason: '翡翠 + 油印' },

  // ===== Plum 梅子紫 (×1) =====
  { paletteId: 'plum', styleId: 'editorial', reason: '梅紫 + 杂志' },

  // ===== Arctic 极地白银 (×2) =====
  { paletteId: 'arctic', styleId: 'glass',    reason: '极地银 + 毛玻璃' },
  { paletteId: 'arctic', styleId: 'softui',   reason: '极地 + 柔光卡片' },

  // ===== Sunflower 向日葵 (×1) =====
  { paletteId: 'sunflower', styleId: 'cartoon', reason: '向日葵 + 卡通明亮' },

  // ===== Twilight 暮光 (×2) =====
  { paletteId: 'twilight', styleId: 'vapor',   reason: '暮光 + 蒸汽波' },
  { paletteId: 'twilight', styleId: 'aurora',  reason: '暮光 + 极光' },

  // ===== Fog 山雾灰绿 (×2) =====
  { paletteId: 'fog', styleId: 'watercolor', reason: '山雾 + 水彩' },
  { paletteId: 'fog', styleId: 'editorial',  reason: '山雾 + 杂志' },

  // ===== Ember 余烬深红 (×2) =====
  { paletteId: 'ember', styleId: 'cyber',     reason: '余烬红 + 赛博霓虹' },
  { paletteId: 'ember', styleId: 'frosted',   reason: '余烬 + 暗夜磨砂' },

  // ===== Lilac 丁香奶油 (×1) =====
  { paletteId: 'lilac', styleId: 'watercolor', reason: '丁香 + 水彩' },

  // ===== Rose Gold 玫瑰金 (×2) =====
  { paletteId: 'rose', styleId: 'editorial', reason: '玫瑰金 + 杂志' },
  { paletteId: 'rose', styleId: 'clay',      reason: '玫瑰金 + 黏土' },

  // ===== Storm 暴风蓝灰 (×2) =====
  { paletteId: 'storm', styleId: 'rams',     reason: '暴风蓝灰 + 博朗工业' },
  { paletteId: 'storm', styleId: 'glass',    reason: '暴风 + 毛玻璃' },
];

// Build indexes for fast lookup in DetailView.
const byPalette = {};
const byStyle = {};
for (const p of PAIRINGS) {
  (byPalette[p.paletteId] = byPalette[p.paletteId] || []).push(p);
  (byStyle[p.styleId] = byStyle[p.styleId] || []).push(p);
}

window.PAIRINGS = { all: PAIRINGS, byPalette, byStyle };
