import { about, experience } from '../content/about'
import { site } from '../content/site'
import { Capabilities } from '../components/Capabilities'
import { ResumeLink } from '../components/ContactLinks'
import { ContactSection } from '../components/ContactSection'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { Media } from '../components/Media'
import { Reveal } from '../components/Reveal'
import { SampleTag } from '../components/SampleTag'
import { SplitHeading } from '../components/SplitHeading'
import { SectionHeader } from '../components/SectionHeader'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export function About() {
  useDocumentMeta('About', `About ${site.name}: background, experience and capabilities as a ${site.role.toLowerCase()}.`)

  return (
    <>
      <header className="container-page pt-14 pb-16 lg:pt-24">
        <div className="flex flex-wrap items-center gap-3 load-in">
          <p className="eyebrow">About</p>
          <SampleTag show={about.sample} />
        </div>
        <SplitHeading text={about.heading} className="mt-6 max-w-[20ch] font-display text-title text-balance" />
      </header>

      <section
        aria-label="Biography"
        className="container-page grid gap-10 pb-section md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16"
      >
        <Reveal variant="media" delay={300} className="max-w-sm overflow-hidden rounded-lg">
          <div className="reveal-zoom">
            <Media
              asset={site.portrait}
              priority
              parallax="shift"
              sizes="(min-width: 768px) 30vw, 100vw"
              hint="public/images/portrait.webp"
            />
          </div>
        </Reveal>
        <Reveal delay={450} className="max-w-prose space-y-5 text-ink-muted [&>p:first-child]:text-lede [&>p:first-child]:text-ink">
          {about.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="pt-4">
            <ResumeLink className="btn-primary">Download resume</ResumeLink>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="principles-heading" className="container-page pb-section">
        <SectionHeader id="principles-heading" eyebrow="Approach" title="How I work" />
        <Reveal as="ol" variant="stagger" className="grid gap-10 md:grid-cols-3">
          {about.principles.map((principle, i) => (
            <li key={principle.title}>
              <p aria-hidden="true" className="font-mono text-xs text-ink-subtle">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 text-xl font-medium">{principle.title}</h3>
              <p className="mt-3 text-ink-muted">{principle.detail}</p>
            </li>
          ))}
        </Reveal>
      </section>

      <section aria-labelledby="about-experience-heading" className="container-page pb-section">
        <SectionHeader id="about-experience-heading" eyebrow="Experience" title="Where I&rsquo;ve worked" />
        <ExperienceTimeline entries={experience} />
      </section>

      <section aria-labelledby="capabilities-heading" className="container-page pb-section">
        <SectionHeader id="capabilities-heading" eyebrow="Skills" title="Capabilities" />
        <Capabilities capabilities={about.capabilities} />
        <Reveal variant="stagger" className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="border-b border-line pb-3 font-medium">Tools</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.tools.map((tool, i) => (
                <li key={`${tool}-${i}`} className="rounded-full border border-line-strong px-3 py-1 text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="border-b border-line pb-3 font-medium">Education</h3>
            <ul className="mt-4 space-y-3">
              {about.education.map((item) => (
                <li key={item.title}>
                  <p>{item.title}</p>
                  <p className="text-sm text-ink-subtle">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <ContactSection />
    </>
  )
}
