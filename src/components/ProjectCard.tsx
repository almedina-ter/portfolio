import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../content/types'
import { Media } from './Media'
import { Reveal } from './Reveal'
import { SampleTag } from './SampleTag'

interface ProjectCardProps {
  project: Project
  index: number
  size?: 'large' | 'default'
  headingLevel?: 'h2' | 'h3'
  className?: string
}

/**
 * The whole card is clickable through one real link on the title (no clickable divs).
 * On entry the image unmasks and settles; on desktop it drifts gently inside its
 * frame while scrolling. Hover adds a slow zoom, a title underline and a nudge of
 * the index line and arrow. Nothing essential depends on hover.
 */
export function ProjectCard({ project, index, size = 'default', headingLevel: Heading = 'h3', className = '' }: ProjectCardProps) {
  const large = size === 'large'
  return (
    <article className={`group relative ${className}`}>
      <Reveal variant="media" className="overflow-hidden rounded-lg">
        <div className="reveal-zoom">
          <Media
            asset={large ? { ...project.thumbnail, aspect: project.thumbnail.aspect ?? '16 / 9' } : project.thumbnail}
            priority={index === 0}
            parallax="shift"
            sizes={large ? '(min-width: 1024px) 70vw, 100vw' : '(min-width: 768px) 40vw, 100vw'}
            className="transition-[border-color] duration-(--duration-ui) group-hover:border-ink-subtle"
            imgClassName="transition-[scale] duration-(--duration-large) ease-(--ease-out) motion-safe:group-hover:scale-[1.04]"
          />
        </div>
      </Reveal>
      <Reveal
        variant="stagger"
        delay={120}
        className={`mt-5 grid gap-x-10 gap-y-3 ${large ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]' : ''}`}
      >
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-subtle">
            <span aria-hidden="true" className="flex items-center gap-2 font-mono text-xs">
              <span className="h-px w-3 bg-line-strong transition-all duration-(--duration-ui) ease-(--ease-out) group-hover:w-6 group-hover:bg-accent" />
              <span className="transition-colors duration-(--duration-ui) group-hover:text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
            </span>
            <span>{project.client}</span>
            <SampleTag show={project.sample} />
          </p>
          <Heading className={`mt-2 font-display text-balance ${large ? 'text-heading' : 'text-[1.75rem] leading-tight'}`}>
            <Link to={`/work/${project.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
              <span className="title-sweep">{project.title}</span>
            </Link>
          </Heading>
        </div>
        <div>
          <p className="text-ink-muted">{project.summary}</p>
          <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <div className="flex gap-2">
              <dt className="sr-only">Type</dt>
              <dd>{project.type}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="sr-only">Year</dt>
              <dd className="text-ink-subtle">{project.year}</dd>
            </div>
          </dl>
          <p aria-hidden="true" className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
            Read case study
            <span className="inline-flex size-7 items-center justify-center rounded-full border border-line-strong transition-colors duration-(--duration-micro) group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
              <ArrowRight className="size-3.5" />
            </span>
          </p>
        </div>
      </Reveal>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 hidden rounded-xl ring-2 ring-accent group-has-[a:focus-visible]:block"
      />
    </article>
  )
}
