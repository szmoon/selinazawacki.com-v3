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
import '~atoms/fontAwesomeIcons';

export default {
  name: 'CloseButton',
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
