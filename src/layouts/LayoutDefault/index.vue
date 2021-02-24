<template>
  <div class="l-layout-default">
    <router-view />
    <div class="l-layout-default__icon-container">
      <IconList :icon-data="iconData" modifier="vertical" />
      <template v-for="window in windowData">
        <WindowWithContent :key="window.name" :data="window" />
      </template>
    </div>
    <Taskbar />
  </div>
</template>

<script>
import WindowWithContent from '~molecules/windowWithContent';
import IconList from '~molecules/iconList';
import Taskbar from '~globals/taskbar';
import iconData from '~data/home/icons.json';
import windowData from '~data/windows.json';

export default {
  name: 'LayoutDefault',
  components: {
    WindowWithContent,
    IconList,
    Taskbar
  },
  data() {
    return {
      iconData,
      windowData
    };
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
