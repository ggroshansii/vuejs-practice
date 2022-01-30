<template>
  <div class="container">
    <page-header></page-header>
    <hr />
    <div class="row">
      <server-list></server-list>
      <server-details></server-details>
    </div>
    <hr />
    <div class="row">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import ServerList from "./components/ServerList.vue";
import ServerDetails from "./components/ServerDetails.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    "server-list": ServerList,
    "server-details": ServerDetails,
    "page-header": Header,
    "page-footer": Footer,
  },
};
</script>

<style>
</style>
