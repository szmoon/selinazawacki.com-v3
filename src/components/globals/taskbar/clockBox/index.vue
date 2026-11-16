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

<script setup>
import { onBeforeUnmount, ref } from 'vue';
import { format } from 'date-fns';

const now = () => format(new Date(), 'h:mm a');

const currentTime = ref(now());
const timer = setInterval(() => {
  currentTime.value = now();
}, 30000);

onBeforeUnmount(() => clearInterval(timer));
</script>

<style lang="scss">
@import './index.scss';
</style>
