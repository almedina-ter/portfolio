import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../content/types'
import { Media } from './Media'
import { SampleTag } from './SampleTag'

interface ProjectCardProps {
  project: Project
  index: number
  size?: 'large' | 'default'
  headingLevel?: 'h2' | 'h3'
}

/** The whole card is clickable through one real link on the title (no clickable divs). */
export function ProjectCard({ project, index, size = 'default', headingLevel: Heading = 'h3' }: ProjectCardProps) {
  const large = size === 'large'
  return (
    <article className="group relative">
      <div className="overflow-hidden rounded-lg">
        <Media
          asset={large ? { ...project.thumbnail, aspect: project.thumbnail.aspect ?? '16 / 9' } : project.thumbnail}
          priority={index === 0}
          sizes={large ? '(min-width: 1024px) 70vw, 100vw' : '(min-width: 768px) 40vw, 100vw'}
          imgClassName="transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
        />
      </div>
      <div className={`mt-5 grid gap-x-10 gap-y-3 ${large ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]' : ''}`}>
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-subtle">
            <span aria-hidden="true" className="font-mono text-xs">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{project.client}</span>
            <SampleTag show={project.sample} />
          </p>
          <Heading className={`mt-2 font-display text-balance ${large ? 'text-heading' : 'text-[1.75rem] leading-tight'}`}>
            <Link
              to={`/work/${project.slug}`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none group-has-[a:focus-visible]:underline"
            >
              {project.title}
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
            <ArrowRight className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
          </p>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 hidden rounded-xl ring-2 ring-accent group-has-[a:focus-visible]:block"
      />
    </article>
  )
}
