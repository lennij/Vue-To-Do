<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="todo.completed" @change = "doneEdit(index, todo.title)" >
      <div v-if="!todo.editing" @dblclick="editTodo(index, todo.title)" class="todo-item-label"
      :class="{ 'completed' : todo.completed }">
        {{ todo.title }}
      </div>
      <input v-else class="todo-item-edit" type="text" v-model="todo.title"
      @blur="doneEdit(index, todo.title)" @keyup.enter="doneEdit(index, todo.title)"
      @keyup.escape="cancelEdit" v-focus>
    </div>

    <div class="remove-item" @click="removeTodo(index)">
      &times;
    </div>

  </div>
</template>

<script>
  export default {
    name: 'todo-item',
    props: {
      todo: {
        type: Object,
        required: true,
      },
      index:{
        type: Number,
        required: true,
      },
      checkAll:{
        type: Boolean,
        required: true,
      }
    },
    data () {
      return {
        beforeEditCache:'',
      };
    },

    watch:{
      checkAll() {
        if(this.checkAll){
          this.completed = true
        }else{
          this.completed = this.todo.completed;
        }
      }
    },
    directives: {
      focus: {
        // directive definition
        inserted: function (el) {
          el.focus()
        }
      }
    },
    methods: {
      removeTodo(index){
        this.$store.commit('removedTodo', index);
      },
      editTodo(index, cachedTitle){
        this.beforeEditCache = cachedTitle;
        this.$store.commit('editTodo', index);
      },
      doneEdit(index, title){
        var titel = title;
        if(this.$store.state.todos[index].editing === false){
          return;
        }
        if(title === ''){
          titel = this.beforeEditCache;
          console.log(titel);
        }

        this.$store.commit('finishedEdit',
        {
          'index': index,
          'todo' :{
            'id': this.$store.state.todos[index].id,
            'title': titel,
            'completed': this.$store.state.todos[index].completed,
            'editing': false,
          }
        });
      },
      cancelEdit(){
        this.editing = false;
        this.title = this.beforeEditCache;
      },
    },

  }
</script>
