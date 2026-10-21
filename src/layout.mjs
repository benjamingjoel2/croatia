import config from '../site.config.mjs';
import { esc, arrow } from './lib.mjs';

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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://images.unsplash.com">
<link rel="stylesheet" href="${config.fonts.href}">
<link rel="stylesheet" href="/assets/style.css">
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
        <a href="tel:${esc(config.contact.phoneHref)}">${esc(config.contact.phone)}</a><br>
        <span class="muted">${esc(config.contact.hours)}</span></p>
      </div>
      <div>
        <p class="label label-light">Explore</p>
        <ul class="footer-links">${nav.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('')}<li><a href="/credits/">Photo credits</a></li></ul>
      </div>
    </div>
    <p class="footer-wordmark" aria-hidden="true">${esc(b.name)}</p>
    <div class="footer-base"><p>© ${new Date().getFullYear()} ${esc(b.name)}. Independent travel ideas.</p><p>Photos from Unsplash, credited on each image.</p></div>
  </div>
</footer>
<script src="/assets/site.js" defer></script>
${scripts.map((s) => `<script type="module" src="${s}"></script>`).join('\n')}
</body>
</html>`;
}
