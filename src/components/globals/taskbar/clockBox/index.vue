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
      currentTime: '',
      timer: undefined
    };
  },
  created() {
    let self = this;

    this.currentTime = format(new Date(), 'h:mm a');

    this.timer = setInterval(function() {
      self.currentTime = format(new Date(), 'h:mm a');
    }, 30000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
