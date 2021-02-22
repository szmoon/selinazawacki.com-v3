<template>
  <Window
    aria="About text Window"
    :initialPosition="initialPosition"
    :size="windowSize"
    name="aboutTxt"
    modifier="text"
    title="about.txt"
  >
    <u>Selina Chang-Yi Zawacki:</u> Analog Girl in a Digital World
    <div>
      Software engineer with a fine arts degree, and an interest in exploring
      arts and culture through a digital lense.
    </div>
    <div>
      Currently working as an engineer at the J. Paul Getty Trust on the
      Research Application Development (RAD) Team, with a strong interest in
      promoting diversity, equity and inclusion in all aspects of her work.<span
        class="blinking-cursor"
        >|</span
      >
    </div>
  </Window>
</template>

<script>
import Window from '~atoms/window';

export default {
  name: 'AboutTxt',
  components: {
    Window
  },
  data() {
    return {
      initialPosition: {
        mobile: { top: '150px', left: '150px' },
        desktop: { top: '40%', left: '10%' }
      },
      windowSize: {
        mobile: { width: '280px', height: '280px' },
        desktop: { width: '400px', height: '400px' }
      }
    };
  }
};
</script>

<style lang="scss"></style>
