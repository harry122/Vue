<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>UserName: {{ switchName() }}</p>
        <p>UserAge: {{ userAge }}</p>
        <button @click="resetName">Reset</button>
        <button @click="resetfn">Reset Function</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js'

    export default {
        props:{
            name: {
                type: String
            },
            resetfn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('')
            },
            resetName() {
                this.name = 'Max';
                this.$emit('namewasreset', this.name)
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
