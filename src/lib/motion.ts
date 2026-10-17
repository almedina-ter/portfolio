/**
 * Shared motion helpers. One scroll listener and one reveal observer serve the
 * whole site, so adding more animated elements never adds more listeners.
 * Timing and easing tokens live in styles/index.css (--duration-*, --ease-*).
 */

const REDUCED = '(prefers-reduced-motion: reduce)'

export const prefersReducedMotion = () => window.matchMedia(REDUCED).matches

/**
 * Adds `motion` to <html> when the visitor has not asked for reduced motion.
 * Every hidden "before" state in the CSS is scoped to `html.motion`, so content
 * is always visible without JavaScript or with reduced motion on.
 */
export function initMotionPreference() {
  const query = window.matchMedia(REDUCED)
  const sync = () => document.documentElement.classList.toggle('motion', !query.matches)
  sync()
  query.addEventListener('change', sync)
}

/* ---------- Scroll loop ---------- */

type ScrollSubscriber = (viewportHeight: number) => void
const subscribers = new Set<ScrollSubscriber>()
let frameRequested = false

function runFrame() {
  frameRequested = false
  const viewportHeight = window.innerHeight
  subscribers.forEach((subscriber) => subscriber(viewportHeight))
}

function requestFrame() {
  if (frameRequested) return
  frameRequested = true
  window.requestAnimationFrame(runFrame)
}

/** Calls `subscriber` at most once per animation frame while the page scrolls or resizes. */
export function subscribeScroll(subscriber: ScrollSubscriber) {
  if (subscribers.size === 0) {
    window.addEventListener('scroll', requestFrame, { passive: true })
    window.addEventListener('resize', requestFrame, { passive: true })
  }
  subscribers.add(subscriber)
  requestFrame()
  return () => {
    subscribers.delete(subscriber)
    if (subscribers.size === 0) {
      window.removeEventListener('scroll', requestFrame)
      window.removeEventListener('resize', requestFrame)
    }
  }
}

/* ---------- Reveal on scroll ---------- */

let revealObserver: IntersectionObserver | null = null

/** Marks an element with `data-revealed` the first time it enters the viewport. */
export function observeReveal(element: Element) {
  if (!('IntersectionObserver' in window)) {
    element.setAttribute('data-revealed', '')
    return () => {}
  }
  revealObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.setAttribute('data-revealed', '')
        revealObserver?.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  )
  const observer = revealObserver
  observer.observe(element)
  return () => observer.unobserve(element)
}

export const clamp = (value: number, min = -1, max = 1) => Math.min(max, Math.max(min, value))
