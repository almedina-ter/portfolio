import type { MediaAsset, ScreenNote } from '../content/types'
import { ImageGallery } from './ImageGallery'

/** Empty space around the screen, in screen pixels, where the labels sit. */
const PAD_X = 400
const PAD_Y = 130
/** How far the vertical part of an arrow sits from the screen edge. */
const LANE = 30
/** Minimum distance between two labels in the same margin. */
const LABEL_GAP = 92

interface AnnotatedMockupProps {
  media: MediaAsset
  notes: ScreenNote[]
  hintBase?: string
}

/** Pushes labels in one margin apart so they never overlap, keeping their order. */
function spreadLabels(notes: ScreenNote[]) {
  const y = new Map<ScreenNote, number>()
  for (const side of ['left', 'right'] as const) {
    let last = -Infinity
    notes
      .filter((note) => note.side === side)
      .sort((a, b) => (a.labelY ?? a.via ?? a.target.y) - (b.labelY ?? b.via ?? b.target.y))
      .forEach((note) => {
        const wanted = note.labelY ?? note.via ?? note.target.y
        const placed = Math.max(wanted, last + LABEL_GAP)
        y.set(note, placed)
        last = placed
      })
  }
  return y
}

/**
 * A large screen with callouts in its margins. Each callout is a numbered label joined by a
 * right-angled arrow to the element it explains. The arrows run along gaps between rows and
 * cards, so they never cross content. The same numbers appear in a list below the screen.
 */
export function AnnotatedMockup({ media, notes, hintBase }: AnnotatedMockupProps) {
  const width = media.width ?? 1920
  const height = media.height ?? 1080
  const stageW = width + PAD_X * 2
  const stageH = height + PAD_Y * 2
  const labelY = spreadLabels(notes)
  const pct = (value: number, total: number) => `${(value / total) * 100}%`

  return (
    <div className="@container">
      {/* Wide: the screen sits on a stage with labels in the margins. */}
      <div
        className="relative hidden overflow-hidden rounded-lg border border-line bg-surface/50 @min-[800px]:block"
        style={{ aspectRatio: `${stageW} / ${stageH}` }}
      >
        <div
          className="absolute"
          style={{ left: pct(PAD_X, stageW), top: pct(PAD_Y, stageH), width: pct(width, stageW) }}
        >
          <div className="overflow-hidden rounded-md shadow-[0_24px_40px_-28px_rgba(22,21,19,0.45)] ring-1 ring-line">
            <ImageGallery images={[{ ...media, caption: undefined }]} layout="stack" hintBase={hintBase} iconPosition="bottom" />
          </div>
        </div>

        {/* Arrows, then labels and end dots, all positioned from the same coordinates. */}
        <svg aria-hidden="true" viewBox={`0 0 ${stageW} ${stageH}`} className="pointer-events-none absolute inset-0 size-full">
          {notes.map((note, index) => {
            const lane = note.side === 'left' ? PAD_X - LANE : PAD_X + width + LANE
            const via = PAD_Y + (note.via ?? note.target.y)
            const from = PAD_Y + (labelY.get(note) ?? 0)
            const tx = PAD_X + note.target.x
            const ty = PAD_Y + note.target.y
            return (
              <path
                key={index}
                d={`M ${lane} ${from} V ${via} H ${tx} V ${ty}`}
                fill="none"
                stroke="var(--color-annotation)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            )
          })}
        </svg>

        {notes.map((note, index) => {
          const left = note.side === 'left'
          const lane = left ? PAD_X - LANE : PAD_X + width + LANE
          return (
            <span key={index} aria-hidden="true">
              <span
                className="pointer-events-none absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-annotation"
                style={{ left: pct(PAD_X + note.target.x, stageW), top: pct(PAD_Y + note.target.y, stageH) }}
              />
              <span
                className="pointer-events-none absolute flex -translate-y-1/2 items-center gap-1.5 rounded-full border border-annotation bg-paper py-0.5 pr-2 pl-0.5 text-[0.6875rem] leading-none whitespace-nowrap text-ink shadow-sm"
                style={{
                  top: pct(PAD_Y + (labelY.get(note) ?? 0), stageH),
                  ...(left
                    ? { right: pct(stageW - lane, stageW), flexDirection: 'row' }
                    : { left: pct(lane, stageW), flexDirection: 'row' }),
                }}
              >
                <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-annotation font-mono text-[0.625rem] text-paper">
                  {index + 1}
                </span>
                <span>{note.label}</span>
              </span>
            </span>
          )
        })}
      </div>

      {/* Narrow: the screen fills the width and numbered markers sit on the elements. */}
      <div className="relative @min-[800px]:hidden">
        <div className="overflow-hidden rounded-md ring-1 ring-line">
          <ImageGallery images={[{ ...media, caption: undefined }]} layout="stack" hintBase={hintBase} iconPosition="bottom" />
        </div>
        {notes.map((note, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="pointer-events-none absolute inline-flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper bg-annotation font-mono text-[0.625rem] text-paper shadow-sm"
            style={{ left: pct(note.target.x, width), top: pct(note.target.y, height) }}
          >
            {index + 1}
          </span>
        ))}
      </div>

      <ol className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {notes.map((note, index) => (
          <li key={index} className="flex gap-3 text-[0.9375rem] text-ink-muted">
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-annotation font-mono text-[0.625rem] text-paper"
            >
              {index + 1}
            </span>
            <span>
              <strong className="font-medium text-ink">{note.label}.</strong> {note.text}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
