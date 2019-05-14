import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resp: null,
      islogin: false,

  },
  mutations: {
    resp(state, val) {
      state.resp = val
      console.log(state.resp)
    },
      loginSuccess(state){ //登录成功，改变登录状态为true
          state.islogin = true;
      }
  },
  actions: {
  	getData(){
//		console.log(this)
			this._vm.$axios.get("/data/index")
			.then(res=>{
//     	console.log(res)
//     	let val=res
       	this.commit('resp',res.data)
      })
  	}
  }
})
