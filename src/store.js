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
    }
  },
  actions: {
  }
})
