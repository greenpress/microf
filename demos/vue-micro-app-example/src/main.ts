import { createApp } from 'vue'
import App from './App.vue'
import { createMicroFrontendChild } from '@microf/vue-child';
import { router } from './router';

export default (async function () {
  const microFrontend = await createMicroFrontendChild({ router })

  const app = createApp(App);
  app.use(router);
  app.use(microFrontend);

  app.mount('#app');

  return app;
})()
