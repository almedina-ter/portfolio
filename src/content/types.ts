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
  /** Indents the entry in the "On this page" list, to show it belongs to the section above. */
  nested?: boolean
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
  /** Key figures shown as cards between the paragraphs and the list. */
  stats?: { value: string; label: string }[]
  /** A lead-in for the list, e.g. "My role covered:". */
  intro?: string
  /** Plain items, or items with a bold label, e.g. { title: 'Logo design', detail: '…' }. */
  items: (string | { title: string; detail: string; list?: string[] })[]
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
  items: DesignItem[]
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

/** One item inside a decisions or chapter section: a short write-up with optional points and an image. */
export interface DesignItem {
  /** Leave out when the section heading already names the item. */
  title?: string
  rationale?: string
  points?: string[]
  media?: MediaAsset
  /** The action that leads into this item from the one before it, e.g. "Select a patient". Shown as a connector. */
  trigger?: string
}

/**
 * One chapter of a contribution. Each chapter has its own heading, introduction
 * and groups of related screens, and gets its own entry in "On this page".
 */
export interface ChapterSection extends SectionBase {
  kind: 'chapter'
  /** Position in the sequence, shown above the heading as "Part 01". */
  number: string
  /** Introduction. The first paragraph is set larger. */
  body: string[]
  /** The screens and design work inside this chapter. */
  groups: { title: string; subtitle?: string; intro?: string; items: DesignItem[] }[]
}

/** One callout on an annotated screen. Positions are in pixels of the screen image. */
export interface ScreenNote {
  /** Short label drawn on the screen, e.g. "Add patient". */
  label: string
  /** The design decision it points to, written below the screen. */
  text: string
  /** Which side margin the label sits in. */
  side: 'left' | 'right'
  /** Where the arrow ends, on the interface element it explains. */
  target: { x: number; y: number }
  /** Height of the line's horizontal run. Choose a gap between rows or cards so the arrow never crosses content. Defaults to the target's height. */
  via?: number
  /** Height of the label in the margin. Defaults to `via`. Labels closer than about 90px are pushed apart automatically. */
  labelY?: number
}

/**
 * One main screen explained with callouts, followed by closer looks at selected
 * parts of it. Every annotated section uses the same presentation.
 */
export interface AnnotatedSection extends SectionBase {
  kind: 'annotated'
  body: string[]
  /** The full screen. Needs width and height so callouts can be placed on it. */
  media: MediaAsset
  notes: ScreenNote[]
  /** Closer looks, each a crop of the screen. Keep them the same shape. */
  details: MediaAsset[]
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
  | ChapterSection
  | AnnotatedSection

export interface Project {
  slug: string
  title: string
  client: string
  summary: string
  type: string
  /** Short discipline label shown on the homepage, e.g. "Product Design". */
  category?: string
  year: string
  role: string
  team?: string
  /** Separate team categories, shown as distinct blocks. Use instead of `team` when the headcounts differ. */
  teams?: { name: string; count: string; unit: string }[]
  timeline?: string
  /** Status of the product or project as a whole, e.g. "Ongoing". Shown as "Project status". */
  status?: string
  /** How long you were involved, e.g. "1 year". Shown as "My involvement". */
  involvement?: string
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
