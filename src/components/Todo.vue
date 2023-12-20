<template>
  <div class="todo">
    <h2 class="todo-title" :class="{ crossedOut: todo.crossed }">
      {{ todo.title }}
    </h2>
    <button class="cross-out" @click="crossOut">-</button>
    <button class="delete-todo" @click.prevent="deleteTodo">X</button>
  </div>
</template>

<script>
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
  methods: {
    crossOut() {
      this.$emit("crossingOut", this.index);
      this.todo.crossed = !this.todo.crossed;
      apiService.updateTodo(this.todo).catch((error) => {
        console.log(error);
      });
    },
    deleteTodo() {
      apiService
        .deleteTodo(this.todo.id)
        .then((response) => {
          this.$emit("delete", this.index);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  emits: ["crossingOut", "delete"],
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
