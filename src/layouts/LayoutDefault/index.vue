<template>
  <div class="l-layout-default">
    <router-view />
    <div class="l-layout-default__icon-container">
      <Icon
        v-for="icon in iconData"
        :key="icon.iconName"
        :icon-image="icon.iconImage"
        :icon-name="icon.iconName"
        :label="icon.iconLabel"
        :alt="icon.iconAlt"
        :aria="icon.iconAria"
        :window-name="icon.windowName"
      />
      <AboutWindow />
      <AboutImgWindow />
    </div>
    <Taskbar />
  </div>
</template>

<script>
import AboutWindow from '~organisms/windows/about';
import AboutImgWindow from '~organisms/windows/aboutImg';
import Icon from '~atoms/icon';
import Taskbar from '~globals/taskbar';
import iconData from '~data/icons.json';

export default {
  name: 'LayoutDefault',
  components: {
    AboutImgWindow,
    AboutWindow,
    Icon,
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
