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
let islogin = localStorage.getItem("islogin"); //获取本地登录状态
if(islogin){
    store.commit("loginSuccess")
}
router.beforeEach((to, from, next)=>{
    let logined = store.state.islogin;
    if(to.name=="login"){
        if(!logined){
            next();
        }else{
            router.push('/');
        }
    }else{
        if(!logined){
            router.push('/');
        }else{
            next();
        }
    }
})
