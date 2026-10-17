import type { AboutContent, ExperienceEntry } from './types'

/**
 * About page and homepage preview. Everything here is sample content
 * written as guidance. Replace it with your own story and set `sample: false`.
 */
export const about: AboutContent = {
  sample: true,
  heading: 'A product designer who cares about the reasoning as much as the result.',
  preview:
    '[Placeholder. One short paragraph about you: how long you have been designing products, the kinds of teams you work in, and what you are known for. Keep it specific and avoid adjectives you cannot back up.]',
  body: [
    '[Placeholder. Open with how you came to product design and the kind of problems that keep you interested.]',
    '[Placeholder. Describe how you work with product managers, engineers and researchers, and the part of the process where you add the most value.]',
    '[Placeholder. Close with what you are looking for next, for example the type of team, product stage or domain.]',
  ],
  principles: [
    {
      title: 'Understand before designing',
      detail: '[Placeholder. A sentence on how you build understanding of users and constraints before committing to a direction.]',
    },
    {
      title: 'Make decisions visible',
      detail: '[Placeholder. A sentence on how you document trade-offs so teams can align and move faster.]',
    },
    {
      title: 'Design for the whole system',
      detail: '[Placeholder. A sentence on how you think about consistency, reuse and edge cases.]',
    },
  ],
  capabilities: [
    {
      title: 'Research & strategy',
      items: ['User interviews', 'Usability testing', 'Journey mapping', 'Problem framing'],
    },
    {
      title: 'Interaction & UI',
      items: ['Information architecture', 'Interaction design', 'Prototyping', 'Visual design'],
    },
    {
      title: 'Systems & delivery',
      items: ['Design systems', 'Accessibility', 'Design QA', 'Developer handoff'],
    },
  ],
  tools: ['Figma', '[Tool]', '[Tool]', '[Tool]'],
  education: [{ title: '[Degree or course]', detail: '[Institution, year]' }],
}

/** Most recent first. */
export const experience: ExperienceEntry[] = [
  {
    sample: true,
    company: '[Company name]',
    role: '[Job title, e.g. Product Designer]',
    period: '[20XX] – Present',
    location: '[City / Remote]',
    summary: '[Placeholder. One or two sentences on the product, your scope and the kind of work you led.]',
  },
  {
    sample: true,
    company: '[Company name]',
    role: '[Job title]',
    period: '[20XX] – [20XX]',
    location: '[City / Remote]',
    summary: '[Placeholder. One or two sentences on the product, your scope and the kind of work you led.]',
  },
  {
    sample: true,
    company: '[Company name]',
    role: '[Job title, e.g. Junior UI/UX Designer]',
    period: '[20XX] – [20XX]',
    location: '[City / Remote]',
    summary: '[Placeholder. One or two sentences on where you started and what you learned.]',
  },
]
