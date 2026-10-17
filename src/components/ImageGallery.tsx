import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import type { MediaAsset } from '../content/types'
import { assetUrl } from '../lib/assets'
import { Media } from './Media'

interface ImageGalleryProps {
  images: MediaAsset[]
  layout?: 'grid' | 'stack'
  hintBase?: string
}

/**
 * Captioned project images. Real images open in a full-size viewer so detailed
 * UI can be inspected; placeholders are not clickable.
 */
export function ImageGallery({ images, layout = 'grid', hintBase }: ImageGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const viewable = images.map((image, index) => ({ image, index })).filter(({ image }) => image.src)

  const open = (index: number) => {
    setOpenIndex(index)
    dialogRef.current?.showModal()
  }
  const step = (direction: 1 | -1) => {
    if (openIndex === null) return
    const position = viewable.findIndex((entry) => entry.index === openIndex)
    const next = viewable[(position + direction + viewable.length) % viewable.length]
    setOpenIndex(next.index)
  }
  const current = openIndex === null ? null : images[openIndex]

  return (
    <>
      <ul className={layout === 'grid' ? 'grid gap-6 sm:grid-cols-2' : 'grid gap-10'}>
        {images.map((image, index) => {
          const wide = layout === 'grid' && images.length % 2 === 1 && index === images.length - 1
          return (
            <li key={index} className={wide ? 'sm:col-span-2' : undefined}>
              <figure>
                {image.src ? (
                  <button
                    type="button"
                    onClick={() => open(index)}
                    className="group relative block w-full cursor-zoom-in rounded-lg text-left"
                  >
                    <Media asset={image} sizes={layout === 'grid' && !wide ? '(min-width: 640px) 40vw, 100vw' : '80vw'} />
                    <span className="absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm">
                      <Maximize2 aria-hidden="true" className="size-4" />
                    </span>
                    <span className="sr-only">View larger: {image.alt}</span>
                  </button>
                ) : (
                  <Media asset={image} hint={hintBase ? `public/${hintBase}/image-${index + 1}.webp` : undefined} />
                )}
                {image.caption && <figcaption className="mt-3 text-sm text-ink-muted">{image.caption}</figcaption>}
              </figure>
            </li>
          )
        })}
      </ul>

      {viewable.length > 0 && (
        <dialog
          ref={dialogRef}
          aria-label="Image viewer"
          onClose={() => setOpenIndex(null)}
          onClick={(event) => event.target === dialogRef.current && dialogRef.current?.close()}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') step(1)
            if (event.key === 'ArrowLeft') step(-1)
          }}
          className="m-auto h-dvh max-h-none w-full max-w-none bg-ink p-0 text-paper backdrop:bg-ink/60"
        >
          {current?.src && (
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
                <p className="text-sm text-paper/80">
                  {viewable.findIndex((entry) => entry.index === openIndex) + 1} / {viewable.length}
                </p>
                <button
                  type="button"
                  onClick={() => dialogRef.current?.close()}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium focus-visible:outline-paper"
                >
                  <X aria-hidden="true" className="size-5" /> Close
                </button>
              </div>
              <figure className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-4 pb-6 sm:px-16">
                <img
                  src={assetUrl(current.src)}
                  alt={current.alt}
                  className="max-h-full min-h-0 w-auto max-w-full rounded-md object-contain"
                />
                {current.caption && <figcaption className="max-w-prose text-center text-sm text-paper/80">{current.caption}</figcaption>}
              </figure>
              {viewable.length > 1 && (
                <div className="flex justify-center gap-3 pb-6">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-paper/30 focus-visible:outline-paper"
                  >
                    <ChevronLeft aria-hidden="true" className="size-5" />
                    <span className="sr-only">Previous image</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-paper/30 focus-visible:outline-paper"
                  >
                    <ChevronRight aria-hidden="true" className="size-5" />
                    <span className="sr-only">Next image</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </dialog>
      )}
    </>
  )
}
