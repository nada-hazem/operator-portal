<template>
  <div class="flex h-screen bg-gray-50 text-gray-800 font-sans">
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col p-4 shadow-sm">
      <div class="mb-8">
        <label class="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">
          Multitenancy
        </label>
        <select
          v-model="tenantStore.selectedTenant"
          class="w-full p-2 text-sm border border-gray-200 rounded-md bg-gray-50 cursor-pointer"
        >
          <option value="Tenant A">Tenant A</option>
          <option value="Tenant B">Tenant B</option>
          <option value="Tenant C">Tenant C</option>
        </select>
      </div>

      <nav class="flex-1 space-y-1">
        <router-link
          to="/"
          class="block p-2 rounded-md hover:bg-gray-100 text-gray-600"
          active-class="bg-blue-50 text-blue-700 font-semibold"
          >Home</router-link
        >
        <router-link
          to="/security"
          class="block p-2 rounded-md hover:bg-gray-100 text-gray-600"
          active-class="bg-blue-50 text-blue-700 font-semibold"
          >Security & Access</router-link
        >
      </nav>

      <div class="border-t border-gray-100 pt-4 space-y-1">
        <button
          @click="isSettingsOpen = !isSettingsOpen"
          class="w-full flex items-center justify-between p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <span>Settings</span>
          <span class="text-xs transition-transform" :class="{ 'rotate-180': isSettingsOpen }"
            >▼</span
          >
        </button>

        <div v-if="isSettingsOpen" class="ml-4 space-y-1 border-l-2 border-gray-100 pl-2">
          <router-link
            to="/settings/general"
            class="block p-2 text-sm rounded-md text-gray-500 hover:bg-gray-50"
            active-class="text-blue-600 font-medium"
          >
            General
          </router-link>
          <router-link
            to="/settings/sites"
            class="block p-2 text-sm rounded-md text-gray-500 hover:bg-gray-50"
            active-class="text-blue-600 font-medium"
          >
            Sites
          </router-link>
        </div>

        <router-link
          to="/help"
          class="block p-2 rounded-md hover:bg-gray-100 text-gray-600"
          active-class="bg-blue-50 text-blue-700 font-semibold"
          >Help</router-link
        >
        <router-link
          to="/user"
          class="block p-2 rounded-md hover:bg-gray-100 text-gray-600"
          active-class="bg-blue-50 text-blue-700 font-semibold"
          >User</router-link
        >
      </div>
    </aside>

    <main class="flex-1 overflow-auto p-8 bg-gray-50">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTenantStore } from '../modules/home/store/tenantStore'

const isSettingsOpen = ref(true)
const tenantStore = useTenantStore()
</script>
