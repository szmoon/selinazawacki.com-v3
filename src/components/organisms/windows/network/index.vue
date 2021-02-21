<template>
  <Window
    aria="Network links window"
    :initialPosition="{ top: 150, left: 300 }"
    name="network"
    :size="{ width: '400px', height: '350px' }"
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
      networkIconData
    };
  }
};
</script>

<style lang="scss"></style>
