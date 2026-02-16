export const settingsRoutes = {
  path: '/settings',
  component: () => import('./pages/SettingsBase.vue'),
  redirect: '/settings/general', 
  children: [
    {
      path: 'general',
      name: 'settings-general',
      component: () => import('./pages/GeneralTab.vue')
    },
    {
      path: 'sites',
      name: 'settings-sites',
      component: () => import('./pages/SitesTab.vue')
    }
  ]
};