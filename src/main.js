import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import store from './store/index.js';

Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
