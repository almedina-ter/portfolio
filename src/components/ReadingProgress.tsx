import { useEffect, useRef, type RefObject } from 'react'
import { clamp, subscribeScroll } from '../lib/motion'

/**
 * A hairline across the top of the screen showing how far through `target` the
 * reader is. It tracks the scroll position directly, so it is informative rather
 * than decorative and stays on with reduced motion.
 */
export function ReadingProgress({ target }: { target: RefObject<HTMLElement | null> }) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(
    () =>
      subscribeScroll((viewportHeight) => {
        const element = target.current
        const bar = barRef.current
        if (!element || !bar) return
        const rect = element.getBoundingClientRect()
        const progress = clamp(-rect.top / Math.max(rect.height - viewportHeight, 1), 0, 1)
        bar.style.transform = `scaleX(${progress.toFixed(4)})`
      }),
    [target],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5">
      <div ref={barRef} className="h-full origin-left bg-accent [transform:scaleX(0)]" />
    </div>
  )
}
