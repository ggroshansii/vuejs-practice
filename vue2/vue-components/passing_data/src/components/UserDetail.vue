<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Username: {{name}}</p>
        <p>Age: {{userAge}}</p>
        <p>Many Details</p>
        <button @click="changeAgain">Change Again</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
    export default {
        data: function() {
            return {
                userAge: 35,
        }
        },
        props: { 
            name: String,
        },
        methods: {
            changeAgain() {
                this.name = "Max"
                this.$emit("nameChanged", this.name)
            }
        },
        created() {
            eventBus.$on('changedAge', (data) => {
                this.userAge = data;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
