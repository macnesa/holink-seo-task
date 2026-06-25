<script setup>
import tools from '../../../data/tools.json'

useHead({
  title: 'Tools | Holink',
  meta: [
    {
      name: 'description',
      content: 'Browse software tools by category, pricing, rating, and platform.'
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

    <section class="tools-header">
      <p class="eyebrow">All tools</p>
      <h1>Software tools directory</h1>
      <p class="muted">
        Compare {{ tools.length }} tools for creators, marketers, product teams,
        and small businesses.
      </p>
    </section>

    <section class="tool-grid" aria-label="Tools">
      <NuxtLink
        v-for="tool in tools"
        :key="tool.id"
        class="tool-card"
        :to="`/tools/${tool.slug}`"
      >
        <div>
          <p class="category">{{ tool.category }}</p>
          <h2>{{ tool.name }}</h2>
          <p class="tagline">{{ tool.tagline }}</p>
        </div>

        <dl class="meta-list">
          <div>
            <dt>Pricing</dt>
            <dd>{{ tool.pricing }}</dd>
          </div>
          <div>
            <dt>Rating</dt>
            <dd>{{ tool.rating }}</dd>
          </div>
        </dl>

        <ul class="platform-list" aria-label="Platforms">
          <li v-for="platform in tool.platforms" :key="platform">
            {{ platform }}
          </li>
        </ul>
      </NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.tools-header {
  max-width: 740px;
  margin-bottom: 32px;
}

.eyebrow {
  margin: 0 0 10px;
  color: #0f766e;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 14px;
  color: #111827;
  font-size: 48px;
  line-height: 1.08;
  letter-spacing: 0;
}

.tools-header .muted {
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
}

.tool-card {
  display: flex;
  min-height: 260px;
  flex-direction: column;
  justify-content: space-between;
  gap: 22px;
  padding: 22px;
  border: 1px solid #d9dee7;
  border-radius: 8px;
  background: #ffffff;
  color: inherit;
  text-decoration: none;
}

.tool-card:hover {
  border-color: #0f766e;
}

.category {
  margin: 0 0 12px;
  color: #0f766e;
  font-size: 13px;
  font-weight: 800;
}

h2 {
  margin: 0;
  color: #111827;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0;
}

.tagline {
  margin: 12px 0 0;
  color: #4b5563;
  font-size: 15px;
  line-height: 1.5;
}

.meta-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
}

.meta-list div {
  padding-top: 12px;
  border-top: 1px solid #eef1f5;
}

dt {
  color: #6b7280;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

dd {
  margin: 4px 0 0;
  color: #111827;
  font-size: 15px;
  font-weight: 800;
}

.platform-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.platform-list li {
  padding: 6px 9px;
  border: 1px solid #d9e8e5;
  border-radius: 999px;
  background: #f0fdfa;
  color: #115e59;
  font-size: 12px;
  font-weight: 800;
}

@media (max-width: 640px) {
  h1 {
    font-size: 36px;
  }

  .tool-grid {
    grid-template-columns: 1fr;
  }
}
</style>
