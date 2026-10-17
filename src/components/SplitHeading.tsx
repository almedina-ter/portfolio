import type { CSSProperties, ElementType } from 'react'

interface SplitHeadingProps {
  as?: ElementType
  /** Text with *asterisks* around words for italic display emphasis. */
  text: string
  id?: string
  className?: string
  /** Delay before the first word, in ms. */
  delay?: number
}

/**
 * A heading whose words rise into place one after another on load. Screen
 * readers get the plain text through aria-label; the split words are hidden
 * from them. With reduced motion the words are simply there.
 */
export function SplitHeading({ as: Heading = 'h1', text, id, className = '', delay = 80 }: SplitHeadingProps) {
  let wordIndex = 0
  const segments = text.split('*').map((segment, segmentIndex) => {
    const italic = segmentIndex % 2 === 1
    return segment.split(/(\s+)/).map((word, i) => {
      if (!word) return null
      if (/^\s+$/.test(word)) return ' '
      const style = { '--word-delay': `${delay + wordIndex++ * 55}ms` } as CSSProperties
      return (
        <span key={`${segmentIndex}-${i}`} className="split-word">
          <span className={italic ? 'italic' : undefined} style={style}>
            {word}
          </span>
        </span>
      )
    })
  })

  return (
    <Heading id={id} aria-label={text.replaceAll('*', '')} className={className}>
      <span aria-hidden="true">{segments}</span>
    </Heading>
  )
}
