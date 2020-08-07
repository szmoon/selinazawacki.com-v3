<template>
  <div class="a-icon">
    <img :src="imgSrc" />
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
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
      //   return "@images/icons/folder-pink.png";
      var images = require.context("@images/icons", false, /\.png$/);
      return images("./" + this.icon + ".png");
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
