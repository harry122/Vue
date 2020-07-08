<template>
    <div>
        <button @click="increment(10)">Increment</button>
        <button @click="decrement(10)">Decrement</button>
    </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex' 

export default {
  
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions([
            'increment',
            'decrement'
        ]),
        // ...mapMutations([
        // 'asyncIncrement',
        // 'asyncDecrement'
        // ]),
        // increment(by) {
        //     this.$store.dispatch('increment', by)
        // },
        // decrement(by) {
        //     this.$store.dispatch('decrement', by)
        // }
        // increment() {
        //     this.$store.state.counter++;
        // },
        // decrement() {
        //      this.$store.state.counter--;
        // }
    }
}
</script>


