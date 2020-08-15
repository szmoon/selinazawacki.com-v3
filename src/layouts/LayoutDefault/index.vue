<template>
  <div class="l-layout-default">
    <router-view />
    <div class="l-layout-default__icon-container">
      <About />
    </div>
    <Taskbar />
  </div>
</template>

<script>
import About from '~organisms/about';
import Taskbar from '~globals/taskbar';

export default {
  name: 'LayoutDefault',
  components: {
    About,
    Taskbar
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
