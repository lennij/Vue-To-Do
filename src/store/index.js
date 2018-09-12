import Vue from 'vue'
import Vuex from '/node_modules/vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    addFixedAmount(state, data){
      state.count = state.count + data;
    }
  }
})

export default{
    store,
}
