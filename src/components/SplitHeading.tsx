import type { CSSProperties, ElementType } from 'react'
import { useReveal } from '../lib/useReveal'

interface SplitHeadingProps {
  as?: ElementType
  /** The heading text. A new line (\n) forces a line break. */
  text: string
  id?: string
  className?: string
  /** Delay before the first word, in ms. */
  delay?: number
  /** Start when the heading scrolls into view, instead of on load. */
  inView?: boolean
}

/**
 * A heading whose words rise into place one after another on load. Screen
 * readers get the plain text through aria-label; the split words are hidden
 * from them. With reduced motion the words are simply there.
 */
export function SplitHeading({ as: Heading = 'h1', text, id, className = '', delay = 80, inView = false }: SplitHeadingProps) {
  const ref = useReveal<HTMLElement>()
  let wordIndex = 0
  const plain = text.replaceAll('*', '')
  const lines = plain.split('\n').map((line, lineIndex) => (
    <span key={lineIndex}>
      {lineIndex > 0 && <br />}
      {line.split(/(\s+)/).map((word, i) => {
        if (!word) return null
        if (/^\s+$/.test(word)) return ' '
        const style = { '--word-delay': `${delay + wordIndex++ * 55}ms` } as CSSProperties
        return (
          <span key={`${lineIndex}-${i}`} className="split-word">
            <span style={style}>{word}</span>
          </span>
        )
      })}
    </span>
  ))

  return (
    <Heading ref={ref} id={id} data-split={inView ? 'view' : undefined} aria-label={plain.replaceAll('\n', ' ')} className={className}>
      <span aria-hidden="true">{lines}</span>
    </Heading>
  )
}
