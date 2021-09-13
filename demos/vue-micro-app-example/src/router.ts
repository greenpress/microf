import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

export const router = createRouter({
  routes: [
    { path: '/', component: App, name: 'micro-app' },
    { path: '/inner-page', component: App, name: 'micro-app-inner' },
  ],
  history: createWebHistory(),
});
