# 配色 × 风格参考库

A reference library showcasing 44 color palettes × 36 visual styles, all
applied to the same "music player" demo. Click any card on the home page
to see a full detail page with color tokens, component variants, and
recommended pairings.

## 运行

```bash
# 在项目根目录运行:
python -m http.server 8080

# 然后浏览器打开:
# http://127.0.0.1:8080/
```

> 必须用 HTTP server(不能直接 `file://` 打开),因为 Babel Standalone
> 通过 `<script src=...>` 加载外部 JSX 资源,`file://` 协议下浏览器
> 会拒绝跨源加载。

## 技术栈

- **React 18** + **Babel Standalone**(无需打包,纯 CDN)
- **hash-based SPA 路由**(`#/palette/<id>` 和 `#/style/<id>`)
- **零运行时依赖**(无 npm install)

## 目录结构

```
.
├── index.html                  # 主页入口(无 JSX 编译)
├── app.jsx                     # 顶层 App + 路由监听
├── README.md
│
├── src/
│   ├── data/                   # 数据层(纯 JSX,无 React 组件)
│   │   ├── palettes.jsx        # 32 种配色
│   │   ├── palettes-3.jsx      # 12 种配色(追加)
│   │   ├── styles.jsx          # 12 种风格
│   │   ├── styles-2.jsx        # 12 种风格(追加)
│   │   └── styles-3.jsx        # 12 种风格(追加)
│   │
│   ├── components/             # 通用组件
│   │   ├── demo-card.jsx       # palette 演示卡
│   │   ├── hero-header.jsx     # 主页顶部 header
│   │   └── home-grid.jsx       # 主页网格(带 hover/click)
│   │
│   ├── detail/                 # 详情页专属
│   │   ├── detail-view.jsx     # 详情页主组件
│   │   ├── layouts.jsx         # 8 种 layout mode
│   │   ├── variants.jsx        # 30 个变体组件(10 旗舰 × 3)
│   │   ├── pairings.js         # 推荐搭配数据
│   │   └── sections/           # 详情页 4 节
│   │       ├── hero.jsx
│   │       ├── tokens.jsx
│   │       ├── variants.jsx
│   │       └── pairings.jsx
│   │
│   └── lib/                    # 通用库
│       ├── chrome.js           # palette → chrome 主题色推导
│       └── router.js           # hash 路由
```

## 详情页 4 节

每个详情页都包含以下 4 节内容:

1. **Hero** — 大尺寸预览 + 名称/描述/分类标签 + 8 色卡或 layout 标签
2. **Tokens** — palette: 8 个色角色卡 + 按钮 + 状态条
              — style: Typography / Color Roles / Motion 三张原则卡
3. **Variants** — palette: Text/Button/Card 3 个共享组件(数据驱动)
                — style: 3 个 style 自定义组件(SearchBar/TrackRow/AlbumCard)
4. **Pairings** — 2-6 个推荐搭配,可点击跳到对应详情页

## 8 种 Layout Mode

每个旗舰 style 关联一种 layout,详情页排版不同:

| Style | Layout |
|---|---|
| cyber, bento | bento |
| glass, vapor, softui | split-hero |
| memphis | mosaic |
| pixel, clay, holo | full-bleed |
| editorial | columned |

其余 30 个 style 用 `flow`(默认纵向堆叠)作为占位。

## 10 旗舰 Style

10 个 style 配了专属的 TrackRow / AlbumCard / SearchBar 三个变体组件
(共 30 个),完整定义在 [src/detail/variants.jsx](src/detail/variants.jsx):

- cyber, glass, memphis, pixel, bento, editorial, clay, vapor, holo, softui

## 浏览器兼容性

- Chrome / Edge / Firefox / Safari (现代版本)
- 必须支持 ES2017 + JSX 运行时(Babel Standalone 7.29 负责转译)
- 必须支持 `backdrop-filter`(玻璃效果需要)
