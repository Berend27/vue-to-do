<template>
  <div class="todo">
    <h2 class="todo-title" :class="{ crossedOut: crossed }">
      {{ todo.title }}
    </h2>
    <button class="cross-out" @click="crossed = !crossed">-</button>
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
  data() {
    return {
      crossed: false,
    };
  },
  methods: {
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
