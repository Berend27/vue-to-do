<template>
  <form id="edit-todo">
    <label>Task<br /><input id="title" name="title" v-model="title" /></label>
    <div>
      <br />
      <button @click.prevent="updateTodo">Speichern</button>
    </div>
  </form>
</template>

<script>
import apiService from "../services/api.js";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: this.todo.title,
    };
  },
  methods: {
    updateTodo() {
      this.todo.title = this.title;
      apiService.updateTodo(this.todo).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
