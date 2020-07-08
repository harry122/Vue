<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p v-hightlight:background.delayed="'red'">Hello i am global directive</p>
    <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'blue', delay: 500}">Hello i am local directive</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
         var delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 3000;
        }
        if(binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                 currentColor = currentColor == secondColor ? mainColor : secondColor
                 if(binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
                 }
                 else {
                el.style.color = currentColor
            }
              }, binding.value.delay);     
        }, delay)
        } else {
        setTimeout(() => {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.delay.mainColor;
            } else {
                el.style.color = binding.value.mainColor
            }
        }, delay)
        }
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
</style>
