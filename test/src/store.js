import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:0,
    num:2

  },
  mutations: {// 修改state中的值
    add(state,num){
      state.count+=num;
    },
    reduce(state){
      state.count--;

    }

  },
  getters:{
    sum(state){
      return state.count*state.num;
    }
  },
  actions: {
    addAction({commit}){
      setTimeout(() => {
        //最后还需要调用mutation中的方法修改state
        commit('add',100);
      }, 1000);

    }

  },
});
