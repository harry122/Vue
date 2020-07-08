import Vue from 'vue'
import App from './App.vue'
import VueResorce from 'vue-resource'

Vue.use(VueResorce);

Vue.http.options.root = 'https://dasboard-a9121.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    if (request.method == 'POST') {
        request.method = "PUT"
    }
    next(response => {
        response.json = () => {
            return { messages: response.body }
        }
    })
})

new Vue({
    el: '#app',
    render: h => h(App)
})