import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createMicroFrontendChild } from '@microf/vue-child';

const router = createRouter({
  routes: [
    { path: '/', component: App },
    { path: '/inner-page', component: App, name: 'micro-app-inner' },
  ], history: createWebHistory()
});

const microFrontend = await createMicroFrontendChild({ router })

const app = createApp(App);
app.use(router);
app.use(microFrontend);


app.mount('#app')
