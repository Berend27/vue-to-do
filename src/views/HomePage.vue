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
    <button id="show-modal" @click="showModal = true; console.log('+ clicked');">+</button>
    <Teleport to="body">
      <modal knopftext="Addiere" :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Add a Task</h3>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Todo from "@/components/Todo.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    Modal,
    Todo,
  },
  data() {
    return {
      showModal: false,
      todos: null,
    };
  },
  methods: {

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
