<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{upperCase(status)}}</p>
        <!-- <p v-if="status !== null">Server Details are currently not updated</p>
        <p v-else>{{status}}</p> -->
    </div>

</template>

<script>
import { eventBus } from "../../main";
export default {
    data: 
        function() {
            return {
                status: "Server Details are currently not updated"
            }
        }
    ,
    methods: {
        upperCase(word) {
            return word.slice(0,1).toUpperCase() + word.slice(1);
        }
    },
    created() {
        eventBus.$on("showStatus", (statusChange) => {
            console.log('fired')
            console.log(statusChange)
            this.status = statusChange;
        })
    }
}
</script>

<style>

</style>
