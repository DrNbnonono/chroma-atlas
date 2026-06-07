// src/components/dashboard-mockups.jsx — realistic inline SVG mockups of
// the 4 product screens. Each component renders a real-looking UI
// (sidebar + nav + stats + chart / list) using the supplied chrome
// colors, so the same product page looks like a real app under every
// palette and every style.

// Shared sub-pieces
function BrowserFrame({ chrome, children, height }) {
  return (
    <div style={{
      position: 'relative', width: '100%', height: height || 'auto',
      aspectRatio: '16 / 10', borderRadius: 12, overflow: 'hidden',
      background: chrome.bg, border: '1px solid ' + chrome.border,
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 28,
        background: chrome.surface, borderBottom: '1px solid ' + chrome.border,
        display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6,
        zIndex: 2,
      }}>
        <div style={{ width: 10, height: 10, borderRadius: 5, background: '#FF5F57' }} />
        <div style={{ width: 10, height: 10, borderRadius: 5, background: '#FFBD2E' }} />
        <div style={{ width: 10, height: 10, borderRadius: 5, background: '#28CA42' }} />
        <div style={{
          flex: 1, height: 16, marginLeft: 10, background: chrome.bg,
          border: '1px solid ' + chrome.border, borderRadius: 6,
          display: 'flex', alignItems: 'center', paddingLeft: 8,
        }}>
          <span style={{ fontSize: 8, color: chrome.sub, opacity: 0.7 }}>folio.app</span>
        </div>
        <div style={{ width: 18, height: 18, borderRadius: 9, background: chrome.primary, color: chrome.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700 }}>A</div>
      </div>
      <div style={{ position: 'absolute', top: 28, left: 0, right: 0, bottom: 0 }}>
        {children}
      </div>
    </div>
  );
}

// Sidebar (shared across screens)
function Sidebar({ chrome, active }) {
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12h18M3 6h18M3 18h18' },
    { id: 'inbox',     label: 'Inbox',     icon: 'M22 12h-6l-2 3h-4l-2-3H2' },
    { id: 'projects',  label: 'Projects',  icon: 'M3 7h18v13H3zM3 7l3-3h6l3 3' },
    { id: 'reports',   label: 'Reports',   icon: 'M3 3v18h18M7 14l4-4 4 4 5-5' },
    { id: 'clients',   label: 'Clients',   icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
    { id: 'settings',  label: 'Settings',  icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' },
  ];
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, bottom: 0, width: 56,
      background: chrome.surface, borderRight: '1px solid ' + chrome.border,
      paddingTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
    }}>
      <div style={{ width: 28, height: 28, borderRadius: 6, background: chrome.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, marginBottom: 12 }}>F</div>
      {items.map((it, i) => {
        const isActive = it.id === active;
        return (
          <div key={i} style={{
            width: 44, height: 36, borderRadius: 8, position: 'relative',
            background: isActive ? chrome.accent + '20' : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }} title={it.label}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isActive ? chrome.primary : chrome.sub} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={it.icon} />
            </svg>
            {it.id === 'inbox' && (
              <div style={{ position: 'absolute', top: 4, right: 4, minWidth: 14, height: 14, padding: '0 3px', background: chrome.primary, color: chrome.bg, borderRadius: 7, fontSize: 8, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>12</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ============== 1. Dashboard (s1) ============== */
function DashboardMockup({ chrome }) {
  // Chart data
  const points = [
    [10, 60], [25, 50], [40, 55], [55, 38], [70, 42], [85, 28],
    [100, 35], [115, 20], [130, 28], [145, 18], [160, 12], [175, 8]
  ];
  const polyline = points.map(([x, y]) => (10 + x * 1.2) + ',' + (40 + y * 0.8)).join(' ');
  const polygon = polyline + ' 220,180 10,180';
  return (
    <BrowserFrame chrome={chrome}>
      <Sidebar chrome={chrome} active="dashboard" />
      <div style={{ position: 'absolute', top: 0, left: 56, right: 0, bottom: 0, padding: '12px 16px', overflow: 'hidden' }}>
        {/* Greeting */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: chrome.text }}>Welcome back, Alex</div>
            <div style={{ fontSize: 7, color: chrome.sub, marginTop: 2 }}>Tuesday, March 18</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            <div style={{ height: 18, padding: '0 8px', background: chrome.primary, color: chrome.bg, borderRadius: 9, fontSize: 7, fontWeight: 700, display: 'flex', alignItems: 'center' }}>+ New brief</div>
            <div style={{ height: 18, padding: '0 8px', background: 'transparent', color: chrome.text, border: '1px solid ' + chrome.border, borderRadius: 9, fontSize: 7, display: 'flex', alignItems: 'center' }}>Export</div>
          </div>
        </div>
        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 10 }}>
          <div style={{ padding: '8px 10px', background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 6 }}>
            <div style={{ fontSize: 6, color: chrome.sub, letterSpacing: 1 }}>REVENUE</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: chrome.text }}>$24.8k</span>
              <span style={{ fontSize: 7, color: chrome.primary, fontWeight: 700 }}>+12%</span>
            </div>
            <svg width="40" height="10" viewBox="0 0 40 10" style={{ marginTop: 4 }}>
              <polyline points="0,8 5,6 10,7 15,4 20,5 25,3 30,4 35,2 40,1" fill="none" stroke={chrome.primary} strokeWidth="1.2" />
            </svg>
          </div>
          <div style={{ padding: '8px 10px', background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 6 }}>
            <div style={{ fontSize: 6, color: chrome.sub, letterSpacing: 1 }}>ACTIVE CLIENTS</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: chrome.text }}>42</span>
              <span style={{ fontSize: 7, color: chrome.primary, fontWeight: 700 }}>+3</span>
            </div>
            <div style={{ display: 'flex', marginTop: 4, marginLeft: -2 }}>
              {['#FF6B9D', '#3DA9FC', '#FFD93D', '#7C5BC2', '#1A1A1A'].map((c, i) => (
                <div key={i} style={{ width: 10, height: 10, borderRadius: 5, background: c, border: '1px solid ' + chrome.bg, marginLeft: -3 }} />
              ))}
            </div>
          </div>
          <div style={{ padding: '8px 10px', background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 6 }}>
            <div style={{ fontSize: 6, color: chrome.sub, letterSpacing: 1 }}>HOURS TRACKED</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: chrome.text }}>187h</span>
              <span style={{ fontSize: 7, color: chrome.sub }}>/200h</span>
            </div>
            <div style={{ height: 4, background: chrome.border, borderRadius: 2, marginTop: 6, overflow: 'hidden' }}>
              <div style={{ width: '93%', height: '100%', background: chrome.primary }} />
            </div>
          </div>
        </div>
        {/* Chart + Activity */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 6 }}>
          <div style={{ padding: '8px 10px', background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <div style={{ fontSize: 6, color: chrome.sub, letterSpacing: 1 }}>REVENUE · 30 DAYS</div>
              <div style={{ display: 'flex', gap: 3, fontSize: 6, color: chrome.sub }}>
                <span>7d</span>
                <span style={{ color: chrome.primary, fontWeight: 700 }}>30d</span>
                <span>90d</span>
              </div>
            </div>
            <svg width="100%" height="70" viewBox="0 0 220 70" preserveAspectRatio="none">
              <line x1="0" y1="15" x2="220" y2="15" stroke={chrome.border} strokeWidth="0.5" />
              <line x1="0" y1="35" x2="220" y2="35" stroke={chrome.border} strokeWidth="0.5" />
              <line x1="0" y1="55" x2="220" y2="55" stroke={chrome.border} strokeWidth="0.5" />
              <polygon points={polygon} fill={chrome.primary} opacity="0.15" />
              <polyline points={polyline} fill="none" stroke={chrome.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ padding: '8px 10px', background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 6 }}>
            <div style={{ fontSize: 6, color: chrome.sub, letterSpacing: 1, marginBottom: 4 }}>ACTIVITY</div>
            {[
              { c: '#FF6B9D', t: 'Maya approved brief', s: '2h' },
              { c: '#3DA9FC', t: 'Invoice sent · $4.8k', s: '5h' },
              { c: '#FFD93D', t: 'New project · Lumen', s: '1d' },
              { c: '#7C5BC2', t: 'Daniel signed off', s: '2d' },
            ].map((it, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 0' }}>
                <div style={{ width: 5, height: 5, borderRadius: 3, background: it.c, flexShrink: 0 }} />
                <div style={{ flex: 1, fontSize: 7, color: chrome.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.t}</div>
                <div style={{ fontSize: 6, color: chrome.sub, flexShrink: 0 }}>{it.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ============== 2. Inbox (s2) ============== */
function InboxMockup({ chrome }) {
  const items = [
    { name: 'Maya Lin',     role: 'Northwind',  subject: 'Approve landing page',          time: '2h', avatar: '#FF6B9D', unread: true,  tag: 'APPROVAL' },
    { name: 'Daniel Park',  role: 'SoundGarden', subject: 'Invoice · $4,800 sent',         time: '5h', avatar: '#3DA9FC', unread: true,  tag: 'MONEY'    },
    { name: 'Priya Singh',  role: 'PaperTrail',  subject: 'iOS app spec review',            time: '1d', avatar: '#FFD93D', unread: false, tag: 'REVIEW'   },
    { name: 'Cobalt Co.',   role: 'Cobalt',      subject: 'Logo brief — final round',       time: '1d', avatar: '#7C5BC2', unread: true,  tag: 'APPROVAL' },
    { name: 'Ember Studio', role: 'Ember',       subject: 'Timeline updated for Sprint 3',  time: '2d', avatar: '#1A1A1A', unread: false, tag: 'TRACK'    },
    { name: 'Lumen Co.',    role: 'Lumen',       subject: 'Quarterly invoice paid',         time: '3d', avatar: '#22C55E', unread: false, tag: 'MONEY'    },
  ];
  return (
    <BrowserFrame chrome={chrome}>
      <Sidebar chrome={chrome} active="inbox" />
      <div style={{ position: 'absolute', top: 0, left: 56, right: 0, bottom: 0, display: 'flex' }}>
        {/* List */}
        <div style={{ flex: '0 0 60%', borderRight: '1px solid ' + chrome.border, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid ' + chrome.border }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: chrome.text }}>Inbox</div>
              <div style={{ fontSize: 8, color: chrome.sub }}>12 new · 4 awaiting you</div>
            </div>
            <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
              {['All', 'Approvals', 'Money', 'Mentions'].map((t, i) => (
                <div key={i} style={{ padding: '3px 8px', background: i === 0 ? chrome.accent + '20' : 'transparent', color: i === 0 ? chrome.primary : chrome.sub, fontSize: 7, fontWeight: 700, borderRadius: 9, border: '1px solid ' + (i === 0 ? chrome.accent : chrome.border) }}>{t}</div>
              ))}
            </div>
          </div>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8,
              borderBottom: '1px solid ' + chrome.border,
              background: it.unread ? chrome.accent + '08' : 'transparent',
            }}>
              <div style={{ width: 22, height: 22, borderRadius: 11, background: it.avatar, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, flexShrink: 0 }}>{it.name[0]}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 8, fontWeight: 700, color: chrome.text }}>{it.name}</span>
                  <span style={{ fontSize: 6, color: chrome.sub }}>{it.time}</span>
                </div>
                <div style={{ fontSize: 7, color: chrome.sub, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: 1 }}>{it.subject}</div>
              </div>
              {it.unread && <div style={{ width: 5, height: 5, borderRadius: 3, background: chrome.primary, flexShrink: 0 }} />}
            </div>
          ))}
        </div>
        {/* Preview pane */}
        <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 16, background: '#FF6B9D', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>M</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: chrome.text }}>Maya Lin</div>
              <div style={{ fontSize: 7, color: chrome.sub }}>Lead Designer, Northwind</div>
            </div>
            <div style={{ fontSize: 6, color: chrome.sub }}>2h ago</div>
          </div>
          <div style={{ fontSize: 9, fontWeight: 700, color: chrome.text }}>Approve landing page</div>
          <div style={{ padding: 10, background: chrome.bg, border: '1px solid ' + chrome.border, borderRadius: 6 }}>
            <div style={{ fontSize: 7, color: chrome.sub, lineHeight: 1.5 }}>
              Hey Alex — the new landing page is ready. Take a look when you get a chance. We need to ship by Friday for the launch.
            </div>
            <div style={{ marginTop: 6, display: 'flex', gap: 4, alignItems: 'center', fontSize: 6, color: chrome.sub }}>
              <span style={{ padding: '1px 5px', background: chrome.accent + '20', color: chrome.accent, borderRadius: 3, fontWeight: 700 }}>Figma</span>
              <span>landing-v3.fig · 4.2MB</span>
            </div>
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', gap: 6 }}>
            <div style={{ flex: 1, padding: '6px 8px', background: chrome.primary, color: chrome.bg, borderRadius: 4, fontSize: 7, fontWeight: 700, textAlign: 'center' }}>Approve</div>
            <div style={{ flex: 1, padding: '6px 8px', background: 'transparent', color: chrome.text, border: '1px solid ' + chrome.border, borderRadius: 4, fontSize: 7, textAlign: 'center' }}>Request changes</div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ============== 3. Reports (s3) ============== */
function ReportsMockup({ chrome }) {
  const bars = [40, 65, 30, 80, 55, 90, 70, 50, 85, 45, 75, 95];
  const max = 100;
  return (
    <BrowserFrame chrome={chrome}>
      <Sidebar chrome={chrome} active="reports" />
      <div style={{ position: 'absolute', top: 0, left: 56, right: 0, bottom: 0, padding: '12px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: chrome.text }}>Reports</div>
            <div style={{ fontSize: 7, color: chrome.sub, marginTop: 2 }}>March 2026 · all clients</div>
          </div>
          <div style={{ display: 'flex', gap: 4, fontSize: 6 }}>
            {['Week', 'Month', 'Quarter', 'Year'].map((t, i) => (
              <div key={i} style={{ padding: '3px 8px', background: i === 1 ? chrome.accent + '20' : 'transparent', color: i === 1 ? chrome.primary : chrome.sub, borderRadius: 9, fontWeight: i === 1 ? 700 : 400, border: '1px solid ' + (i === 1 ? chrome.accent : chrome.border) }}>{t}</div>
            ))}
          </div>
        </div>
        {/* Top stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 10 }}>
          {[
            { l: 'INVOICED',  v: '$24.8k', d: '+12%', up: true },
            { l: 'COLLECTED', v: '$21.2k', d: '+8%',  up: true },
            { l: 'OUTSTANDING', v: '$3.6k', d: '-2%', up: false },
            { l: 'AVG TURNAROUND', v: '4.2d', d: '-0.5d', up: true },
          ].map((s, i) => (
            <div key={i} style={{ padding: '8px 10px', background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 6 }}>
              <div style={{ fontSize: 6, color: chrome.sub, letterSpacing: 1 }}>{s.l}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: chrome.text, marginTop: 2 }}>{s.v}</div>
              <div style={{ fontSize: 6, color: s.up ? chrome.primary : chrome.sub, fontWeight: 700, marginTop: 1 }}>{s.d}</div>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div style={{ padding: '10px 12px', background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ fontSize: 7, color: chrome.sub, letterSpacing: 1 }}>INVOICED BY MONTH · 2026</div>
            <div style={{ display: 'flex', gap: 8, fontSize: 6, color: chrome.sub }}>
              <span><span style={{ display: 'inline-block', width: 6, height: 6, background: chrome.primary, marginRight: 3, borderRadius: 1, verticalAlign: 'middle' }} />Studio</span>
              <span><span style={{ display: 'inline-block', width: 6, height: 6, background: chrome.accent, marginRight: 3, borderRadius: 1, verticalAlign: 'middle' }} />Solo</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', height: 80, gap: 6, padding: '0 4px' }}>
            {bars.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ width: '70%', height: (v / max * 60) + '%', background: chrome.primary, borderRadius: '2px 2px 0 0' }} />
                <div style={{ width: '40%', height: (v / max * 25) + '%', background: chrome.accent, borderRadius: '2px 2px 0 0' }} />
                <div style={{ fontSize: 5, color: chrome.sub, marginTop: 2 }}>{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ============== 4. Portal (s4) ============== */
function PortalMockup({ chrome }) {
  return (
    <BrowserFrame chrome={chrome}>
      <div style={{ position: 'absolute', inset: 0, padding: '14px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: chrome.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800 }}>F</div>
            <span style={{ fontSize: 11, fontWeight: 700, color: chrome.text }}>Studio Folio</span>
          </div>
          <div style={{ width: 22, height: 22, borderRadius: 11, background: '#FF6B9D', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>M</div>
        </div>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: chrome.text }}>Welcome back, Maya</div>
          <div style={{ fontSize: 8, color: chrome.sub, marginTop: 2 }}>2 active projects · 1 awaiting your feedback</div>
        </div>
        <div style={{ fontSize: 7, color: chrome.sub, letterSpacing: 1, marginBottom: 6 }}>ACTIVE PROJECTS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { name: 'DesignFlow', phase: 'Phase 2 · Wireframes', progress: 60, status: 'On track', color: '#3DA9FC' },
            { name: 'NightOwl',   phase: 'Phase 1 · Awaiting feedback', progress: 30, status: 'Needs you', color: '#FF6B9D' },
            { name: 'Lumen.co',   phase: 'Phase 3 · Final review', progress: 90, status: 'On track', color: '#22C55E' },
          ].map((p, i) => (
            <div key={i} style={{ padding: 10, background: chrome.surface, border: '1px solid ' + chrome.border, borderRadius: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: chrome.text }}>{p.name}</div>
                <div style={{ padding: '2px 6px', background: p.color + '20', color: p.color, fontSize: 6, fontWeight: 700, borderRadius: 3, letterSpacing: 0.5 }}>{p.status}</div>
              </div>
              <div style={{ fontSize: 7, color: chrome.sub, marginTop: 2 }}>{p.phase}</div>
              <div style={{ height: 4, background: chrome.border, borderRadius: 2, marginTop: 6, overflow: 'hidden' }}>
                <div style={{ width: p.progress + '%', height: '100%', background: p.color }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontSize: 6, color: chrome.sub }}>Progress</span>
                <span style={{ fontSize: 6, color: chrome.text, fontWeight: 700 }}>{p.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

const MOCKUPS = {
  s1: DashboardMockup,
  s2: InboxMockup,
  s3: ReportsMockup,
  s4: PortalMockup,
};

function getMockup(id) {
  return MOCKUPS[id] || DashboardMockup;
}

window.DashboardMockups = {
  DashboardMockup, InboxMockup, ReportsMockup, PortalMockup,
  getMockup, MOCKUPS,
};
