<template>
  <div class="settings-layout">
    <aside class="sub-nav">
      <h2 class="text-xl font-bold mb-4">Settings</h2>
      <nav class="flex flex-col gap-2">
        <router-link
          to="/settings/general"
          class="p-2 rounded hover:bg-gray-100"
          active-class="bg-blue-100 text-blue-700 font-bold"
        >
          General
        </router-link>
        <router-link
          to="/settings/sites"
          class="p-2 rounded hover:bg-gray-100"
          active-class="bg-blue-100 text-blue-700 font-bold"
        >
          Sites
        </router-link>
      </nav>
    </aside>

    <section class="sub-content flex-1 p-6 border rounded-lg bg-white">
      <router-view />
    </section>
  </div>
</template>

<style scoped>
.settings-layout {
  display: flex;
  gap: 2rem;
}
.sub-nav {
  width: 200px;
}
</style>
