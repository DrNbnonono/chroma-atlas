---
name: palette-master
description: 配色方案和视觉风格技能 — 包含30+调色板和36种UI风格定义
trigger: /\b(palette|color|配色|style|风格|design)\b/i
---

# Palette Master — 配色与风格技能

## 概述

本技能包含两大核心资源：

| 资源 | 文件 | 数量 |
|------|------|------|
| **调色板** | `palettes.jsx` + `palettes-3.jsx` | 44 个完整配色系统 |
| **UI风格** | `styles.jsx` + `styles-2.jsx` + `styles-3.jsx` | 36 种界面视觉风格 |

每个调色板包含 8 个颜色角色：bg / surface / text / sub / primary / accent / border + 6 色 swatches 色卡。

---

## 一、44 个配色调色板

### 🌸 亚洲美学
| ID | 名称 | Primary | 特点 |
|---|---|---|---|
| `sakura` | 樱花粉 | `#E8A4B5` | 柔粉，少女、温柔 |
| `jade` | 翡翠青瓷 | `#558060` | 中式青瓷绿 + 朱砂 |
| `ricepaper` | 宣纸水墨 | `#1A1814` | 中式宣纸米黄 + 墨黑 |
| `matcha` | 抹茶 | `#7A9059` | 日式抹茶绿，平静 |
| `plum` | 梅子紫 | `#6B2858` | 深梅紫 + 米黄 |

### 🎨 复古美学
| ID | 名称 | Primary | 特点 |
|---|---|---|---|
| `kraft` | 牛皮纸 | `#1A1410` | 复古牛皮纸 + 墨黑 |
| `mocha` | 咖啡 | `#6F4A2D` | 浓郁咖啡棕，复古 |
| `gameboy` | 复古绿屏 | `#0F380F` | 初代游戏机液晶绿 |
| `terracotta` | 陶土 | `#B85742` | 复古陶土红 + 鼠尾草 |
| `wine` | 酒红丝绒 | `#722F3D` | 酒红 + 玫瑰金，复古 |

### 🌅 暖色调
| ID | 名称 | Primary | 特点 |
|---|---|---|---|
| `sand` | 暖沙橙 | `#D97757` | 温暖的沙漠橙调 |
| `sunflower` | 向日葵 | `#F5B83A` | 亮黄 + 深棕，明媚 |
| `peach` | 蜜桃乌龙 | `#F0907A` | 蜜桃粉 + 米白，温柔 |
| `dunes` | 沙丘 | `#B84418` | 驼色 + 锈红，沙漠落日 |
| `creamsoda` | 奶油苏打 | `#5BC4B5` | 奶油黄 + 薄荷蓝 |
| `cherry` | 樱桃软糖 | `#E03A50` | 樱桃红 + 奶油，复古糖果 |
| `eggshell` | 蛋壳米 | `#3A3530` | 极柔米白 + 木炭 |
| `rose` | 玫瑰金 | `#C8857A` | 玫瑰金 + 米白，优雅 |

### 🌊 冷色调
| ID | 名称 | Primary | 特点 |
|---|---|---|---|
| `nordic` | 北欧冷雾 | `#3E5C76` | 冷灰蓝调，安静 |
| `oceanic` | 深海蓝 | `#4DC4D4` | 深蓝青绿，沉稳 |
| `midnight` | 午夜深紫 | `#D4AF37` | 深夜深紫 + 金光，奢华 |
| `ice` | 冰川蓝白 | `#3A8AB5` | 极地冰川冷蓝 |
| `graphite` | 石墨蓝 | `#4A7DDB` | 深石墨灰 + 钴蓝点缀 |
| `arctic` | 极地白银 | `#5A8AB5` | 冷白 + 银蓝，极简未来 |
| `storm` | 暴风蓝灰 | `#6B95C4` | 深蓝灰 + 银白，沉静 |

### 🌿 自然色
| ID | 名称 | Primary | 特点 |
|---|---|---|---|
| `forest` | 深林墨绿 | `#6FA84F` | 深绿配米色，自然 |
| `tropical` | 热带丛林 | `#3A8540` | 热带绿 + 芒果橙 |
| `mint` | 薄荷清新 | `#2EBF8E` | 清爽薄荷绿，年轻 |
| `pistachio` | 开心果 | `#9BB068` | 柔和开心果绿 + 奶油 |
| `fog` | 山雾灰绿 | `#5C7560` | 灰绿 + 雾白，安静 |
| `denim` | 牛仔靛蓝 | `#3A5878` | 靛蓝牛仔 + 米黄 |

### 🌙 暗色系
| ID | 名称 | Primary | 特点 |
|---|---|---|---|
| `sunset` | 日落橘紫 | `#FF8E5A` | 橘红到紫的渐变情绪 |
| `twilight` | 暮光 | `#E8895C` | 蓝紫橙渐变，黄昏感 |
| `ember` | 余烬深红 | `#E84A1F` | 炭黑 + 余烬橙红 |
| `aurora` | 极光 | `#5BFFB5` | 深蓝紫绿渐变，梦幻 |

### 💜 梦幻色
| ID | 名称 | Primary | 特点 |
|---|---|---|---|
| `lavender` | 薰衣草 | `#9B7FC0` | 柔紫，梦幻安静 |
| `lilac` | 丁香奶油 | `#A88AC8` | 柔丁香紫 + 奶油黄 |
| `bubblegum` | 泡泡糖 | `#FF4FA8` | 糖果粉蓝，Y2K 少女 |
| `cyberpunk` | 赛博霓虹 | `#FF2E97` | 紫粉青霓虹，电子感 |

### ✨ 现代感
| ID | 名称 | Primary | 特点 |
|---|---|---|---|
| `morandi` | 莫兰迪 | `#A89C8A` | 低饱和度、灰调高级感 |
| `mono` | 极简黑白 | `#0A0A0A` | 纯黑白灰，最克制 |
| `noir` | 黑金电影 | `#D4B25F` | 纯黑 + 金，电影感 |

---

## 二、36 种 UI 视觉风格

### styles.jsx — 12 种

| ID | 名称 | 特点 |
|---|---|---|
| `cyber` | Cyberpunk 赛博朋克 | 霓虹紫粉青、扫描线、未来感 |
| `glass` | Glassmorphism 毛玻璃 | 半透明模糊 + 渐变背景 |
| `liquid` | Liquid Glass 流体光感 | 苹果新拟物、柔光高光 |
| `neumorph` | Neumorphism 新拟态 | 柔和凹凸阴影、单色 |
| `cartoon` | Cartoon 卡通 | 粗黑边、硬阴影、明亮色块 |
| `brutal` | Brutalism 粗野 | 原始、粗体、高对比、分块 |
| `skeuo` | Skeuomorphism 拟物 | 金属质感、LCD 屏幕 |
| `memphis` | Memphis 孟菲斯 | 80s 几何形状、大胆色块 |
| `pixel` | Pixel 像素复古 | 8-bit、单色屏、游戏机 |
| `minimal` | Minimal 极简 | 黑白、细线、留白、衬线 |
| `clay` | Clay 黏土 3D | 柔和体积感、内外阴影 |
| `editorial` | Editorial 杂志 | 衬线、栏线、印刷气质 |

### styles-2.jsx — 13 种

| ID | 名称 | 特点 |
|---|---|---|
| `y2k` | Y2K 千禧未来 | 糖果渐变、塑料光泽、千禧风 |
| `watercolor` | Watercolor 水彩 | 柔和水彩晕染、衬线斜体 |
| `vapor` | Vaporwave 蒸汽波 | 紫粉夕阳网格、80s 复古未来 |
| `mesh` | Gradient Mesh 网格 | 柔和模糊渐变球，干净现代 |
| `terminal` | Terminal 终端 | 命令行、等宽字体、绿色字符 |
| `riso` | Risograph 油印 | 套色油印、网点、混色叠印 |
| `bento` | Bento 便当格 | 方块组合、Apple 发布会风 |
| `rams` | Industrial 工业 | Dieter Rams、博朗收音机美学 |
| `origami` | Origami 折纸 | 几何折面、和风、暖橙渐变 |
| `newspaper` | Newspaper 报纸 | 复古报刊、衬线、双栏 |
| `holo` | Holographic 全息 | 镭射彩虹渐变、未来感 |
| `hand` | Hand-drawn 手绘 | 手写字、粗糙线条、温暖 |

### styles-3.jsx — 11 种

| ID | 名称 | 特点 |
|---|---|---|
| `sticker` | Sticker 贴纸拼贴 | 彩色贴纸、虚线边、点状底纹 |
| `bauhaus` | Bauhaus 包豪斯 | 红黄蓝、几何分块、强结构 |
| `metal` | Embossed Metal 金属 | 金属拉丝、内嵌液晶屏 |
| `zine` | Zine 独立刊物 | 叠印油墨、紫橙混色、排版 |
| `tactile` | Tactile 暗夜质感卡 | 深色 + 暖光晕，有质量感 |
| `tape` | Cassette 磁带 | 复古卡带，标签字体、卷轴 |
| `mondrian` | Mondrian 蒙德里安 | 红黄蓝色块、黑粗线分割 |
| `softui` | Soft UI 柔光卡片 | 现代柔和 SaaS 卡片风 |
| `frosted` | Frosted Dark 暗黑磨砂 | 深紫蓝磨砂玻璃 + 渐变高亮 |
| `doodle` | Doodle 笔记涂鸦 | 横线笔记本、手写、彩色高光 |
| `swiss` | Swiss 瑞士网格 | 严格 12 栏、留白、信息层级 |
| `aurora` | Aurora 极光辉光 | 深夜极光辉光、流光渐变 |

---

## 三、配色搭配指南

### 同色系搭配
- 粉色家族：`sakura` / `cherry` / `rose` → 少女风格
- 绿色家族：`jade` / `forest` / `mint` → 自然清新
- 蓝灰家族：`nordic` / `ice` / `arctic` → 北欧冷淡

### 互补色搭配
- `oceanic` + `ember` → 冷暖对比，深海 + 余烬
- `cyberpunk` + `aurora` → 赛博 + 极光，青红互补
- `lavender` + `sunflower` → 紫黄撞色，梦幻明媚

### 邻近色搭配
- `sunset` + `twilight` + `midnight` → 橘→紫→金的黄昏渐变
- `nordic` + `storm` + `graphite` → 蓝灰渐进，冷峻高级

### 按场景推荐

| 场景 | 推荐配色 | 推荐风格 |
|------|----------|----------|
| 现代感应用 | Monochrome / Graphite | Glass / Neumorph / Minimal |
| 温暖亲切 | Morandi / Sand / Peach | Editorial / Watercolor / Hand |
| 科技感 | Cyberpunk / Midnight / Aurora | Cyber / Terminal / Holographic |
| 自然安静 | Matcha / Forest / Nordic | Minimal / Liquid / Clay |
| 少女甜美 | Sakura / Bubblegum / Lavender | Cartoon / Y2K / Watercolor |
| 复古怀旧 | Kraft / Gameboy / Mocha | Pixel / Terminal / Newspaper |
| 奢华高端 | Noir / Wine / Midnight | Editorial / Rams / Holographic |
| 日式和风 | Rice Paper / Jade / Origami | Origami / Minimal |

---

## 四、色彩心理学要点

- **暖色调**（橙/红/粉）：活力、温暖、亲近感
- **冷色调**（蓝/绿/紫）：专业、冷静、距离感
- **中性色**（灰/米/棕）：稳重、安全、经典
- **高饱和度**：年轻、活力、强调
- **低饱和度**：高级、文艺、安静

---

## 五、调色板结构

```javascript
{
  id: string,           // 唯一标识
  name: string,         // 中英双语名称
  desc: string,         // 简短描述
  bg: string,           // 背景色
  surface: string,      // 表面色（卡片等）
  text: string,         // 主文本色
  sub: string,          // 次要文本色
  primary: string,      // 主色调
  accent: string,       // 强调色
  border: string,       // 边框色
  swatches: string[],  // 6 色色卡
}
```

## 六、风格结构

```javascript
{
  id: string,           // 唯一标识
  name: string,         // 中英双语名称
  desc: string,         // 简短描述
  Comp: ReactComponent   // React 组件
}
```

---

## 七、设计工具

### PaletteCard 组件（demo-card.jsx）
统一的调色板展示卡片，接收完整 p 对象：
- `p.bg` — 背景色
- `p.surface` — 表面色
- `p.text` — 主文字色
- `p.sub` — 次要文字色
- `p.primary` — 主强调色
- `p.accent` — 辅助强调色
- `p.border` — 边框色
- `p.swatches` — 色块数组（6色）

### DesignCanvas 画布工具（design-canvas.jsx）
Figma 风格的画布工具：
- `DCSection` — 分组（可折叠标题）
- `DCArtboard` — 可拖拽排序的画板
- `DCPostIt` — 便签注释
- 支持全屏聚焦模式（←/→/Esc）