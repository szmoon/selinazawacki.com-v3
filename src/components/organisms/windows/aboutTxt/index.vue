<template>
  <Window
    aria="About text Window"
    :initialPosition="initialPosition"
    :size="windowSize"
    name="aboutTxt"
    modifier="text"
    title="about.txt"
  >
    Full-stack software engineer specialized in creating Node.js and Python
    APIs, and experienced with cloud services, Vue.js and React. Also
    experienced in circuit design and the Arduino language. Love teaching and
    always looking for opportunities to do outreach to get young women,
    minorities and low income students interested in technology.<span
      class="blinking-cursor"
      >|</span
    >
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
