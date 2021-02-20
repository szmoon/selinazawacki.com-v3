<template>
  <div class="m-icon-and-window">
    <Window
      aria="About window"
      :initialPosition="{ top: 50, left: 400 }"
      name="about"
      title="about"
    >
      <Icon
        v-for="icon in aboutIconData"
        :key="icon.iconName"
        :icon-image="icon.iconImage"
        :icon-name="icon.iconName"
        :label="icon.iconLabel"
        :alt="icon.iconAlt"
        :aria="icon.iconAria"
        :window-name="icon.windowName"
      />
    </Window>
  </div>
  <!-- <IconAndWindow
    icon-name="folder-pink"
    icon-alt="Pink Folder Icon"
    icon-aria="Open about window"
    icon-label="about"
    window-name="about"
    window-aria="About window"
    :window-position="{ top: 50, left: 400 }"
    window-label="about"
  >
    <template v-slot:windowContent>
      <AboutImg />
    </template>
  </IconAndWindow> -->
</template>

<script>
import Icon from '~atoms/icon';
import Window from '~atoms/window';
import aboutIconData from '~data/aboutIcons.json';

export default {
  name: 'About',
  components: {
    Window,
    Icon
  },
  data() {
    return {
      aboutIconData,
      isOpen: false
    };
  }
};
</script>

<style lang="scss"></style>
