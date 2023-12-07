<template>
  <div class="todo">
    <h2>{{ todo.title }}</h2>
    <button class="delete-todo" @click="$emit('delete', index)">X</button>
  </div>
</template>

<script>
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
