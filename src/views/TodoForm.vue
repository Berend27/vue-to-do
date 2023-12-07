<template>
  <form id="todo-form">
    <label>Task<br /><input id="title" name="title" v-model="title" /></label>
    <div>
      <br />
      <button @click.prevent="saveTodo">Addiere</button>
    </div>
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
  emits: ["added"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    saveTodo() {
      const id = Math.floor(Math.random() * 10000) + 1;
      api
        .postTodo({ id })
        .then((response) => {
          console.log("Todo added:", response.data);
          this.$emit("added", {
            title: this.title,
            id: id,
          });
        })
        .catch((error) => {
          console.log("Error saving", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#todo-form {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
}
</style>
