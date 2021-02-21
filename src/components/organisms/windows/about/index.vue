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

export default {
  name: 'About',
  components: {
    Window,
    IconList
  },
  data() {
    return {
      aboutIconData
    };
  },
  computed: {
    initialPosition() {
      return { top: '10%', left: '10%' };
    },
    windowSize() {
      // turn these into devices helpers
      //   console.log('this.window.width', window.innerWidth);
      let width = window.innerWidth;
      if (width <= 767) {
        return { width: '300px', height: '300px' };
      }
      return { width: '500px', height: '400px' };
    }
  }
};
</script>

<style lang="scss"></style>
