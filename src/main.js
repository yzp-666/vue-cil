import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import reset from './CSS/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')

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
