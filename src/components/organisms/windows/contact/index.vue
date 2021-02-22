<template>
  <Window
    aria="Contact.txt Window"
    :initialPosition="initialPosition"
    :size="windowSize"
    name="contact"
    modifier="text"
    title="contact.txt"
  >
    You can reach me at
    <br />
    szmoon [at] gmail [dot] com<span class="blinking-cursor">|</span>
  </Window>
</template>

<script>
import Window from '~atoms/window';

export default {
  name: 'Contact',
  components: {
    Window
  },
  data() {
    return {
      initialPosition: {
        mobile: { top: '400px', left: '120px' },
        desktop: { top: '65%', left: '50%' }
      },
      windowSize: {
        mobile: { width: '220px', height: '160px' },
        desktop: { width: '370px', height: '200px' }
      }
    };
  }
};
</script>

<style lang="scss"></style>
