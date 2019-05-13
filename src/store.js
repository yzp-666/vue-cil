import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resp: null
  },
  mutations: {
    resp(state, val) {
      state.resp = val
      console.log(state.resp)
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
