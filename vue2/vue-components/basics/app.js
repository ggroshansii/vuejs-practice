
let myCmp = {
    data: function () {
      return {
          status: 'Critical'
      };
    },
    template: "<template><p>Server Status: {{ status }} <button @click='changeStatus'>Change</button> </p></template>",
    methods: {
        changeStatus: function() {
            this.status = 'changed'
        }
    }
  };

new Vue({
  el: "#app",
  components: {
      'my-cmp': myCmp,
  }
});

new Vue({
  el: "#app2",
});

