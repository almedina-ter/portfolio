import { useEffect, useRef, useState } from 'react'

/** Counts up to a figure such as "03", "27" or "60K+" the first time it scrolls into view. */
export function CountUp({ value, duration = 1200, className }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [text, setText] = useState(value)

  useEffect(() => {
    const element = ref.current
    const match = value.match(/^(\d+)(.*)$/)
    if (!element || !match || !document.documentElement.classList.contains('motion') || !('IntersectionObserver' in window)) return
    const width = match[1].length
    const target = Number(match[1])
    const suffix = match[2]
    const show = (n: number) => setText(`${String(Math.round(n)).padStart(width, '0')}${suffix}`)

    show(0)
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          show(target * (1 - Math.pow(1 - t, 4)))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden="true">{text}</span>
    </span>
  )
}
