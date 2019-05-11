import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'login', component: login},
        {path: '*', redirect: '/'},
        {path: '/index', name: 'index', component: index}
    ],
    mode: 'history'
})
