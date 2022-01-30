<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> 
    <h1>Server Status: {{status}}</h1> -->
    <app-server-status></app-server-status>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }

  data: function() {
    return {
      status: 'Critical',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
