<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
:root {
  color: #1f2933;
  background: #f6f7f9;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f6f7f9;
}

a {
  color: inherit;
}

.app-shell {
  min-height: 100vh;
}

.page {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 48px 0;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 48px;
}

.brand {
  color: #111827;
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
}

.nav-link {
  color: #4b5563;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
}

.nav-link:hover,
.brand:hover {
  color: #0f766e;
}

.button-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #0f766e;
  border-radius: 8px;
  background: #0f766e;
  color: #ffffff;
  font-weight: 800;
  text-decoration: none;
}

.button-link:hover {
  background: #115e59;
  border-color: #115e59;
}

.muted {
  color: #5f6b7a;
}

@media (max-width: 640px) {
  .page {
    width: min(100% - 24px, 1120px);
    padding: 28px 0;
  }

  .site-header {
    margin-bottom: 32px;
  }
}
</style>
