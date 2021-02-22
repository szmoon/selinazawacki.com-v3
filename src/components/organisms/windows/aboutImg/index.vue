<template>
  <Window
    aria="selina.png"
    :initialPosition="initialPosition"
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
        desktop: { top: '80px', left: '500px' }
      },
      windowSize: {
        mobile: { width: '220px', height: '220px' },
        desktop: { width: '500px', height: '400px' }
      }
    };
  }
};
</script>

<style lang="scss"></style>
