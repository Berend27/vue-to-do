<template>
  <form id="todo-form">
    <label>Task<br /><input id="title" name="title" v-model="title" /></label>
    <button @click.prevent="saveTodo">Addiere</button>
  </form>
</template>

<script>
import api from "@/services/api.js";
export default {
  name: "TodoForm",
  props: {
    count: Number,
    showModal: Boolean,
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    saveTodo() {
      api
        .postTodo({ title: this.title, id: this.count + 1 })
        .then((response) => {
          console.log("Todo added:", response.data);
          this.$emit("update:showModal", !this.showModal); // todo: fix this
        })
        .catch((error) => {
          console.log("Error saving", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
