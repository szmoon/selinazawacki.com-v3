<template>
  <Window
    :aria="window.aria"
    :initial-position="window.initialPosition"
    :size="window.size"
    :name="window.name"
    :modifier="window.modifier"
    :title="window.title"
  >
    <img v-if="imgSrc" :src="imgSrc" :alt="window.contentImageAlt" />
  </Window>
</template>

<script>
import Window from '~atoms/window';

export default {
  name: 'AboutImg',
  components: {
    Window
  },
  data() {
    return {
      window: {
        aria: 'selina.png',
        initialPosition: {
          mobile: { top: '150px', left: '150px' },
          desktop: { top: '15%', left: '40%' }
        },
        contentImage: 'selina.png',
        contentImageAlt: 'selina sitting next to a vintage terminal',
        name: 'aboutImg',
        modifier: 'image',
        size: {
          mobile: { width: '250px' },
          desktop: { width: '400px' }
        },
        title: 'selina.png'
      }
    };
  },
  computed: {
    imgSrc() {
      if (!this.window.contentImage) {
        return undefined;
      }
      const images = require.context('images', false, /\.png$/);
      return images('./' + this.window.contentImage);
    }
  }
};
</script>

<style lang="scss"></style>
