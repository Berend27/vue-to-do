<template>
  <div class="todo">
    <h2>{{ todo.title }}</h2>
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
    deleteTodo() {
      apiService
        .deleteTodo(this.todo.id)
        .then((response) => {
          console.log(response);
          this.$emit("delete", this.index);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  emits: ["delete"],
};
</script>

<style scoped>
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
