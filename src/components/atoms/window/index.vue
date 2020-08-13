<template>
  <div class="a-window">
    <div class="a-window__top-bar">
      window name about
      <div class="a-window__close-button">
        <font-awesome-icon icon="times" color="white" />
      </div>
    </div>
    <div class="a-window__menu-bar">
      <span>File</span>
      <span>Home</span>
      <span>Share</span>
      <span>View</span>
      <span>Manage</span>
    </div>
    WINDOW
    <!-- <img :src="imgSrc" :alt="alt" />
    {{ name }} -->
  </div>
</template>

<script>
import '~atoms/fontAwesomeIcons';
export default {
  name: 'Window',
  props: {
    // alt: {
    //   type: String,
    //   required: true
    // },
    // icon: {
    //   type: String,
    //   required: true
    // },
    // name: {
    //   type: String,
    //   required: true
    // }
  },
  computed: {
    // imgSrc() {
    //   var images = require.context('images/icons', false, /\.png$/);
    //   return images('./' + this.icon + '.png');
    // }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
