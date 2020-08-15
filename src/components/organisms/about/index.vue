<template>
  <IconAndWindow
    icon="folder-pink"
    icon-alt="Pink Folder Icon"
    icon-aria="Open about window"
    icon-name="about"
    window-name="about"
    window-aria="About window"
    window-title="about"
  >
    <template v-slot:windowContent>
      about window content
    </template>
  </IconAndWindow>
</template>

<script>
import IconAndWindow from '~molecules/iconAndWindow';

export default {
  name: 'About',
  components: {
    IconAndWindow
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss"></style>
