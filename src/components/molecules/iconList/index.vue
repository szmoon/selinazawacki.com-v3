<template>
  <div class="m-icon-list">
    <Icon
      v-for="icon in iconData"
      :key="icon.iconName"
      :alt="icon.iconAlt"
      :aria="icon.iconAria"
      :icon-image="icon.iconImage"
      :icon-name="icon.iconName"
      :label="icon.iconLabel"
      :window-name="icon.windowName"
    />
  </div>
</template>

<script>
import Icon from '~atoms/icon';

export default {
  name: 'IconList',
  components: {
    Icon
  },
  props: {
    iconData: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss"></style>
