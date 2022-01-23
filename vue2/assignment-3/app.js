new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function() {
                let msg; 
                this.value !== 37 ? msg = "not there yet" : msg = "done!";
                return msg;
            }
        },
        watch: {
            result: function() {
                let vm = this;
                setTimeout(()=> {
                    vm.value = 0;
                }, 5000)
            }
        }
    });