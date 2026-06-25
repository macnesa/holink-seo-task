# Holink SEO Tools Directory

A Nuxt app for the Holink take-home assessment. It turns the provided `data/tools.json` dataset into a software tools directory with one SEO-friendly detail page per record.

The app uses one dynamic template for all 50 tool detail pages instead of creating pages manually.

## Features

- Homepage at `/`
- Tools index at `/tools`
- Dynamic detail pages at `/tools/[slug]`
- SSG/prerendered pages, not client-only rendering
- Unique SEO metadata per tool page
- Canonical URL and Open Graph tags
- `SoftwareApplication` JSON-LD
- Generated `sitemap.xml`
- Generated `robots.txt`
- Responsive layout

## How to Run

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Routes

```txt
/                 Homepage
/tools            Tools index page
/tools/[slug]     Tool detail page
/sitemap.xml      Generated sitemap
/robots.txt       Generated robots file
```

Example detail pages:

```txt
/tools/bioglow
/tools/tapnest
/tools/rankradar
/tools/voicevane
```

## Data Source

The app reads records from:

```txt
data/tools.json
```

Each record includes fields like `slug`, `name`, `category`, `tagline`, `description`, `features`, `pricing`, `platforms`, `rating`, `reviews`, `website`, and `image`.

The `slug` field is used to generate each detail page URL.

## Rendering Strategy

This project uses SSG/prerendering because the dataset is static and limited to 50 records.

Each tool detail page is generated at build time, so search engines and social crawlers receive complete HTML with page content and SEO metadata without depending on client-side JavaScript rendering.

This fits the task because the content is stable, small, fast to prerender, and SEO-focused.

## SEO Implementation

Each tool detail page generates from its matching record:

- unique `<title>`
- meta description
- canonical URL
- Open Graph title, description, URL, and image
- JSON-LD structured data
- exactly one `<h1>`

Example title:

```txt
BioGlow - Turn a single profile link into a mini landing page. | Holink
```

## Structured Data Schema

Each detail page uses `SoftwareApplication` JSON-LD because every record represents a software/tool listing.

The schema maps the available data into structured fields such as tool name, description, category, supported platforms, image, website URL, pricing, rating, and review count.

## Sitemap and Robots

The app generates:

```txt
/sitemap.xml
/robots.txt
```

The sitemap includes `/`, `/tools`, and all 50 `/tools/[slug]` pages. The robots file allows crawling and points to the sitemap.

## Environment Variable

Set the production site URL with:

```bash
NUXT_PUBLIC_SITE_URL=https://your-live-domain.com
```

This is used for canonical URLs, Open Graph URLs, sitemap URLs, and the robots.txt sitemap reference.

If not set, the app falls back to:

```bash
http://localhost:3000
```
