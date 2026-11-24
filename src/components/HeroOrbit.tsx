import { useEffect, useState, type CSSProperties } from 'react'
import { LogoMark } from './LogoMark'

const PHRASE = 'CREATING DIGITAL STORIES  ·  '
const REPEATS = 3
// Two crossing ellipses. Their perimeter (Ramanujan's approximation) sets how far the text travels per loop.
const A = 190
const B = 104
const PERIMETER = Math.PI * (3 * (A + B) - Math.sqrt((3 * A + B) * (A + 3 * B)))

const wide = `M${200 - A},200 a${A},${B} 0 1,1 ${2 * A},0 a${A},${B} 0 1,1 ${-2 * A},0`
const tall = `M${200 - B},200 a${B},${A} 0 1,0 ${2 * B},0 a${B},${A} 0 1,0 ${-2 * B},0`

/**
 * The "a" mark at the centre of two crossing tracks that carry "Creating digital stories",
 * turning in opposite directions. Decorative, so it is hidden from assistive technology.
 * With reduced motion everything stands still.
 */
export function HeroOrbit({ className = '', delay = 0, inverse = false, markClass = 'h-[3.5rem]' }: { className?: string; delay?: number; inverse?: boolean; markClass?: string }) {
  const [still, setStill] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setStill(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const text = PHRASE.repeat(Math.round(REPEATS * 2))
  const textLength = PERIMETER * 2
  const motion = (
    <animate attributeName="startOffset" from={-PERIMETER} to={0} dur="70s" repeatCount="indefinite" />
  )

  return (
    <div aria-hidden="true" className={`aspect-square ${inverse ? 'orbit-inverse' : ''} ${className}`} data-orbit style={{ '--load-delay': `${delay}ms` } as CSSProperties}>
      <div className="relative size-full">
      {!inverse && <div aria-hidden="true" className="orbit-glow absolute inset-[22%]" />}
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <path id="orbit-wide" d={wide} />
          <path id="orbit-tall" d={tall} />
        </defs>
        {(['wide', 'tall'] as const).map((id) => (
          <text key={id} className={`orbit-text ${id === 'tall' ? 'orbit-text-soft' : ''}`} dy="0.36em">
            <textPath href={`#orbit-${id}`} startOffset={still ? 0 : -PERIMETER} textLength={textLength} lengthAdjust="spacing">
              {text}
              {!still && motion}
            </textPath>
          </text>
        ))}
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LogoMark animated className={`orbit-mark ${markClass} w-auto ${inverse ? 'text-paper' : 'text-ink'}`} />
      </div>
      </div>
    </div>
  )
}
