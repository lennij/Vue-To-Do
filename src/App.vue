<template>
  <div id="app" class="container">
    <img src="./assets/Ma-icon-bluesmall.png" class="logo">
    <todo-list></todo-list>
  </div>
</template>

<script>

import TodoList from './components/TodoList';

export default {
  name: 'app',
  components:{
    TodoList,
  }
}
</script>

<style>

*{
  box-sizing: border-box;
}

.container{
  max-width:600px;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
  border: 1px solid #cdcdcd;
  padding: 50px;
  border-radius: 10px;
}

.logo{
  display:block;
  margin: 20px auto;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
