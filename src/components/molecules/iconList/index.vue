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
    },
    modifier: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classes() {
      const classes = ['m-icon-list'];

      let extraClass = classes[0] + '--' + this.modifier;
      classes.push(extraClass);

      return classes;
    }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
