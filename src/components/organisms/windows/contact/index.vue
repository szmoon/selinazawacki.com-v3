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
        mobile: { top: '450px', left: '150px' },
        desktop: { top: '450px', left: '200px' }
      },
      windowSize: {
        mobile: { width: '220px', height: '220px' },
        desktop: { width: '390px', height: '230px' }
      }
    };
  }
};
</script>

<style lang="scss"></style>
