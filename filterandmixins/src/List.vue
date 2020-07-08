<template>
  <div id="app">  
      <p>{{ msg | to-lowercase | toUppercase }}</p>
    <input v-model="filterText">
    <ul> 
      <li v-for="(fruit,index) in filterFruits" :key="index">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixins } from './fruitMixins'
export default {
    mixins: [fruitMixins],
    created() {
        console.log('INside List')
    },
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

