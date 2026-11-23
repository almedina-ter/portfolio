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
      'An ongoing healthcare SaaS platform that clinical teams use to manage patients, monitor their activity and communicate with each other. As a Product Designer, I design core workflows across its Management, Monitoring and Communication areas, working alongside the Design Team, Product Team and Engineering Team.',
    type: 'Product design · Healthcare SaaS',
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
            detail: 'Three areas of product work, in the same order as the sidebar and the sections below:',
            list: ['Management', 'Monitoring', 'Communication'],
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
        heading: 'My contribution across three product areas',
        body: [
          'My contribution is organised into three areas that follow how healthcare professionals move through the product: they manage patients, monitor what is happening with them, and communicate with each other about it.',
          'Each area is its own chapter below, with the screens in the order a user meets them.',
        ],
        intro: 'The three areas:',
        items: [
          {
            title: 'Management',
            detail: 'A patient overview for the whole population and a profile for each patient, with billing as part of the patient record.',
          },
          {
            title: 'Monitoring',
            detail: 'From a monitoring overview to ECG & Recordings, individual patient monitoring and single episodes, alongside external monitoring reports.',
          },
          {
            title: 'Communication',
            detail: 'Messaging inside the product: notifications, conversations and groups.',
          },
        ],
      },
      {
        kind: 'chapter',
        id: 'management',
        number: '01',
        label: 'Management',
        heading: 'Management',
        body: [
          'Management is where care starts. Healthcare professionals need to find the right patient quickly, understand the state of their patient population at a glance, and then open one patient and see everything they need in one place.',
          'I designed that path in two levels: an overview of the whole patient population, and a profile for the individual patient. Billing sits alongside them as part of the same patient record.',
        ],
        groups: [
          {
            title: 'From patient population to one patient',
            subtitle: 'Two levels of the same workflow',
            intro:
              'Professionals scan the population first, and open one patient only when they need detail. The two screens are designed to make that step feel like moving closer to the same record, not moving to a different place.',
            items: [
              {
                title: 'Patient Overview',
                rationale:
                  'The patient overview is the central place to manage a patient population. Three figures at the top show total, active and inactive patients, each with a short note such as recent registrations or patients awaiting activation, so the size and state of the population is clear before reading a single row. Below, one table lists every patient, and the main decisions are made there: who to look at, and who needs attention.',
                points: [
                  'All, Active and Inactive tabs show their counts and narrow the list, with search and filters to narrow it further.',
                  'Each row shows the patient, age, patient ID, status and last activity, which is enough to scan and choose.',
                  'Export Data and Add patient sit apart from the list, so the two main actions are always within reach.',
                  'Sortable columns and pagination with a page-size control keep a list of thousands manageable.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/management-patient-overview.webp',
                  alt: 'Patient Overview dashboard: three summary figures for total, active and inactive patients, tabs for all, active and inactive patients, filters and search, Export Data and Add patient buttons, and a table of patients with age, patient ID, status, last activity and a View link',
                  caption: 'Patient Overview: the dashboard for the whole patient population.',
                  width: 1920,
                  height: 1080,
                  aspect: '1920 / 1080',
                },
              },
              {
                trigger: 'Select a patient’s name, or View',
                title: 'Patient Profile',
                rationale:
                  'Selecting a patient’s name or View opens a deeper level of the same workflow. The patient area has three tabs, Patient Profile, Medical history and Care Plan, and this case study shows the Patient Profile. It brings one patient’s essential information together on a single, structured screen, so a professional does not have to piece it together from disconnected places. Information is grouped into cards by type across three columns, which keeps a dense screen calm.',
                points: [
                  'A header with name, status, age, record number and blood type stays in view, with Edit profile and share actions.',
                  'Personal and contact information, including an emergency contact, answer who the patient is and how to reach them.',
                  'Care team and next appointment show who is responsible and what happens next.',
                  'Latest vitals link to the full medical history, and current medications sit next to them.',
                  'The latest doctor’s note puts the most recent clinical context at the end of the reading path.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/management-patient-profile.webp',
                  alt: 'Patient Profile screen: a patient header with name, status, age, record number and blood type, tabs for Patient Profile, Medical history and Care Plan, and cards for personal information, contact information, care team, latest vitals, next appointment, medications and a doctor’s note',
                  caption: 'Patient Profile: one patient, with their information in one place.',
                  width: 1920,
                  height: 1080,
                  aspect: '1920 / 1080',
                },
              },
            ],
          },
          {
            title: 'Billing',
            subtitle: 'Making billing manageable',
            intro:
              'Billing connects an individual patient’s account to the healthcare services they receive. It appears inside the patient view and as tables across patients. Billing has a lot of states, so I organised it into tabs and subtabs, and each table only shows the items that need the same kind of attention.',
            items: [
              {
                title: 'Billing for one patient',
                rationale:
                  'The billing tab shows the patient’s billing information inside the patient view, so clinicians can check it without switching modules.',
                media: {
                  src: 'images/projects/healthcare-saas/patient-billing.webp',
                  alt: 'The billing tab inside the patient view: a table of billing rows with colour-coded status labels, with all data blurred. A callout marks the billing tab',
                  width: 2400,
                  height: 1100,
                  aspect: '2400 / 1100',
                },
              },
              {
                title: 'Tabs, subtabs and a dense table',
                rationale:
                  'Top-level tabs separate the main stages of billing, and subtabs split them further, each with a count. A short note explains what the current view shows.',
                points: [
                  'Codes and types shown as compact labels to keep long rows scannable.',
                  'Long text is truncated, with a "+" count that reveals the rest.',
                  'Search and column management let people focus on what they need.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/billing-table.webp',
                  alt: 'Billing table with top-level tabs and counts, subtabs, a filters button and columns for billing cycle, patient, codes, device, physician and reason for review, with all data blurred. Callouts mark the tabs, the subtabs and filters, and long text cut with a plus count',
                  width: 2400,
                  height: 1100,
                  aspect: '2400 / 1100',
                },
              },
              {
                title: 'Filters and detail panel',
                rationale:
                  'Filters live in one panel next to the subtabs, with clear and apply actions. Selecting a row opens a side panel with its key points, so the table stays in view while details are checked.',
                media: {
                  src: 'images/projects/healthcare-saas/billing-detail.webp',
                  alt: 'Two browser windows: the billing filter panel open over the table, and a side panel with a cycle overview next to the table, with all data blurred. Callouts mark the filters panel and the side panel',
                  width: 2400,
                  height: 1350,
                  aspect: '2400 / 1350',
                },
              },
              {
                title: 'Dismissing and restoring',
                rationale:
                  'Dismissing an item needs a written reason, and dismissed items are not lost: they can be shown with a filter and restored straight from the table.',
                media: {
                  src: 'images/projects/healthcare-saas/billing-dismiss.webp',
                  alt: 'Two browser windows: the billing filter panel with the show dismissed switch on, and the table listing a dismissed cycle with a button to reactivate it, with all data blurred. Callouts mark the show dismissed filter and the restore button',
                  width: 2400,
                  height: 1350,
                  aspect: '2400 / 1350',
                },
              },
            ],
          },
        ],
      },
      {
        kind: 'chapter',
        id: 'monitoring',
        number: '02',
        label: 'Monitoring',
        heading: 'Monitoring',
        body: [
          'Monitoring is how healthcare professionals follow what is happening with their patients between visits. The challenge is volume: many patients, many recordings and many detected episodes, only some of which need a clinician’s attention.',
          'I designed it as a path from broad to specific: an overview of monitoring activity, an ECG & Recordings area for episodes and recording quality, an individual patient view for waveforms and review history, and finally a single episode.',
        ],
        groups: [
          {
            title: 'From activity to recordings',
            subtitle: 'Seeing the whole picture first',
            intro:
              'The overview and ECG & Recordings share the same table and tab patterns, so moving from one to the other keeps the context.',
            items: [
              {
                title: 'Monitoring Overview',
                rationale:
                  'The overview gives a broad picture of monitoring activity, so healthcare professionals can see what has changed and what may need attention before opening any record. It answers “what is happening?” and points to where to look next. A heart rate chart for the last 24 hours marks the alert threshold, alert history lists recent alerts by severity, and the latest ECG is one click from its waveform.',
                points: [
                  'Heart rate over 24 hours, with the alert threshold and the highest reading marked.',
                  'Alert history with severity labels, and a link to view all alerts.',
                  'The latest ECG recording, with a shortcut to its waveform.',
                  'A table of episodes by patient, with episode type, duration, maximum heart rate and a review status: New, In Review, Reviewed, Escalated or Dismissed.',
                  'Tabs lead on to ECG & Recordings, Reports, Laboratory Results, and Visits & Appointments.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/monitoring-overview.webp',
                  alt: 'Monitoring Overview: a 24-hour heart rate chart with an alert threshold, an alert history list with severity labels, the latest ECG recording, and a table of episodes by patient with type, duration, maximum heart rate and review status',
                  caption: 'Monitoring Overview: a broad view of monitoring activity.',
                  width: 1920,
                  height: 1080,
                  aspect: '1920 / 1080',
                },
              },
              {
                trigger: 'Open the ECG & Recordings tab',
                title: 'ECG & Recordings',
                rationale:
                  'ECG & Recordings goes one level deeper into the same data. It summarises detected episodes and recording quality, and shows where episodes stand in the clinical review workflow. Episodes found automatically stay “detected” until a clinician reviews and confirms them, and the screen says so, so nobody mistakes a detection for a decision.',
                points: [
                  'Detected episodes: how many, how often per day, total duration and patients affected, broken down by type.',
                  'Recording quality: how many recordings are good, poor or incomplete, with a daily chart.',
                  'Review & monitoring: average review time, the oldest open episode and how many episodes sit in each review status.',
                  'A patient table with episode, duration and maximum heart rate, to find a patient and open their record.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/monitoring-ecg-recordings.webp',
                  alt: 'ECG and Recordings screen: detected episodes with totals and a breakdown by type, a recording quality panel with good, poor and incomplete recordings and a daily chart, a review and monitoring panel with review statuses, and a patient table with episode, duration and maximum heart rate',
                  caption: 'ECG & Recordings: detected episodes, recording quality and review status.',
                  width: 1920,
                  height: 1080,
                  aspect: '1920 / 1080',
                },
              },
            ],
          },
          {
            title: 'From a patient to a single episode',
            subtitle: 'Narrowing down to one case',
            intro:
              'The table leads to one patient, and the patient’s episode list leads to one episode. Each step shows more detail about less data.',
            items: [
              {
                trigger: 'Select a patient from the table',
                title: 'Individual patient monitoring',
                rationale:
                  'Selecting a patient from the table opens their monitoring record, with the same patient header as the profile so it is always clear whose record it is. Four tabs separate the work: Waveform & episodes, Heart Rate, Recordings & quality and Review history. A row of figures at the top summarises the patient before any waveform is read: recordings, detected episodes, episodes awaiting review, escalations, heart rate and poor-quality recordings.',
                points: [
                  'A list of detected episodes on the left, each with its type, time, duration and review status.',
                  'The ECG waveform of the selected episode, with the detected section highlighted and a 10 s or 30 s view.',
                  'A review note that shows who confirmed an episode and when, linked to the full review history.',
                  'Message patient and Export report, so the next step is one click away.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/monitoring-patient.webp',
                  alt: 'Individual patient monitoring: a patient header with Message patient and Export report buttons, tabs for waveform and episodes, heart rate, recordings and quality, and review history, summary figures, a list of detected episodes and an ECG waveform with the detected episode highlighted',
                  caption: 'Individual patient monitoring: waveforms, episodes and review history for one patient.',
                  width: 1920,
                  height: 1080,
                  aspect: '1920 / 1080',
                },
              },
              {
                trigger: 'Select an episode from the list',
                title: 'Individual episode',
                rationale:
                  'Selecting an episode turns the screen into an investigation. Healthcare professionals see the waveform around the detected section, when the episode started, how long it lasted, its average, minimum and maximum heart rate, and its review status. This is a different job from the overview: the overview shows that something was detected, and the episode view lets a clinician look at how it progressed.',
                points: [
                  'Start time, duration, average heart rate and minimum / maximum heart rate.',
                  'The detected section is highlighted on the waveform, so the episode is read in context.',
                  'Review status and, once reviewed, who confirmed it and when.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/monitoring-episode.webp',
                  alt: 'The selected episode in the individual patient monitoring view: a list of detected episodes beside an atrial flutter waveform with the detected section highlighted, and its start time, duration, average heart rate and minimum and maximum heart rate',
                  caption: 'Individual episode: the selected episode, shown in the same screen. The waveform in this design is illustrative.',
                  width: 1800,
                  height: 524,
                  aspect: '1800 / 524',
                },
              },
            ],
          },
          {
            title: 'Device Data History',
            subtitle: 'Every transmission in one place',
            intro:
              'This section lets healthcare professionals review and follow a patient’s historical transmission activity, from the data sent by devices to the alerts and status recorded for each transmission.',
            items: [
              {
                rationale:
                  'Device transmissions are listed in one table, so a clinician can scan alerts, status and notes at a glance and open the full report when needed.',
                points: [
                  'Alerts shown as coloured labels by severity, with a "+ more" count instead of crowding the row.',
                  'Status labels, sortable dates and pagination.',
                  'Alert details open in a panel on top of the table, so clinicians keep their place in the list.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/transmission-history.webp',
                  alt: 'Transmission history table with alerts, transmission type, status, notes and PDF columns, with all data blurred. An alert details popover sits on top of the table, and callouts mark the alerts by severity, the popover and the status labels',
                  width: 2400,
                  height: 1100,
                  aspect: '2400 / 1100',
                },
              },
            ],
          },
          {
            title: 'Episodes in clinical reports',
            intro:
              'From an overview in the report, to the patient’s history, to the detail of one episode.',
            items: [
              {
                title: 'Current Episodes',
                rationale:
                  'This view gives an overview of the patient’s current episode and its most relevant clinical information. Inside a report, current episodes are listed in a compact table, colour coded by type, so healthcare professionals can quickly understand the current episode and reach the essential information needed to monitor it.',
                points: [
                  'Heart rate.',
                  'Episode duration.',
                  'Episode type, colour coded.',
                  'A shortcut to the full episode history.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/episodes.webp',
                  alt: 'Two browser windows: a report with a compact table of current episodes and a shortcut to the history, and the episode history dialog with tabs, filters, selected episodes and an attach button, with all data blurred. Callouts mark the history shortcut and the attach action',
                  width: 2400,
                  height: 1350,
                  aspect: '2400 / 1350',
                },
              },
              {
                title: 'Episode History',
                rationale:
                  'Episode History offers different ways to review a patient’s historical episodes and sessions. It opens in a large dialog, so clinicians can look further back without leaving the report. Selecting rows enables attaching them, with a selection bar that shows the count.',
                points: [
                  'Latest Session: the active or most recent session.',
                  'Since Previous Session: activity since the previous session.',
                  'Complete History: every session on record.',
                  'Custom Range: a specific period or session range.',
                ],
                media: { alt: 'Episode history', aspect: '16 / 9' },
              },
              {
                title: 'Single Episodes',
                rationale:
                  'Where Current Episodes gives an overview, Single Episodes goes one level deeper. Opening an individual episode lets users review it in depth and understand what happened, with previous and next actions to move through episodes.',
                points: [
                  'Detailed episode information.',
                  'Timing and duration.',
                  'Episode type.',
                  'How the episode progressed.',
                  'Other relevant information tied to that specific episode.',
                ],
                media: { alt: 'Single episode', aspect: '16 / 9' },
              },
            ],
          },
          {
            title: 'External Monitors',
            subtitle: 'Monitoring reports in one place',
            intro:
              'Clinics receive reports from several external monitoring providers. This module puts them in one place, with the same table patterns as Billing, so reports from every provider can be reviewed in the same way.',
            items: [
              {
                title: 'One table per provider',
                rationale:
                  'Provider tabs sit above review tabs, so clinicians can move through reports by provider and by review state. Each row shows the patient, study type, report, physician and comments, with quick actions to open the report and move it forward.',
                media: {
                  src: 'images/projects/healthcare-saas/monitors-table.webp',
                  alt: 'External monitors table with provider tabs, review tabs for ready to review, signed and dismissed, and columns for patient, study type, report, physician and comments, with all data blurred. Provider names are replaced by Vendor A to D. Callouts mark the provider tabs, the review states and the quick actions on each row',
                  width: 2400,
                  height: 1100,
                  aspect: '2400 / 1100',
                },
              },
              {
                title: 'Nothing removed by accident',
                rationale: 'Dismissed reports are not deleted. They move to their own tab, where they can be reviewed and restored if needed.',
                media: {
                  src: 'images/projects/healthcare-saas/monitors-dismissed.webp',
                  alt: 'The dismissed tab of the external monitors table with one row highlighted and an Un-dismiss button, with all data blurred. Callouts mark the dismissed tab and the restore action',
                  width: 2400,
                  height: 900,
                  aspect: '2400 / 900',
                },
              },
            ],
          },
        ],
      },
      {
        kind: 'chapter',
        id: 'communication',
        number: '03',
        label: 'Communication',
        heading: 'Communication',
        body: [
          'Clinical work depends on conversation. Communication keeps messaging inside the product, so a question or a hand-off does not have to leave the platform where the work happens.',
          'I designed the experience around three needs: knowing when someone has written, getting to the right conversation quickly, and keeping the history in view while replying. The patient monitoring view links in with a Message patient action, so a conversation can start from the data that prompted it.',
        ],
        groups: [
          {
            title: 'From notification to conversation',
            subtitle: 'Organised, visible and quick to reach',
            intro:
              'The same two screens cover the whole exchange: a new message appears, the user opens it, reads the history and replies.',
            items: [
              {
                title: 'Inbox and notifications',
                rationale:
                  'Conversations are listed in a sidebar, split into individual messages and groups, with search, an archive and a button to start a new chat. Each row shows who it is with, when they last wrote and an unread marker. When a new message arrives, a notification appears with a preview and two choices, View Conversation or Dismiss, so a message is seen without pulling anyone away from what they were doing. With nothing selected, an empty state invites the user to pick a conversation or start a new one.',
                points: [
                  'Search by name, an archive and a new chat button at the top of the sidebar.',
                  'Messages and Groups as separate sections, with unread markers and time since the last message.',
                  'A notification with the sender, a preview and a direct link into the conversation.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/communication-notification.webp',
                  alt: 'Messaging with a conversation list on the left split into messages and groups, an empty state saying no conversation is selected, and a notification with a message preview and View Conversation and Dismiss options',
                  caption: 'Inbox and notification: conversations in a sidebar, and new messages announced without interrupting the work.',
                  width: 1920,
                  height: 1080,
                  aspect: '1920 / 1080',
                },
              },
              {
                trigger: 'Select View Conversation, or a conversation in the sidebar',
                title: 'Conversation',
                rationale:
                  'Selecting the notification opens the conversation with the sidebar still in place, so users can move to another conversation without losing their place. The header shows who they are talking to and whether they are active, the history is grouped by day with sender and time, and the composer at the bottom supports attachments, text formatting and sending. The same view serves both reading and replying, which keeps a short exchange short.',
                points: [
                  'Search, pin and more actions in the conversation header.',
                  'Messages grouped by day, with sender and time, and a check mark on sent messages.',
                  'A composer with attachments, text formatting and send.',
                ],
                media: {
                  src: 'images/projects/healthcare-saas/communication-conversation.webp',
                  alt: 'An open conversation: a header with the person’s name and active status, messages grouped under today with sender names and times, a composer with attach, format and send, and the conversation list on the left',
                  caption: 'Conversation: history, reply and the conversation list in one view.',
                  width: 1920,
                  height: 1080,
                  aspect: '1920 / 1080',
                },
              },
            ],
          },
          {
            title: 'Messaging',
            subtitle: 'Team conversations inside the product',
            intro:
              'Messaging lets clinical teams talk to each other inside the product, one to one or in groups, so coordination happens in the same product where the work is done.',
            items: [
              {
                title: 'Inbox',
                rationale:
                  'Conversations are grouped into pinned, direct and group conversations, with search, unread markers and quick actions. It keeps conversations organised so people can find the one they need quickly. An empty state guides people to pick a conversation or start a new one.',
                media: {
                  src: 'images/projects/healthcare-saas/messaging-inbox.webp',
                  alt: 'Messaging inbox with a search field and pinned, direct and group conversation lists on the left, and an empty state on the right that asks the user to choose a conversation or start a new chat, with all names blurred. Callouts mark the search, the sections and the empty state',
                  width: 2400,
                  height: 1000,
                  aspect: '2400 / 1000',
                },
              },
              {
                title: 'Groups',
                rationale:
                  'A group needs a name and at least two members, picked from a searchable list, so a team can talk together in one conversation. When too few people are selected, the disabled button explains why instead of failing silently.',
                media: {
                  src: 'images/projects/healthcare-saas/messaging-group.webp',
                  alt: 'Create new group dialog with a group name field, a searchable list of members with checkboxes and a Create Group button, with all names blurred. Callouts mark the member list and the primary action',
                  width: 2400,
                  height: 1100,
                  aspect: '2400 / 1100',
                },
              },
              {
                title: 'Conversations and limits',
                rationale:
                  'Each message shows its sender and time, and archived conversations have their own view, which keeps the inbox focused. When a message is too long, a counter and an inline error explain the limit before sending.',
                media: {
                  src: 'images/projects/healthcare-saas/messaging-conversation.webp',
                  alt: 'A group conversation with a header, messages with sender names and times, and a conversation list, with all names and messages blurred. Callouts mark the sender and time and the group header',
                  width: 2400,
                  height: 900,
                  aspect: '2400 / 900',
                },
              },
            ],
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
              'Tabs with counts, filter panels, tables, labels and dialogs work the same way in every module I designed, and follow the patterns used by the rest of the product.',
          },
          {
            title: 'Dense, but scannable',
            detail:
              'Clinical and billing tables carry a lot of columns. Compact labels, colour coding, truncation with "+ more" and details on demand keep rows readable.',
          },
          {
            title: 'Context without leaving the page',
            detail:
              'Side panels, popovers and dialogs show details on top of the table, so people keep their place in the list.',
          },
          {
            title: 'Careful with actions that matter',
            detail:
              'Dismissing an item asks for a reason, and dismissed items can always be brought back.',
          },
          {
            title: 'Clear feedback',
            detail:
              'Disabled buttons explain what is missing, required fields are marked, and limits such as message length are shown before an error happens.',
          },
        ],
      },
      {
        kind: 'text',
        id: 'collaboration',
        label: 'Collaboration',
        heading: 'Collaboration and development',
        body: [
          'I work alongside the Design Team, where each designer owns different modules and we share one design system, so the product feels like one product even though many people design it. I work with the Product Team and the Engineering Team as features move from design to development, and keep refining my areas as requirements change.',
        ],
      },
      {
        kind: 'outcomes',
        id: 'outcome',
        label: 'Outcome',
        heading: 'Outcome and ongoing development',
        items: [
          { detail: 'Designed core workflows across three product areas of a large healthcare platform: Management, Monitoring and Communication.' },
          { detail: 'Made dense clinical and billing information easier to scan, with consistent tabs, filters, labels and dialogs across modules.' },
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
