<template>
  <div>Settings page</div>
  <p>
    navigate to:<br>
    <router-link :to="{name: 'micro-app'}">micro app</router-link><br>
    <router-link :to="{name: 'micro-app-inner'}">micro app inner</router-link><br>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
