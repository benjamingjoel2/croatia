import config from '../site.config.mjs';
import { esc } from './lib.mjs';

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

const logo = `<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle cx="20" cy="20" r="19" fill="var(--adriatic)"/><path d="M20 7 L20 27 L10 27 Z" fill="var(--white)"/><path d="M22 11 Q30 19 22 27 Z" fill="var(--sun)"/><path d="M7 30 Q13.5 26 20 30 T33 30" stroke="var(--white)" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>`;

export function layout({ path, title, description, body, scripts = [] }) {
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
<meta name="theme-color" content="${config.palette.adriatic}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://images.unsplash.com">
<link rel="stylesheet" href="/assets/style.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-row">
    <a class="brand" href="/" aria-label="${esc(b.name)}, home">${logo}<span class="brand-name">${esc(b.name)}</span></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav"><span class="bars" aria-hidden="true"></span>Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Main">
      <ul>${nav.map(([href, label]) => `<li><a href="${href}"${isCurrent(href)}>${label}</a></li>`).join('')}</ul>
      <a class="btn btn-small" href="/enquire/"${isCurrent('/enquire/')}>Enquire</a>
    </nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <p class="brand footer-brand">${logo}<span class="brand-name">${esc(b.name)}</span></p>
      <p>${esc(b.nameStory)}</p>
    </div>
    <div>
      <h2 class="footer-h">Contact</h2>
      <p><a href="mailto:${esc(config.contact.email)}">${esc(config.contact.email)}</a><br>
      <a href="tel:${esc(config.contact.phoneHref)}">${esc(config.contact.phone)}</a><br>
      ${esc(config.contact.hours)}</p>
      <p><a class="btn btn-ghost-light" href="/enquire/">Send an enquiry</a></p>
    </div>
    <div>
      <h2 class="footer-h">Explore</h2>
      <ul class="footer-links">${nav.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('')}<li><a href="/credits/">Photo credits</a></li></ul>
    </div>
  </div>
  <div class="wrap footer-base"><p>© ${new Date().getFullYear()} ${esc(b.name)}. Independent travel ideas. Photos from Unsplash, credited on each image.</p></div>
</footer>
<script src="/assets/site.js" defer></script>
${scripts.map((s) => `<script type="module" src="${s}"></script>`).join('\n')}
</body>
</html>`;
}
