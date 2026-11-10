import { useRef, type CSSProperties } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, Lock } from 'lucide-react'
import { getProject, publishedProjects } from '../content/projects'
import { CaseStudySection } from '../components/CaseStudySection'
import { ContactSection } from '../components/ContactSection'
import { Media } from '../components/Media'
import { ProjectMeta } from '../components/ProjectMeta'
import { ReadingProgress } from '../components/ReadingProgress'
import { Reveal } from '../components/Reveal'
import { SampleTag } from '../components/SampleTag'
import { SplitHeading } from '../components/SplitHeading'
import { scrollToId } from '../lib/scroll'
import { useActiveSection } from '../lib/useActiveSection'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  useDocumentMeta(project?.title ?? 'Project not found', project?.summary)
  const activeSection = useActiveSection(project?.sections.map((section) => section.id) ?? [])
  const storyRef = useRef<HTMLDivElement>(null)

  if (!project) return <NotFound />

  const position = publishedProjects.indexOf(project)
  const next = publishedProjects.length > 1 ? publishedProjects[(position + 1) % publishedProjects.length] : null
  const delay = (ms: number) => ({ '--load-delay': `${ms}ms` }) as CSSProperties
  const number = (index: number) => String(index + 1).padStart(2, '0')
  const subtitle = [project.client, project.type].filter(Boolean).join(' · ')

  return (
    <article>
      <ReadingProgress target={storyRef} />
      <header className="container-page pt-6 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 text-sm text-ink-muted">
              <li>
                <Link to="/" className="inline-flex min-h-11 items-center transition-colors hover:text-ink">
                  Portfolio
                </Link>
              </li>
              <li aria-hidden="true" className="text-line-strong">
                /
              </li>
              <li>
                <Link to="/" state={{ scrollTo: 'work' }} className="inline-flex min-h-11 items-center transition-colors hover:text-ink">
                  Selected work
                </Link>
              </li>
              <li aria-hidden="true" className="text-line-strong">
                /
              </li>
              <li aria-current="page" className="text-ink">
                {project.title}
              </li>
            </ol>
          </nav>
          {publishedProjects.length > 1 && (
            <nav aria-label="Projects" className="flex items-center gap-1.5">
              <span className="mr-2 text-sm text-ink-subtle tabular-nums">
                Project {number(position)} of {String(publishedProjects.length).padStart(2, '0')}
              </span>
              {publishedProjects.map((item, i) => {
                const current = item.slug === project.slug
                return (
                  <Link
                    key={item.slug}
                    to={`/work/${item.slug}`}
                    aria-label={item.title}
                    aria-current={current ? 'page' : undefined}
                    className={`inline-flex size-10 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-(--duration-micro) ${
                      current ? 'border-ink bg-ink text-paper' : 'border-line-strong text-ink-muted hover:border-ink hover:text-ink'
                    }`}
                  >
                    {number(i)}
                  </Link>
                )
              })}
            </nav>
          )}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 load-in">
          <p className="eyebrow">{subtitle || `Case study ${number(position)}`}</p>
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{project.role}</span>
          <SampleTag show={project.sample === true} />
        </div>
        <SplitHeading text={project.title} delay={100} className="mt-5 max-w-[20ch] font-display text-title text-balance" />
        <p className={`mt-6 max-w-prose text-lede load-in ${project.summary ? 'text-ink-muted' : 'text-ink-subtle italic'}`} style={delay(380)}>
          {project.summary || 'Description coming soon.'}
        </p>
        <div className="mt-12 load-in" style={delay(500)}>
          <ProjectMeta project={project} />
        </div>
        <nav aria-label="Sections" className="-mx-gutter mt-6 overflow-x-auto px-gutter [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
          <ul className="flex gap-2 pb-1">
            {project.sections.map((section) => (
              <li key={section.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => scrollToId(section.id)}
                  className="min-h-10 rounded-full border border-line-strong px-4 text-sm text-ink-muted transition-colors hover:border-ink hover:text-ink"
                >
                  {section.label ?? section.heading}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Reveal variant="media" className="container-page mt-10" delay={250}>
        <Media
          asset={project.hero}
          priority
          parallax="zoom"
          sizes="(min-width: 1024px) 75vw, 100vw"
          hint={`public/images/projects/${project.slug}/hero.webp`}
        />
      </Reveal>

      <div ref={storyRef} className="container-page mt-section grid gap-12 lg:grid-cols-[11rem_minmax(0,1fr)] xl:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-10">
            <p className="font-mono text-xs text-ink-subtle">{number(position)}</p>
            <p className="mt-1 font-display text-xl leading-tight">{project.title}</p>
            <p className="eyebrow mt-8 mb-4">On this page</p>
            <ul className="space-y-1 text-sm">
              {project.sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(section.id)}
                    aria-current={activeSection === section.id ? 'location' : undefined}
                    className={`group flex min-h-9 items-center gap-2 py-1 text-left transition-colors duration-(--duration-micro) ${
                      activeSection === section.id ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-px transition-all duration-(--duration-ui) ease-out ${
                        activeSection === section.id ? 'w-4 bg-accent' : 'w-0 bg-line-strong group-hover:w-2'
                      }`}
                    />
                    {section.label ?? section.heading}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="min-w-0 space-y-20 lg:space-y-28">
          {project.confidentiality && (
            <Reveal
              as="aside"
              aria-label="Confidentiality"
              className="flex max-w-prose gap-4 rounded-lg border border-line bg-surface/60 p-5 text-[0.9375rem] text-ink-muted"
            >
              <Lock aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <p>{project.confidentiality}</p>
            </Reveal>
          )}
          {project.sections.map((section, index) => (
            <CaseStudySection key={section.id} section={section} index={index} slug={project.slug} />
          ))}
        </div>
      </div>

      {next && (
        <nav aria-label="Next project" className="container-page mt-section">
          <Link
            to={`/work/${next.slug}`}
            className="group rule-draw rule-draw-top grid gap-8 border-b border-line py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:items-center lg:py-14"
          >
            <Reveal as="span" variant="stagger" className="block">
              <span className="eyebrow flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-px w-3 bg-line-strong transition-all duration-(--duration-ui) ease-out group-hover:w-8 group-hover:bg-accent"
                />
                Next project
              </span>
              <span className="mt-4 block font-display text-title text-balance">
                <span className="title-sweep">{next.title}</span>
              </span>
              <span className="mt-6 inline-flex items-center gap-3 text-sm font-medium">
                Read next
                <span className="inline-flex size-9 items-center justify-center rounded-full border border-line-strong transition-colors duration-(--duration-micro) group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </span>
            </Reveal>
            <span aria-hidden="true" className="hidden overflow-hidden rounded-lg md:block">
              <Media
                asset={next.thumbnail}
                sizes="22rem"
                className="transition-[border-color] duration-(--duration-ui) group-hover:border-ink-subtle"
                imgClassName="transition-[scale] duration-(--duration-large) ease-out motion-safe:group-hover:scale-[1.05]"
              />
            </span>
          </Link>
        </nav>
      )}

      <div className="container-page mt-10">
        <Link to="/" state={{ scrollTo: 'work' }} className="btn-secondary">
          <ArrowLeft aria-hidden="true" className="size-4" /> Back to Selected work
        </Link>
      </div>

      <ContactSection className="pt-section" />
    </article>
  )
}
