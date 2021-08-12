<template>
  <iframe @load="loaded"/>
</template>

<script>
import { getMicroFrontendState } from './state';

export default {
  name: 'MicroApp',
  props: {
    path: String,
    url: String,
    app: Object
  },
  data() {
    return {
      lastApp: null,
    }
  },
  mounted() {
    this.changeSrc();
  },
  watch: {
    url() {
      if (this.app.connected && this.lastApp === this.app.token) {
        this.emit({
          type: 'RouteChange',
          url: this.url,
          path: this.path
        })
      } else {
        this.changeSrc();
      }
      this.lastApp = this.app.token;
    }
  },
  methods: {
    changeSrc() {
      this.$el.setAttribute('src', this.url);
    },
    emit(data = {}) {
      this.$el.contentWindow.postMessage({
        hostUrl: window.location.origin,
        token: this.app.token,
        ...data
      }, this.url);
    },
    loaded() {
      this.emit({
        routes: getMicroFrontendState().routesByApps
    });
    }
  }
}
</script>

<style scoped>

</style>
