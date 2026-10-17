import { useState } from 'react'
import { ImageIcon } from 'lucide-react'
import type { MediaAsset } from '../content/types'
import { assetUrl, srcSetFor } from '../lib/assets'
import { useParallax } from '../lib/useParallax'

interface MediaProps {
  asset: MediaAsset
  /** Load immediately. Use for the first, above-the-fold image only. */
  priority?: boolean
  /** Rendered width hint for responsive images. */
  sizes?: string
  /** Where to put the file, shown on placeholders to make replacement easy. */
  hint?: string
  className?: string
  imgClassName?: string
  /**
   * Scroll-linked depth, desktop only. shift: the image drifts inside its frame.
   * zoom: the image settles from a slight scale as it reaches mid-screen.
   */
  parallax?: 'shift' | 'zoom'
}

/**
 * Renders a project image at a fixed aspect ratio (no layout shift), or a clearly
 * labelled placeholder when the image has not been added or fails to load.
 */
export function Media({ asset, priority = false, sizes = '100vw', hint, className = '', imgClassName = '', parallax }: MediaProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  const aspectRatio = asset.aspect ?? (asset.width && asset.height ? `${asset.width} / ${asset.height}` : '16 / 10')
  const failed = asset.src !== undefined && failedSrc === asset.src
  const showImage = Boolean(asset.src) && !failed
  const frameRef = useParallax<HTMLDivElement>(parallax === 'zoom' ? 768 : 1024, Boolean(parallax), showImage)
  const parallaxClass = parallax === 'zoom' ? 'parallax-zoom' : ''
  const layerClass = parallax ? 'parallax-layer' : ''

  if (!showImage) {
    return (
      <div
        ref={frameRef}
        role="img"
        aria-label={`${failed ? 'Image could not be loaded' : 'Image placeholder'}: ${asset.alt}`}
        style={{ aspectRatio }}
        className={`relative overflow-hidden rounded-lg border border-dashed border-line-strong bg-surface ${parallaxClass} ${className}`}
      >
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center ${layerClass}`}>
          <ImageIcon aria-hidden="true" className="size-5 text-ink-subtle" strokeWidth={1.5} />
          <p className="eyebrow">{failed ? 'Image not found' : 'Image placeholder'}</p>
          <p className="max-w-[34ch] text-sm leading-snug text-ink-muted">{asset.alt}</p>
          {hint && <p className="hidden max-w-full font-mono text-xs break-all text-ink-subtle sm:block">{hint}</p>}
        </div>
      </div>
    )
  }

  return (
    <div ref={frameRef} style={{ aspectRatio }} className={`relative overflow-hidden rounded-lg bg-surface ${parallaxClass} ${className}`}>
      <img
        src={assetUrl(asset.src!)}
        srcSet={srcSetFor(asset)}
        sizes={asset.srcSet ? sizes : undefined}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onError={() => setFailedSrc(asset.src ?? null)}
        className={`h-full w-full object-cover ${layerClass} ${imgClassName}`}
      />
    </div>
  )
}
