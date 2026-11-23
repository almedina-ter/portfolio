import type { SiteConfig } from './types'

/**
 * Your personal details. Values in [square brackets] are placeholders.
 * Anything set to `null` is hidden or shown as "not added yet" on the site,
 * so nothing ever links to a page or file that does not exist.
 */
export const site: SiteConfig = {
  name: 'Almedina Termkolli',
  role: 'Product Designer',
  location: 'Prishtine, Kosovo',
  // e.g. 'Europe/Berlin'. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  timeZone: null,
  availability: 'Open to remote and international product design roles',

  headline: 'Designing healthcare products where *workflow, system and brand* hold together.',
  intro:
    'I’m Almedina, a Product Designer. I start from how people actually work, then shape structured, functional interfaces and the design systems behind them, so each screen is simple to use and consistent with the rest of the product. My work spans complex healthcare SaaS workflows, the component library that supports them, and the visual identity that gives a product its voice.',

  // e.g. 'hello@yourname.com'
  email: 'termkollialmedina01@gmail.com',
  // e.g. 'https://www.linkedin.com/in/your-profile'
  linkedin: 'https://www.linkedin.com/in/almedina-termkolli-a11359230/',
  otherLinks: [],

  // Put your PDF in public/ and set this to its file name, e.g. 'resume.pdf'.
  resume: 'Almedina-Termkolli-CV.pdf',

  // e.g. 'https://username.github.io/portfolio'. Leave null until you know it.
  url: null,
  ogImage: null,

  // e.g. 'https://formspree.io/f/abcdwxyz'. Leave null to hide the form.
  contactFormEndpoint: null,

  portrait: {
    // e.g. 'images/portrait.webp'
    alt: 'Portrait of Almedina Termkolli',
    aspect: '4 / 5',
  },

  description:
    'Portfolio of Almedina Termkolli, a product designer working across UX research, interaction design, visual design and design systems.',
}
