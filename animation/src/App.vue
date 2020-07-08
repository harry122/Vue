<template>
  <div id="app">
    <h1>Animation</h1>
      <button @click="show = !show">Click</button>
      <br>
      <transition name="fade">
          <div v-if="show">this is some Info</div>
      </transition>

      <transition name="slide" type="animation">
          <div v-if="show">this is some Info</div>
      </transition>

      <transition name="fade" appear>
          <div v-show="show">this is some Info</div>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     show: true
    }
  }
}
</script>

<style>
  .fade-enter {
      opacity: 0;
  }
  .fade-enter-active {
      transition: opacity 1s;
  }

  .fade-leave {
      /* opacity: 1; */
  }

  .fade-leave-active {
      transition: opacity 1s;
      opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 2s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1sec ease-out forwards;
    transition: opacity 1;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateX(20px);
    }
  }

  
  @keyframes slide-in {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
