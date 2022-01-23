new Vue({
  el: "#app",
  data: {
    counter: 0,
    secondCounter: 0,
  },
  computed: {
    output: function() {
      console.log("computed")
      return this.counter > 5 ? "Greater 5" : "Smaller than 6";
    }
  },
  watch: {
    counter: function(value) {
      let vm = this;
      setTimeout( () => {
        vm.counter = 0;
      }, 4000)
    }
  },
  methods: {
    result: function() {
      console.log("method")
      return this.counter > 5 ? "Greater 5" : "Smaller than 6";
    }
  }
});
