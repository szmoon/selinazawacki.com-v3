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
// import { isMobileDevice } from '~helpers/deviceHelpers.js';

export default {
  name: 'About',
  components: {
    Window,
    IconList
  },
  data() {
    return {
      data: {
        aria: 'About window',
        icons: [
          {
            iconImage: 'selina',
            iconAlt: 'Photo of Selina',
            iconAria: 'Open selina.png window',
            iconLabel: 'selina.png',
            windowName: 'aboutImg'
          },
          {
            iconName: 'txt',
            iconAlt: 'Notepad icon',
            iconAria: 'Open about.txt window',
            iconLabel: 'about.txt',
            windowName: 'aboutTxt'
          }
        ],
        initialPosition: {
          mobile: { top: '50px', left: '50px' },
          desktop: { top: '8%', left: '20%' }
        },
        name: 'about',
        size: {
          mobile: { width: '220px', height: '220px' },
          desktop: { width: '400px', height: '350px' }
        },
        title: 'about!'
      },
      aboutIconData,
      initialPosition: {
        mobile: { top: '50px', left: '50px' },
        desktop: { top: '8%', left: '20%' }
      },
      windowSize: {
        mobile: { width: '220px', height: '220px' },
        desktop: { width: '400px', height: '350px' }
      }
    };
  },
  computed: {}
};
</script>

<style lang="scss"></style>
