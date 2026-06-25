import tools from '../../data/tools.json'

const staticRoutes = ['/', '/tools']
const toolRoutes = tools.map((tool) => `/tools/${tool.slug}`)

function getSiteUrl(event) {
  const config = useRuntimeConfig(event)

  return (config.public.siteUrl || 'http://localhost:3000').replace(/\/$/, '')
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export default defineEventHandler((event) => {
  const siteUrl = getSiteUrl(event)
  const urls = [...staticRoutes, ...toolRoutes]
  const entries = urls
    .map((path) => `  <url><loc>${escapeXml(`${siteUrl}${path}`)}</loc></url>`)
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`
})
