<template>
  <IconAndWindow
    icon-image="selina"
    icon-alt="Pink Folder Icon"
    icon-aria="Open image selina.png"
    icon-label="selina.png"
    window-name="aboutimg"
    window-aria="About image window (contains selina.png)"
    :window-position="{ top: 50, left: 400 }"
    window-label="selina.png"
  >
    <!-- <template v-slot:icon>
      boop
    </template> -->
    <template v-slot:windowContent>
      selina.png
    </template>
  </IconAndWindow>
</template>

<script>
import IconAndWindow from '~molecules/iconAndWindow';
// import IconImage from '~atoms/iconImage';

export default {
  name: 'AboutImg',
  components: {
    IconAndWindow
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss"></style>
