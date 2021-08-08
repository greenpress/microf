import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Nothing from './components/Nothing.vue';
import { createMicroFrontendHost } from '@microf/vue-host';

const router = createRouter({
  routes: [
    { path: '/', component: Nothing },
    { path: '/micro-app', name: 'micro-app', component: Nothing },
    { path: '/settings', name: 'settings', component: Nothing },
  ], history: createWebHistory()
});
const app = createApp(App);

app.use(router);
app.use(createMicroFrontendHost({
  router,
  apps: [
    {url: 'http://localhost:3334'},
    {url: 'http://localhost:3335'},
  ]
}))
app.mount('#app')
