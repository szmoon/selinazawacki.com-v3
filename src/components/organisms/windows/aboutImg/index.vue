<template>
  <Window
    aria="selina.png"
    :initial-position="initialPosition"
    :size="windowSize"
    name="aboutImg"
    modifier="image"
    title="selina.png"
  >
    <img :src="selinaImg" />
  </Window>
</template>

<script>
import selinaImg from 'images/selina.png';
import Window from '~atoms/window';

export default {
  name: 'AboutImg',
  components: {
    Window
  },
  data() {
    return {
      selinaImg,
      initialPosition: {
        mobile: { top: '150px', left: '150px' },
        desktop: { top: '15%', left: '40%' }
      },
      windowSize: {
        mobile: { width: '250px' },
        desktop: { width: '400px' }
      }
    };
  }
};
</script>

<style lang="scss"></style>
