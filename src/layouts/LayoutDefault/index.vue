<template>
  <div class="l-layout-default">
    <router-view />
    <div class="l-layout-default__icon-container">
      <IconList :icon-data="iconData" />
      <AboutWindow />
      <AboutImgWindow />
    </div>
    <Taskbar />
  </div>
</template>

<script>
import AboutWindow from '~organisms/windows/about';
import AboutImgWindow from '~organisms/windows/aboutImg';
import IconList from '~molecules/iconList';
import Taskbar from '~globals/taskbar';
import iconData from '~data/home/icons.json';

export default {
  name: 'LayoutDefault',
  components: {
    AboutImgWindow,
    AboutWindow,
    IconList,
    Taskbar
  },
  data() {
    return {
      iconData
    };
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
