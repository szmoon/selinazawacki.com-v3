<template>
  <Window
    :aria="data.aria"
    :initial-position="data.initialPosition"
    :size="data.size"
    :name="data.name"
    :modifier="data.modifier"
    :title="data.title"
  >
    <img v-if="imgSrc" :src="imgSrc" :alt="data.contentImageAlt" />
  </Window>
</template>

<script>
import Window from '~atoms/window';

export default {
  name: 'WindowWithContent',
  components: {
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
      if (!this.data.contentImage) {
        return undefined;
      }
      const images = require.context('images', false, /\.png$/);
      return images('./' + this.data.contentImage);
    }
  }
};
</script>

<style lang="scss"></style>
