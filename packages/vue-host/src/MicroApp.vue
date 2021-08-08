<template>
  <iframe :src="url" />
</template>

<script>
export default {
  name: 'MicroApp',
  props: {
    url: String
  }
}
</script>

<style scoped>

</style>
