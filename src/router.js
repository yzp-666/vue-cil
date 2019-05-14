import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import chart from '@/components/chart.vue'
import home from '@/components/home.vue'
import user from '@/components/user.vue'
import list from '@/components/list.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {path: '/', name: 'login', component: login },
        {
            path: '/index', name: 'index', component: index, children: [{
                name: 'user',
                path: '/index/user',
                component: () => import ('@/components/user'),
            },
                {
                    path: '/index/home', name: 'home',component: () => import ('@/components/home'), //component: home
                },
                {
                    path: '/index/chart', name: 'chart', component: chart
                },
                {
                    path: '/index/list', name: 'list', component: list
                },
                {
                    path: '/index', // 默认进入路由
                    redirect: '/index/user' //重定向
                }]
        },

        {path: '*',redirect: '/' },
    ],
    mode: 'history'
})
