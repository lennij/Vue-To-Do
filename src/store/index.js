import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    filter:'all',
    todos:[
      {
        'id': 1,
        'title': 'work with vuex store',
        'completed': false,
        'editing': false,
      },
      {
        'id':2,
        'title': 'color todos button',
        'completed':false,
        'editing': false,
      },
    ]
  },
  getters:{

  },
  mutations: {
    increment (state) {
    state.count++;
    },
    addFixedAmount(state, data){
    state.count = state.count + data;
    }
  },

})
