import { createRouter, createWebHistory } from 'vue-router';
import { settingsRoutes } from '../modules/settings/settings-routes'
import MainLayout from '../layouts/MainLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout, 
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../modules/home/pages/HomeTab.vue')
      },
      {
        path: 'security',
        name: 'security',
        component: () => import('../modules/security/pages/SecurityTab.vue')
      },
      {
        path: 'help',
        name: 'help',
        component: () => import('../modules/home/pages/HelpTab.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../modules/home/pages/UserTab.vue')
      },
      settingsRoutes,
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});