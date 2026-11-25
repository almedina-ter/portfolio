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
    accent: '#5b3df5',
    title: 'Healthcare SaaS',
    client: '',
    summary:
      'One platform for patients, ECG monitoring and clinical messaging, used across 3 hospitals and 27 clinics. I design the core workflows.',
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
      alt: 'The words Healthcare SaaS in large type over a pink to blue gradient, with a laptop showing a patient ECG waveform and its detected episodes, and the a mark in the corner',
      width: 1600,
      height: 1200,
      aspect: '4 / 3',
    },
    hero: {
      src: 'images/projects/healthcare-saas/cover.webp',
      alt: 'The words Healthcare SaaS in large type over a pink to blue gradient, with a laptop showing a patient ECG waveform and its detected episodes',
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
          'A healthcare SaaS platform that helps clinical teams follow up with patients remotely. Patient records, device data, monitoring reports and messaging live in one product.',
          'It serves a large healthcare network. These figures show the platform’s scale, not my results, and they shape every decision: clear, consistent screens for many teams.',
        ],
        stats: [
          { value: '03', label: 'Hospitals' },
          { value: '27', label: 'Clinics' },
          { value: '60K+', label: 'Patients' },
        ],
        intro: 'At a glance:',
        items: [
          { title: 'Product', detail: 'Healthcare SaaS for clinical teams' },
          { title: 'Project status', detail: 'Ongoing' },
          {
            title: 'My involvement',
            detail: 'Ongoing. I keep refining existing screens and exploring improvements.',
          },
          { title: 'Role', detail: 'Product Designer, working with the Design Team, Product Team and Engineering Team' },
          {
            title: 'My scope',
            detail: 'Three product areas:',
            list: ['Patient Overview', 'Monitoring', 'Communication'],
          },
        ],
      },
      {
        kind: 'text',
        id: 'context',
        label: 'Product context',
        heading: 'A large product, built by many hands',
        body: [
          'Clinical teams use it daily to review patient data, act on alerts and coordinate care. Much of the work happens in dense tables and detailed records, often under time pressure.',
          'Around twelve modules were designed by different designers, so every new screen had to fit the same navigation, the same tab, filter and table patterns, and the shared design system.',
          'I designed specific modules and workflows inside that system, working with the Design Team, Product Team and Engineering Team to keep them consistent.',
        ],
      },
      {
        kind: 'flow',
        id: 'product-map',
        label: 'Product map',
        heading: 'How the product fits together',
        body: [
          'Three areas, each moving from an overview down to one patient, one recording or one conversation.',
        ],
        root: 'Healthcare SaaS',
        areas: [
          {
            name: 'Patient Overview',
            to: 'patient-overview',
            screens: [
              { name: 'Patient overview', views: ['All patients', 'Active', 'Inactive'] },
              {
                name: 'Patient details',
                trigger: 'Select a patient’s name, or View',
                views: ['Patient Profile', 'Medical history', 'Care Plan'],
              },
            ],
          },
          {
            name: 'Monitoring',
            to: 'monitoring',
            screens: [
              { name: 'Overview', views: ['Analytics', 'Patient table'] },
              { name: 'ECG & Recordings', views: ['Analytics', 'Patient table'] },
              {
                name: 'Patient ECG',
                trigger: 'Select a patient’s name in either patient table',
                views: ['Waveform & episodes', 'Heart rate', 'Recordings & quality', 'Review history'],
              },
            ],
          },
          {
            name: 'Communication',
            to: 'communication',
            screens: [{ name: 'Messages', views: ['Chat messages', 'Group chat messages'] }],
          },
        ],
      },
      {
        kind: 'screens',
        id: 'patient-overview',
        label: 'Patient Overview',
        heading: 'Thousands of patients, one list that reads at a glance',
        nested: true,
        body: [
          'The whole patient population at a glance, and one table to find anyone in it.',
          'View opens a patient’s details on a single screen.',
        ],
        screens: [
          {
            title: 'Patient overview',
            media: {
              src: 'images/projects/healthcare-saas/showcase-patient-overview.webp',
              alt: 'Patient list screen with labelled parts: Patient counts, Export data, Add patient, Tabs with counts, Patient name, Patient ID, Status, Search, View patient, Pagination. Patient Overview: three summary figures for total, active and inactive patients, tabs and filters, Export Data and Add patient buttons, and a table of patients with age, patient ID, status, last activity and a View link',
              width: 2400,
              height: 1350,
              aspect: '2400 / 1350',
            },
            notes: [
              'Total, active and inactive patients at the top.',
              'Export Data and Add patient, top right.',
              'Tabs with counts, filters and search narrow the list.',
              'Each row: name, age, ID, status and last activity.',
              'View opens the patient’s details.',
            ],
          },
          {
            title: 'Patient details',
            trigger: 'Select View on a patient',
            media: {
              src: 'images/projects/healthcare-saas/showcase-patient-details.webp',
              alt: 'Patient profile screen with labelled parts: Patient header, Contact information, Edit profile, Tabs, Personal information, Doctor’s note, Care team, Next appointment, Latest vitals, Medications. Patient details: a patient header, tabs for Patient Profile, Medical history and Care Plan, and cards for personal information, contact information, care team, latest vitals, next appointment, medications and a doctor’s note',
              width: 2400,
              height: 1350,
              aspect: '2400 / 1350',
            },
            notes: [
              'Tabs: Patient Profile (shown), Medical history and Care Plan.',
              'Personal and contact information, including an emergency contact.',
              'Care team and next appointment.',
              'Latest vitals, linked to the full medical history.',
              'Current medication and the doctor’s note.',
            ],
          },
        ],
        challenges: [
          {
            challenge: 'Finding one patient among thousands.',
            opportunity: 'Counts, tabs, filters and search narrow the list in one place.',
          },
          {
            challenge: 'Many details, little room in a list.',
            opportunity: 'The table shows name, age, ID, status and activity. View opens the rest.',
          },
          {
            challenge: 'Patient information spread across many areas.',
            opportunity: 'Cards grouped by type on one screen, with tabs for medical history and care plan.',
          },
        ],
      },
      {
        kind: 'screens',
        id: 'monitoring',
        label: 'Monitoring',
        heading: 'From an overview to a single episode',
        nested: true,
        body: [
          'How a doctor sees where their patients are heading: an overview, then ECG recordings for all patients, then one patient, then a single episode.',
          'Each step shows more detail about each patient.',
        ],
        screens: [
          {
            title: 'Monitoring overview',
            media: {
              src: 'images/projects/healthcare-saas/showcase-monitoring-overview.webp',
              alt: 'Monitoring overview screen with labelled parts: Tabs and filters, Alert history, Latest ECG, Heart rate chart, Patient name, Episode type, Export data, Status, Details, Pagination. Monitoring overview: tabs for Overview, ECG and Recordings, Reports, Laboratory Results and Visits and Appointments, a 24-hour heart rate chart, an alert history, the latest ECG, and a table of patients with episode, duration, maximum heart rate and status',
              width: 2400,
              height: 1350,
              aspect: '2400 / 1350',
            },
            notes: [
              'Tabs: Overview, ECG & Recordings, Reports, Laboratory Results, Visits & Appointments.',
              'Heart rate over the last 24 hours.',
              'Alert history and the latest ECG, one click from its waveform.',
              'A table of every patient: ID, activity, episode, duration, max heart rate, status.',
            ],
          },
          {
            title: 'ECG & Recordings',
            trigger: 'Open the ECG & Recordings tab',
            media: {
              src: 'images/projects/healthcare-saas/showcase-ecg-recordings.webp',
              alt: 'ECG & Recordings screen with labelled parts: Tabs, Detected episodes, Recording quality, Episodes by type, Patient table, Export data, Quality by day, Review status, Pagination. ECG and Recordings: detected episodes with totals and types, recording quality, review and monitoring status, and a table of patients with episode, duration and maximum heart rate',
              width: 2400,
              height: 1350,
              aspect: '2400 / 1350',
            },
            notes: [
              'Detected episodes: how many, how often, which type.',
              'Recording quality: good, poor or incomplete.',
              'Review status: where each episode stands.',
              'A patient table with episode, duration and max heart rate.',
            ],
          },
          {
            title: 'Patient ECG',
            trigger: 'Select Details for a patient',
            media: {
              src: 'images/projects/healthcare-saas/showcase-patient-ecg.webp',
              alt: 'Patient ECG screen with labelled parts: Patient header, Summary figures, Message and export, Tabs, Episode list, Waveform, Episode details, Review note, Detected section. Patient ECG: a patient header with Message patient and Export report buttons, tabs for waveform and episodes, heart rate, recordings and quality, and review history, a list of episodes and an ECG waveform of the selected episode',
              width: 2400,
              height: 1350,
              aspect: '2400 / 1350',
            },
            notes: [
              'One patient’s recordings, in four tabs: Waveform & episodes, Heart Rate, Recordings & quality, Review history.',
              'Every episode listed on the side.',
              'Select an episode, such as the atrial flutter shown, to see its waveform, duration and details.',
              'Message patient and Export report at the top.',
            ],
          },
        ],
        challenges: [
          {
            challenge: 'A lot of heart rate, alert and recording data at once.',
            opportunity: 'Lead with the 24-hour chart, alert history and latest ECG, then one table for every patient.',
          },
          {
            challenge: 'Detections are only useful if the recordings can be trusted.',
            opportunity: 'Recording quality and review status sit beside detected episodes.',
          },
          {
            challenge: 'Going deeper should never mean getting lost.',
            opportunity: 'Each step narrows the view, with the episode list always in sight.',
          },
        ],
      },
      {
        kind: 'screens',
        id: 'communication',
        label: 'Communication',
        heading: 'Messaging inside the product',
        nested: true,
        body: [
          'A messenger built into the platform. Doctors talk one to one or in groups without leaving the product.',
          'Patient information, transmissions and episodes can be shared in a conversation.',
        ],
        screens: [
          {
            title: 'Messages',
            media: {
              src: 'images/projects/healthcare-saas/showcase-messages.webp',
              alt: 'Messages screen with labelled parts: Search, Notification, Conversations, Groups, Unread marker, Empty state. Messages: a conversation list on the left split into messages and groups, a notification with a message preview and View Conversation and Dismiss options, and an empty state saying no conversation is selected',
              width: 2400,
              height: 1350,
              aspect: '2400 / 1350',
            },
            notes: [
              'All conversations in one sidebar, with search, an archive and a new chat button.',
              'Messages and Groups are separate, with last-message time and an unread marker.',
              'A notification shows who wrote, with a preview and the choice to view or dismiss.',
              'With nothing selected, the screen prompts you to pick a conversation or start a chat.',
            ],
          },
          {
            title: 'One-to-one conversation',
            trigger: 'Select View Conversation',
            media: {
              src: 'images/projects/healthcare-saas/showcase-one-to-one.webp',
              alt: 'One-to-one chat screen with labelled parts: Person and status, Search, pin and more, Conversation list, Message, Shared patient card, Read marker, Attach, Composer, Send. A one-to-one conversation: a message asking for a patient link, and a reply that shares the patient as a card with name, record number, status and a View profile button',
              width: 2400,
              height: 1350,
              aspect: '2400 / 1350',
            },
            notes: [
              'Opens beside the list, with the person’s name and status on top.',
              'Messages grouped by day, with sender and time.',
              'A patient shared as a card with key details and a link to their profile.',
              'Composer with attachments, text formatting and send.',
            ],
          },
          {
            title: 'Group chat',
            trigger: 'Select a group',
            media: {
              src: 'images/projects/healthcare-saas/showcase-group-chat.webp',
              alt: 'Group chat screen with labelled parts: Group and members, Search, pin and more, Groups, Your message, Sender and time, Composer, Send. A group chat named CareSync with its members listed under the name, and messages from several people grouped under today',
              width: 2400,
              height: 1350,
              aspect: '2400 / 1350',
            },
            notes: [
              'Several colleagues in one conversation.',
              'Members listed under the group name.',
              'Each message shows who sent it and when.',
              'Search, pin and more actions in the header.',
            ],
          },
        ],
        challenges: [
          {
            challenge: 'Reaching colleagues without leaving the product.',
            opportunity: 'Conversations and groups live in one sidebar inside the platform.',
          },
          {
            challenge: 'Noticing a new message without breaking focus.',
            opportunity: 'A notification shows who wrote, with a preview and a direct link to the conversation.',
          },
          {
            challenge: 'Conversations are often about a specific patient.',
            opportunity: 'A patient can be shared as a card linking to their profile.',
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
              'Tabs, filters, tables, labels and cards behave the same in every module I designed, and match the rest of the product.',
          },
          {
            title: 'Dense, but scannable',
            detail:
              'Clear columns, colour-coded labels and cards grouped by type keep dense lists and profiles readable.',
          },
          {
            title: 'One step at a time',
            detail:
              'A population leads to one patient, an overview to one recording or conversation. Each screen shows more about less.',
          },
        ],
      },
      {
        kind: 'text',
        id: 'collaboration',
        label: 'Collaboration',
        heading: 'Collaboration and development',
        body: [
          'I work with the Design Team, where each designer owns different modules and we share one design system. As features move from design to development, I work with the Product Team and Engineering Team, and keep refining my screens as requirements change.',
        ],
      },
      {
        kind: 'outcomes',
        id: 'outcome',
        label: 'Outcome',
        heading: 'Outcome',
        items: [
          { detail: 'Core workflows across three areas: Patient Overview, Monitoring and Communication.' },
          { detail: 'Dense patient and monitoring data made easier to scan, with consistent tabs, filters, labels and cards.' },
          { detail: 'Ongoing refinement with the Product Team and Engineering Team.' },
        ],
      },
    ],
  },
  {
    featured: true,
    slug: 'design-system',
    accent: '#007a7b',
    title: 'Design System',
    client: '91 Life',
    summary:
      'Design Plus is the shared component library behind a platform. I designed its tables, modals, tooltips, toggles and checkboxes.',
    type: 'Design system · Component library',
    category: 'Design System',
    year: '',
    role: 'UI/UX Designer',
    team: 'Design Team',
    timeline: '1 month',
    tools: ['Figma'],
    thumbnail: {
      src: 'images/projects/design-system/thumbnail.webp',
      alt: 'The words Design system inside a selection box labelled Design Plus, above a device frame with the Tables, Modals and colour cards, and the a mark in the corner',
      width: 1600,
      height: 1200,
      aspect: '4 / 3',
    },
    hero: {
      src: 'images/projects/design-system/hero.webp',
      alt: 'The words Design system in large type inside a selection box labelled Design Plus, above a device frame with the Tables, Modals and colour cards from the design system',
      width: 2400,
      height: 1350,
      aspect: '16 / 9',
    },
    confidentiality:
      'This product is under NDA, so it is not named here and its information stays confidential. This case study shares only the design system components I designed, with placeholder content, to show my role and process.',
    sections: [
      {
        kind: 'list',
        id: 'overview',
        label: 'Overview',
        heading: 'Project overview and my role',
        body: [
          'A fast-growing SaaS platform had more designers and engineers building more screens at once.',
          'Design Plus is the design system we built to keep it consistent: several designers each owned components, and we built it in about a month, alongside the product.',
          'I also wrote the component documentation engineers use to find, understand and build each part.',
        ],
        intro: 'My components:',
        items: [
          { title: 'Tables', detail: 'Data tables in two densities, built from existing components.' },
          { title: 'Modals', detail: 'Confirmation, warning, feedback and input dialogs on one structure.' },
          {
            title: 'Tooltips, Action Toggles & Checkboxes',
            detail: 'Explanations, on/off controls and selection controls, designed as one family.',
          },
        ],
      },
      {
        kind: 'text',
        id: 'background',
        label: 'Background',
        heading: 'Why the product needed a design system',
        body: [
          'Every new feature, from data charts to messaging and billing, needed the same building blocks: form controls, tables, tooltips and dialogs.',
          'Without shared components, each feature redesigned and rebuilt them, with small differences in spacing, colour and behaviour. In a data-heavy product, where people scan dense records under time pressure, those differences add friction and erode trust.',
          'Engineers felt it too: which version to use, what the hover or disabled state looked like, how it should behave.',
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
            opportunity: 'Grow week by week, adding each component when the product first needed it.',
          },
          {
            challenge: 'Several designers were building components in parallel.',
            opportunity: 'One set of foundations and interaction states, so separate pieces feel like one product.',
          },
          {
            challenge: 'Engineers had to interpret each screen on its own.',
            opportunity: 'Define every variant and state up front, so a component means the same in design and code.',
          },
        ],
      },
      {
        kind: 'process',
        id: 'process',
        label: 'Process',
        heading: 'Built alongside the product',
        intro: 'Not one big project planned up front: the system grew with the product over about a month.',
        steps: [
          {
            title: 'Driven by real requirements',
            detail:
              'Each week, product requirements decided the next components. A component joined the system first, then went into the screens that needed it.',
          },
          {
            title: 'Shared ownership',
            detail:
              'Each designer owned a set of components, from first exploration to documentation. Shared colours, typography and four interaction states kept the work consistent.',
          },
          {
            title: 'Published for the whole team',
            detail:
              'Finished components were published to a shared Figma library with their own documentation pages, and existing screens were updated to use them.',
          },
        ],
      },
      {
        kind: 'text',
        id: 'components',
        label: 'My contribution',
        heading: 'The components I designed',
        body: [
          'I designed and documented six component families: tables, modals, tooltips, action tooltips, toggles and checkboxes. The goal for each: cover every state the product needs, behave predictably, and be easy to build.',
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
              'Lists and records depend on tables, so I designed them as a set of parts, not one fixed layout.',
            points: [
              'Two densities: rich rows with status, tags and actions, and compact rows for scanning many records.',
              'Sortable headers, a link style for records that open elsewhere, and row actions in one menu.',
              'Pagination with a page-size control for long lists.',
              'Built from existing components: checkboxes, badges, buttons, pagination and a select.',
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
              'Modals interrupt, so they must be clear about what happens next. Every dialog follows one structure: title, one line of explanation, content, actions.',
            points: [
              'One structure for confirmations, warnings, feedback and input.',
              'A clear primary action, with destructive actions in red.',
              'The main action stays disabled until required fields are complete.',
              'Extra required fields appear only when a choice needs them.',
              'An unsaved-changes safeguard, so edits are never lost by accident.',
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
          'Dense screens leave little room to explain, so tooltips add context only where needed. Checkboxes appear everywhere, from forms to table rows, so they had to be predictable. Toggles share their states, so both feel like one family.',
        layout: 'stacked',
        items: [
          {
            title: 'Tooltips',
            points: [
              'Explain or identify an element, from a one-word label to a heading with a description.',
              'Action tooltips add an icon and buttons for quick decisions in context.',
              'Nine arrow positions, to point at any element on screen.',
              'Usage guidance on the component page, so the team knows when to use each.',
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
              'Hover darkens the track; focus adds the system’s shared ring.',
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
              'An indeterminate value for partial selections, such as select-all in a table.',
              'Versions with a label and supporting text for forms.',
              'One Figma component covering 40 variants: type, value, label and state.',
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
          'A design system only works if engineers can build from it with confidence, so I treated every component as a specification, not just a drawing.',
          'Each component page shows every state side by side, and clear names in the shared library let designers and engineers speak the same language.',
          'Tables show it best: built from components engineers already have, they help reduce back-and-forth at handoff and differences between the design and the shipped product.',
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
          'The system let the product grow without drifting: screens from different designers and engineers looked and behaved the same, and new features started from tested components.',
        items: [
          { value: '6', detail: 'component families I designed and documented' },
          { value: '4', detail: 'interaction states shared by every control' },
          { detail: 'One shared foundation for designers and engineers, growing with the product.' },
        ],
      },
      {
        kind: 'text',
        id: 'reflection',
        label: 'Reflection',
        heading: 'What I learned',
        body: [
          "Building a system alongside a live product taught me to design for what’s next as well as what’s needed now: each component solved today’s feature and stayed flexible for the ones we couldn’t see yet.",
          'It also showed me that consistency comes from shared decisions, not just shared files. Agreeing on states, names and structure mattered as much as the components.',
        ],
      },
    ],
  },
  {
    featured: true,
    slug: 'cloudtech-branding',
    accent: '#2a36cd',
    title: 'Branding',
    client: 'Cloudtech',
    summary:
      'A Morse code–inspired logo and brand identity for Cloudtech, plus its Framer website. Two weeks from first sketch to live.',
    type: 'Brand design · Brand identity',
    category: 'Brand Identity',
    year: '',
    role: 'Graphic Designer',
    timeline: '2 weeks',
    website: 'https://www.cloudtechnology.us/',
    tools: ['Figma', 'Framer'],
    thumbnail: {
      src: 'images/projects/cloudtech-branding/thumbnail.webp',
      alt: 'The Cloudtech logo in white on a blue gradient, with the a mark in the corner',
      width: 1600,
      height: 1200,
      aspect: '4 / 3',
    },
    hero: {
      src: 'images/projects/cloudtech-branding/hero.webp',
      alt: 'The Cloudtech logo in white on a blue gradient',
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
          'Cloudtech is a technology company with offices in New York, Düsseldorf, Tirana and Prishtina, offering software development, cloud, DevOps, mobile, security, AI and consulting.',
          'It needed an identity that reflected its expertise and looked consistent across digital platforms.',
        ],
        intro: 'My role, end to end:',
        items: [
          {
            title: 'Logo design',
            detail: 'A new mark that reflects the company’s technical background and stands apart.',
          },
          {
            title: 'Brand system',
            detail: 'Logo variations, colour palette, social templates, banners and profile assets.',
          },
          {
            title: 'Website structure',
            detail: 'Wireframes for content hierarchy, layout and user experience.',
          },
          {
            title: 'Website design and development',
            detail: 'Applied the identity to the company website and built it in Framer.',
          },
        ],
      },
      {
        kind: 'text',
        id: 'background',
        label: 'Background',
        heading: 'The starting point',
        body: [
          "Cloudtech had an established team and a wide range of services, but its visual identity didn’t show the full scope.",
          'There was no recognisable logo or consistent visual language across its website and social channels.',
          'The challenge: position Cloudtech as a modern technology company without leaning on industry clichés.',
        ],
      },
      {
        kind: 'insights',
        id: 'research',
        label: 'Research',
        heading: 'Research and key insights',
        intro:
          'I reviewed competitors and how technology companies present themselves, looking at logo styles, colours and visual elements for a different direction.',
        items: [
          {
            title: 'Everyone looks the same',
            detail: 'Abstract geometric marks, clouds, circuits and blue gradients everywhere. Looking technical wasn’t enough to be remembered.',
          },
          {
            title: 'Clean marks travel further',
            detail: 'From favicon to LinkedIn banner, simple, bold shapes stay readable at every size.',
          },
          {
            title: 'A story makes it stick',
            detail: 'A mark with an idea is easier to remember and to explain. Cloudtech needed a meaning, not just a shape.',
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
        intro: 'From sketches to wireframes, then a cleaner final version after testing.',
        steps: [
          {
            title: 'Sketches',
            detail:
              'I sketched ideas and collected inspiration. Morse code stood out: one of the first electronic messaging systems, built from just dots and dashes. Written out, C is dash, dot, dash, dot, and T is a single dash.',
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
              'With the logo settled, I wireframed the website: a bold hero with one clear message, expertise as cards, services at a glance, and the offices to build trust.',
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
              'The first logos put the Morse symbol inside the word, in place of the O. Tested at small sizes and with the client, the name was harder to read, so I moved the symbol out into a standalone mark beside a clean wordmark. The website got the same clean-up: simpler sections, more space.',
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
        intro: 'A small, consistent system: one mark, one wordmark, one colour story, used the same way everywhere.',
        items: [
          {
            title: 'A mark built from Morse code',
            rationale:
              'The symbol combines the Morse code for C (dash, dot, dash, dot) and T (dash): dashes become rounded bars, dots become circles. Simple, technical, with a story the team can tell.',
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
              'A bold, wide, all-caps wordmark beside the mark, in light and dark, horizontal and stacked versions. The mark also works alone as an app icon or profile picture.',
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
              'A near-black navy base with electric blue light and 3D shapes feels premium and technical, and keeps white type easy to read.',
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
              'Every service post shares one layout: mark, label, bold title and a large outline icon. New services slot in without starting over, and the feed stays consistent.',
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
              'The website brings it together: logo, navy and blue palette, 3D shapes, and clear sections for expertise and services. Built in Framer and live today.',
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
        heading: 'Outcomes',
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
