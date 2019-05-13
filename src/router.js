import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import chart from '@/components/chart.vue'
import home from '@/components/home.vue'
import user from '@/components/user.vue'
import list from '@/components/list.vue'

Vue.use(Router)

// router.beforeEach((to, from, next) => {
//     console.log(store.state.token)
//     // to: Route: 即将要进入的目标 路由对象
//     // from: Route: 当前导航正要离开的路由
//     // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//     const route = ['index', 'list'];
//     let isLogin = store.state.token;  // 是否登录
//     // 未登录状态；当路由到route指定页时，跳转至login
//     if (route.indexOf(to.name) >= 0) {
//         if (isLogin == null) {
//             router.push({ path: '/login', });
//         }
//     }
//     // 已登录状态；当路由到login时，跳转至home
//     console.log(to.name)
//     localStorage.setItem('routerName', to.name)
//     if (to.name === 'login') {
//         if (isLogin != null) {
//             router.push({ path: '/HomeMain', });;
//         }
//     }
//     next();
// });
var go
console.log(this)
if (window.localStorage.go) {
    //匹配成功  go传进 '/index'
    go = window.localStorage.go
    console.log(8);
} else {
    go = '/index'
    console.log(9);
}
export default new Router({
    routes: [
        {path: '/', name: 'login', component: login },
        {
            path: go, name: 'index', component: index, children: [{
                name: 'user',
                path: go+'/user',
                component: () => import ('@/components/user'),
                // component: user
            },
                {
                    path: go+'/home', name: 'home',component: () => import ('@/components/home'), //component: home
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
