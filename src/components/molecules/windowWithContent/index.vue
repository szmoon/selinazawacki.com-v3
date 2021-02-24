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
    <span v-else-if="data.contentText" v-html="data.contentText"></span>
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
