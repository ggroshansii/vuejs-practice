<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{userAge}}</p>
        <button @click="changeTo40">Change Age to 40</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    data: function() {
        return {
            userAge: 30
        }
    },
    methods: {
        changeTo40() {
            this.userAge = 40;
            eventBus.$emit("changedAge", this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
