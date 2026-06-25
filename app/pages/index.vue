<script setup>
useHead({
  title: 'Holink Tools Directory',
  meta: [
    {
      name: 'description',
      content: 'Discover software tools for creators, marketers, and growing teams.'
    }
  ]
})
</script>

<template>
  <main class="page home-page">
    <header class="site-header">
      <NuxtLink class="brand" to="/">Holink</NuxtLink>
      <NuxtLink class="nav-link" to="/tools">Tools</NuxtLink>
    </header>

    <section class="hero">
      <p class="eyebrow">Software directory</p>
      <h1>Find useful tools for online businesses.</h1>
      <p class="hero-copy">
        Browse a curated set of tools for links, analytics, marketing,
        scheduling, forms, payments, and more.
      </p>
      <NuxtLink class="button-link" to="/tools">Browse tools</NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
}

.hero {
  max-width: 720px;
  padding: 72px 0 96px;
}

.eyebrow {
  margin: 0 0 16px;
  color: #0f766e;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1 {
  max-width: 680px;
  margin: 0;
  color: #111827;
  font-size: clamp(42px, 7vw, 76px);
  line-height: 0.98;
  letter-spacing: 0;
}

.hero-copy {
  max-width: 580px;
  margin: 24px 0 32px;
  color: #4b5563;
  font-size: 20px;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .hero {
    padding: 40px 0 72px;
  }

  h1 {
    font-size: 42px;
    line-height: 1.05;
  }

  .hero-copy {
    font-size: 18px;
  }
}
</style>
