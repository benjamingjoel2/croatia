import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import config from '../site.config.mjs';
import { esc, arrow } from './lib.mjs';
import { LEGAL } from './legal.mjs';

export const nav = [
  ['/regions/', 'Regions'],
  ['/islands/', 'Islands'],
  ['/national-parks/', 'National parks'],
  ['/food-and-wine/', 'Food & wine'],
  ['/when-to-go/', 'When to go'],
  ['/stays/', 'Stays'],
  ['/journal/', 'Journal'],
  ['/about/', 'About'],
];

export const logoMark = `<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><path d="M20 5 L20 27 L9 27 Z" fill="currentColor"/><path d="M22.5 9 Q31.5 18 22.5 27 Z" fill="var(--sun)"/><path d="M6 31.5 Q13 27.5 20 31.5 T34 31.5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;

// Self-hosted fonts (src/assets/fonts, from Google Fonts): @font-face rules inlined so text
// never waits on a third-party stylesheet; the above-the-fold files are preloaded.
const fontCss = readFileSync('src/assets/fonts/fonts.css', 'utf8').replace(/\/\*[^*]*\*\/\n?/g, '').replace(/\s*\n\s*/g, '');
const fontPreload = config.fonts.preload.map((f) => `<link rel="preload" href="/assets/fonts/${f}" as="font" type="font/woff2" crossorigin>`).join('');
// Content hash for cache-busting long-cached assets.
const v = (f) => (existsSync(f) ? createHash('sha1').update(readFileSync(f)).update(JSON.stringify(config)).digest('hex').slice(0, 10) : '0');
const cssV = v('src/assets/style.css');
const jsV = v('src/assets/site.js');
// Preload the hero photo (phone and desktop crops) when the page has one.
const heroPreload = (body) => {
  const m = body.match(/<picture class="bleed-img">\s*<source media="\(min-width: 800px\)" srcset="([^"]+)" sizes="100vw">\s*<img src="[^"]+" srcset="([^"]+)" sizes="100vw"[^>]*fetchpriority="high"/);
  return m
    ? `<link rel="preload" as="image" media="(max-width: 799px)" imagesrcset="${m[2]}" imagesizes="100vw" fetchpriority="high"><link rel="preload" as="image" media="(min-width: 800px)" imagesrcset="${m[1]}" imagesizes="100vw" fetchpriority="high">`
    : '';
};

export function layout({ path, title, description, body, scripts = [], hero = false }) {
  const b = config.brand;
  const fullTitle = path === '/' ? `${b.name}: ${b.tagline}` : `${title} · ${b.name}`;
  const desc = description || b.description;
  const isCurrent = (href) => (path === href || (href !== '/' && path.startsWith(href)) ? ' aria-current="page"' : '');
  return `<!doctype html>
<html lang="en-GB" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.className="js"</script>
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${config.siteUrl}${path}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta name="theme-color" content="${config.palette.deep}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
${path === '/' ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'TravelAgency', name: b.name, description: b.description, url: `${config.siteUrl}/`, email: config.contact.email, address: { '@type': 'PostalAddress', ...config.contact.postalAddress } }).replace(/</g, '\\u003c')}</script>` : ''}
<link rel="preconnect" href="https://images.unsplash.com">
${heroPreload(body)}
${fontPreload}
<style>${fontCss}</style>
<link rel="stylesheet" href="/assets/style.css?v=${cssV}">
</head>
<body class="${hero ? 'has-hero' : ''}">
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="header-row">
    <a class="brand" href="/" aria-label="${esc(b.name)}, home">${logoMark}<span class="brand-name">${esc(b.name)}</span></a>
    <nav id="site-nav" class="site-nav" aria-label="Main">
      <ul>${nav.map(([href, label]) => `<li><a href="${href}"${isCurrent(href)}>${label}</a></li>`).join('')}<li class="nav-enquire"><a href="/enquire/"${isCurrent('/enquire/')}>Enquire</a></li></ul>
    </nav>
    <div class="header-actions">
      <a class="btn btn-small btn-header" href="/enquire/"${isCurrent('/enquire/')}>Enquire${arrow}</a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav"><span class="bars" aria-hidden="true"></span><span class="nav-toggle-label">Menu</span></button>
    </div>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-intro">
        <p class="label label-light">The name</p>
        <p class="footer-story">${esc(b.nameStory)}</p>
        <a class="btn btn-light" href="/enquire/">Plan a trip with us${arrow}</a>
      </div>
      <div>
        <p class="label label-light">Contact</p>
        <p><a href="mailto:${esc(config.contact.email)}">${esc(config.contact.email)}</a><br>
        <span class="muted">${esc(config.contact.hours)}</span></p>
        <p class="muted">${config.contact.addressLines.map(esc).join('<br>')}</p>
      </div>
      <div>
        <p class="label label-light">Explore</p>
        <ul class="footer-links">${nav.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul>
      </div>
    </div>
    <p class="footer-wordmark" aria-hidden="true">${esc(b.name)}</p>
    <div class="footer-base"><p>© ${new Date().getFullYear()} ${esc(b.name)}. Independent travel ideas.</p><p>${LEGAL.map((l) => `<a href="/${l.slug}/">${esc(l.title)}</a>`).join(' · ')}</p></div>
  </div>
</footer>
<script src="/assets/site.js?v=${jsV}" defer></script>
${scripts.map((s) => `<script type="module" src="${s}"></script>`).join('\n')}
</body>
</html>`;
}
