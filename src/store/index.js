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
        'title': 'Vuex store integration',
        'completed': false,
        'editing': false,
      },
      {
        'id':2,
        'title': 'Work on todo app',
        'completed':false,
        'editing': false,
      },
      {
        'id':3,
        'title': 'REST API implementation',
        'completed':false,
        'editing': false,
      },
    ]
  },
  mutations: {
    checkAllTodos(state, checked){
    state.todos.forEach((todo) => todo.completed = event.target.checked );
    },
    filterChanged(state, filter){
      state.filter = filter;
    },
    removedTodo (state, index) {
      state.todos.splice(index,1);
    },
    finishedEdit(state, data){
      state.todos.findIndex(item => item.id == data.id);
      state.todos.splice(data.index, 1, data.todo);
    },
    increment (state) {
      state.count++;
    },
    addFixedAmount(state, data){
      state.count = state.count + data;
    },
    clearCompletedTodos(state){
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    editTodo(state, index){
      state.todos[index].editing = true;
    },

  },
  getters:{
    todosFiltered: state => {
      if(state.filter === 'all'){
         return state.todos;
      }else if (state.filter === 'active') {
         return state.todos.filter(todo => !todo.completed);
      }else if (state.filter === 'completed') {
         return state.todos.filter(todo => todo.completed);
      }
      return state.todos;
    }
  }

})
