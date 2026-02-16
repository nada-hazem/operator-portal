import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTenantStore = defineStore('tenant', () => {
  const selectedTenant = ref('Tenant A');

  function setTenant(newTenant: string) {
    selectedTenant.value = newTenant;
    console.log(`Global Tenant changed to: ${newTenant}`);
  }

  return { selectedTenant, setTenant };
});