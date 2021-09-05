import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createMicroFrontendChild } from '@microf/vue-child';

export default (async function () {
  const router = createRouter({
    routes: [
      { path: '/', component: App },
      { path: '/inner-page', component: App },
    ],
    history: createWebHistory(),
  });

  const microFrontend = await createMicroFrontendChild({ router })

  const app = createApp(App);
  app.use(router);
  app.use(microFrontend);

  app.mount('#app');

  return app;
})()
