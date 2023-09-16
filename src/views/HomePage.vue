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
    this.todos = [];
  },
};
</script>
