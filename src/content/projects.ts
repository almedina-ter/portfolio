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
      'A complete brand identity for Cloudtech, a technology company. The project included a Morse code-inspired logo, a visual language for digital platforms, and a company website designed and built in Framer.',
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
        body: [
          'Cloudtech is a technology company with offices in New York, Düsseldorf, Tirana, and Prishtina. It provides software development, cloud, DevOps, mobile, security, AI, and consulting services to businesses navigating digital transformation.',
          'The company needed a visual identity that better represented its expertise and established a consistent presence across its digital platforms.',
        ],
        intro: 'My role covered the full branding process:',
        items: [
          {
            title: 'Logo design',
            detail: "Developed a new visual mark that reflected the company's technical background while giving it a distinctive identity.",
          },
          {
            title: 'Website structure',
            detail: 'Created wireframes to establish the content hierarchy, layout, and overall user experience.',
          },
          {
            title: 'Brand system',
            detail: 'Defined the visual direction, including logo variations, colour palette, social media templates, banners, and profile assets.',
          },
          {
            title: 'Website design and development',
            detail: 'Applied the new identity to the company website and brought it to life using Framer.',
          },
        ],
      },
      {
        kind: 'text',
        id: 'background',
        label: 'Background',
        heading: 'The starting point',
        body: [
          "Cloudtech had an established team and a range of services, but its visual identity didn't communicate the full scope of what the company offered.",
          'There was no recognisable logo or consistent visual language across its website and social media channels.',
          'The main challenge was to create an identity that positioned Cloudtech as a modern technology company without relying on the visual conventions already common in the industry.',
        ],
      },
      {
        kind: 'insights',
        id: 'research',
        label: 'Research',
        heading: 'Research and key insights',
        intro:
          'I started by reviewing competitors and exploring how technology companies communicate their services visually. I looked at common logo styles, colour choices, and visual elements to identify opportunities for Cloudtech to take a different direction.',
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
    slug: 'design-system',
    title: 'Design System',
    client: '91 Life',
    summary:
      'Design Plus, the design system behind a growing healthcare SaaS platform. Built by our design team alongside the product, it gave designers and engineers one shared foundation. I designed the checkboxes, toggles, tooltips, action tooltips, tables and modals.',
    type: 'Design system · Healthcare SaaS',
    year: '',
    role: 'UI/UX Designer',
    team: 'Design team',
    timeline: 'About 1 month',
    tools: ['Figma'],
    thumbnail: {
      src: 'images/projects/design-system/thumbnail.webp',
      alt: 'Design Plus components: a data table, checkbox states and toggle states',
      width: 1600,
      height: 1200,
      aspect: '4 / 3',
    },
    hero: {
      src: 'images/projects/design-system/hero.webp',
      alt: 'Design Plus components: a data table, checkbox states, an action tooltip, a confirmation dialog and toggle states',
      width: 2400,
      height: 1350,
      aspect: '16 / 9',
    },
    confidentiality:
      'The product I worked on at 91 Life is under a non-disclosure agreement, so it is not named here, and no product screens, patient data or business information are shown. This case study shares only the design system components I designed, with placeholder content, to show my role and process.',
    sections: [
      {
        kind: 'list',
        id: 'overview',
        label: 'Overview',
        heading: 'Project overview and my role',
        body: [
          'Clinical teams use our healthcare SaaS platform every day to review patient data, follow up on alerts and keep patient records up to date. As the product grew, more designers and engineers were building more screens at the same time.',
          'Design Plus is the design system we built to keep that growth consistent. It was a team effort: several designers each owned different components, and we built the system over about a month, alongside the product rather than ahead of it.',
        ],
        intro: 'My contribution:',
        items: [
          { title: 'Checkboxes', detail: 'Selection controls in every state and value, with and without labels.' },
          { title: 'Toggles', detail: 'On and off controls that follow the same states as checkboxes.' },
          { title: 'Tooltips and action tooltips', detail: 'Short explanations, and quick actions in context, in nine positions.' },
          { title: 'Tables', detail: 'Data tables in two densities, assembled from existing system components.' },
          { title: 'Modals', detail: 'Confirmation, warning, feedback and input dialogs that share one structure.' },
          {
            title: 'Documentation',
            detail: 'Component pages and supporting elements that made the system easy for engineers to find, understand and build.',
          },
        ],
      },
      {
        kind: 'text',
        id: 'background',
        label: 'Background',
        heading: 'Why the product needed a design system',
        body: [
          'The platform was growing quickly. Each new feature, from patient charts to messaging and billing, needed the same building blocks: form controls, tables, tooltips and dialogs.',
          'Without shared components, these elements were redesigned and rebuilt for each feature, often with small differences in spacing, colour and behaviour. In a clinical product, where people scan dense lists and records under time pressure, those differences add friction and make the interface harder to trust.',
          'Engineers felt it too. Every new screen raised the same questions: which version of a control to use, what its hover or disabled state looked like, and how it should behave.',
        ],
      },
      {
        kind: 'challenges',
        id: 'challenges',
        label: 'Challenges',
        heading: 'What the system had to solve',
        intro: 'Three constraints shaped how we built it.',
        items: [
          {
            challenge: 'Requirements arrived feature by feature, not all at once.',
            opportunity: 'Grow the system week by week, adding each component when the product first needed it.',
          },
          {
            challenge: 'Several designers were building components in parallel.',
            opportunity: 'Share one set of foundations and the same interaction states, so separate pieces still feel like one product.',
          },
          {
            challenge: 'Engineers had to interpret each screen on its own.',
            opportunity: 'Define every variant and state up front, so a component means the same thing in design and in code.',
          },
        ],
      },
      {
        kind: 'process',
        id: 'process',
        label: 'Process',
        heading: 'Built alongside the product',
        intro: 'Instead of one large project planned up front, the system grew with the product over about a month.',
        steps: [
          {
            title: 'Driven by real requirements',
            detail:
              'Each week, new product requirements decided which components came next. A component was designed into the system first, then used in the screens that needed it.',
          },
          {
            title: 'Shared ownership',
            detail:
              'Each designer owned a set of components, from first exploration to documentation. Shared foundations, the same colours, typography and four interaction states, kept work from different designers consistent.',
          },
          {
            title: 'Published for the whole team',
            detail:
              'Finished components were published to a shared Figma library and documented on their own pages, and existing screens were updated to use them.',
          },
        ],
      },
      {
        kind: 'decisions',
        id: 'components',
        label: 'My contribution',
        heading: 'The components I designed',
        intro:
          'I owned six parts of the system. For each one the goal was the same: cover every state the product needs, behave predictably, and be easy to build.',
        layout: 'stacked',
        items: [
          {
            title: 'Checkboxes',
            rationale:
              'Checkboxes appear everywhere in the product, from forms to selecting rows in tables, so they had to be completely predictable.',
            points: [
              'Default, hover, focus and disabled states for unchecked, checked and indeterminate values.',
              'A clear focus ring, so keyboard users always know where they are.',
              'An indeterminate value for partial selections, such as selecting all rows in a table.',
              'Versions with a label and supporting text for forms.',
              'One Figma component with type, value, label and state options, covering 40 variants.',
            ],
            media: {
              src: 'images/projects/design-system/checkbox.webp',
              alt: 'Design Plus checkbox sheet: checkbox and radio states in default, hover, focus and disabled, with and without text',
              width: 2000,
              height: 1553,
              aspect: '2000 / 1553',
            },
          },
          {
            title: 'Toggles',
            rationale:
              'Toggles switch a setting on or off. I based them on the same states as the checkbox, so both controls feel like one family.',
            points: [
              'On and off in default, hover, focus and disabled states.',
              'Hover darkens the track, and focus adds the same ring used across the system.',
              'Disabled toggles keep their shape but lose contrast.',
              'A version with a label and supporting text for settings.',
              'One Figma component with 16 variants.',
            ],
            media: {
              src: 'images/projects/design-system/toggle.webp',
              alt: 'Design Plus toggle sheet: on and off toggles in default, hover, focus and disabled, with and without text',
              width: 2000,
              height: 1178,
              aspect: '2000 / 1178',
            },
          },
          {
            title: 'Tooltips and action tooltips',
            rationale:
              "Dense clinical screens leave little room for explanation. Tooltips add context exactly where it's needed, without crowding the layout.",
            points: [
              'Tooltips explain or identify an element, from a one-word label to a heading with a description.',
              'Action tooltips go a step further, adding an icon and buttons for quick decisions in context.',
              'Nine arrow positions, so a tooltip can point at an element anywhere on the screen.',
              'Usage guidance written on the component page, so the team knows when to use each one.',
            ],
            media: {
              src: 'images/projects/design-system/tooltips.webp',
              alt: 'Design Plus tooltip and action tooltip sheet showing every arrow position, with and without description, icon and buttons',
              width: 2400,
              height: 2225,
              aspect: '2400 / 2225',
            },
          },
          {
            title: 'Tables',
            rationale:
              'Tables are at the centre of the product: patient lists and records depend on them. I designed them as a set of parts rather than one fixed layout.',
            points: [
              'Two densities: rich rows with two-line names, status, tags and actions, and compact rows for scanning many records.',
              'Sortable column headers, a link style for records that open elsewhere, and row actions behind one menu.',
              'Pagination with a page-size control for long lists.',
              'Built entirely from existing system components: checkboxes, badges, buttons, pagination and a select input.',
            ],
            media: {
              src: 'images/projects/design-system/tables.webp',
              alt: 'Design Plus table sheet: a rich table with selection, status, tags and actions, and a compact table, both with pagination',
              width: 2721,
              height: 999,
              aspect: '2721 / 999',
            },
          },
          {
            title: 'Modals',
            rationale:
              'Modals interrupt the user, so in a clinical product they must be clear about what will happen. Every dialog follows the same structure: a title, one line of explanation, the content and the actions.',
            points: [
              'One structure for confirmations, warnings, feedback and input.',
              'A clear primary action, with destructive actions in red.',
              'The main action stays disabled until required fields are complete.',
              'Extra required fields appear only when a choice needs them.',
              'A safeguard for unsaved changes, so edits are never lost by accident.',
            ],
            media: {
              src: 'images/projects/design-system/modals.webp',
              alt: 'Four dialogs: marking a patient inactive with a required reason, unsaved changes, an archive warning and an archive confirmation',
              width: 2400,
              height: 1240,
              aspect: '2400 / 1240',
            },
          },
        ],
      },
      {
        kind: 'text',
        id: 'engineering',
        label: 'Engineering',
        heading: 'Designed to be built',
        body: [
          'A design system is only useful if engineers can build from it with confidence, so I treated every component as a specification, not just a drawing.',
          'Each component page shows every state side by side, with and without text, so engineers can see exactly how a control looks and behaves before writing code. Clear names for components and their options in the shared library meant designers and engineers could talk about the same thing in the same words.',
          'Tables show the benefit best. Because they are assembled from existing components, an engineer who has built the checkbox, badge and pagination already has most of a table. Consistent definitions like these help reduce back-and-forth during handoff, duplicated work, and differences between the design and the shipped product.',
        ],
        media: {
          src: 'images/projects/design-system/table-anatomy.webp',
          alt: 'Table anatomy: a table with labels pointing to the system components it is built from: checkbox, sort and reorder icons, badges, link, more button, pagination and select input',
          caption: 'Tables are assembled from components already in the system.',
          width: 2400,
          height: 1145,
          aspect: '2400 / 1145',
        },
      },
      {
        kind: 'outcomes',
        id: 'impact',
        label: 'Impact',
        heading: 'What it brought to the product',
        intro:
          'The value of the system showed in how the product could grow. Screens built by different designers and engineers looked and behaved the same, and new features could start from tested components instead of a blank page.',
        items: [
          { value: '6', detail: 'component families I designed and documented' },
          { value: '4', detail: 'interaction states shared by every control: default, hover, focus and disabled' },
          { detail: 'One shared foundation for designers and engineers, which keeps growing with the product.' },
        ],
      },
      {
        kind: 'text',
        id: 'reflection',
        label: 'Reflection',
        heading: 'What I learned',
        body: [
          "Building a design system alongside a live product taught me to design for what's next as well as what's needed now. Each component had to solve today's feature and stay flexible for the ones we couldn't see yet.",
          'Working in a team of designers also showed me that consistency comes from shared decisions, not just shared files. Agreeing on states, names and structure mattered as much as the components themselves.',
        ],
      },
    ],
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
