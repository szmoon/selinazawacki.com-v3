<template>
  <div
    class="a-window__close-button"
    aria-label="close button"
    @click="emit('closeWindow')"
  >
    <font-awesome-icon icon="times" color="white" />
  </div>
</template>

<script setup>
const emit = defineEmits(['closeWindow']);
</script>

<style lang="scss">
@import './index.scss';
</style>
