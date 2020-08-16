<template>
  <div :aria-label="aria" class="a-icon" @dblclick="doubleClickIcon">
    <div :class="iconClass">
      <img :src="imgSrc" :alt="alt" />
    </div>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    alt: {
      type: String,
      required: true
    },
    aria: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      default: undefined
    },
    iconImage: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    iconClass() {
      if (this.iconName) {
        return 'a-icon__icon-container';
      }
      return 'a-icon__image-container';
    },
    isIcon() {
      if (this.iconName) {
        return true;
      }
      return false;
    },
    imgSrc() {
      if (this.isIcon) {
        const images = require.context('images/icons', false, /\.png$/);
        return images('./' + this.iconName + '.png');
      }
      const images = require.context('images', false, /\.png$/);
      return images('./' + this.iconImage + '.png');
    }
  },
  methods: {
    doubleClickIcon() {
      this.$emit('doubleClickIcon');
    }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
