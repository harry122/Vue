<template>
    <div>
        <button @click="asyncIncrement({by:10, duration: 1000})">Increment</button>
        <button @click="asyncDecrement({by:10, duration: 1000})">Decrement</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
        ])
        // increment() {
        //     this.$store.commit('increment')
        // },
        // decrement() {
        //      this.$store.commit('decrement')
        // }
    }
}
</script>


