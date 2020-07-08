<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input v-model="filterText">
    <ul> 
      <li v-for="(fruit,index) in filterFruits" :key="index">{{fruit}}</li>
    </ul>
    <button @click="fruits.push('berries')">Add New Items</button>
    <hr />
    <app-list></app-list>
  </div>
</template>

<script>
import List from './List'
import { fruitMixins } from './fruitMixins'

export default {
   mixins: [fruitMixins], 
  data () {
    return {
      fruits: ['apple', 'mango', 'orange', 'pineapple'],
      filterText: ""
    }
  },
  // computed: {
  //   filterFruits() {
  //     return this.fruits.filter((element) => {
  //         return element.match(this.filterText)
  //     })
  //   }
  // },
  components: {
    appList: List 
  }, 
  created() {
    console.log("Inside component")
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

