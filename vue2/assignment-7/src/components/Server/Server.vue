<template>
  <div @click="showStatus">Server #{{ serverInfo.id }}</div>
</template>

<script>
import { eventBus } from "../../main";
export default {
    props: {
        serverInfo: Object,
    },
    methods: {  
        showStatus() {
            console.log("clicked", this.serverInfo.id);
            eventBus.$emit("showStatus", this.serverInfo.status);
        }
    }
};
</script>

<style scoped>
</style>