import type { Project } from './types'

/**
 * Your case studies. The order of this list is the order on the site.
 *
 * To add a project: copy one object, give it a new `slug` (lowercase-with-dashes),
 * and put its images in public/images/projects/<slug>/.
 * To hide a project without deleting it, set `draft: true`.
 *
 * The three projects below are SAMPLES. They show how the template works and
 * describe what to write in each section. They are not real client work.
 */
export const projects: Project[] = [
  {
    sample: true,
    featured: true,
    slug: 'sample-onboarding-redesign',
    title: 'Sample case study: onboarding redesign',
    client: '[Client or company]',
    summary:
      'A template for an end-to-end product case study. Replace this line with one sentence that states the problem and what you changed.',
    type: 'Product design · Web app',
    year: '[Year]',
    role: '[Your role, e.g. Lead product designer]',
    team: '[e.g. 1 PM, 3 engineers, 1 researcher]',
    timeline: '[e.g. 10 weeks]',
    platform: '[e.g. Web, iOS]',
    tools: ['Figma', '[Tool]'],
    thumbnail: {
      alt: '[Describe the thumbnail, e.g. Onboarding checklist screen on a laptop]',
      aspect: '16 / 10',
    },
    hero: {
      alt: '[Describe the hero image, e.g. Overview of the redesigned onboarding flow]',
      aspect: '16 / 9',
    },
    confidentiality:
      'Sample note. If this work is under NDA, explain what has been changed or left out, for example "Details and data have been altered to respect confidentiality."',
    sections: [
      {
        kind: 'text',
        id: 'context',
        label: 'Context',
        heading: 'The problem and why it mattered',
        body: [
          'Describe who the product serves, what was not working and how you knew. Name the business or user cost of the problem in plain language.',
          'Keep this to two or three short paragraphs. A hiring manager should understand the stakes before they scroll.',
        ],
      },
      {
        kind: 'list',
        id: 'responsibilities',
        label: 'My role',
        heading: 'What I was responsible for',
        intro: 'List the parts you personally owned, so it is clear where your work starts and ends.',
        items: [
          '[Responsibility, e.g. Planned and ran discovery interviews]',
          '[Responsibility, e.g. Defined the information architecture]',
          '[Responsibility, e.g. Designed and prototyped the new flow]',
          '[Responsibility, e.g. Partnered with engineering through launch]',
        ],
      },
      {
        kind: 'insights',
        id: 'research',
        label: 'Research',
        heading: 'What we learned',
        intro: 'Summarise the research methods you used, then the few insights that shaped the design.',
        items: [
          { title: '[Insight one]', detail: 'Explain the finding and the evidence behind it in one or two sentences.' },
          { title: '[Insight two]', detail: 'Explain the finding and the evidence behind it in one or two sentences.' },
          { title: '[Insight three]', detail: 'Explain the finding and the evidence behind it in one or two sentences.' },
        ],
      },
      {
        kind: 'decisions',
        id: 'decisions',
        label: 'Design decisions',
        heading: 'Key decisions and trade-offs',
        intro: 'Show two or three decisions, the options you considered and why you chose the one you did.',
        items: [
          {
            title: '[Decision one]',
            rationale: 'Describe the alternatives, the trade-off and the reasoning. Mention testing or data that supported it, if any.',
            media: { alt: '[Describe the comparison of options]', aspect: '16 / 10' },
          },
          {
            title: '[Decision two]',
            rationale: 'Describe the alternatives, the trade-off and the reasoning. Mention testing or data that supported it, if any.',
            media: { alt: '[Describe the before and after]', aspect: '16 / 10' },
          },
        ],
      },
      {
        kind: 'gallery',
        id: 'solution',
        label: 'Final solution',
        heading: 'The shipped experience',
        intro: 'Show the final screens with short captions that point out what to notice.',
        layout: 'grid',
        images: [
          { alt: '[Final screen one]', caption: '[Caption: what to notice in this screen]', aspect: '4 / 3' },
          { alt: '[Final screen two]', caption: '[Caption: what to notice in this screen]', aspect: '4 / 3' },
          { alt: '[Final screen three]', caption: '[Caption: what to notice in this screen]', aspect: '16 / 9' },
        ],
      },
      {
        kind: 'outcomes',
        id: 'outcomes',
        label: 'Outcomes',
        heading: 'What changed',
        intro: 'Only include results you can verify. Qualitative outcomes are fine when numbers are not available or not shareable.',
        items: [
          { value: '[Metric]', detail: '[What the number measures and over what period]' },
          { value: '[Metric]', detail: '[What the number measures and over what period]' },
          { detail: '[A qualitative outcome, e.g. feedback from support or sales teams]' },
        ],
      },
      {
        kind: 'text',
        id: 'lessons',
        label: 'Reflection',
        heading: 'What I learned',
        body: ['Close with what you would do differently and what you took into later projects.'],
      },
    ],
  },
  {
    sample: true,
    featured: true,
    slug: 'sample-design-system',
    title: 'Sample case study: design system foundations',
    client: '[Client or company]',
    summary: 'A template for a systems-focused case study. This one leads with the solution, then explains the decisions behind it.',
    type: 'Design systems',
    year: '[Year]',
    role: '[Your role]',
    team: '[Team]',
    timeline: '[Timeline]',
    platform: '[Platform]',
    tools: ['Figma', '[Tool]'],
    thumbnail: { alt: '[Describe the thumbnail, e.g. Component library overview]', aspect: '16 / 10' },
    hero: { alt: '[Describe the hero image]', aspect: '16 / 9' },
    sections: [
      {
        kind: 'text',
        id: 'overview',
        label: 'Overview',
        heading: 'What the system is and who uses it',
        body: [
          'Describe the scope of the system, the products it supports and the teams that use it. Leading with the outcome works well when the result is easy to see.',
        ],
      },
      {
        kind: 'gallery',
        id: 'system',
        label: 'The system',
        heading: 'Foundations and components',
        layout: 'stack',
        images: [
          { alt: '[Tokens: colour, type and spacing]', caption: '[Caption]', aspect: '16 / 9' },
          { alt: '[Component examples with states]', caption: '[Caption]', aspect: '16 / 9' },
        ],
      },
      {
        kind: 'text',
        id: 'problem',
        label: 'Context',
        heading: 'Why the team needed it',
        body: ['Explain the inconsistency, duplication or delivery cost the system addressed.'],
      },
      {
        kind: 'decisions',
        id: 'decisions',
        label: 'Design decisions',
        heading: 'How the system was shaped',
        items: [
          { title: '[Decision, e.g. Token naming]', rationale: 'Explain the reasoning and the trade-off.' },
          { title: '[Decision, e.g. Contribution model]', rationale: 'Explain the reasoning and the trade-off.' },
          { title: '[Decision, e.g. Accessibility defaults]', rationale: 'Explain the reasoning and the trade-off.' },
        ],
      },
      {
        kind: 'outcomes',
        id: 'outcomes',
        label: 'Outcomes',
        heading: 'Adoption and impact',
        items: [{ detail: '[Verified outcome]' }, { detail: '[Verified outcome]' }],
      },
    ],
  },
  {
    sample: true,
    featured: true,
    slug: 'sample-mobile-app',
    title: 'Sample case study: mobile app concept',
    client: 'Personal project',
    summary:
      'A template for a shorter, research-led project. Use this shape for self-initiated or concept work, and say clearly that it is a concept.',
    type: 'Mobile · Concept',
    year: '[Year]',
    role: '[Your role]',
    timeline: '[Timeline]',
    platform: 'iOS',
    thumbnail: { alt: '[Describe the thumbnail, e.g. Three app screens side by side]', aspect: '16 / 10' },
    hero: { alt: '[Describe the hero image]', aspect: '16 / 9' },
    sections: [
      {
        kind: 'insights',
        id: 'research',
        label: 'Research',
        heading: 'Starting from the people',
        intro: 'Describe who you spoke to and what you heard.',
        items: [
          { title: '[Insight]', detail: '[Evidence and implication]' },
          { title: '[Insight]', detail: '[Evidence and implication]' },
        ],
      },
      {
        kind: 'text',
        id: 'approach',
        label: 'Approach',
        heading: 'From insight to concept',
        body: ['Explain how the insights turned into a direction, and what you tested along the way.'],
      },
      {
        kind: 'gallery',
        id: 'screens',
        label: 'Screens',
        heading: 'Key screens',
        layout: 'grid',
        images: [
          { alt: '[Screen one]', aspect: '3 / 4' },
          { alt: '[Screen two]', aspect: '3 / 4' },
        ],
      },
      {
        kind: 'text',
        id: 'lessons',
        label: 'Reflection',
        heading: 'What I would do next',
        body: ['Describe what you would validate or change with more time.'],
      },
    ],
  },
]

export const publishedProjects = projects.filter((project) => !project.draft)

export function getProject(slug: string | undefined) {
  return publishedProjects.find((project) => project.slug === slug)
}
