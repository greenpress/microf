<template>
  <iframe :src="url" @load="loaded"/>
</template>

<script>
export default {
  name: 'MicroApp',
  props: {
    url: String,
    app: Object
  },
  methods: {
    loaded() {
      this.$el.contentWindow.postMessage({
        hostUrl: window.location.origin,
        token: this.app.token
      }, this.url)
    }
  }
}
</script>

<style scoped>

</style>
