new Vue({
  el: '#exercise',
  data: {
    shrink: false,
    block: 'block',
    sizeUp: 'size-up',
    color: 'purple',
    isActive: false,
    progress: 0,
    styleObject: {
      backgroundColor: 'blue',
      height: '100px',
    },
  },
  methods: {
    startEffect: function() {
      setInterval(() => {
        this.shrink = !this.shrink;
      },1000)
    },
    calculateBar: function() {
      console.log(this.progress)
      this.progress = this.progress + 10;
    }
  }
});
