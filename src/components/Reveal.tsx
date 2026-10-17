import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../lib/useReveal'

type RevealVariant = 'up' | 'fade' | 'stagger' | 'media' | 'panel'

interface RevealProps {
  as?: ElementType
  /** up: rise and fade · fade: opacity only · stagger: children rise in sequence · media: image unmasks · panel: dark block opens */
  variant?: RevealVariant
  /** Extra delay in ms, e.g. for sequencing items in a list. */
  delay?: number
  className?: string
  style?: CSSProperties
  children: ReactNode
  [attribute: `aria-${string}`]: string | undefined
  id?: string
}

/**
 * Reveals its content the first time it scrolls into view. The hidden starting
 * state only applies with motion allowed (html.motion), so content is never
 * lost without JavaScript or with reduced motion.
 */
export function Reveal({ as: Component = 'div', variant = 'up', delay, className, style, children, ...rest }: RevealProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <Component
      ref={ref}
      data-reveal={variant}
      className={className}
      style={delay ? ({ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties) : style}
      {...rest}
    >
      {children}
    </Component>
  )
}
