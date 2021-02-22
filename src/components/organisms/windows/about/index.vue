<template>
  <Window
    aria="About window"
    :initialPosition="initialPosition"
    name="about"
    :size="windowSize"
    title="about"
  >
    <IconList :icon-data="aboutIconData" />
  </Window>
</template>

<script>
import IconList from '~molecules/iconList';
import Window from '~atoms/window';
import aboutIconData from './icons.json';
// import { isMobileDevice } from '~helpers/deviceHelpers.js';

export default {
  name: 'About',
  components: {
    Window,
    IconList
  },
  data() {
    return {
      aboutIconData,
      initialPosition: {
        mobile: { top: '50px', left: '50px' },
        desktop: { top: '100px', left: '200px' }
      },
      windowSize: {
        mobile: { width: '220px', height: '220px' },
        desktop: { width: '400px', height: '350px' }
      }
    };
  },
  computed: {}
};
</script>

<style lang="scss"></style>
