<template>
  <Window
    :aria="data.aria"
    :initial-position="data.initialPosition"
    :size="data.size"
    :name="data.name"
    :modifier="data.modifier"
    :title="data.title"
  >
    <IconList v-if="data.icons" :icon-data="data.icons" />
    <img v-else-if="imgSrc" :src="imgSrc" :alt="data.contentImageAlt" />
    <span v-else-if="text" v-html="text" />
  </Window>
</template>

<script>
import IconList from '~molecules/iconList';
import Window from '~atoms/window';

export default {
  name: 'WindowWithContent',
  components: {
    IconList,
    Window
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgSrc() {
      if (!this.data.contentImage) return;
      const images = require.context('images', false, /\.png$/);
      return images('./' + this.data.contentImage);
    },
    text() {
      if (!this.data.contentText) return;
      return this.data.contentText + '<span class="blinking-cursor">|</span>';
    }
  }
};
</script>

<style lang="scss"></style>
