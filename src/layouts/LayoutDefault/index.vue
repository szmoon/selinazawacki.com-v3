<template>
  <div class="l-layout-default">
    <router-view />
    <div class="l-layout-default__icon-container">
      <IconList :icon-data="iconData" modifier="vertical" />
      <AboutWindow />
      <!-- <AboutImgWindow /> -->
      <AboutTxtWindow />
      <ContactWindow />
      <NetworkWindow />
      <template v-for="window in windowData">
        <WindowWithContent :key="window.name" :data="window" />
      </template>
    </div>
    <Taskbar />
  </div>
</template>

<script>
import WindowWithContent from '~molecules/windowWithContent';

import AboutWindow from '~organisms/windows/about';
import AboutImgWindow from '~organisms/windows/aboutImg';
import AboutTxtWindow from '~organisms/windows/aboutTxt';
import ContactWindow from '~organisms/windows/contact';

import NetworkWindow from '~organisms/windows/network';
import IconList from '~molecules/iconList';
import Taskbar from '~globals/taskbar';
import iconData from '~data/home/icons.json';
import windowData from '~data/windows.json';

export default {
  name: 'LayoutDefault',
  components: {
    WindowWithContent,
    AboutImgWindow,
    AboutWindow,
    AboutTxtWindow,
    ContactWindow,
    IconList,
    NetworkWindow,
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
