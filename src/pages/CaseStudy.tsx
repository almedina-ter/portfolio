import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, Lock } from 'lucide-react'
import { getProject, publishedProjects } from '../content/projects'
import { CaseStudySection } from '../components/CaseStudySection'
import { ContactSection } from '../components/ContactSection'
import { Media } from '../components/Media'
import { ProjectMeta } from '../components/ProjectMeta'
import { SampleTag } from '../components/SampleTag'
import { scrollToId } from '../lib/scroll'
import { useActiveSection } from '../lib/useActiveSection'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  useDocumentMeta(project?.title ?? 'Project not found', project?.summary)
  const activeSection = useActiveSection(project?.sections.map((section) => section.id) ?? [])

  if (!project) return <NotFound />

  const position = publishedProjects.indexOf(project)
  const next = publishedProjects.length > 1 ? publishedProjects[(position + 1) % publishedProjects.length] : null

  return (
    <article>
      <header className="container-page pt-10 lg:pt-16">
        <Link to="/" className="inline-flex min-h-11 items-center gap-2 text-sm text-ink-muted hover:text-ink">
          <ArrowLeft aria-hidden="true" className="size-4" /> All work
        </Link>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <p className="eyebrow">
            {project.client} · {project.type}
          </p>
          <SampleTag show={project.sample} />
        </div>
        <h1 className="mt-5 max-w-[20ch] font-display text-title text-balance">{project.title}</h1>
        <p className="mt-6 max-w-prose text-lede text-ink-muted">{project.summary}</p>
        <div className="mt-12">
          <ProjectMeta project={project} />
        </div>
      </header>

      <div className="container-page mt-10">
        <Media
          asset={project.hero}
          priority
          sizes="(min-width: 1024px) 75vw, 100vw"
          hint={`public/images/projects/${project.slug}/hero.webp`}
        />
      </div>

      <div className="container-page mt-section grid gap-12 lg:grid-cols-[11rem_minmax(0,1fr)] xl:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-10">
            <p className="eyebrow mb-4">On this page</p>
            <ul className="space-y-1 text-sm">
              {project.sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(section.id)}
                    aria-current={activeSection === section.id ? 'location' : undefined}
                    className={`flex min-h-9 items-center gap-2 py-1 text-left transition-colors ${
                      activeSection === section.id ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-px transition-all duration-300 ${activeSection === section.id ? 'w-4 bg-ink' : 'w-0 bg-transparent'}`}
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
            <aside
              aria-label="Confidentiality"
              className="flex max-w-prose gap-4 rounded-lg border border-line bg-surface/60 p-5 text-[0.9375rem] text-ink-muted"
            >
              <Lock aria-hidden="true" className="mt-1 size-4 shrink-0" />
              <p>{project.confidentiality}</p>
            </aside>
          )}
          {project.sections.map((section, index) => (
            <CaseStudySection key={section.id} section={section} index={index} slug={project.slug} />
          ))}
        </div>
      </div>

      {next && (
        <nav aria-label="Next case study" className="container-page mt-section">
          <Link
            to={`/work/${next.slug}`}
            className="group grid gap-6 border-y border-line py-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
          >
            <span>
              <span className="eyebrow block">Next case study</span>
              <span className="mt-4 block font-display text-heading text-balance group-hover:underline group-hover:decoration-1 group-hover:underline-offset-8">
                {next.title}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              Read next <ArrowRight aria-hidden="true" className="size-4 transition-transform motion-safe:group-hover:translate-x-1" />
            </span>
          </Link>
        </nav>
      )}

      <ContactSection />
    </article>
  )
}
