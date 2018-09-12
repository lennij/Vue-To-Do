import Vue from 'vue'
import Vuex from '/node_modules/vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default{
    store,
}

//export default new Vuex.Store();
