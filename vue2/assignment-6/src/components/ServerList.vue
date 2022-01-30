<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5" v-bind:key="index">
        <server :index="index" :serverInfo="serverInfo"></server>
      </li>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";
export default {
  data: function () {
    return {
      serverInfo: ["hello", "hello2", "hello3", "hello4", "hello5"],
      post: {},
    };
  },
  components: {
    server: Server,
  },
  methods: {},
};
</script>

<style scoped>
</style>