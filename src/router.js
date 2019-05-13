import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import chart from '@/components/chart.vue'
import home from '@/components/home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'login', component: login},
        {
            path: '/index', name: 'index', component: index, children: [{
                name: 'home',
                path: '/index/home',
                component: home
            },
                {
                    path: '/index/chart', name: 'chart', component: chart
                },
                {
                    path: '/index', // 默认进入路由
                    redirect: '/index/home' //重定向
                }]
        },
        ,
        {path: '*', name: 'login', component: login},
    ],
    mode: 'history'
})
