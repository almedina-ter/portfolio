import type { CaseStudySection, Project } from './types'

/**
 * The case-study structure every project follows: overview and role, background and
 * problem, research, challenges and opportunities, the previous experience, the design
 * process, the final design, screens and outcomes. Text in [brackets] is a prompt
 * for what to write. Replace it with your own content, and delete any section you
 * don't need.
 */
function caseStudyStructure(): CaseStudySection[] {
  return [
    {
      kind: 'list',
      id: 'overview',
      label: 'Overview',
      heading: 'Project overview and my role',
      intro: '[Two or three sentences: what the product is, who it is for and what you were asked to do.]',
      items: [
        '[Responsibility, e.g. Led the design from research to hand-off]',
        '[Responsibility, e.g. Planned and ran user interviews]',
        '[Responsibility, e.g. Designed and tested the high-fidelity prototype]',
      ],
    },
    {
      kind: 'text',
      id: 'background',
      label: 'Background',
      heading: 'Background and problem',
      body: [
        '[What was happening before this project, and why it mattered to users and to the business.]',
        '[The problem in one sentence, e.g. "People could not … because …".]',
      ],
    },
    {
      kind: 'insights',
      id: 'research',
      label: 'Research',
      heading: 'Research and insights',
      intro: '[The methods you used, e.g. interviews, surveys, competitor review or analytics, and with how many people.]',
      items: [
        { title: '[Insight one]', detail: '[What you found and the evidence behind it.]' },
        { title: '[Insight two]', detail: '[What you found and the evidence behind it.]' },
        { title: '[Insight three]', detail: '[What you found and the evidence behind it.]' },
      ],
    },
    {
      kind: 'challenges',
      id: 'challenges',
      label: 'Challenges',
      heading: 'Challenges and opportunities',
      intro: '[The main obstacles you faced, and the opportunity each one opened.]',
      items: [
        { challenge: '[Challenge one]', opportunity: '[The opportunity, e.g. "How might we …?"]' },
        { challenge: '[Challenge two]', opportunity: '[The opportunity, e.g. "How might we …?"]' },
        { challenge: '[Challenge three]', opportunity: '[The opportunity, e.g. "How might we …?"]' },
      ],
    },
    {
      kind: 'decisions',
      id: 'previous',
      label: 'Previous experience',
      heading: 'The previous experience and its issues',
      intro: '[Show the product before your work and the issues you found in it.]',
      items: [
        {
          title: '[Issue one]',
          rationale: '[What was wrong, and how you knew, e.g. from research or analytics.]',
          media: { alt: '[Screenshot of the previous design]', aspect: '16 / 10' },
        },
        {
          title: '[Issue two]',
          rationale: '[What was wrong, and how you knew, e.g. from research or analytics.]',
          media: { alt: '[Screenshot of the previous design]', aspect: '16 / 10' },
        },
      ],
    },
    {
      kind: 'process',
      id: 'process',
      label: 'Process',
      heading: 'Design process and iterations',
      intro: '[How the design evolved, from first ideas to the final version.]',
      steps: [
        { title: '[Step one, e.g. User flows and sketches]', detail: '[What you did and what you learned.]', media: { alt: '[Sketch or user flow]', aspect: '4 / 3' } },
        { title: '[Step two, e.g. Wireframes]', detail: '[What you did and what you learned.]', media: { alt: '[Wireframes]', aspect: '4 / 3' } },
        { title: '[Step three, e.g. Testing and iteration]', detail: '[What changed after testing, and why.]', media: { alt: '[Before and after an iteration]', aspect: '4 / 3' } },
      ],
    },
    {
      kind: 'decisions',
      id: 'solution',
      label: 'Final design',
      heading: 'Final design solutions',
      intro: '[Walk through the key parts of the final design and the decision behind each one.]',
      items: [
        {
          title: '[Solution one]',
          rationale: '[What it does and how it solves the problem.]',
          media: { alt: '[Final screen]', aspect: '16 / 10' },
        },
        {
          title: '[Solution two]',
          rationale: '[What it does and how it solves the problem.]',
          media: { alt: '[Final screen]', aspect: '16 / 10' },
        },
        {
          title: '[Solution three]',
          rationale: '[What it does and how it solves the problem.]',
          media: { alt: '[Final screen]', aspect: '16 / 10' },
        },
      ],
    },
    {
      kind: 'gallery',
      id: 'screens',
      label: 'Screens',
      heading: 'Screens and mockups',
      layout: 'grid',
      images: [
        { alt: '[Mockup or screen]', caption: '[What to notice]', aspect: '4 / 3' },
        { alt: '[Mockup or screen]', caption: '[What to notice]', aspect: '4 / 3' },
        { alt: '[Mockup or screen]', caption: '[What to notice]', aspect: '4 / 3' },
        { alt: '[Mockup or screen]', caption: '[What to notice]', aspect: '4 / 3' },
      ],
    },
    {
      kind: 'outcomes',
      id: 'outcomes',
      label: 'Outcomes',
      heading: 'Outcomes and results',
      intro: '[Only results you can verify. Qualitative feedback is fine when numbers are not available.]',
      items: [
        { value: '[Metric]', detail: '[What the number measures and over what period]' },
        { value: '[Metric]', detail: '[What the number measures and over what period]' },
        { detail: '[Feedback or another outcome]' },
      ],
    },
  ]
}

/**
 * Your case studies. The order of this list is the order on the site.
 *
 * To add a project: copy one object, give it a new `slug` (lowercase-with-dashes),
 * and put its images in public/images/projects/<slug>/.
 * To hide a project without deleting it, set `draft: true`.
 *
 * Projects 01 to 03 are your three Selected Work slots. Add a description, timeline and
 * images for each, then replace the prompts in caseStudyStructure() with real content.
 * The SAMPLE projects after them are hidden with `draft: true` and kept as examples.
 */
export const projects: Project[] = [
  {
    featured: true,
    slug: 'cloudtech-branding',
    title: 'Branding',
    client: 'Cloudtech',
    summary:
      'A new brand identity for Cloudtech, a technology company: a logo built from Morse code, a visual language for its website and social media, and a website built in Framer.',
    type: 'Brand identity · Website',
    year: '',
    role: 'Graphic Designer',
    timeline: '2 weeks',
    website: 'https://www.cloudtechnology.us/',
    tools: ['Figma', 'Framer'],
    thumbnail: {
      src: 'images/projects/cloudtech-branding/thumbnail.webp',
      alt: 'Cloudtech logo: a mark made of rounded bars and dots above the Cloudtech wordmark, on a dark navy background',
      width: 1600,
      height: 1200,
      aspect: '4 / 3',
    },
    hero: {
      src: 'images/projects/cloudtech-branding/hero.webp',
      alt: 'Cloudtech logo: a mark made of rounded bars and dots above the Cloudtech wordmark, on a dark navy background',
      width: 2400,
      height: 1350,
      aspect: '16 / 9',
    },
    sections: [
      {
        kind: 'list',
        id: 'overview',
        label: 'Overview',
        heading: 'Project overview and my role',
        intro:
          'Cloudtech is a technology company with offices in New York, Düsseldorf, Tirana and Prishtina. It builds software and offers cloud, DevOps, mobile, security, AI and consulting services to businesses going through digital transformation. They came to me for a brand identity that could finally show that work to the market.',
        items: [
          'Designed a new logo. The client wanted a fresh mark that felt clean and technical, and looked different from everyone else in their space.',
          'Created wireframes for the company website, turning the new brand into a clear page structure.',
          'Delivered a usable design system for the brand: logo versions, colours, social media templates, banners and profile pictures, plus a website we built in Framer.',
        ],
      },
      {
        kind: 'text',
        id: 'background',
        label: 'Background',
        heading: 'Background and problem',
        body: [
          'Cloudtech had the idea, the team and the services, but nothing that presented them. There was no recognisable logo and no consistent look across the website and social media.',
          'The problem was easy to say and hard to solve: how do you show a technology company to the market when every competitor already looks “techy”?',
        ],
      },
      {
        kind: 'insights',
        id: 'research',
        label: 'Research',
        heading: 'Research and insights',
        intro:
          'I started with a competitor review and a look at the wider market: how cloud and software companies present themselves, which symbols and colours they use, and where Cloudtech could stand apart.',
        items: [
          {
            title: 'Everyone looks the same',
            detail: 'Most brands in the space use abstract geometric marks, clouds, circuits and blue gradients. Looking technical was not enough to be remembered.',
          },
          {
            title: 'Clean marks travel further',
            detail: 'The logo had to work everywhere, from a website favicon to a LinkedIn banner. Simple, bold shapes stay readable at every size.',
          },
          {
            title: 'A story makes it stick',
            detail: 'A mark with an idea behind it is easier to remember and easier for the team to explain. Cloudtech needed a meaning, not just a shape.',
          },
        ],
      },
      {
        kind: 'challenges',
        id: 'challenges',
        label: 'Challenges',
        heading: 'Challenges and opportunities',
        intro: 'Two challenges shaped the brief.',
        items: [
          {
            challenge: 'Be clean: the identity had to stay simple and readable without losing character.',
            opportunity: 'Design a clean logo from a few bold, rounded shapes that work at any size.',
          },
          {
            challenge: 'Be tech, without looking like every other tech brand.',
            opportunity: 'Find a technical idea that belongs only to Cloudtech: its initials, written in Morse code.',
          },
        ],
      },
      {
        kind: 'process',
        id: 'process',
        label: 'Process',
        heading: 'Design process and iterations',
        intro: 'The design moved from sketches and research, to wireframes, to a cleaner final version after testing.',
        steps: [
          {
            title: 'Sketches',
            detail:
              'I sketched ideas and collected inspiration from technology brands online. Morse code stood out: one of the first ways people sent messages electronically, built from just dots and dashes. I studied how it works and wrote out Cloudtech’s initials. C is dash, dot, dash, dot. T is a single dash.',
            media: {
              src: 'images/projects/cloudtech-branding/process-sketches.webp',
              alt: 'Hand-drawn sketches in blue pen: rounded bars and dots combined into early versions of the Cloudtech mark',
              width: 1600,
              height: 1200,
              aspect: '4 / 3',
            },
          },
          {
            title: 'Wireframes',
            detail:
              'Once the logo was settled, I wireframed the website. The wireframes brought the idea to life as a page: a bold hero with one clear message, the company’s expertise as cards, its services at a glance, and its offices to build trust.',
            media: {
              src: 'images/projects/cloudtech-branding/process-wireframes.webp',
              alt: 'Low-fidelity desktop wireframe of the Cloudtech homepage: hero, partners, expertise cards and services',
              width: 1600,
              height: 1200,
              aspect: '4 / 3',
            },
          },
          {
            title: 'Testing and iteration',
            detail:
              'The first logos placed the Morse symbol inside the word, in place of the O. Tested at small sizes and with the client, the name was harder to read, so I moved the symbol out into a standalone mark beside a clean wordmark. The website went through the same clean-up: simpler sections and more space, so the content leads.',
            media: {
              src: 'images/projects/cloudtech-branding/process-iteration.webp',
              alt: 'Logo iterations: the wordmark with the symbol inside it, then a standalone mark beside a clean wordmark, shown at large and small sizes',
              width: 1600,
              height: 1200,
              aspect: '4 / 3',
            },
          },
        ],
      },
      {
        kind: 'decisions',
        id: 'solution',
        label: 'Final design',
        heading: 'Final design solutions',
        intro: 'The final identity is a small, consistent system: one mark, one wordmark and one colour story, used the same way everywhere.',
        items: [
          {
            title: 'A mark built from Morse code',
            rationale:
              'The symbol combines the Morse code for C (dash, dot, dash, dot) and T (dash). Dashes become rounded bars and dots become circles. The result is simple, technical and has a story the team can tell.',
            media: {
              src: 'images/projects/cloudtech-branding/final-mark.webp',
              alt: 'How the mark is built: the Morse code for C, plus the Morse code for T, equals the Cloudtech mark',
              width: 1600,
              height: 1000,
              aspect: '16 / 10',
            },
          },
          {
            title: 'A clean wordmark and flexible lockups',
            rationale:
              'A bold, wide, all-caps wordmark sits beside the mark. The logo comes in light and dark, horizontal and stacked versions, and the mark works on its own as an app icon or profile picture.',
            media: {
              src: 'images/projects/cloudtech-branding/final-lockups.webp',
              alt: 'Logo lockups on navy, white and blue backgrounds, and the mark on its own',
              width: 1600,
              height: 1000,
              aspect: '16 / 10',
            },
          },
          {
            title: 'Navy, electric blue and light',
            rationale:
              'A near-black navy base with electric blue light and 3D shapes gives the brand a premium, technical feel, and keeps white type easy to read.',
            media: {
              src: 'images/projects/cloudtech-branding/final-colour.webp',
              alt: 'Brand colours Midnight, Indigo, Electric blue and White next to an “Engineering the future today” social post',
              width: 1600,
              height: 1000,
              aspect: '16 / 10',
            },
          },
          {
            title: 'Social media templates that scale',
            rationale:
              'Every service post shares one layout: the mark, a label, a bold title and a large outline icon. New services can be added without starting from scratch, and the feed stays consistent.',
            media: {
              src: 'images/projects/cloudtech-branding/final-social.webp',
              alt: 'Six social media posts, one for each Cloudtech service, sharing the same layout',
              width: 1600,
              height: 1000,
              aspect: '16 / 10',
            },
          },
          {
            title: 'A website built in Framer',
            rationale:
              'The website brings everything together: the logo, the navy and blue palette, the 3D shapes, and clear sections for expertise and services. We built it in Framer, and it is live today.',
            media: {
              src: 'images/projects/cloudtech-branding/final-website.webp',
              alt: 'The Cloudtech website shown on a laptop in a social media post',
              width: 1600,
              height: 1000,
              aspect: '16 / 10',
            },
          },
        ],
      },
      {
        kind: 'gallery',
        id: 'mockups',
        label: 'Mockups',
        heading: 'Mockups',
        layout: 'stack',
        images: [
          {
            src: 'images/projects/cloudtech-branding/mockups-scene.webp',
            alt: 'The Cloudtech brand in use: the LinkedIn company page with its banner, the Instagram profile grid and a story on phones, and the Morse code brand card',
            caption: 'The brand in use across LinkedIn, Instagram and print.',
            width: 2400,
            height: 1350,
            aspect: '16 / 9',
          },
          {
            src: 'images/projects/cloudtech-branding/mockups-posts.webp',
            alt: 'Three social posts: “Engineering the future today”, the website on a laptop, and “Where innovation meets reliability”',
            caption: 'Launch posts for social media.',
            width: 2400,
            height: 860,
            aspect: '2400 / 860',
          },
          {
            src: 'images/projects/cloudtech-branding/mockups-banners.webp',
            alt: 'LinkedIn banner, Facebook cover and profile pictures',
            caption: 'Banners and profile pictures for LinkedIn, Facebook and Instagram.',
            width: 1600,
            height: 780,
            aspect: '1600 / 780',
          },
        ],
      },
      {
        kind: 'outcomes',
        id: 'outcomes',
        label: 'Outcomes',
        heading: 'Outcomes and results',
        items: [
          { value: '2 weeks', detail: 'from the first sketches to a complete brand identity' },
          { value: '15+', detail: 'brand assets: logo versions, social posts, banners and profile pictures' },
          { detail: 'The new logo and the website are live at cloudtechnology.us.' },
        ],
      },
    ],
  },
  {
    featured: true,
    slug: 'project-02',
    title: 'Project 02',
    client: '',
    summary: '',
    type: '',
    year: '',
    role: 'UI/UX Designer',
    timeline: '',
    thumbnail: { alt: 'Project 02 preview', aspect: '4 / 3' },
    hero: { alt: 'Project 02 hero image', aspect: '16 / 9' },
    sections: caseStudyStructure(),
  },
  {
    featured: true,
    slug: 'project-03',
    title: 'Project 03',
    client: '',
    summary: '',
    type: '',
    year: '',
    role: 'UI/UX Designer',
    timeline: '',
    thumbnail: { alt: 'Project 03 preview', aspect: '4 / 3' },
    hero: { alt: 'Project 03 hero image', aspect: '16 / 9' },
    sections: caseStudyStructure(),
  },
  {
    sample: true,
    draft: true,
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
    draft: true,
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
    draft: true,
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
