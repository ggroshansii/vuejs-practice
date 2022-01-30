<template>
<div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change</button>
</div>
</template>

<script>
    export default {
        data: function() {
            return {
                status: 'Critical',
            }
        },
        methods: {
            changeStatus() {
                this.status == 'Not Critical' ? this.status = 'Critical' : this.status = 'Not Critical';
            }
        }
    }
</script>
