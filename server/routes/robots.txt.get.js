function getSiteUrl(event) {
  const config = useRuntimeConfig(event)

  return (config.public.siteUrl || 'http://localhost:3000').replace(/\/$/, '')
}

export default defineEventHandler((event) => {
  const siteUrl = getSiteUrl(event)

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`
})
