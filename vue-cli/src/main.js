import Vue from 'vue'
import App from './components/server/App.vue'
import Home from './components/server/Home.vue'

Vue.component('app-servers', Home)

new Vue({
    el: '#app',
    render: h => h(App)
})