import { publishedProjects } from '../content/projects'
import { ContactSection } from '../components/ContactSection'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export function Home() {
  useDocumentMeta(null)
  const featured = publishedProjects.filter((project) => project.featured)
  const work = featured.length ? featured : publishedProjects

  return (
    <>
      <Hero />

      <section id="work" aria-labelledby="work-heading" className="relative container-page scroll-mt-20 py-section pt-0 lg:pt-6">
        <SectionHeader
          id="work-heading"
          eyebrow="Selected work"
          title="Case studies"
          aside={<p className="text-sm text-ink-subtle tabular-nums">{String(work.length).padStart(2, '0')} projects</p>}
        />
        {work.length ? (
          <ul className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {work.map((project, i) => (
              <li key={project.slug}>
                <ProjectCard project={project} index={i} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-ink-muted">Case studies are on their way.</p>
        )}
      </section>

      <ContactSection />
    </>
  )
}
