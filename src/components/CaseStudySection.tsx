import type { CaseStudySection as Section } from '../content/types'
import { ImageGallery } from './ImageGallery'
import { Media } from './Media'

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
    <section id={section.id} aria-labelledby={headingId} className="scroll-mt-24 border-t border-line pt-10 lg:pt-14">
      <p className="eyebrow flex gap-3">
        <span aria-hidden="true" className="font-mono">
          {String(index + 1).padStart(2, '0')}
        </span>
        {section.label}
      </p>
      <h2 id={headingId} className="mt-4 max-w-[24ch] font-display text-heading text-balance">
        {section.heading}
      </h2>

      <div className="mt-8 space-y-8">
        {section.kind === 'text' && (
          <div className="max-w-prose space-y-5 text-ink-muted [&>p:first-child]:text-lede [&>p:first-child]:text-ink">
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}

        {section.kind === 'list' && (
          <div className="max-w-prose space-y-6">
            <Intro text={section.intro} />
            <ul className="divide-y divide-line border-y border-line">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-4 py-4">
                  <span aria-hidden="true" className="mt-1 font-mono text-xs text-ink-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
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
            <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item, i) => (
                <li key={i} className="bg-paper p-6">
                  <p aria-hidden="true" className="font-mono text-xs text-ink-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-6 text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] text-ink-muted">{item.detail}</p>
                </li>
              ))}
            </ol>
          </>
        )}

        {section.kind === 'decisions' && (
          <>
            <div className="max-w-prose">
              <Intro text={section.intro} />
            </div>
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
                  </div>
                  {item.media && (
                    <Media
                      asset={item.media}
                      sizes="(min-width: 768px) 45vw, 100vw"
                      hint={`public/${assetFolder}/decision-${i + 1}.webp`}
                    />
                  )}
                </li>
              ))}
            </ol>
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
            <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item, i) => (
                <li key={i} className="border-t-2 border-ink pt-5">
                  {item.value && <p className="font-display text-[2.75rem] leading-none">{item.value}</p>}
                  <p className={`${item.value ? 'mt-3' : ''} text-ink-muted`}>{item.detail}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
