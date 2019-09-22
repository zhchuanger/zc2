import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"电影",
    color:"#ff5722"

  },
  mutations: {
    change(state,arg){
      state.title = arg.title;
      state.color = arg.color;
    }

  },
  actions: {

  }
})
