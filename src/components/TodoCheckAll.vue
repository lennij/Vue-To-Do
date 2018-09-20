<template>
  <div>
    <label><input type="checkbox" :checked="!anyRemaining"
       @change="allChecked">
      Select all</label>
  </div>
</template>

<script>
  export default{
    name: 'todo-check-all',
    props: {
        anyRemaining:{
          type: Boolean,
          required: true,
        }
    },
    methods:{
      allChecked(){
        this.$store.commit('checkAllTodos', this.anyRemaining);
      }
    }
  }
</script>
