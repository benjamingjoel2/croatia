// ─────────────────────────────────────────────────────────────
//  Brand config — the ONE place to change name, contact details
//  and palette. Everything else reads from here at build time.
//  Run `npm run check` after changing colours: it fails the build
//  if any text/background pair drops below WCAG AA (4.5:1).
// ─────────────────────────────────────────────────────────────

export default {
  brand: {
    name: 'Maestral',
    // Shown under the logo and in <title> on the home page.
    tagline: 'Croatia beyond the cruise-ship calendar',
    // One line explaining the name, used in the footer and About page.
    nameStory:
      'The maestral is the gentle north-westerly that rises over the Adriatic on summer afternoons. Sailors wait for it; it clears the heat and fills the sails.',
    // Used for <meta name="description"> on the home page.
    description:
      'Independent ideas for Croatia in the shoulder seasons: island hopping by ferry, sailing, Istrian food and wine, and national parks away from the crowds.',
  },

  // Contact details. The address is HUB385 in Zagreb (premium coworking,
  // owner-approved arrangement). No phone number by design.
  contact: {
    email: 'maestral@tourground.com',
    address: 'HUB385, Petrinjska 9, 10000 Zagreb, Croatia',
    addressLines: ['HUB385', 'Petrinjska 9', '10000 Zagreb', 'Croatia'],
    postalAddress: { streetAddress: 'Petrinjska 9', postalCode: '10000', addressLocality: 'Zagreb', addressCountry: 'HR' },
    hours: 'Mon–Fri, 09:00–17:00 (Central European Time)',
  },

  // Enquiry form. Leave `formEndpoint` empty and the form opens the
  // visitor's email app with the enquiry filled in (works on any static
  // host). Set it to a form service URL (Formspree, Basin, Getform…)
  // to POST submissions instead.
  enquiry: {
    formEndpoint: '',
  },

  // Typography. Self-hosted in src/assets/fonts (downloaded from Google Fonts:
  // IBM Plex Mono 400/500, Instrument Serif roman + italic, Inter Tight 400–600,
  // latin + latin-ext); rules in src/assets/fonts/fonts.css. `preload` lists
  // the files used above the fold.
  fonts: {
    display: '"Instrument Serif", "Iowan Old Style", Georgia, serif',
    body: '"Inter Tight", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
    preload: ['instrument-serif-normal-400-latin.woff2', 'inter-tight-normal-400-600-latin.woff2'],
  },

  // Canonical URL, no trailing slash. Used for sitemap and canonical tags.
  siteUrl: 'https://maestral.tourground.com',

  // Palette. `ink`/`inkSoft` are text colours; the rest are brand surfaces.
  // Text colour used ON each surface is declared in `contrastPairs` below
  // and checked by scripts/check-contrast.mjs.
  palette: {
    adriatic: '#0B4F7C',      // deep Adriatic blue: links, primary buttons
    adriaticBright: '#1D78B0',// lighter sea, decorative bands
    sea: '#DCEEF7',           // pale shallow-water tint
    limestone: '#F7F4EC',     // page background: white limestone
    stone: '#E8E1D3',         // borders, quiet panels
    white: '#FFFFFF',
    pine: '#28533D',          // Aleppo-pine green
    pineTint: '#E3EEE6',
    terracotta: '#A9472A',    // roof tiles: accents, highlights
    terracottaTint: '#F7E4DA',
    lavender: '#5A4A8A',      // Hvar lavender, deep (text-safe)
    lavenderTint: '#ECE7F5',
    sun: '#F2C14E',           // sunshine accent, never behind white text
    deep: '#0D1F2A',          // night-sea: dark sections and footer
    mist: '#A8BBC6',          // secondary text on deep
    sand: '#EFE8DA',          // warm alternate section background
    ink: '#1B2830',           // body text
    inkSoft: '#47555E',       // secondary text
  },

  // [foreground, background] pairs that appear as text in the design.
  contrastPairs: [
    ['ink', 'limestone'], ['ink', 'white'], ['inkSoft', 'limestone'], ['inkSoft', 'white'],
    ['adriatic', 'limestone'], ['adriatic', 'white'], ['adriatic', 'sea'],
    ['white', 'adriatic'], ['white', 'pine'], ['white', 'terracotta'], ['white', 'lavender'],
    ['pine', 'pineTint'], ['terracotta', 'terracottaTint'], ['lavender', 'lavenderTint'],
    ['ink', 'sun'], ['ink', 'sea'], ['ink', 'stone'], ['terracotta', 'limestone'],
    ['pine', 'limestone'], ['lavender', 'limestone'], ['inkSoft', 'stone'], ['ink', 'pineTint'],
    ['ink', 'terracottaTint'], ['ink', 'lavenderTint'], ['white', 'adriaticBright'],
    ['white', 'deep'], ['limestone', 'deep'], ['mist', 'deep'], ['sun', 'deep'], ['ink', 'sand'],
    ['inkSoft', 'sand'], ['adriatic', 'sand'], ['terracotta', 'sand'], ['white', 'ink'], ['sun', 'ink'],
  ],
};
