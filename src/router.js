import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
///////////修改第一次

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'login', component: login},
    { path: '*', redirect: '/'}
  ],
  mode: 'history'
})
