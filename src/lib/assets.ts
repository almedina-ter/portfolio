import type { MediaAsset } from '../content/types'

/** Resolves a path from `public/` against the deployed base path. Full URLs pass through. */
export function assetUrl(path: string): string {
  if (/^(https?:)?\/\//.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function srcSetFor(asset: MediaAsset): string | undefined {
  if (!asset.srcSet?.length) return undefined
  return asset.srcSet.map((entry) => `${assetUrl(entry.src)} ${entry.width}w`).join(', ')
}
