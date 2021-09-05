import { createApp } from 'vue'
import App from './App.vue'
import { createMicroFrontendChild } from '@microf/vue-child';
import { createRouter, createWebHistory } from 'vue-router';

(async function () {
  const router = createRouter({
    routes: [{ path: '', component: App }], history: createWebHistory()
  });
  const microFrontend = await createMicroFrontendChild({ router, knownApps: ['micro-app'] })

  const app = createApp(App);
  app.use(router);
  app.use(microFrontend);
  app.mount('#app')
})()
