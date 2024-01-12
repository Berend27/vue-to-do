<template>
  <div class="todo">
    <h2 class="todo-title" :class="{ crossedOut: todo.crossed }">
      {{ todo.title }}
    </h2>
    <button class="edit" @click="edit"><i class="bi bi-pencil"></i></button>
    <button class="cross-out" @click="crossOut">-</button>
    <button class="delete-todo" @click.prevent="deleteTodo">X</button>
    <Teleport to="body">
      <modal
        modalTitle="Edit Todo"
        :show="showModal"
        @close="showModal = false"
      >
        <template #header>
          <h3>Why doesn't this show up?</h3>
        </template>
        <template #body>
          <EditTodo :todo="todo" />
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import EditTodo from "@/views/EditTodo";
import Modal from "@/components/Modal.vue";
// import TodoForm from "./TodoForm.vue";
import apiService from "../services/api.js";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  components: {
    EditTodo,
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    crossOut() {
      this.todo.crossed = !this.todo.crossed;
      apiService.updateTodo(this.todo).catch((error) => {
        console.log(error);
      });
    },
    deleteTodo() {
      apiService
        .deleteTodo(this.todo.id)
        .then((_response) => {
          this.$emit("delete", this.index);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    edit() {
      this.showModal = true;
    },
  },
  emits: ["delete"],
};
</script>

<style scoped>
.crossedOut {
  text-decoration: line-through;
}
.todo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
.todo > * {
  display: inline-block;
}
</style>
