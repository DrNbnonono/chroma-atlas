// src/lib/spec.js -- render a style or palette as a copy-pasteable
// spec block. The goal: drop the result into an AI prompt and the AI
// has everything it needs to reproduce the visual treatment in code
// (color tokens, typography, layout, intent).

function formatStyleSpec(st) {
  const t = st.theme || {};
  const lines = [];
  lines.push("# Style: " + st.name);
  if (st.desc) lines.push("> " + st.desc);
  lines.push("");
  lines.push("## Color tokens");
  lines.push("- bg:      " + (t.bg || ""));
  lines.push("- surface: " + (t.surface || ""));
  lines.push("- text:    " + (t.text || ""));
  lines.push("- sub:     " + (t.sub || ""));
  lines.push("- primary: " + (t.primary || ""));
  lines.push("- accent:  " + (t.accent || ""));
  lines.push("- border:  " + (t.border || ""));
  lines.push("- isDark:  " + (t.isDark ? "true" : "false"));
  lines.push("");
  lines.push("## Typography");
  lines.push("- fontFamily: " + (t.fontFamily || "system-ui, sans-serif"));
  lines.push("");
  lines.push("## Layout");
  lines.push("- type: " + (st.layout || "flow"));
  if (st.Variants) lines.push("- has variants: yes");
  return lines.join("\n");
}

function formatPaletteSpec(p) {
  const lines = [];
  lines.push("# Palette: " + p.name);
  if (p.desc) lines.push("> " + p.desc);
  lines.push("");
  lines.push("## Color tokens");
  lines.push("- bg:      " + (p.bg || ""));
  lines.push("- surface: " + (p.surface || ""));
  lines.push("- text:    " + (p.text || ""));
  lines.push("- sub:     " + (p.sub || ""));
  lines.push("- primary: " + (p.primary || ""));
  lines.push("- accent:  " + (p.accent || ""));
  lines.push("- border:  " + (p.border || ""));
  lines.push("- isDark:  " + (p.isDark ? "true" : "false"));
  lines.push("");
  if (Array.isArray(p.swatches) && p.swatches.length) {
    lines.push("## Swatches");
    p.swatches.forEach((c, i) => lines.push("- " + (i + 1) + ". " + c));
  }
  return lines.join("\n");
}

// Click feedback: a tiny "Copied!" pulse without a real toast system.
// Caller passes a React ref to the button so we can swap its label.
function copyToClipboard(text, btn) {
  const done = () => {
    if (!btn) return;
    const orig = btn.dataset.label || btn.textContent;
    btn.dataset.label = orig;
    btn.textContent = "Copied!";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
    }, 1200);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
  if (done) done();
}

window.SpecLib = { formatStyleSpec, formatPaletteSpec, copyToClipboard };
