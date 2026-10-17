import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { about, experience } from '../content/about'
import { publishedProjects } from '../content/projects'
import { site } from '../content/site'
import { Capabilities } from '../components/Capabilities'
import { ContactSection } from '../components/ContactSection'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { Hero } from '../components/Hero'
import { Media } from '../components/Media'
import { ProjectCard } from '../components/ProjectCard'
import { SampleTag } from '../components/SampleTag'
import { SectionHeader } from '../components/SectionHeader'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export function Home() {
  useDocumentMeta(null)
  const featured = publishedProjects.filter((project) => project.featured)
  const work = featured.length ? featured : publishedProjects
  const [lead, ...rest] = work

  return (
    <>
      <Hero />

      <section id="work" aria-labelledby="work-heading" className="container-page scroll-mt-20 py-section pt-0">
        <SectionHeader
          id="work-heading"
          eyebrow="Selected work"
          title="Case studies"
          aside={<p className="text-sm text-ink-subtle tabular-nums">{String(work.length).padStart(2, '0')} projects</p>}
        />
        {lead ? (
          <div className="space-y-16 lg:space-y-24">
            <ProjectCard project={lead} index={0} size="large" />
            {rest.length > 0 && (
              <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
                {rest.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} index={i + 1} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-ink-muted">Case studies are on their way.</p>
        )}
      </section>

      <section aria-labelledby="about-preview-heading" className="container-page py-section pt-0">
        <SectionHeader id="about-preview-heading" eyebrow="About" title={about.heading} aside={<SampleTag show={about.sample} />} />
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <Media asset={site.portrait} sizes="(min-width: 768px) 30vw, 100vw" className="max-w-sm" hint="public/images/portrait.webp" />
          <div>
            <p className="text-lede">{about.preview}</p>
            <Link to="/about" className="btn-secondary mt-8">
              More about me <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="experience-heading" className="container-page py-section pt-0">
        <SectionHeader id="experience-heading" eyebrow="Experience" title="Where I&rsquo;ve worked" />
        <ExperienceTimeline entries={experience} />
        <div className="mt-section">
          <SectionHeader id="capabilities-heading" eyebrow="Skills" title="Capabilities" />
          <Capabilities capabilities={about.capabilities} />
        </div>
      </section>

      <ContactSection />
    </>
  )
}
