import { ArrowRight } from 'lucide-react'
import type { CaseStudySection as Section, DesignItem } from '../content/types'
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

/** Stacked design items: text and supporting points above a full-width image. */
function StackedItems({ items, hintBase }: { items: DesignItem[]; hintBase: string }) {
  return (
    <ol className="space-y-16 lg:space-y-20">
      {items.map((item, i) => (
        <li key={i}>
          {(item.title || item.rationale || (item.points && item.points.length > 0)) && (
            <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10">
              {/* Without points, the text spans the full width of the image below it. */}
              <div className={item.points && item.points.length > 0 ? undefined : 'md:col-span-2'}>
                {item.title && (
                  <h3 className="text-xl font-medium">
                    <span aria-hidden="true" className="mr-3 font-mono text-xs text-ink-subtle">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.title}
                  </h3>
                )}
                {item.rationale && <p className={item.title ? 'mt-3 text-ink-muted' : 'text-ink-muted'}>{item.rationale}</p>}
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
          )}
          {item.media && (
            <div className={item.title || item.rationale || item.points?.length ? 'mt-8' : undefined}>
              <ImageGallery images={[item.media]} layout="stack" hintBase={`${hintBase}-${i + 1}`} />
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

/** A bar of equal month segments with the timeline's own period highlighted. */
function PeriodBar({ from, to, total, period }: { from: number; to: number; total: number; period: string }) {
  return (
    <div>
      <div aria-hidden="true" className="flex gap-1">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full ${i + 1 >= from && i + 1 <= to ? 'bg-accent' : 'bg-line'}`} />
        ))}
      </div>
      <p className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 text-sm text-ink-muted">
        <span>
          <span className="sr-only">Time period: </span>
          {period}
        </span>
        <span className="text-ink-subtle">Part of about {total} months of work shown</span>
      </p>
    </div>
  )
}

/** One case-study section. The layout adapts to the kind of content. */
export function CaseStudySection({ section, index, slug }: CaseStudySectionProps) {
  const headingId = `${section.id}-heading`
  const assetFolder = `images/projects/${slug}`

  return (
    <section id={section.id} aria-labelledby={headingId} className="scroll-mt-24">
      <Reveal variant="stagger" className="rule-draw rule-draw-top pt-8 lg:pt-10">
        <p className="eyebrow flex gap-3">
          {section.kind === 'timeline' ? (
            <span>Timeline {section.number}</span>
          ) : (
            <>
              <span aria-hidden="true" className="font-mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              {section.label}
            </>
          )}
        </p>
        <h2 id={headingId} className="mt-4 font-display text-heading">
          {section.heading}
        </h2>
      </Reveal>

      <Reveal delay={160} className="mt-8 space-y-8 lg:mt-10">
        {section.kind === 'text' && (
          <>
            <div className="space-y-5 text-ink-muted [&>p:first-child]:text-lede [&>p:first-child]:text-ink">
              {section.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {section.media && <ImageGallery images={[section.media]} layout="stack" hintBase={`${assetFolder}/${section.id}`} />}
          </>
        )}

        {section.kind === 'list' && (
          <div className="space-y-6">
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
                      {item.list && (
                        <ol className="mt-3 space-y-1.5 text-ink">
                          {item.list.map((entry, j) => (
                            <li key={j} className="flex gap-3">
                              <span aria-hidden="true" className="font-mono text-xs text-ink-subtle">
                                {j + 1}.
                              </span>
                              {entry}
                            </li>
                          ))}
                        </ol>
                      )}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {section.kind === 'insights' && (
          <>
            <div>
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
            <div>
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
            <div>
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
            <div>
              <Intro text={section.intro} />
            </div>
            {section.layout === 'stacked' ? (
              <StackedItems items={section.items} hintBase={`${assetFolder}/${section.id}`} />
            ) : (
            <ol className="space-y-12">
              {section.items.map((item, i) => (
                <li key={i} className={item.media ? 'grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10' : undefined}>
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

        {section.kind === 'timeline' && (
          <>
            <PeriodBar from={section.span.from} to={section.span.to} total={section.totalMonths} period={section.period} />
            <div className="space-y-5 text-ink-muted [&>p:first-child]:text-lede [&>p:first-child]:text-ink">
              {section.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-16 pt-8 lg:space-y-20 lg:pt-10">
              {section.groups.map((group, g) => (
                <div key={group.title} className={g > 0 ? 'border-t border-line pt-16 lg:pt-20' : undefined}>
                  <div>
                    <h3 className="font-display text-heading">{group.title}</h3>
                    {group.subtitle && <p className="mt-4 text-lede text-ink">{group.subtitle}</p>}
                    {group.intro && <p className="mt-3 text-ink-muted">{group.intro}</p>}
                  </div>
                  <div className="mt-10">
                    <StackedItems items={group.items} hintBase={`${assetFolder}/${section.id}-${g + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {section.kind === 'gallery' && (
          <>
            {section.intro && (
              <div>
                <Intro text={section.intro} />
              </div>
            )}
            <ImageGallery images={section.images} layout={section.layout} hintBase={`${assetFolder}/${section.id}`} />
          </>
        )}

        {section.kind === 'outcomes' && (
          <>
            <div>
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
