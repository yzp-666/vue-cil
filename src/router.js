import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import chart from '@/components/chart.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'login', component: login},
        {path: '*', redirect: '/'},
        {path: '/index', name: 'index', component: index},
        {path: '/chart', name: 'chart', component: chart}

    ],
    mode: 'history'
})
