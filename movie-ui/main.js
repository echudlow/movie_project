import Vue from 'vue'
import App from './App.vue'
import router from './router/app'
import axios from 'axios'


axios.defaults.baseURL = process.env.VUE_APP_REMOTE_API;

new Vue({
    router,
    render: h=> h(App)
}).$mount('#app')