<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template> -->

<template>
  <div class="home">
    <h1>Todos for today</h1>
    <Todo
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      @crossingOut="
        (index) => {
          todos[index].crossed = !todos[index].crossed;
        }
      "
      @delete="
        (number) => {
          todos.splice(number, 1);
        }
      "
    />
    <button
      id="show-modal"
      @click="
        showModal = true;
        console.log('+ clicked');
      "
    >
      +
    </button>
    <Teleport to="body">
      <modal
        modalTitle="Add a Todo"
        :show="showModal"
        @close="showModal = false"
      >
        <template #header>
          <h3>Add a Task</h3>
        </template>
        <template #body>
          <TodoForm @added="(todo) => todos.push(todo)" :count="todos.length" />
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Todo from "@/components/Todo.vue";
import TodoForm from "./TodoForm.vue";
import apiService from "@/services/api.js";

export default {
  name: "HomePage",
  components: {
    Modal,
    Todo,
    TodoForm,
  },
  data() {
    return {
      showModal: false,
      todos: [],
    };
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await apiService.getTodos();
        this.todos = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>
