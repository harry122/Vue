import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', value => {
    return value.toUpperCase()
})

Vue.mixin({
    created() {
        console.log("global MIxin- created hook")
    },
})

new Vue({
    el: '#app',
    render: h => h(App)
})