new Vue({
  el: "#app",
  data: {
    counter: 0,
    x: "",
    y: "",
  },
  methods: {
    increase: function(increment) {
      return this.counter = this.counter + increment;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert('alert!')
    }

  }
});
