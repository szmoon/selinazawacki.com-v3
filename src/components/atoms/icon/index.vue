<template>
  <div class="a-icon">
    <img :src="imgSrc" :alt="alt" />
    {{ name }}
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
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    imgSrc() {
      var images = require.context('images/icons', false, /\.png$/);
      return images('./' + this.icon + '.png');
    }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
