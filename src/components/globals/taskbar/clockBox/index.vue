<template>
  <div class="g-taskbar__clock-box">
    <!-- volume icon -->
    <img
      src="~images/volume.png"
      alt="volume icon"
      class="g-taskbar__clock-box__icon"
    />
    <!-- time -->
    {{ currentTime }}
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'ClockBox',
  data() {
    return {
      currentTime: undefined
    };
  },
  created() {
    this.currentTime = format(new Date(), 'h:mm a');
    setInterval(function() {
      this.currentTime = format(new Date(), 'h:mm a');
    }, 30000);
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
