import { useEffect, useState } from 'react'

const PHRASE = 'CREATING DIGITAL STORIES  ·  '
const R = 168
const CIRCUMFERENCE = 2 * Math.PI * R
const circle = `M${200 - R},200 a${R},${R} 0 1,1 ${2 * R},0 a${R},${R} 0 1,1 ${-2 * R},0`

/**
 * A single ring of slowly turning text, without the centre mark. A small accent for corners.
 * Decorative, so hidden from assistive technology. It stands still with reduced motion.
 */
export function TextRing({ className = '' }: { className?: string }) {
  const [still, setStill] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setStill(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <svg aria-hidden="true" viewBox="0 0 400 400" className={`aspect-square overflow-visible ${className}`}>
      <defs>
        <path id="text-ring-path" d={circle} />
      </defs>
      <text className="ring-text" dy="0.36em">
        <textPath href="#text-ring-path" textLength={CIRCUMFERENCE} lengthAdjust="spacing">
          {PHRASE.repeat(2)}
        </textPath>
        {!still && <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="60s" repeatCount="indefinite" />}
      </text>
    </svg>
  )
}
