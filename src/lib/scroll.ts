const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scrolls to an element on the page and moves keyboard focus to it.
 * Used instead of "#id" links, which the hash router would treat as routes.
 */
export function scrollToId(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
  target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  target.focus({ preventScroll: true })
}
