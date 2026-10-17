import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { about } from '../content/about'
import { site } from '../content/site'
import { clamp, subscribeScroll } from '../lib/motion'
import { scrollToId } from '../lib/scroll'
import { SplitHeading } from './SplitHeading'
import { Availability } from './SiteNav'

const delay = (ms: number) => ({ '--load-delay': `${ms}ms` }) as CSSProperties

/**
 * Typography-led introduction. Everything is readable immediately: words rise
 * into place within the first second, nothing waits on a loader. As the hero
 * scrolls away it drifts slightly and softens (tablet and up, motion allowed).
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const drift = window.matchMedia('(min-width: 48rem) and (prefers-reduced-motion: no-preference)')
    return subscribeScroll(() => {
      const y = window.scrollY
      setScrolled(y > 24)
      if (drift.matches) section.style.setProperty('--hero-out', clamp(y / (section.offsetHeight * 0.9), 0, 1).toFixed(4))
      else section.style.removeProperty('--hero-out')
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative container-page pt-14 pb-16 sm:pt-20 lg:flex lg:min-h-[88dvh] lg:flex-col lg:justify-between lg:pt-28 lg:pb-20"
    >
      <div className="hero-drift">
        <p className="eyebrow load-in">
          {site.role}
          {site.location ? ` · ${site.location}` : ''}
        </p>
        <SplitHeading
          id="hero-heading"
          text={site.headline}
          delay={120}
          className="mt-6 max-w-[16ch] font-display text-display text-balance"
        />
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-prose load-in" style={delay(480)}>
            <p className="text-lede text-ink-muted">{site.intro}</p>
            <Availability className="mt-5 lg:hidden" />
          </div>
          <div className="flex flex-wrap gap-3 load-in" style={delay(600)}>
            <button type="button" onClick={() => scrollToId('work')} className="btn-primary">
              View selected work <ArrowDown aria-hidden="true" className="size-4" />
            </button>
            <Link to="/contact" className="btn-secondary">
              Get in touch <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mt-16 lg:mt-20">
        <ul
          aria-label="Disciplines"
          className="rule-draw rule-draw-top flex flex-wrap gap-x-8 gap-y-3 pt-6 text-sm text-ink-muted lg:pr-28"
          data-revealed=""
          style={{ '--reveal-delay': '500ms' } as CSSProperties}
        >
          {about.capabilities.map((capability, index) => (
            <li key={capability.title} className="flex items-center gap-3 load-in" style={delay(760 + index * 70)}>
              <span aria-hidden="true" className="font-mono text-xs text-ink-subtle">
                {String(index + 1).padStart(2, '0')}
              </span>
              {capability.title}
            </li>
          ))}
        </ul>

        <div
          aria-hidden="true"
          data-hidden={scrolled ? '' : undefined}
          className="scroll-cue load-in absolute right-0 bottom-0 hidden items-center gap-3 text-xs tracking-[0.08em] text-ink-subtle uppercase lg:flex"
          style={delay(1100)}
        >
          Scroll
          <span className="scroll-cue-line block h-10 w-px" />
        </div>
      </div>
    </section>
  )
}
