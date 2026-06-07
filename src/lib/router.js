// src/lib/router.js — minimal hash-based SPA router.
// Routes:
//   #/                       → home
//   #/palette/<id>           → palette detail
//   #/style/<id>             → style detail
// The router exposes a subscribe API so the App can re-render on changes
// and provides a navigate() helper for click handlers.

window.LibRouter = (function () {
  let listeners = [];

  function current() {
    const h = window.location.hash.replace(/^#/, '') || '/';
    if (h === '/' || h === '') return { name: 'home' };
    const m = h.match(/^\/(palette|style)\/([\w-]+)$/);
    if (m) return { name: m[1], id: m[2] };
    return { name: 'home' };
  }

  function navigate(path) {
    if (window.location.hash === '#' + path) {
      // Force a hashchange even if it's the same hash
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      window.location.hash = path;
    }
  }

  function on(fn) {
    listeners.push(fn);
    return () => { listeners = listeners.filter((f) => f !== fn); };
  }

  window.addEventListener('hashchange', () => {
    const route = current();
    listeners.forEach((fn) => fn(route));
  });

  return { current, navigate, on };
})();
