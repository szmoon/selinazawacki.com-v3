<template>
  <div
    class="a-window__close-button"
    aria-label="close button"
    @click="closeWindow"
  >
    <font-awesome-icon icon="times" color="white" />
  </div>
</template>

<script>
export default {
  name: 'CloseButton',
  emits: ['closeWindow'],
  methods: {
    closeWindow() {
      this.$emit('closeWindow');
    }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
