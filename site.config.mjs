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

  // Placeholder contact details: replace before launch.
  contact: {
    email: 'hello@maestral.example',
    phone: '+385 00 000 0000',
    phoneHref: '+385000000000',
    address: 'Placeholder address, Split, Croatia',
    hours: 'Mon–Fri, 09:00–17:00 (Central European Time)',
  },

  // Enquiry form. Leave `formEndpoint` empty and the form opens the
  // visitor's email app with the enquiry filled in (works on any static
  // host). Set it to a form service URL (Formspree, Basin, Getform…)
  // to POST submissions instead.
  enquiry: {
    formEndpoint: '',
  },

  // Canonical URL, no trailing slash. Used for sitemap and canonical tags.
  siteUrl: 'https://maestral-croatia.vercel.app',

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
  ],
};
