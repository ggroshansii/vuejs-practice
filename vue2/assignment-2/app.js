new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert("ALERT!")
            },
            storeInput: function(event) {
                this.value = event.target.value;
            }
        }
    });