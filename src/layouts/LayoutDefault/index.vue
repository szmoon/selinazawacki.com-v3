<template>
  <div class="l-layout-default">
    <router-view />
    <div class="l-layout-default__icon-container">
      <Icon icon="folder-pink" name="about" alt="Pink Folder Icon" />
    </div>
    <Taskbar />
    <Window name="about" aria="About window" />
  </div>
</template>

<script>
import Icon from '~atoms/icon';
import Taskbar from '~globals/taskbar';
import Window from '~atoms/window';

export default {
  name: 'LayoutDefault',
  components: {
    Icon,
    Taskbar,
    Window
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
