import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import chart from '@/components/chart.vue'
import home from '@/components/home.vue'
import user from '@/components/user.vue'
import list from '@/components/list.vue'

Vue.use(Router)

var go
if (window.localStorage.go) {
    //匹配成功  go传进 '/index'
    go = window.localStorage.go
    console.log(8);
} else {
    go = 'asd'
    console.log(9);
}
export default new Router({
    routes: [
        {path: '/', name: 'login', component: login },
        {
            path: go, name: 'index', component: index, children: [{
                name: 'user',
                path: go+'/user',
                component: user
            },
                {
                    path: go+'/home', name: 'home', component: home
                },
                {
                    path: go+'/chart', name: 'chart', component: chart
                },
                {
                    path: go+'/list', name: 'list', component: list
                },
                {
                    path: go, // 默认进入路由
                    redirect: go+'/user' //重定向
                }]
        },

        {path: '*',redirect: '/' },
    ],
    mode: 'history'
})
