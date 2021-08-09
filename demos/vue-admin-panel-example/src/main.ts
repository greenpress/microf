import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Nothing from './components/Nothing.vue';
import { createMicroFrontendHost } from '@microf/vue-host';

const router = createRouter({
  routes: [
    { path: '/', component: Nothing },
    { path: '/aaaa', component: Nothing },
  ], history: createWebHistory()
});
const microFrontend = await createMicroFrontendHost({
  router,
  apps: [
    {
      url: 'http://localhost:3334', appRoute: { path: '/m' },
      routes: [
        { path: '', name: 'micro-app' },
        { path: 'inner-page', name: 'micro-app-inner' },
      ]
    },
    { url: 'http://localhost:3335', appRoute: { path: '/s' }, routes: [{ path: 'settings', name: 'settings' }] },
  ]
})

const app = createApp(App);
app.use(router);
app.use(microFrontend)

console.log('render the app')
app.mount('#app')
