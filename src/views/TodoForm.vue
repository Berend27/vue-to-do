<template>
  <form id="todo-form">
    <label>Task<br /><input id="title" name="title" v-model="title" /></label>
    <button @click.prevent="postTodo">Addiere</button>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    postTodo() {
      console.log("postTodo\n");
      console.log({ title: this.title });
      // todo: close the modal
    },
  },
};
</script>

<style lang="scss" scoped></style>
