// https://nuxt.com/docs/api/configuration/nuxt-config
import tools from './data/tools.json'

const toolRoutes = tools.map((tool) => `/tools/${tool.slug}`)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/tools', '/sitemap.xml', '/robots.txt', ...toolRoutes]
    }
  }
})
