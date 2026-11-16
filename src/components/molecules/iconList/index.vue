<template>
  <div :class="classes">
    <Icon
      v-for="icon in iconData"
      :key="icon.iconName"
      :alt="icon.iconAlt"
      :aria="icon.iconAria"
      :href="icon.href"
      :icon-image="icon.iconImage"
      :icon-name="icon.iconName"
      :label="icon.iconLabel"
      :window-name="icon.windowName"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Icon from '~atoms/icon';

const props = defineProps({
  iconData: {
    type: Array,
    required: true
  },
  modifier: {
    type: String,
    default: 'horizontal',
    validator(value) {
      return ['horizontal', 'vertical'].indexOf(value) !== -1;
    }
  }
});

const classes = computed(() => [
  'm-icon-list',
  `m-icon-list--${props.modifier}`
]);
</script>

<style lang="scss">
@import './index.scss';
</style>
