import type { SiteConfig } from './types'

/**
 * Your personal details. Values in [square brackets] are placeholders.
 * Anything set to `null` is hidden or shown as "not added yet" on the site,
 * so nothing ever links to a page or file that does not exist.
 */
export const site: SiteConfig = {
  name: 'Almedina Termkolli',
  role: 'Product Designer',
  location: '[City, Country]',
  // e.g. 'Europe/Berlin'. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  timeZone: null,
  availability: 'Open to remote and international product design roles',

  // Placeholder positioning line. Rewrite it in your own words.
  headline: 'Designing *clear, considered* products for complex problems.',
  intro:
    '[Placeholder intro. In two sentences, say what kind of products you design, who you design for, and what you care about in your work.]',

  // e.g. 'hello@yourname.com'
  email: null,
  // e.g. 'https://www.linkedin.com/in/your-profile'
  linkedin: null,
  otherLinks: [],

  // Put your PDF in public/ and set this to its file name, e.g. 'resume.pdf'.
  resume: null,

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
