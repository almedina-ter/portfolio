import type { Project } from './types'

/**
 * Your case studies. The order of this list is the order on the site.
 *
 * To add a project: copy one object, give it a new `slug` (lowercase-with-dashes),
 * and put its images in public/images/projects/<slug>/.
 * To hide a project without deleting it, set `draft: true`.
 *
 * Projects 01 to 03 are your three Selected Work slots.
 * The SAMPLE projects after them are hidden with `draft: true` and kept as examples.
 */
export const projects: Project[] = [
  {
    featured: true,
    slug: 'healthcare-saas',
    title: 'Healthcare SaaS',
    client: '',
    summary:
      'An ongoing healthcare SaaS platform that clinical teams use to manage patients, monitor their activity and communicate with each other. As a Product Designer, I design core workflows for patient management, working alongside the Design Team, Product Team and Engineering Team.',
    type: 'Product design · Healthcare SaaS',
    category: 'Product Design',
    year: '',
    role: 'Product Designer',
    teams: [
      { name: 'Design Team', count: '3', unit: 'Product Designers' },
      { name: 'Product Team', count: '4', unit: 'Team Members' },
      { name: 'Engineering Team', count: '20', unit: 'Engineers' },
    ],
    status: 'Ongoing',
    involvement: 'Ongoing\nRefining existing experiences and exploring improvements',
    tools: ['Figma'],
    thumbnail: {
      src: 'images/projects/healthcare-saas/thumbnail.webp',
      alt: 'Browser windows with blurred screens from a healthcare platform: a billing table, a patient overview and a team conversation',
      width: 1600,
      height: 1200,
      aspect: '4 / 3',
    },
    hero: {
      src: 'images/projects/healthcare-saas/hero.webp',
      alt: 'Browser windows with blurred screens from a healthcare platform: a billing table, a patient overview and a team conversation',
      width: 2400,
      height: 1350,
      aspect: '16 / 9',
    },
    confidentiality:
      'This product is under NDA, so it is not named here and its information stays confidential. The screens in this case study still show my actual design work: the product design decisions I made and the thought process behind them.',
    sections: [
      {
        kind: 'list',
        id: 'overview',
        label: 'Overview',
        heading: 'Project overview and my role',
        body: [
          'A healthcare SaaS platform for clinical teams who follow up patients remotely. It brings patient records, device data, billing, external monitoring reports and team messaging into one product.',
          'The platform serves a large healthcare network, across 3 hospitals, 27 clinics and more than 60,000 patients. These figures describe the scale of the product, not the result of my work, but they shape every decision: screens have to stay clear and consistent for many teams in many places.',
        ],
        stats: [
          { value: '03', label: 'Hospitals' },
          { value: '27', label: 'Clinics' },
          { value: '60K+', label: 'Patients' },
        ],
        intro: 'At a glance:',
        items: [
          { title: 'Product', detail: 'Healthcare SaaS application for clinical teams' },
          { title: 'Project status', detail: 'Ongoing. The product continues to evolve.' },
          {
            title: 'My involvement',
            detail: 'Ongoing. I continue to contribute to the product, refine existing experiences and explore improvements.',
          },
          { title: 'Role', detail: 'Product Designer, working alongside the Design Team, Product Team and Engineering Team' },
          {
            title: 'My scope',
            detail: 'Two screens at the heart of patient management, in the same order as the sections below:',
            list: ['Patient Overview', 'Patient Profile'],
          },
        ],
      },
      {
        kind: 'text',
        id: 'context',
        label: 'Product context',
        heading: 'A large product, built by many hands',
        body: [
          'Across those hospitals and clinics, clinical teams use the platform every day to review patient data, follow up on alerts, manage billing and coordinate with each other. Much of that work happens in dense tables and detailed records, often under time pressure.',
          'Because around twelve modules were designed by different designers, every new screen had to fit into an existing system: the same navigation, the same patterns for tabs, filters and tables, and the same components from our shared design system.',
          'My work sits inside that system. I designed specific modules and workflows, and worked with the Design Team, Product Team and Engineering Team to keep them consistent with the rest of the product.',
        ],
      },
      {
        kind: 'list',
        id: 'contributions',
        label: 'My contribution',
        heading: 'Two screens, one workflow',
        body: [
          'Patient management starts with a population and ends with one person. I focus here on the two screens that make that step: the Patient Overview, where professionals find the right patient, and the Patient Profile, where they read everything about them.',
        ],
        intro: 'What follows:',
        items: [
          { title: 'Patient Overview', detail: 'The dashboard for the whole patient population.' },
          { title: 'Patient Profile', detail: 'The essential information about one patient, on one screen.' },
        ],
      },
      {
        kind: 'annotated',
        id: 'patient-overview',
        label: 'Patient Overview',
        heading: 'Thousands of patients, one list that reads at a glance',
        body: [
          'The Patient Overview is where a professional starts. The size and state of the whole patient population sit above one table, built to find the right patient quickly. Selecting a name, or View, opens that patient’s profile.',
        ],
        media: {
          src: 'images/projects/healthcare-saas/management-patient-overview.webp',
          alt: 'Patient Overview dashboard: three summary figures for total, active and inactive patients, tabs for all, active and inactive patients, filters and search, Export Data and Add patient buttons, and a table of patients with age, patient ID, status, last activity and a View link',
          width: 1920,
          height: 1080,
          aspect: '1920 / 1080',
        },
        notes: [
          {
            label: 'At a glance',
            text:
              'Three figures show total, active and inactive patients, each with a short note such as recent registrations or patients awaiting activation, so the state of the population is clear before a single row is read.',
            side: 'left',
            target: { x: 800, y: 221 },
            via: 229,
            labelY: 190,
          },
          {
            label: 'Add patient',
            text:
              'Export Data and Add patient sit apart from the list, at the top right, so the two main actions are always in reach and never compete with the table.',
            side: 'right',
            target: { x: 1896, y: 138 },
          },
          {
            label: 'Narrow down',
            text:
              'All, Active and Inactive segments carry their counts, with filters and search beside them, so the list can be narrowed from one row.',
            side: 'left',
            target: { x: 603, y: 281 },
            via: 289,
            labelY: 300,
          },
          {
            label: 'Identity',
            text:
              'Name, age and patient ID come first: the three details needed to find and confirm the right person.',
            side: 'left',
            target: { x: 100, y: 424 },
          },
          {
            label: 'Status',
            text:
              'A colour-coded label marks each patient as active or inactive, so status can be read while scanning down the list.',
            side: 'right',
            target: { x: 1066, y: 460 },
            via: 478,
            labelY: 440,
          },
          {
            label: 'Open record',
            text:
              'Every row has the same View action, which opens the patient’s profile. The next step is never ambiguous.',
            side: 'right',
            target: { x: 1792, y: 496 },
            via: 514,
            labelY: 560,
          },
        ],
        details: [
          {
            src: 'images/projects/healthcare-saas/overview-detail-figures.webp',
            alt: 'Close-up of the Patient Overview summary: the active and inactive patients figures with their notes and progress bars, the Filters button, and the Patient ID and Status columns of the table',
            caption: 'Active and inactive figures, filters and status',
            width: 640,
            height: 480,
            aspect: '640 / 480',
          },
          {
            src: 'images/projects/healthcare-saas/overview-detail-status.webp',
            alt: 'Close-up of the patient table: the Patients and Age columns with patient names and ages in rows',
            caption: 'Patient names and ages',
            width: 640,
            height: 480,
            aspect: '640 / 480',
          },
          {
            src: 'images/projects/healthcare-saas/overview-detail-actions.webp',
            alt: 'Close-up of the right side of the Patient Overview: the patient search field and the Activity and View Patient columns with a View link on every row',
            caption: 'Search and the View link',
            width: 640,
            height: 480,
            aspect: '640 / 480',
          },
        ],
      },
      {
        kind: 'annotated',
        id: 'patient-profile',
        label: 'Patient Profile',
        heading: 'One patient, the essentials on one screen',
        body: [
          'The profile is the next level of the same workflow. The patient area has three tabs, Patient Profile, Medical history and Care Plan, and this case study shows the profile. Information is grouped into cards by type, so it can be read at a glance instead of pieced together from separate places.',
        ],
        media: {
          src: 'images/projects/healthcare-saas/management-patient-profile.webp',
          alt: 'Patient Profile screen: a patient header with name, status, age, record number and blood type, tabs for Patient Profile, Medical history and Care Plan, and cards for personal information, contact information, care team, latest vitals, next appointment, medications and a doctor’s note',
          width: 1920,
          height: 1080,
          aspect: '1920 / 1080',
        },
        notes: [
          {
            label: 'Patient header',
            text:
              'Name, status, age, record number and blood type sit in a header, so it is clear whose record is open. Edit profile and share stay within reach on the right.',
            side: 'left',
            target: { x: 586, y: 134 },
            via: 169,
            labelY: 169,
          },
          {
            label: 'Care team',
            text:
              'The professionals responsible for the patient, with their roles, so responsibility is clear at a glance.',
            side: 'right',
            target: { x: 1524, y: 350 },
            via: 383,
          },
          {
            label: 'Appointment',
            text:
              'Date, type, time and a confirmation status show what happens next, on the profile itself.',
            side: 'right',
            target: { x: 1480, y: 551 },
            via: 541,
          },
          {
            label: 'Latest vitals',
            text:
              'Heart rate, blood pressure and SpO2 give a quick read of the patient’s current state, with a link into the full medical history.',
            side: 'right',
            target: { x: 1068, y: 618 },
            via: 636,
            labelY: 650,
          },
          {
            label: 'Medications',
            text:
              'Current medications with their doses, listed plainly beside the vitals so both can be read together.',
            side: 'right',
            target: { x: 1000, y: 912 },
            via: 894,
            labelY: 800,
          },
          {
            label: 'Doctor’s note',
            text:
              'The latest note, with its author and time, gives the most recent clinical context.',
            side: 'left',
            target: { x: 426, y: 762 },
            via: 744,
          },
        ],
        details: [
          {
            src: 'images/projects/healthcare-saas/profile-detail-header.webp',
            alt: 'Close-up of the patient header with name, Active label, gender, age, record number and blood type, the Patient Profile, Medical history and Care Plan tabs, and the start of the Personal Information card',
            caption: 'Patient header and personal information',
            width: 640,
            height: 480,
            aspect: '640 / 480',
          },
          {
            src: 'images/projects/healthcare-saas/profile-detail-care.webp',
            alt: 'Close-up of the Care Team card with two professionals and their roles, and the Next Appointment card with a confirmed follow-up consultation',
            caption: 'Care team and next appointment',
            width: 640,
            height: 480,
            aspect: '640 / 480',
          },
          {
            src: 'images/projects/healthcare-saas/profile-detail-vitals.webp',
            alt: 'Close-up of the Latest Vitals card with heart rate, blood pressure and SpO2, a link to the medical history, and the Medications card with four medications and doses',
            caption: 'Latest vitals and medications',
            width: 640,
            height: 480,
            aspect: '640 / 480',
          },
        ],
      },
      {
        kind: 'insights',
        id: 'considerations',
        label: 'Design considerations',
        heading: 'What guided the design',
        items: [
          {
            title: 'Consistency across modules',
            detail:
              'Tabs with counts, filters, tables, labels and cards work the same way in every module I designed, and follow the patterns used by the rest of the product.',
          },
          {
            title: 'Dense, but scannable',
            detail:
              'Patient lists and profiles carry a lot of information. Clear columns, colour-coded labels and cards grouped by type keep them readable.',
          },
          {
            title: 'One step at a time',
            detail:
              'A population leads to one patient, and one patient leads to their details. Each screen shows more about less.',
          },
        ],
      },
      {
        kind: 'text',
        id: 'collaboration',
        label: 'Collaboration',
        heading: 'Collaboration and development',
        body: [
          'I work alongside the Design Team, where each designer owns different modules and we share one design system, so the product feels like one product even though many people design it. I work with the Product Team and the Engineering Team as features move from design to development, and keep refining my screens as requirements change.',
        ],
      },
      {
        kind: 'outcomes',
        id: 'outcome',
        label: 'Outcome',
        heading: 'Outcome and ongoing development',
        items: [
          { detail: 'Designed the Patient Overview and Patient Profile, the two screens that take a professional from a whole population to one patient.' },
          { detail: 'Made dense patient information easier to scan, with consistent tabs, filters, labels and cards.' },
          { detail: 'Keep refining them with the Product Team and Engineering Team as requirements change.' },
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
      'Design Plus, the design system behind a growing healthcare SaaS platform. Built by our Design Team alongside the product, it gave designers and engineers one shared foundation. I designed the tables, modals, tooltips, action tooltips, toggles and checkboxes.',
    type: 'Design system · Healthcare SaaS',
    category: 'Design System',
    year: '',
    role: 'UI/UX Designer',
    team: 'Design Team',
    timeline: 'About 1 month',
    tools: ['Figma'],
    thumbnail: {
      src: 'images/projects/design-system/thumbnail.webp',
      alt: 'Design Plus component sheets on a tilted board: tables, checkboxes, toggles, tooltips and dialogs',
      width: 1600,
      height: 1200,
      aspect: '4 / 3',
    },
    hero: {
      src: 'images/projects/design-system/hero.webp',
      alt: 'Design Plus component sheets on a tilted board: tables, checkboxes, toggles, tooltips, action tooltips and dialogs',
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
          'Alongside the components, I wrote the documentation that made the system easy for engineers to find, understand and build: component pages and supporting elements.',
        ],
        intro: 'My contribution, by component:',
        items: [
          { title: 'Tables', detail: 'Data tables in two densities, assembled from existing system components.' },
          { title: 'Modals', detail: 'Confirmation, warning, feedback and input dialogs that share one structure.' },
          {
            title: 'Tooltips, Action Toggles & Checkboxes',
            detail: 'Short explanations and quick actions in context, on and off controls, and selection controls in every state, all sharing the same interaction states.',
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
        kind: 'text',
        id: 'components',
        label: 'My contribution',
        heading: 'The components I designed',
        body: [
          'I owned six parts of the system, five component families and their documentation. For each one the goal was the same: cover every state the product needs, behave predictably, and be easy to build.',
        ],
      },
      {
        kind: 'decisions',
        id: 'tables',
        label: 'Tables',
        heading: 'Tables',
        nested: true,
        layout: 'stacked',
        items: [
          {
            rationale:
              'Tables are at the centre of the product: patient lists and records depend on them. I designed them as a set of parts rather than one fixed layout.',
            points: [
              'Two densities: rich rows with two-line names, status, tags and actions, and compact rows for scanning many records.',
              'Sortable column headers, a link style for records that open elsewhere, and row actions behind one menu.',
              'Pagination with a page-size control for long lists.',
              'Built entirely from existing system components: checkboxes, badges, buttons, pagination and a select input.',
            ],
            media: {
              src: 'images/projects/design-system/tables-anatomy.webp',
              alt: 'Table anatomy for both densities: detailed rows labelled select all, sort, reorder column, name and supporting text, status, role tag, link, type tag and row actions; compact rows labelled single-line row, code tag and plain text, with the results count, pagination and page size',
              width: 2400,
              height: 1394,
              aspect: '2400 / 1394',
            },
          },
        ],
      },
      {
        kind: 'decisions',
        id: 'modals',
        label: 'Modals',
        heading: 'Modals',
        nested: true,
        layout: 'stacked',
        items: [
          {
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
              src: 'images/projects/design-system/modal-anatomy.webp',
              alt: 'Modal anatomy with placeholder text: a dialog labelled title, description, required and optional fields, close, secondary action and a primary action disabled until complete; plus confirmation, warning and success dialogs',
              width: 2400,
              height: 1360,
              aspect: '2400 / 1360',
            },
          },
        ],
      },
      {
        kind: 'decisions',
        id: 'tooltips-toggles-checkboxes',
        label: 'Tooltips, Action Toggles & Checkboxes',
        heading: 'Tooltips, Action Toggles & Checkboxes',
        nested: true,
        intro:
          'Dense clinical screens leave little room for explanation, so tooltips add context exactly where it’s needed without crowding the layout. Checkboxes and toggles cover selection and settings. Checkboxes appear everywhere in the product, from forms to selecting rows in tables, so they had to be completely predictable, and I based toggles on the same states so both controls feel like one family.',
        layout: 'stacked',
        items: [
          {
            title: 'Tooltips',
            points: [
              'Tooltips explain or identify an element, from a one-word label to a heading with a description.',
              'Action tooltips go a step further, adding an icon and buttons for quick decisions in context.',
              'Nine arrow positions, so a tooltip can point at an element anywhere on the screen.',
              'Usage guidance written on the component page, so the team knows when to use each one.',
            ],
            media: {
              src: 'images/projects/design-system/tooltip-anatomy.webp',
              alt: 'Tooltip anatomy: an action tooltip labelled icon, heading, description, secondary and primary action and arrow; a tooltip with a heading; and the nine arrow positions',
              width: 2400,
              height: 1300,
              aspect: '2400 / 1300',
            },
          },
          {
            title: 'Action Toggles',
            points: [
              'On and off in default, hover, focus and disabled states.',
              'Hover darkens the track, and focus adds the same ring used across the system.',
              'Disabled toggles keep their shape but lose contrast.',
              'A version with a label and supporting text for settings.',
              'One Figma component with 16 variants.',
            ],
            media: {
              src: 'images/projects/design-system/toggle-anatomy.webp',
              alt: 'Toggle anatomy: a large toggle labelled track, thumb and focus ring; a toggle with label and supporting text; and on and off toggles in default, hover, focus and disabled',
              width: 2400,
              height: 1260,
              aspect: '2400 / 1260',
            },
          },
          {
            title: 'Checkboxes',
            points: [
              'Default, hover, focus and disabled states for unchecked, checked and indeterminate values.',
              'A clear focus ring, so keyboard users always know where they are.',
              'An indeterminate value for partial selections, such as selecting all rows in a table.',
              'Versions with a label and supporting text for forms.',
              'One Figma component with type, value, label and state options, covering 40 variants.',
            ],
            media: {
              src: 'images/projects/design-system/checkbox-anatomy.webp',
              alt: 'Checkbox and radio anatomy: a large checkbox labelled box, check icon and focus ring; a large radio labelled dot and ring; a checkbox and a radio with label and supporting text; and the checkbox and radio state grids, with unchecked, checked, indeterminate, unselected and selected rows',
              width: 2400,
              height: 1300,
              aspect: '2400 / 1300',
            },
          },
        ],
      },
      {
        kind: 'text',
        id: 'engineering',
        label: 'Documentation',
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
          'Working in the Design Team also showed me that consistency comes from shared decisions, not just shared files. Agreeing on states, names and structure mattered as much as the components themselves.',
        ],
      },
    ],
  },
  {
    featured: true,
    slug: 'cloudtech-branding',
    title: 'Branding',
    client: 'Cloudtech',
    summary:
      'A complete brand identity for Cloudtech, a technology company. The project included a Morse code-inspired logo, a visual language for digital platforms, and a company website designed and built in Framer.',
    type: 'Brand identity · Website',
    category: 'Brand Identity',
    year: '',
    role: 'Graphic Designer',
    timeline: '2 weeks',
    website: 'https://www.cloudtechnology.us/',
    tools: ['Figma', 'Framer'],
    thumbnail: {
      src: 'images/projects/cloudtech-branding/thumbnail.webp',
      alt: 'Cloudtech logo in white: a mark made of rounded bars and dots above the Cloudtech wordmark, on a dark background with a soft violet glow',
      width: 1600,
      height: 1200,
      aspect: '4 / 3',
    },
    hero: {
      src: 'images/projects/cloudtech-branding/hero.webp',
      alt: 'Cloudtech logo in white: a mark made of rounded bars and dots above the Cloudtech wordmark, on a dark background with a soft violet glow',
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
