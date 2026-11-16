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

const images = import.meta.glob('images/*.png', {
  eager: true,
  import: 'default'
});

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
      return images[`/src/assets/images/${this.data.contentImage}`];
    },
    text() {
      if (!this.data.contentText) return;
      return this.data.contentText + '<span class="blinking-cursor">|</span>';
    }
  }
};
</script>

<style lang="scss"></style>
