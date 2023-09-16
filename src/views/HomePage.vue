<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template> -->

<template>
  <div class="home">
    <h1>Todos for today</h1>
    <Todo v-for="todo in todos" :key="todo.title" :todo="todo" />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    Todo,
  },
  data() {
    return {
      todos: null,
    };
  },
  created() {
    axios
      .get("https://my-json-server.typicode.com/Berend27/vue-to-do/todos")
      .then((response) => {
        this.todos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
