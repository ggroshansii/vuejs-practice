<template>
  <div>
    <p>Server: {{ index}}</p>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    firstName: String,
    serverInfo: Object,
  },
};
</script>

<style scoped>
</style>