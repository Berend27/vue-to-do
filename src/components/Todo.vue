<template>
  <div class="todo">
    <h2>{{ todo.title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
