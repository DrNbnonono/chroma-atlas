// app.jsx — top-level App component. Listens to the hash router and
// renders either the home grid or the appropriate detail page.

function App() {
  const [route, setRoute] = React.useState(window.LibRouter.current());

  React.useEffect(() => {
    return window.LibRouter.on((r) => setRoute(r));
  }, []);

  // Scroll to top on every route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.name, route.id]);

  if (route.name === 'palette') {
    return <DetailPage kind="palette" id={route.id} />;
  }
  if (route.name === 'style') {
    return <DetailPage kind="style" id={route.id} />;
  }
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <window.HeroHeader />
      <div style={{ flex: 1 }}>
        <window.HomeGrid />
      </div>
    </div>
  );
}

function DetailPage({ kind, id }) {
  const item = (kind === 'palette' ? window.PALETTES : window.STYLES).find((x) => x.id === id);
  if (!item) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <window.HeroHeader />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 64, opacity: 0.3 }}>🤔</div>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: '#1F1A14', marginTop: 16 }}>未找到 {kind}</h1>
          <p style={{ fontSize: 14, color: '#6B635A', marginTop: 8 }}>id = <code>{id}</code> 不在数据集中</p>
          <button
            onClick={() => window.LibRouter.navigate('/')}
            style={{ marginTop: 24, padding: '10px 20px', background: '#1F1A14', color: '#fff', border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
          >← 返回首页</button>
        </div>
      </div>
    );
  }
  return (
    <window.DetailView
      item={item}
      kind={kind}
      onBack={() => window.LibRouter.navigate('/')}
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
