<template>
  <Window
    aria="About window"
    :initialPosition="{ top: 50, left: 400 }"
    name="about"
    :size="{ width: '500px', height: '400px' }"
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
  }
};
</script>

<style lang="scss"></style>
