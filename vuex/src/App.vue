<template>
  <div id="app">
   <app-counter></app-counter>
   <another-result></another-result>
   <app-result></app-result>
   <another-counter></another-counter>
   <hr>
   <input type="text" v-model="value">
   {{value}}
  </div>
</template>

<script>
import Counter from './components/Counter'
import Result from './components/Result'
import AnotherResult from './components/AnotherResult'
import AnotherCounter from './components/AnotherCounter'

export default {
  name: 'app',
  components: {
    appCounter: Counter,
    appResult: Result,
    anotherResult: AnotherResult,
    AnotherCounter
  },
  computed: {
    value: {
      get() {
        return this.$store.getters.value
      },
      set(value) {
         this.$store.dispatch('updateValue', value)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
