// Fails (exit 1) if any declared text/background pair is below WCAG AA 4.5:1.
import config from '../site.config.mjs';

const lum = (hex) => {
  const [r, g, b] = hex.replace('#', '').match(/../g).map((h) => {
    const c = parseInt(h, 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

const p = config.palette;
let failed = 0;
for (const [fg, bg] of config.contrastPairs) {
  if (!p[fg] || !p[bg]) { console.error(`Unknown colour in pair ${fg}/${bg}`); failed++; continue; }
  const r = ratio(p[fg], p[bg]);
  const ok = r >= 4.5;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(5)}:1  ${fg} on ${bg}`);
}
if (failed) { console.error(`\n${failed} pair(s) below WCAG AA.`); process.exit(1); }
console.log('\nAll pairs meet WCAG AA (4.5:1).');
