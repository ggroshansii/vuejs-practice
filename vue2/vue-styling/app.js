new Vue({
  el: "#app",
  data: {
    attachRed: false,
    color: "",
    width: ""
  },
  methods: {

  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + "px"
      }
    }
  }
});
