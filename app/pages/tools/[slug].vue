<script setup>
import tools from '../../../data/tools.json'

const route = useRoute()
const config = useRuntimeConfig()
const slug = String(route.params.slug)
const tool = tools.find((item) => item.slug === slug)

if (!tool) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Tool not found',
    fatal: true
  })
}

const siteUrl = (config.public.siteUrl || 'http://localhost:3000').replace(/\/$/, '')
const canonicalUrl = `${siteUrl}/tools/${tool.slug}`
const seoTitle = `${tool.name} - ${tool.tagline} | Holink`
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: tool.name,
  description: tool.description,
  applicationCategory: tool.category,
  operatingSystem: tool.platforms.join(', '),
  image: tool.image,
  url: canonicalUrl,
  offers: {
    '@type': 'Offer',
    price: tool.pricing,
    url: tool.website
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: tool.rating,
    reviewCount: tool.reviews
  }
}

useHead({
  title: seoTitle,
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl
    }
  ],
  meta: [
    {
      name: 'description',
      content: tool.description
    },
    {
      property: 'og:title',
      content: seoTitle
    },
    {
      property: 'og:description',
      content: tool.description
    },
    {
      property: 'og:url',
      content: canonicalUrl
    },
    {
      property: 'og:image',
      content: tool.image
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd)
    }
  ]
})
</script>

<template>
  <main class="page">
    <header class="site-header">
      <NuxtLink class="brand" to="/">Holink</NuxtLink>
      <NuxtLink class="nav-link" to="/tools">Tools</NuxtLink>
    </header>

    <NuxtLink class="back-link" to="/tools">Back to tools</NuxtLink>

    <article class="tool-detail">
      <div class="image-panel">
        <img :src="tool.image" :alt="`${tool.name} preview`">
      </div>

      <div class="content-panel">
        <p class="category">{{ tool.category }}</p>
        <h1>{{ tool.name }}</h1>
        <p class="tagline">{{ tool.tagline }}</p>
        <p class="description">{{ tool.description }}</p>

        <section class="detail-section" aria-labelledby="features-heading">
          <h2 id="features-heading">Features</h2>
          <ul class="feature-list">
            <li v-for="feature in tool.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </section>

        <section class="detail-section stats-section" aria-label="Tool details">
          <div>
            <span>Pricing</span>
            <strong>{{ tool.pricing }}</strong>
          </div>
          <div>
            <span>Platforms</span>
            <strong>{{ tool.platforms.join(', ') }}</strong>
          </div>
          <div>
            <span>Rating</span>
            <strong>{{ tool.rating }} / 5</strong>
          </div>
          <div>
            <span>Reviews</span>
            <strong>{{ tool.reviews.toLocaleString() }}</strong>
          </div>
        </section>

        <a class="button-link" :href="tool.website" target="_blank" rel="noreferrer">
          Visit website
        </a>
      </div>
    </article>
  </main>
</template>

<style scoped>
.back-link {
  display: inline-flex;
  margin-bottom: 24px;
  color: #0f766e;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
}

.back-link:hover {
  color: #115e59;
}

.tool-detail {
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
  gap: 36px;
  align-items: start;
}

.image-panel {
  overflow: hidden;
  border: 1px solid #d9dee7;
  border-radius: 8px;
  background: #ffffff;
}

img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.content-panel {
  min-width: 0;
}

.category {
  margin: 0 0 12px;
  color: #0f766e;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: #111827;
  font-size: 52px;
  line-height: 1.05;
  letter-spacing: 0;
}

.tagline {
  margin: 16px 0 0;
  color: #374151;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
}

.description {
  margin: 18px 0 0;
  color: #4b5563;
  font-size: 17px;
  line-height: 1.75;
}

.detail-section {
  margin-top: 32px;
}

h2 {
  margin: 0 0 14px;
  color: #111827;
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: 0;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.feature-list li {
  padding: 12px;
  border: 1px solid #d9dee7;
  border-radius: 8px;
  background: #ffffff;
  color: #1f2933;
  font-size: 15px;
  font-weight: 700;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 32px;
}

.stats-section div {
  padding: 16px;
  border: 1px solid #d9dee7;
  border-radius: 8px;
  background: #ffffff;
}

.stats-section span {
  display: block;
  color: #6b7280;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.stats-section strong {
  display: block;
  margin-top: 6px;
  color: #111827;
  font-size: 16px;
  line-height: 1.35;
}

@media (max-width: 840px) {
  .tool-detail {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 40px;
  }

  .tagline {
    font-size: 19px;
  }

  .feature-list,
  .stats-section {
    grid-template-columns: 1fr;
  }
}
</style>
