import fs from 'node:fs'
import path from 'node:path'
import type { Plugin, ResolvedConfig } from 'vite'
import { site } from '../src/content/site'
import { projects } from '../src/content/projects'
import type { MediaAsset } from '../src/content/types'

const isExternal = (value: string) => /^https?:\/\//.test(value)
const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Collects every local file the content refers to, so a missing image or PDF fails the build. */
function referencedFiles(): { file: string; where: string }[] {
  const refs: { file: string; where: string }[] = []
  const add = (asset: MediaAsset | undefined, where: string) => {
    if (!asset?.src) return
    refs.push({ file: asset.src, where })
    asset.srcSet?.forEach((entry) => refs.push({ file: entry.src, where }))
  }
  if (site.resume && !isExternal(site.resume)) refs.push({ file: site.resume, where: 'site.resume' })
  if (site.ogImage) refs.push({ file: site.ogImage, where: 'site.ogImage' })
  add(site.portrait, 'site.portrait')
  for (const project of projects) {
    const where = `projects["${project.slug}"]`
    add(project.thumbnail, `${where}.thumbnail`)
    add(project.hero, `${where}.hero`)
    for (const section of project.sections) {
      if (section.kind === 'gallery') section.images.forEach((image) => add(image, `${where} section "${section.id}"`))
      if (section.kind === 'decisions') section.items.forEach((item) => add(item.media, `${where} section "${section.id}"`))
    }
  }
  return refs
}

function validateContent(publicDir: string): string[] {
  const problems: string[] = []
  const slugs = new Set<string>()
  for (const project of projects) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug))
      problems.push(`Project slug "${project.slug}" should use lowercase letters, numbers and dashes only.`)
    if (slugs.has(project.slug)) problems.push(`Two projects share the slug "${project.slug}".`)
    slugs.add(project.slug)
    const ids = new Set<string>()
    for (const section of project.sections) {
      if (ids.has(section.id)) problems.push(`Project "${project.slug}" has two sections with id "${section.id}".`)
      ids.add(section.id)
    }
  }
  for (const { file, where } of referencedFiles()) {
    if (!fs.existsSync(path.join(publicDir, file))) problems.push(`${where} points to "${file}", but public/${file} does not exist.`)
  }
  if (site.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.email)) problems.push(`site.email "${site.email}" is not a valid address.`)
  for (const [label, url] of [
    ['site.linkedin', site.linkedin],
    ['site.url', site.url],
    ['site.contactFormEndpoint', site.contactFormEndpoint],
  ] as const) {
    if (url && !/^https:\/\//.test(url)) problems.push(`${label} should start with https://`)
  }
  return problems
}

export function portfolioPlugin(): Plugin {
  let config: ResolvedConfig
  const siteUrl = site.url?.replace(/\/+$/, '') ?? null

  return {
    name: 'portfolio',
    configResolved(resolved) {
      config = resolved
    },
    buildStart() {
      const problems = validateContent(config.publicDir)
      if (!problems.length) return
      const message = `Portfolio content check found ${problems.length} problem(s):\n  - ${problems.join('\n  - ')}`
      if (config.command === 'build') this.error(message)
      else config.logger.warn(message)
    },
    transformIndexHtml(html) {
      const title = `${site.name} — ${site.role}`
      const tags = [
        `<title>${escapeHtml(title)}</title>`,
        `<meta name="description" content="${escapeHtml(site.description)}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${escapeHtml(title)}" />`,
        `<meta property="og:description" content="${escapeHtml(site.description)}" />`,
        `<meta name="twitter:card" content="${site.ogImage && siteUrl ? 'summary_large_image' : 'summary'}" />`,
      ]
      if (siteUrl) {
        tags.push(`<link rel="canonical" href="${escapeHtml(siteUrl)}/" />`)
        tags.push(`<meta property="og:url" content="${escapeHtml(siteUrl)}/" />`)
        if (site.ogImage) tags.push(`<meta property="og:image" content="${escapeHtml(`${siteUrl}/${site.ogImage}`)}" />`)
      }
      return html.replace('<!--portfolio-meta-->', tags.join('\n    '))
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /']
      if (siteUrl) {
        robots.push(`Sitemap: ${siteUrl}/sitemap.xml`)
        // Hash-routed pages share one HTML document, so the sitemap lists that document.
        const today = new Date().toISOString().slice(0, 10)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`,
        })
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots.join('\n') + '\n' })

      // GitHub Pages serves 404.html for unknown paths. Send visitors who typed a
      // path-style URL (e.g. /work/my-project) to the matching hash route.
      if (config.base.startsWith('/')) {
        const base = JSON.stringify(config.base)
        this.emitFile({
          type: 'asset',
          fileName: '404.html',
          source: `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Redirecting…</title><meta name="robots" content="noindex"><script>(function(){var b=${base};var p=location.pathname;var r=p.indexOf(b)===0?p.slice(b.length):p.replace(/^\\//,'');location.replace(b+(r?'#/'+r:'')+location.search);})();</script></head><body><p>Page not found. <a href=${base}>Go to the homepage</a>.</p></body></html>\n`,
        })
      }
    },
  }
}
