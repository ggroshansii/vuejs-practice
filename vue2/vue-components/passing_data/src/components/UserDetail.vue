<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Username: {{name}}</p>
        <p>Many Details</p>
        <button @click="changeAgain">Change Again</button>
    </div>
</template>

<script>
    export default {
        props: { 
            name: String,
        },
        methods: {
            changeAgain() {
                this.name = "Max"
                this.$emit("nameChanged", this.name)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
