import tenantsMock from '../mocks/tenants.json';

export const tenantService = {
  async getTenants() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(tenantsMock), 500);
    });
  }
};

