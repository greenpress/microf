<template>
  <h1>demo admin panel</h1>
  <ul>
    <li>
      <router-link :to="{name: 'micro-app'}">Micro app page</router-link>
    </li>
    <li>
      <router-link :to="{name: 'micro-app-inner'}">Micro app inner page</router-link>
    </li>
    <li>
      <router-link :to="{name: 'settings'}">Settings page</router-link>
    </li>
  </ul>
  <router-view class="screen"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

h1 {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.screen {
  background: #ccc;
  flex: 1;
}
</style>
