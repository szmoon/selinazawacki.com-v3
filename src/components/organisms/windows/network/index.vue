<template>
  <Window
    aria="Network links window"
    :initialPosition="initialPosition"
    name="network"
    :size="windowSize"
    title="network"
  >
    <IconList :icon-data="networkIconData" />
  </Window>
</template>

<script>
import IconList from '~molecules/iconList';
import Window from '~atoms/window';
import networkIconData from './icons.json';

export default {
  name: 'Network',
  components: {
    Window,
    IconList
  },
  data() {
    return {
      networkIconData,
      initialPosition: {
        mobile: { top: '150px', left: '150px' },
        desktop: { top: '150px', left: '300px' }
      },
      windowSize: {
        mobile: { width: '220px', height: '220px' },
        desktop: { width: '400px', height: '350px' }
      }
    };
  }
};
</script>

<style lang="scss"></style>
