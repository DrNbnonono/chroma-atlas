// src/components/product-blocks.jsx — shared content blocks for the
// SaaS product landing page demo. Each block is a pure component that
// reads its colors from the supplied `chrome` theme object.
//
// chrome shape: { bg, surface, text, sub, primary, accent, border, isDark }

function initialsToGradient(initials, hue) {
  const h1 = hue || 220;
  const h2 = (hue || 220) + 40;
  return `linear-gradient(135deg, hsl(${h1} 70% 60%), hsl(${h2} 80% 50%))`;
}

function Avatar({ initials, hue, size }) {
  const s = size || 28;
  return (
    <div style={{
      width: s, height: s, borderRadius: s / 2, flexShrink: 0,
      background: initialsToGradient(initials, hue),
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: Math.round(s * 0.36), fontWeight: 700,
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
    }}>{initials}</div>
  );
}

// Brand mark + name
function BrandBlock({ p, chrome, size }) {
  const s = size || 24;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: s, height: s, borderRadius: s * 0.28,
        background: chrome.accent, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: s * 0.6, fontWeight: 800, letterSpacing: -0.5,
      }}>{p.brandMark}</div>
      <div style={{ fontSize: s * 0.7, fontWeight: 800, color: chrome.text, letterSpacing: -0.3 }}>{p.brand}</div>
    </div>
  );
}

// Hero block: brand + headline + sub + CTAs + 1 screenshot preview
function HeroBlock({ p, chrome, compact }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 10 : 16 }}>
      <BrandBlock p={p} chrome={chrome} size={compact ? 22 : 28} />
      <h1 style={{
        fontSize: compact ? 22 : 36, fontWeight: 800, color: chrome.text,
        lineHeight: 1.05, letterSpacing: -1, margin: 0,
      }}>{p.tagline}</h1>
      {!compact && <p style={{ fontSize: 14, color: chrome.sub, lineHeight: 1.5, margin: 0, maxWidth: 520 }}>{p.subhead}</p>}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button style={{
          padding: compact ? '8px 14px' : '10px 18px',
          background: chrome.primary, color: chrome.bg,
          border: 'none', borderRadius: 999,
          fontSize: compact ? 11 : 12, fontWeight: 700, cursor: 'pointer',
        }}>{p.ctaPrimary}</button>
        <button style={{
          padding: compact ? '8px 14px' : '10px 18px',
          background: 'transparent', color: chrome.text,
          border: '1px solid ' + chrome.border, borderRadius: 999,
          fontSize: compact ? 11 : 12, fontWeight: 500, cursor: 'pointer',
        }}>{p.ctaSecondary}</button>
      </div>
    </div>
  );
}

// Stats row
function StatsBlock({ p, chrome }) {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {p.stats.map((s, i) => (
        <div key={i} style={{
          flex: '1 1 100px', padding: 14, background: chrome.surface,
          border: '1px solid ' + chrome.border, borderRadius: 10, textAlign: 'center',
        }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: chrome.primary, letterSpacing: -0.5, lineHeight: 1 }}>{s.value}</div>
          <div style={{ fontSize: 9, color: chrome.sub, marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// Feature grid
function FeaturesBlock({ p, chrome, count }) {
  const items = (p.features || []).slice(0, count || 6);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
      {items.map((f, i) => (
        <div key={i} style={{
          padding: 16, background: chrome.surface,
          border: '1px solid ' + chrome.border, borderRadius: 12,
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 18, color: chrome.accent, fontWeight: 700 }}>{f.icon}</span>
            <span style={{ fontSize: 8, color: chrome.sub, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{f.tag}</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: chrome.text }}>{f.name}</div>
          <div style={{ fontSize: 11, color: chrome.sub, lineHeight: 1.5 }}>{f.desc}</div>
        </div>
      ))}
    </div>
  );
}

// Compact features row (2-3 items, used in compact card)
function FeaturesRow({ p, chrome, count }) {
  const items = (p.features || []).slice(0, count || 3);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + items.length + ', 1fr)', gap: 6 }}>
      {items.map((f, i) => (
        <div key={i} style={{
          padding: 8, background: chrome.surface,
          border: '1px solid ' + chrome.border, borderRadius: 8,
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          <span style={{ fontSize: 14, color: chrome.accent, fontWeight: 700 }}>{f.icon}</span>
          <div style={{ fontSize: 10, fontWeight: 700, color: chrome.text, lineHeight: 1.2 }}>{f.name}</div>
        </div>
      ))}
    </div>
  );
}

// Screenshots gallery — 4 real SVG dashboard mockups
function ScreenshotsBlock({ p, chrome, count }) {
  const items = (p.screenshots || []).slice(0, count || 4);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
      {items.map((it, i) => {
        const Mockup = (window.DashboardMockups && window.DashboardMockups.getMockup(it.id)) || null;
        return (
          <div key={i} style={{
            background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 12,
            overflow: 'hidden', display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ padding: 8 }}>
              {Mockup ? <Mockup chrome={chrome} /> : (
                <div style={{ aspectRatio: '16 / 10', background: chrome.bg, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: chrome.sub, fontSize: 11 }}>loading…</div>
              )}
            </div>
            <div style={{ padding: '0 12px 12px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: chrome.text }}>{it.label}</div>
              <div style={{ fontSize: 10, color: chrome.sub, marginTop: 2 }}>{it.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Hero screenshot — real SVG dashboard mockup (16:10 browser frame)
function HeroScreenshot({ p, chrome, idx }) {
  const it = (p.screenshots || [])[idx || 0];
  const Mockup = (window.DashboardMockups && it && window.DashboardMockups.getMockup(it.id)) || null;
  if (Mockup) return <Mockup chrome={chrome} />;
  return (
    <div style={{
      height: 320, maxHeight: 380, background: chrome.bg, border: '1px solid ' + chrome.border,
      borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: chrome.sub, fontSize: 12,
    }}>loading…</div>
  );
}

// Logo strip
function LogosBlock({ p, chrome }) {
  return (
    <div style={{
      padding: '16px 0', borderTop: '1px solid ' + chrome.border, borderBottom: '1px solid ' + chrome.border,
    }}>
      <div style={{ fontSize: 10, color: chrome.sub, letterSpacing: 2, textTransform: 'uppercase', textAlign: 'center', marginBottom: 12, fontWeight: 700 }}>
        Trusted by 12,000+ studios
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        {p.logos.map((l, i) => (
          <div key={i} style={{ fontSize: 14, fontWeight: 700, color: chrome.text, opacity: 0.6, letterSpacing: 0.5 }}>{l}</div>
        ))}
      </div>
    </div>
  );
}

// Testimonials
function TestimonialsBlock({ p, chrome, count }) {
  const items = (p.testimonials || []).slice(0, count || 3);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
      {items.map((t, i) => (
        <div key={i} style={{
          padding: 18, background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 12,
          display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          <div style={{ fontSize: 28, color: chrome.accent, lineHeight: 0.5, fontFamily: 'Georgia, serif' }}>\u201C</div>
          <div style={{ fontSize: 13, color: chrome.text, lineHeight: 1.5 }}>{t.quote}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 'auto' }}>
            <Avatar initials={t.avatar.initials} hue={t.avatar.hue} size={32} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: chrome.text }}>{t.author}</div>
              <div style={{ fontSize: 9, color: chrome.sub }}>{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Pricing tiers
function PricingBlock({ p, chrome }) {
  const items = p.pricing || [];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          padding: 18, background: chrome.surface,
          border: (it.highlight ? '2px solid ' + chrome.accent : '1px solid ' + chrome.border),
          borderRadius: 12, display: 'flex', flexDirection: 'column', gap: 12,
          position: 'relative',
        }}>
          {it.highlight && (
            <div style={{
              position: 'absolute', top: -10, right: 14,
              fontSize: 9, padding: '3px 8px', background: chrome.accent, color: '#fff',
              borderRadius: 999, fontWeight: 700, letterSpacing: 1,
            }}>MOST POPULAR</div>
          )}
          <div style={{ fontSize: 11, color: chrome.sub, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700 }}>{it.name}</div>
          <div>
            <span style={{ fontSize: 28, fontWeight: 800, color: chrome.text }}>{it.price}</span>
            <span style={{ fontSize: 11, color: chrome.sub, marginLeft: 4 }}>{it.period}</span>
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 11, color: chrome.text, lineHeight: 1.7 }}>
            {it.features.map((f, j) => <li key={j}>{f}</li>)}
          </ul>
          <button style={{
            marginTop: 'auto', padding: '10px 14px',
            background: it.highlight ? chrome.accent : 'transparent',
            color: it.highlight ? '#fff' : chrome.text,
            border: '1px solid ' + (it.highlight ? chrome.accent : chrome.border),
            borderRadius: 999, fontSize: 11, fontWeight: 600, cursor: 'pointer',
          }}>{it.cta}</button>
        </div>
      ))}
    </div>
  );
}

// FAQ
function FAQBlock({ p, chrome }) {
  const items = p.faq || [];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          padding: 16, background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 10,
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: chrome.text }}>Q. {it.q}</div>
          <div style={{ fontSize: 11, color: chrome.sub, marginTop: 6, lineHeight: 1.5 }}>A. {it.a}</div>
        </div>
      ))}
    </div>
  );
}

// Footer CTA
function CTABlock({ p, chrome }) {
  return (
    <div style={{
      padding: 32, background: chrome.primary, color: chrome.bg, borderRadius: 14,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center',
    }}>
      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.5 }}>Ready to ship faster?</div>
      <div style={{ fontSize: 13, opacity: 0.85, maxWidth: 480, lineHeight: 1.5 }}>Join 12,000+ studios running their client work on Folio. 14-day free trial, no card required.</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{
          padding: '12px 20px', background: chrome.bg, color: chrome.primary,
          border: 'none', borderRadius: 999, fontSize: 12, fontWeight: 700, cursor: 'pointer',
        }}>{p.ctaPrimary}</button>
        <button style={{
          padding: '12px 20px', background: 'transparent', color: chrome.bg,
          border: '1px solid ' + chrome.bg, borderRadius: 999, fontSize: 12, fontWeight: 500, cursor: 'pointer',
        }}>{p.ctaSecondary}</button>
      </div>
    </div>
  );
}

function SocialRow({ p, chrome }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
      {p.social.map((s, i) => (
        <span key={i} style={{
          padding: '6px 12px', background: chrome.surface, border: '1px solid ' + chrome.border,
          borderRadius: 999, fontSize: 11, color: chrome.text,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ fontSize: 9, color: chrome.sub, fontWeight: 700, letterSpacing: 1 }}>{s.label.toUpperCase()}</span>
          <span>{s.handle}</span>
        </span>
      ))}
    </div>
  );
}

// Compact product card for the home grid.
function MiniProductCard({ p, chrome }) {
  return (
    <div style={{
      width: 320, padding: 18, background: chrome.bg,
      border: '1px solid ' + chrome.border, borderRadius: 16, color: chrome.text,
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <HeroBlock p={p} chrome={chrome} compact />
      <FeaturesRow p={p} chrome={chrome} count={3} />
      <HeroScreenshot p={p} chrome={chrome} idx={0} />
    </div>
  );
}

window.ProductBlocks = {
  Avatar, BrandBlock, HeroBlock, FeaturesBlock, FeaturesRow,
  ScreenshotsBlock, HeroScreenshot, LogosBlock, TestimonialsBlock,
  StatsBlock, PricingBlock, FAQBlock, CTABlock, SocialRow, MiniProductCard,
};
