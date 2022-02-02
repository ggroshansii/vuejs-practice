<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5" v-bind:key="index">
        <server :serverInfo="servers[index-1]"></server>
      </li>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";
export default {
  data: function() {
      return {
      servers: [
          {id: 1, status: 'normal'},
          {id: 2, status: 'critical'},
          {id: 3, status: 'normal'},
          {id: 4, status: 'offline'},
          {id: 5, status: 'critical'},
      ],
      hello: "Hello",
      }
  },

    //   currentServer: {
    //       id: null,
    //       status: "",
    //   }

  components: {
    Server,
  },
//   methods: {
//       passServerData(index) {
//           this.servers.forEach(serverObj => {
//           if (serverObj.id === index) {
//           currentServer.status = servers[index].status;
//           currentServer.id = servers[index].status;
//           }

//           })
//       }
//   }
};
</script>

<style>
</style>
