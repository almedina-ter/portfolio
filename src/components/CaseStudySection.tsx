import { ArrowRight } from 'lucide-react'
import type { CaseStudySection as Section } from '../content/types'
import { ImageGallery } from './ImageGallery'
import { Media } from './Media'
import { Reveal } from './Reveal'

interface CaseStudySectionProps {
  section: Section
  index: number
  slug: string
}

function Intro({ text }: { text?: string }) {
  return text ? <p className="text-lede text-ink-muted">{text}</p> : null
}

/** One case-study section. The layout adapts to the kind of content. */
export function CaseStudySection({ section, index, slug }: CaseStudySectionProps) {
  const headingId = `${section.id}-heading`
  const assetFolder = `images/projects/${slug}`

  return (
    <section id={section.id} aria-labelledby={headingId} className="scroll-mt-24">
      <Reveal variant="stagger" className="rule-draw rule-draw-top pt-8 lg:pt-10">
        <p className="eyebrow flex gap-3">
          <span aria-hidden="true" className="font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
          {section.label}
        </p>
        <h2 id={headingId} className="mt-4 max-w-[24ch] font-display text-heading text-balance">
          {section.heading}
        </h2>
      </Reveal>

      <Reveal delay={160} className="mt-8 space-y-8 lg:mt-10">
        {section.kind === 'text' && (
          <>
            <div className="max-w-prose space-y-5 text-ink-muted [&>p:first-child]:text-lede [&>p:first-child]:text-ink">
              {section.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {section.media && <ImageGallery images={[section.media]} layout="stack" hintBase={`${assetFolder}/${section.id}`} />}
          </>
        )}

        {section.kind === 'list' && (
          <div className="max-w-prose space-y-6">
            {section.body?.length ? (
              <div className="space-y-5 text-ink-muted [&>p:first-child]:text-lede [&>p:first-child]:text-ink">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {section.body?.length ? section.intro && <p className="font-medium">{section.intro}</p> : <Intro text={section.intro} />}
            <ul className="divide-y divide-line">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <span aria-hidden="true" className="mt-1 font-mono text-xs text-ink-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {typeof item === 'string' ? (
                    <span>{item}</span>
                  ) : (
                    <span className="text-ink-muted">
                      <strong className="font-medium text-ink">{item.title}:</strong> {item.detail}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {section.kind === 'insights' && (
          <>
            <div className="max-w-prose">
              <Intro text={section.intro} />
            </div>
            <Reveal
              as="ol"
              variant="stagger"
              className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 xl:grid-cols-3"
            >
              {section.items.map((item, i) => (
                <li key={i} className="bg-paper p-6">
                  <p aria-hidden="true" className="font-mono text-xs text-ink-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-6 text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] text-ink-muted">{item.detail}</p>
                </li>
              ))}
            </Reveal>
          </>
        )}

        {section.kind === 'challenges' && (
          <>
            <div className="max-w-prose">
              <Intro text={section.intro} />
            </div>
            <Reveal as="ol" variant="stagger" className="divide-y divide-line">
              {section.items.map((item, i) => (
                <li key={i} className="grid gap-4 py-6 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-8">
                  <div>
                    <p className="eyebrow">
                      <span aria-hidden="true" className="mr-3 font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      Challenge
                    </p>
                    <p className="mt-2 text-lg">{item.challenge}</p>
                  </div>
                  <ArrowRight aria-hidden="true" className="hidden size-5 text-accent md:mt-7 md:block" />
                  <div className="rounded-lg bg-surface/60 p-4 md:-my-1">
                    <p className="eyebrow">Opportunity</p>
                    <p className="mt-2 text-lg text-ink-muted">{item.opportunity}</p>
                  </div>
                </li>
              ))}
            </Reveal>
          </>
        )}

        {section.kind === 'process' && (
          <>
            <div className="max-w-prose">
              <Intro text={section.intro} />
            </div>
            {/* Steps with images run as full-width rows so sketches and wireframes stay large; text-only steps sit in columns. */}
            <Reveal
              as="ol"
              variant="stagger"
              className={section.steps.some((step) => step.media) ? 'space-y-12' : 'grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3'}
            >
              {section.steps.map((step, i) => (
                <li
                  key={i}
                  className={step.media ? 'grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10' : ''}
                >
                  <div>
                    <p className="font-mono text-xs text-ink-subtle">Step {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
                    <p className="mt-2 text-ink-muted">{step.detail}</p>
                  </div>
                  {step.media && (
                    <Reveal variant="media" className="overflow-hidden rounded-lg">
                      <div className="reveal-zoom">
                        <Media asset={step.media} sizes="(min-width: 768px) 45vw, 100vw" hint={`public/${assetFolder}/process-${i + 1}.webp`} />
                      </div>
                    </Reveal>
                  )}
                </li>
              ))}
            </Reveal>
          </>
        )}

        {section.kind === 'decisions' && (
          <>
            <div className="max-w-prose">
              <Intro text={section.intro} />
            </div>
            {section.layout === 'stacked' ? (
              <ol className="space-y-16 lg:space-y-20">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10">
                      <div>
                        <h3 className="text-xl font-medium">
                          <span aria-hidden="true" className="mr-3 font-mono text-xs text-ink-subtle">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {item.title}
                        </h3>
                        <p className="mt-3 text-ink-muted">{item.rationale}</p>
                      </div>
                      {item.points && item.points.length > 0 && (
                        <ul className="divide-y divide-line text-[0.9375rem] text-ink-muted">
                          {item.points.map((point, j) => (
                            <li key={j} className="flex gap-3 py-2.5 first:pt-0 last:pb-0">
                              <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {item.media && (
                      <div className="mt-8">
                        <ImageGallery images={[item.media]} layout="stack" hintBase={`${assetFolder}/${section.id}-${i + 1}`} />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            ) : (
            <ol className="space-y-12">
              {section.items.map((item, i) => (
                <li key={i} className={item.media ? 'grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10' : 'max-w-prose'}>
                  <div>
                    <h3 className="text-xl font-medium">
                      <span aria-hidden="true" className="mr-3 font-mono text-xs text-ink-subtle">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-ink-muted">{item.rationale}</p>
                    {item.points && item.points.length > 0 && (
                      <ul className="mt-4 space-y-2 text-[0.9375rem] text-ink-muted">
                        {item.points.map((point, j) => (
                          <li key={j} className="flex gap-3">
                            <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {item.media && (
                    <Reveal variant="media" className="overflow-hidden rounded-lg">
                      <div className="reveal-zoom">
                        <Media
                          asset={item.media}
                          sizes="(min-width: 768px) 45vw, 100vw"
                          hint={`public/${assetFolder}/${section.id}-${i + 1}.webp`}
                        />
                      </div>
                    </Reveal>
                  )}
                </li>
              ))}
            </ol>
            )}
          </>
        )}

        {section.kind === 'gallery' && (
          <>
            {section.intro && (
              <div className="max-w-prose">
                <Intro text={section.intro} />
              </div>
            )}
            <ImageGallery images={section.images} layout={section.layout} hintBase={`${assetFolder}/${section.id}`} />
          </>
        )}

        {section.kind === 'outcomes' && (
          <>
            <div className="max-w-prose">
              <Intro text={section.intro} />
            </div>
            <Reveal as="ul" variant="stagger" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item, i) => (
                <li key={i}>
                  {item.value && <p className="font-display text-[2.75rem] leading-none">{item.value}</p>}
                  <p className={`${item.value ? 'mt-3' : 'sm:pt-14'} text-ink-muted`}>{item.detail}</p>
                </li>
              ))}
            </Reveal>
          </>
        )}
      </Reveal>
    </section>
  )
}
