// src/components/copy-button.jsx -- a themable "Copy" button.
// Renders a small chip with a clipboard icon. On click, copies the
// spec to the clipboard and flashes a "Copied!" label for ~1.2s.

const COPY_SVG = (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="9" height="9" rx="1.5" />
    <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
  </svg>
);
const CHECK_SVG = (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8.5l3 3 7-7" />
  </svg>
);

function CopyButton({ kind, item, theme, size }) {
  // size: "sm" (card overlay) or "md" (detail back bar)
  const isSm = size === "sm";
  const spec = (kind === "palette"
    ? window.SpecLib.formatPaletteSpec(item)
    : window.SpecLib.formatStyleSpec(item));

  // Theming: if a `theme` is passed, use its tokens; otherwise neutral.
  const t = theme || { bg: "#1F1A14", surface: "#FFFFFF", text: "#1F1A14", sub: "#6B635A", primary: "#1F1A14", accent: "#C96442", border: "#E8E2D6", isDark: false };

  const onClick = (e) => {
    e.stopPropagation();            // do not trigger the card's onClick
    e.preventDefault();
    window.SpecLib.copyToClipboard(spec, e.currentTarget);
  };

  const padding = isSm ? "3px 8px" : "6px 12px";
  const fontSize = isSm ? 10 : 12;
  const baseStyle = {
    display: "inline-flex", alignItems: "center", gap: 5,
    padding, fontSize, fontWeight: 600, letterSpacing: 0.3,
    background: "rgba(255,255,255,0.9)", color: t.primary,
    border: "1px solid " + t.border, borderRadius: 999,
    cursor: "pointer", backdropFilter: "blur(6px)",
    transition: "background .12s, transform .12s",
    fontFamily: "inherit",
  };
  return (
    <button
      onClick={onClick}
      title={"Copy " + (kind === "palette" ? "palette" : "style") + " spec"}
      data-label={isSm ? "Copy" : "Copy spec"}
      style={baseStyle}
      onMouseEnter={(e) => (e.currentTarget.style.background = t.surface)}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.9)")}
    >
      {COPY_SVG}<span>Copy</span>
    </button>
  );
}

window.CopyButton = CopyButton;
