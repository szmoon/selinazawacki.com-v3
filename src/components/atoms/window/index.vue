<template>
  <div class="a-window" :aria-label="aria">
    <!-- top bar -->
    <div class="a-window__top-bar">
      {{ name }}
      <!-- close button -->
      <div class="a-window__close-button" aria-label="close button">
        <font-awesome-icon icon="times" color="white" />
      </div>
    </div>
    <!-- menu -->
    <div class="a-window__menu-bar">
      <span>File</span>
      <span>Home</span>
      <span>Share</span>
      <span>View</span>
      <span>Manage</span>
    </div>
    <!-- window content -->
    <div class="a-window__content">
      window content
    </div>
  </div>
</template>

<script>
import '~atoms/fontAwesomeIcons';
export default {
  name: 'Window',
  props: {
    aria: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {}
};
</script>

<style lang="scss">
@import './index.scss';
</style>
