import type { ReactNode } from 'react'
import { glyphs, logos } from './toolIcons'

type Logo = (typeof logos)[keyof typeof logos]

/** A full-colour brand logo. `dark` marks logos that are black or near black, which get a thin gray outline in dark mode. */
const logo = (data: Logo, dark = false) => (
  <svg
    viewBox={`0 0 ${data.width} ${data.height}`}
    aria-hidden="true"
    className="tool-icon size-[22px] shrink-0"
    data-dark={dark || undefined}
    dangerouslySetInnerHTML={{ __html: data.body }}
  />
)

const glyph = (d: string, fill: string) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="tool-icon size-[22px] shrink-0">
    <path d={d} fill={fill} />
  </svg>
)

const canva = (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="tool-icon size-[22px] shrink-0">
    <defs>
      <linearGradient id="canva-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00C4CC" />
        <stop offset="1" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
    <path d={glyphs.canva} fill="url(#canva-gradient)" />
  </svg>
)

/** Icon first, then the name. Names stay because Figma Make and Claude Design share their parent's mark. */
const tools: { name: string; icon: ReactNode }[] = [
  { name: 'Figma', icon: logo(logos.figma) },
  { name: 'Figma Make', icon: glyph(glyphs.figma, '#A259FF') },
  { name: 'Canva', icon: canva },
  { name: 'Illustrator', icon: logo(logos.illustrator, true) },
  { name: 'Photoshop', icon: logo(logos.photoshop, true) },
  { name: 'Adobe Suite', icon: logo(logos.adobe) },
  { name: 'Framer', icon: logo(logos.framer, true) },
  { name: 'Notion', icon: logo(logos.notion, true) },
  { name: 'Jira', icon: logo(logos.jira) },
  { name: 'Claude Code', icon: logo(logos.claudeCode) },
  { name: 'Claude Design', icon: logo(logos.claude) },
  { name: 'ChatGPT', icon: logo(logos.chatgpt, true) },
  { name: 'Webflow', icon: glyph(glyphs.webflow, '#146EF5') },
]

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee-row flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {tools.map((tool) => (
        <li key={tool.name} className="flex items-center gap-2.5 pr-10 text-sm whitespace-nowrap text-ink-muted lg:pr-12">
          {tool.icon}
          {tool.name}
        </li>
      ))}
    </ul>
  )
}

/**
 * The tools I work with, as a row that drifts from right to left in a loop. It pauses on hover,
 * and with reduced motion it stops and wraps into a static list.
 */
export function ToolsMarquee({ className = '' }: { className?: string }) {
  return (
    <div role="group" aria-label="Tools I work with" className={`marquee overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}
