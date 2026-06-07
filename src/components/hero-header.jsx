// src/components/hero-header.jsx — top-of-page header with project name,
// subtitle, and anchor links to sections. Sticky-positioned, white bg.

function HeroHeader() {
  const onAnchor = (e, route) => {
    e.preventDefault();
    if (route === 'home') {
      window.LibRouter.navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (route === 'palettes') {
      // jump to palettes section on the home page
      window.LibRouter.navigate('/');
      setTimeout(() => {
        const el = document.getElementById('section-palettes');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return;
    }
    if (route === 'styles') {
      window.LibRouter.navigate('/');
      setTimeout(() => {
        const el = document.getElementById('section-styles');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return;
    }
    if (route === 'spec') {
      window.alert(
        '详情页 5 节:Hero / Page in Action / Tokens / Variants / Pairings\n' +
        '8 种 layout mode 分布到 10 旗舰 style\n' +
        '36 style 共用 30 个变体组件(10 旗舰 × 3 = FeatureCard / PricingCard / TestimonialCard)\n' +
        '本版本:每种风格独立 .jsx 整页渲染,首页改为单页滚动两 section'
      );
    }
  };
  const linkStyle = {
    fontSize: 13, color: '#1F1A14', textDecoration: 'none',
    padding: '6px 12px', borderRadius: 999,
    fontWeight: 500, letterSpacing: 0.3, transition: 'background .12s',
    cursor: 'pointer',
  };
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      height: 88, padding: '0 60px',
      background: '#FFFFFF', borderBottom: '1px solid #E8E2D6',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
    }}>
      <a onClick={(e) => onAnchor(e, 'home')} style={{ cursor: 'pointer', textDecoration: 'none' }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#1F1A14', letterSpacing: -0.5, lineHeight: 1.2 }}>
          配色 × 风格参考库
        </div>
        <div style={{ fontSize: 13, color: '#6B635A', marginTop: 4 }}>
          同一个『Folio SaaS 产品』落地页,用 44 种配色 × 36 种风格演绎 — 点击卡片可进入完整详情页
        </div>
      </a>
      <nav style={{ display: 'flex', gap: 4 }}>
        <a onClick={(e) => onAnchor(e, 'palettes')}
          onMouseEnter={(ev) => (ev.currentTarget.style.background = '#F5F1EA')}
          onMouseLeave={(ev) => (ev.currentTarget.style.background = 'transparent')}
          style={linkStyle}>Palettes</a>
        <a onClick={(e) => onAnchor(e, 'styles')}
          onMouseEnter={(ev) => (ev.currentTarget.style.background = '#F5F1EA')}
          onMouseLeave={(ev) => (ev.currentTarget.style.background = 'transparent')}
          style={linkStyle}>Styles</a>
        <a onClick={(e) => onAnchor(e, 'spec')}
          onMouseEnter={(ev) => (ev.currentTarget.style.background = '#F5F1EA')}
          onMouseLeave={(ev) => (ev.currentTarget.style.background = 'transparent')}
          style={linkStyle}>Spec</a>
      </nav>
    </header>
  );
}

window.HeroHeader = HeroHeader;