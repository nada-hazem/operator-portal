<script setup lang="ts">
import { useTenantStore } from '../store/tenantStore';
import { computed } from 'vue';

const tenantStore = useTenantStore();

const tenantData = {
  'Tenant A': { activeSites: '12', alerts: '4', users: '28' },
  'Tenant B': { activeSites: '5', alerts: '0', users: '10' },
  'Tenant C': { activeSites: '24', alerts: '15', users: '142' }
};

const stats = computed(() => {
  const data = tenantData[tenantStore.selectedTenant as keyof typeof tenantData];
  return [
    { label: 'Active Sites', value: data.activeSites, color: 'bg-green-500' },
    { label: 'Pending Alerts', value: data.alerts, color: 'bg-red-500' },
    { label: 'Total Users', value: data.users, color: 'bg-blue-500' }
  ];
});

const recentLogs = [
  { id: 1, user: 'John Doe', action: ' Updated Site configuration ', target: 'Site #42', time: '2 mins ago' },
  { id: 2, user: 'System', action: ' Changed permissions for ', target: 'New Operator 1', time: '45 mins ago' },
  { id: 3, user: 'Admin Sarah', action: ' Changed permissions for ', target: 'New Operator 2', time: '2 hours ago' },
  { id: 4, user: 'John Doe', action: ' Updated Site configuration  ', target: 'Site #45', time: '5 hours ago' },

];
</script>

<template>
  <div class="max-w-6xl">
    <div class="mb-4 p-2 bg-blue-50 text-blue-800 rounded text-sm font-medium">
  Currently viewing data for: {{ tenantStore.selectedTenant }}
</div>
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      <p class="text-gray-600">Welcome to the Operator Portal overview.</p>
    </header>
     
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div 
        v-for="stat in stats" 
        :key="stat.label" 
        class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
      >
        <div class="flex items-center justify-between mb-4">
          <div :class="['h-2 w-10 rounded-full', stat.color]"></div>
          <span class="text-[10px] font-bold uppercase text-gray-400">Live Status</span>
        </div>
        
        <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">
          {{ stat.label }}
        </h3>
        <p class="text-4xl font-bold text-gray-900 mt-2">
          {{ stat.value }}
        </p>
        
        <div class="mt-4 flex items-center text-xs text-green-600 font-medium">
          <span>↑ 12% from last week</span>
        </div>
      </div>
    </div>

    <div class="mt-10 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-800">Recent Activity</h2>
      </div>

      <div class="divide-y divide-gray-50">
        <div v-for="log in recentLogs" :key="log.id" class="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
          <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs uppercase">
            {{ log.user.substring(0, 2) }}
          </div>
          
          <div class="flex-1">
            <p class="text-sm text-gray-800">
              <span class="font-bold">{{ log.user }}</span> 
              <span class="text-gray-500"> {{ log.action }} </span>
              <span class="font-medium text-gray-700">{{ log.target }}</span>
            </p>
            <p class="text-xs text-gray-400 mt-0.5">{{ log.time }}</p>
          </div>

          <div class="h-2 w-2 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>