<template>
  <Window
    aria="selina.png"
    :initialPosition="{ top: 80, left: 500 }"
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
      selinaImg
    };
  }
};
</script>

<style lang="scss"></style>
