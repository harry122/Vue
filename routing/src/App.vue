<template>
  <div id="app">
    <h1>Routing</h1>
    <hr>
    <router-view name="header-top"></router-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="header-bottom"></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appHeader: Header
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

.active {
  background-color: blue;
  padding: 5px 10px;
}

.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards
}

.slide-leave {
  opacity: 1;
  transition: translate(0)
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
}

@keyframes slide-in {
      0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
}
</style>
