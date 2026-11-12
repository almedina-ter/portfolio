/**
 * Content types for the portfolio.
 * Every page is generated from the data files in this folder, so you never
 * need to edit components to add, reorder or remove content.
 */

/** Paths are relative to the `public/` folder, e.g. "images/projects/my-project/hero.webp". */
export type AssetPath = string

export interface MediaAsset {
  /** Leave empty to show a labelled placeholder until the real image is ready. */
  src?: AssetPath
  /** Describe what the image shows for screen-reader users. Required. */
  alt: string
  caption?: string
  /** Intrinsic pixel size of the image file. Prevents layout shift. */
  width?: number
  height?: number
  /** Box shape the image is cropped to, as a CSS aspect ratio, e.g. "16 / 10". */
  aspect?: string
  /** Optional extra sizes for responsive loading: [{ src, width }]. */
  srcSet?: { src: AssetPath; width: number }[]
}

export interface SiteConfig {
  name: string
  role: string
  location: string | null
  /** IANA time zone, e.g. "Europe/Lisbon". Shows your local time in the sidebar. */
  timeZone: string | null
  availability: string | null
  headline: string
  intro: string
  email: string | null
  linkedin: string | null
  /** Other profiles, e.g. Dribbble or Read.cv. Only real URLs. */
  otherLinks: { label: string; href: string }[]
  /** File in `public/`, e.g. "resume.pdf", or a full https URL. */
  resume: string | null
  /** Public site URL, e.g. "https://username.github.io/portfolio". Used for canonical, sitemap and Open Graph. */
  url: string | null
  /** Social share image in `public/`, 1200×630. Only used when `url` is set. */
  ogImage: AssetPath | null
  /** Endpoint of a form service such as Formspree. Leave null to hide the form. */
  contactFormEndpoint: string | null
  portrait: MediaAsset
  description: string
}

export interface Capability {
  title: string
  items: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  location?: string
  summary: string
  sample?: boolean
}

export interface AboutContent {
  heading: string
  /** Short paragraph used on the homepage preview. */
  preview: string
  /** Longer bio paragraphs on the About page. */
  body: string[]
  principles: { title: string; detail: string }[]
  capabilities: Capability[]
  tools: string[]
  education: { title: string; detail: string }[]
  sample?: boolean
}

/* ---------- Case studies ---------- */

interface SectionBase {
  /** Unique within the project. Used for the "On this page" list. */
  id: string
  heading: string
  /** Short label shown above the heading, e.g. "Context". */
  label?: string
}

export interface TextSection extends SectionBase {
  kind: 'text'
  body: string[]
  /** Optional full-width image after the text, e.g. a diagram. */
  media?: MediaAsset
}

export interface ListSection extends SectionBase {
  kind: 'list'
  /** Optional paragraphs before the list. The first one is set larger. */
  body?: string[]
  /** A lead-in for the list, e.g. "My role covered:". */
  intro?: string
  /** Plain items, or items with a bold label, e.g. { title: 'Logo design', detail: '…' }. */
  items: (string | { title: string; detail: string })[]
}

export interface InsightsSection extends SectionBase {
  kind: 'insights'
  intro?: string
  items: { title: string; detail: string }[]
}

export interface DecisionsSection extends SectionBase {
  kind: 'decisions'
  intro?: string
  /** split (default): text beside a smaller image. stacked: text, then a full-width image that opens larger. */
  layout?: 'split' | 'stacked'
  /** `points` are short supporting details shown as a list beside or under the rationale. */
  items: { title: string; rationale: string; points?: string[]; media?: MediaAsset }[]
}

export interface GallerySection extends SectionBase {
  kind: 'gallery'
  intro?: string
  layout?: 'grid' | 'stack'
  images: MediaAsset[]
}

export interface OutcomesSection extends SectionBase {
  kind: 'outcomes'
  intro?: string
  /** Only add figures you can stand behind. `value` is optional. */
  items: { value?: string; detail: string }[]
}

/** Pairs each challenge you found with the opportunity it opened. */
export interface ChallengesSection extends SectionBase {
  kind: 'challenges'
  intro?: string
  items: { challenge: string; opportunity: string }[]
}

/** The design process as numbered steps, each with an optional image (sketches, wireframes, iterations). */
export interface ProcessSection extends SectionBase {
  kind: 'process'
  intro?: string
  steps: { title: string; detail: string; media?: MediaAsset }[]
}

export type CaseStudySection =
  | TextSection
  | ListSection
  | InsightsSection
  | ChallengesSection
  | DecisionsSection
  | ProcessSection
  | GallerySection
  | OutcomesSection

export interface Project {
  slug: string
  title: string
  client: string
  summary: string
  type: string
  year: string
  role: string
  team?: string
  timeline?: string
  platform?: string
  tools?: string[]
  /** Live product or website, e.g. "https://www.example.com/". Shown as a link in the project details. */
  website?: string
  thumbnail: MediaAsset
  hero: MediaAsset
  /** Shown as a note at the top of the case study, e.g. for NDA work. */
  confidentiality?: string
  /** Sections render in the order listed, so each story can have its own shape. */
  sections: CaseStudySection[]
  /** Show on the homepage. */
  featured?: boolean
  /** Hide without deleting. */
  draft?: boolean
  /** Marks sample content with a visible tag. Remove once the project is real. */
  sample?: boolean
}
