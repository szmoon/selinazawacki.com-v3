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
      data: {
        aria: 'Network links window',
        icons: [
          {
            iconName: 'twitter',
            iconAlt: 'Twitter logo',
            iconAria: "Open selina's twitter",
            iconLabel: 'twitter',
            href: 'https://twitter.com/selinazawacki'
          },
          {
            iconName: 'linkedin',
            iconAlt: 'Linkedin logo',
            iconAria: "Open selina's linkedin",
            iconLabel: 'linkedin',
            href: 'https://www.linkedin.com/in/selina-chang-yi-zawacki/'
          },
          {
            iconName: 'github',
            iconAlt: 'Github logo',
            iconAria: "Open selina's github",
            iconLabel: 'github',
            href: 'https://github.com/szmoon'
          }
        ],
        initialPosition: {
          mobile: { top: '150px', left: '150px' },
          desktop: { top: '150px', left: '300px' }
        },
        name: 'network',
        size: {
          mobile: { width: '220px', height: '220px' },
          desktop: { width: '400px', height: '350px' }
        },
        title: 'network'
      },
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
