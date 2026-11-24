import { useRef, type CSSProperties, type PointerEvent } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../content/types'
import { Media } from './Media'
import { Reveal } from './Reveal'
import { SampleTag } from './SampleTag'

interface ProjectCardProps {
  project: Project
  index: number
  headingLevel?: 'h2' | 'h3'
  className?: string
}

/**
 * A Selected Work card: preview image, role label, title, short description and a
 * "View project" button. The whole card is clickable through one real link on the
 * title (no clickable divs). On entry the image unmasks; on hover the card lifts,
 * the image zooms slowly, the title underlines and the button arrow nudges forward.
 * Nothing essential depends on hover.
 */
export function ProjectCard({ project, index, headingLevel: Heading = 'h3', className = '' }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  // A very small tilt that follows the pointer, mouse only and only with motion allowed.
  const tilt = (event: PointerEvent<HTMLElement>) => {
    const card = cardRef.current
    if (!card || event.pointerType !== 'mouse' || !document.documentElement.classList.contains('motion')) return
    const rect = card.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    card.style.setProperty('--tilt-x', `${(-y * 2.5).toFixed(2)}deg`)
    card.style.setProperty('--tilt-y', `${(x * 2.5).toFixed(2)}deg`)
  }
  const settle = () => {
    cardRef.current?.style.setProperty('--tilt-x', '0deg')
    cardRef.current?.style.setProperty('--tilt-y', '0deg')
  }
  return (
    <article
      ref={cardRef}
      onPointerMove={tilt}
      onPointerLeave={settle}
      style={
        {
          transform: 'perspective(1100px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
          '--card-accent': project.accent ?? 'var(--color-ink)',
        } as CSSProperties
      }
      className={`group relative flex h-full flex-col rounded-[1.25rem] border border-line bg-surface/40 p-3 transition-[translate,transform,box-shadow,border-color,background-color] duration-(--duration-ui) ease-(--ease-out) hover:border-line-strong hover:bg-surface/70 hover:shadow-[0_28px_50px_-30px_rgba(22,21,19,0.45)] motion-safe:hover:-translate-y-1 ${className}`}
    >
      <Reveal variant="media" className="overflow-hidden rounded-lg">
        <div className="reveal-zoom">
          <Media
            asset={{ ...project.thumbnail, aspect: project.thumbnail.aspect ?? '4 / 3' }}
            priority={index === 0}
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            imgClassName="transition-[scale] duration-(--duration-large) ease-(--ease-out) motion-safe:group-hover:scale-[1.04]"
          />
        </div>
      </Reveal>

      <div className="flex flex-1 flex-col px-3 pt-6 pb-3">
        <p className="flex items-center justify-between gap-3">
          <span className="card-badge inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
            {project.role}
          </span>
          <span className="flex items-center gap-2">
            <SampleTag show={project.sample === true} />
            <span aria-hidden="true" className="font-mono text-xs text-ink-subtle">
              {String(index + 1).padStart(2, '0')}
            </span>
          </span>
        </p>

        <Heading className="mt-4 font-display text-[1.75rem] leading-tight text-balance">
          <Link to={`/work/${project.slug}`} className="after:absolute after:inset-0 after:rounded-[1.25rem] after:content-[''] focus-visible:outline-none">
            <span className="title-sweep">{project.title}</span>
          </Link>
        </Heading>

        <p className={`mt-2 text-[0.9375rem] ${project.summary ? 'text-ink-muted' : 'text-ink-subtle'}`}>
          {project.summary || 'Description coming soon.'}
        </p>

        <div aria-hidden="true" className="mt-auto pt-6">
          <span className="btn-primary group-hover:bg-ink/85">
            View project
            <ArrowRight className="size-4 transition-transform duration-(--duration-micro) ease-(--ease-out) group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1.5 hidden rounded-[1.5rem] ring-2 ring-accent group-has-[a:focus-visible]:block"
      />
    </article>
  )
}
