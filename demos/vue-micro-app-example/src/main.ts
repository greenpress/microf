import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createMicroFrontendChild } from '@microf/vue-child';

const router = createRouter({
  routes: [
    { path: '/', component: App },
    { path: '/inner-page', component: App },
  ], history: createWebHistory()
});


const app = createApp(App);
app.use(router);
app.use(createMicroFrontendChild({ router }))


app.mount('#app')
