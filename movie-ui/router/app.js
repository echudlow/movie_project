import Vue from 'vue'
import Router from 'vue-router'

const routes=[
    {path:'/home', component:home},
    {path:'/movies', component:movies}
]

const router = new Router({
    routes
})

const app = new Vue({
    router
}).$mount('#App')