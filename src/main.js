import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/CSS/reset.css'
import echarts from 'echarts'
import axios from 'axios'
//import Mock from 'mock'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
require('@/mock.js')
Vue.prototype.$axios=axios

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
//var Mock = require('mockjs')
// var data =new Mock.mock("/data.cn", "get", {
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'data|8': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1,
//         'name': '@cname',
//         'sex|1': ['男', '女'],
//         'age|16-48': 0,
//         'time': '@date()',
//         'city': '@city(true)'
//     }]
// })
// 输出结果
// console.log(Mock);
// console.log(JSON.stringify(data, null, 4))


// refresh()
// window.onresize = function () {
//   setTimeout(function () {
//     refresh()
//   }, 10)
// }
//
// function refresh() {
//   let deviceWidth = document.documentElement.clientWidth;
//   if (deviceWidth > 1200) {
//     document.documentElement.style.fontSize = 1200 / 12 + "px"
//   } else {
//     document.documentElement.style.fontSize = deviceWidth / 7.5 + "px"
//   }
// }



// router.beforeEach((to, from, next) => {
//     /*判断下一个路由是否需要登录，对其进行验证*/
//     if ('auth' in to.meta && to.meta.auth === true) {
//         //判断用户是否登录 hasAuth....
//         if (hasAuth) {
//             /*如果已经登录，可以进入页面*/
//             next()
//         } else {
//             next({
//                 name: 'login', //登录注册页
//                 query: {
//                     redirect_url: to.fullPath
//                 }
//             })
//         }
//         if (this.$route.query.redirect_url) {
//             this.$router.replace({
//                 path: this.$route.query.redirect_url
//             })
//         } else {
//             this.$router.replace({
//                 name: 'index'
//             })
//         }
//     }
//     next()
// })
