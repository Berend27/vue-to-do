<script>
export default {
  props: {
    modalTitle: String,
    show: Boolean,
  },
  methods: {},
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <h1>{{ modalTitle }}</h1>
          <button
            class="Fußzeille-button"
            type="button"
            @click="$emit('close')"
          >
            X
          </button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.modal-header button {
  display: inline-block;
}

.modal-header h1 {
  font-size: 20px;
  margin: 0;
}
</style>
