// Static site build: node build.mjs → dist/
// No dependencies. Reads site.config.mjs, renders every page in src/pages.mjs.
import { mkdir, writeFile, readFile, rm, cp } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import config from './site.config.mjs';
import { layout } from './src/layout.mjs';
import pages from './src/pages.mjs';

const OUT = 'dist';
await rm(OUT, { recursive: true, force: true });
await mkdir(join(OUT, 'assets'), { recursive: true });

// CSS: prepend palette from config as custom properties.
const kebab = (s) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
const vars = [
  ...Object.entries(config.palette).map(([k, v]) => `  --${kebab(k)}: ${v};`),
  ...['display', 'body', 'mono'].map((k) => `  --font-${k}: ${config.fonts[k]};`),
].join('\n');
const css = await readFile('src/assets/style.css', 'utf8');
await writeFile(join(OUT, 'assets/style.css'), `/* Generated from site.config.mjs */\n:root {\n${vars}\n}\n${css}`);
for (const f of ['site.js', 'planner.js', 'planner-core.js']) await cp(join('src/assets', f), join(OUT, 'assets', f));

// Favicon from palette.
const p = config.palette;
await writeFile(join(OUT, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="${p.deep}"/><path d="M20 5 L20 27 L9 27 Z" fill="#fff"/><path d="M22.5 9 Q31.5 18 22.5 27 Z" fill="${p.sun}"/><path d="M6 31.5 Q13 27.5 20 31.5 T34 31.5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`);

for (const pg of pages) {
  const file = pg.file ? join(OUT, pg.file) : join(OUT, pg.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, layout(pg));
}

const urls = pages.filter((pg) => !pg.file).map((pg) => `<url><loc>${config.siteUrl}${pg.path}</loc></url>`).join('');
await writeFile(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
await writeFile(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${config.siteUrl}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages → ${OUT}/`);
