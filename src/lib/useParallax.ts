import { useEffect, useRef } from 'react'
import { clamp, subscribeScroll } from './motion'

/**
 * Writes the element's position in the viewport to `--parallax`, from 1 (just
 * entering at the bottom) through 0 (centred) to -1 (leaving at the top), and
 * sets `data-parallax` while active. CSS decides what moves (see index.css).
 *
 * Only runs from `minWidth` up, with reduced motion off, and only while the
 * element is near the viewport. Measure the untransformed frame, never the
 * moving layer itself.
 */
export function useParallax<T extends HTMLElement>(minWidth = 1024, enabled = true, resetKey?: unknown) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!enabled || !element || !('IntersectionObserver' in window)) return
    const query = window.matchMedia(`(min-width: ${minWidth}px) and (prefers-reduced-motion: no-preference)`)
    let stop: (() => void) | null = null

    const start = () => {
      let visible = false
      const update = (viewportHeight: number) => {
        if (!visible) return
        const rect = element.getBoundingClientRect()
        const offset = rect.top + rect.height / 2 - viewportHeight / 2
        element.style.setProperty('--parallax', clamp(offset / (viewportHeight / 2 + rect.height / 2)).toFixed(4))
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting
          if (visible) update(window.innerHeight)
        },
        { rootMargin: '120px 0px' },
      )
      observer.observe(element)
      const unsubscribe = subscribeScroll(update)
      element.setAttribute('data-parallax', '')
      return () => {
        observer.disconnect()
        unsubscribe()
        element.removeAttribute('data-parallax')
        element.style.removeProperty('--parallax')
      }
    }

    const sync = () => {
      stop?.()
      stop = query.matches ? start() : null
    }
    sync()
    query.addEventListener('change', sync)
    return () => {
      query.removeEventListener('change', sync)
      stop?.()
    }
  }, [minWidth, enabled, resetKey])

  return ref
}
