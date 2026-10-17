import { Link } from 'react-router'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { about } from '../content/about'
import { site } from '../content/site'
import { scrollToId } from '../lib/scroll'
import { Emphasis } from './RichText'
import { Availability } from './SiteNav'

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="container-page pt-14 pb-16 sm:pt-20 lg:pt-28 lg:pb-24">
      <p className="eyebrow">
        {site.role}
        {site.location ? ` · ${site.location}` : ''}
      </p>
      <h1 id="hero-heading" className="mt-6 max-w-[16ch] font-display text-display text-balance">
        <Emphasis text={site.headline} />
      </h1>
      <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-prose">
          <p className="text-lede text-ink-muted">{site.intro}</p>
          <Availability className="mt-5 lg:hidden" />
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => scrollToId('work')} className="btn-primary">
            View selected work <ArrowDown aria-hidden="true" className="size-4" />
          </button>
          <Link to="/contact" className="btn-secondary">
            Get in touch <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
      <ul
        aria-label="Disciplines"
        className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-ink-muted lg:mt-20"
      >
        {about.capabilities.map((capability, index) => (
          <li key={capability.title} className="flex items-center gap-3">
            <span aria-hidden="true" className="font-mono text-xs text-ink-subtle">
              {String(index + 1).padStart(2, '0')}
            </span>
            {capability.title}
          </li>
        ))}
      </ul>
    </section>
  )
}
