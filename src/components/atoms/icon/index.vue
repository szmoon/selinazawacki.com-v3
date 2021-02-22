<template>
  <div
    :aria-label="aria"
    class="a-icon"
    @dblclick="clickIcon"
    v-touch="touchIcon"
  >
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
    href: {
      type: String,
      default: undefined
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
    },
    windowName: {
      type: String,
      default: undefined
    }
  },
  computed: {
    iconClass() {
      if (this.iconName) {
        return 'a-icon__container--icon';
      }
      return 'a-icon__container--image';
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
    clickIcon() {
      if (this.href) {
        window.open(this.href, '_blank');
        return;
      }
      // get current open windows
      let openWindows = [];
      if (this.$route.query.window) {
        let windowQuery = this.$route.query.window;
        if (Array.isArray(windowQuery)) {
          openWindows = [...windowQuery];
        } else {
          openWindows = [windowQuery];
        }
      }
      if (!openWindows.includes(this.windowName)) {
        openWindows.push(this.windowName);
        this.$router.push({
          query: { window: openWindows }
        });
      }
    },
    touchIcon(e) {
      if (e.changedTouches) {
        console.log('booo');
        this.clickIcon();
      }
    }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
