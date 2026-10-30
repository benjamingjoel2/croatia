import config from '../site.config.mjs';
import { legal } from './data/legal.mjs';

// Maestral's legal pages. The site sets no cookies and stores nothing in the browser.
export const LEGAL = legal({
  brand: config.brand.name,
  email: config.contact.email,
  address: config.contact.addressLines,
  processors: [{ name: 'Vercel', purpose: 'hosts this website' }],
});
