<template>
  <button v-if='showClearCompletedButton' @click="clearCompleted">Clear Completed</button>
</template>

<script>
  export default{
    name: 'todo-clear-completed',
    methods:{
      showClearCompletedButton(){
      this.$store.state.todos.filter(todo => todo.completed).length > 0;
      },
      clearCompleted(){
        this.$store.commit('clearCompletedTodos');
      }
    }
  }
</script>
