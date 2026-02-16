import { defineStore } from 'pinia';
import { tenantService } from '@/services/tenantService';

export const useTenantStore = defineStore('tenant', {
  state: () => ({
    selectedTenant: 'Tenant A',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    allStats: {} as any, //hold data from mock
    loading: false
  }),
  actions: {
    async fetchTenants() {
      this.loading = true;
      try {
        this.allStats = await tenantService.getTenants();
      } finally {
        this.loading = false;
      }
    }
  }
});