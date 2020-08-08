<template>
  <div class="g-taskbar">
    <StartButton />
    <ClockBox />
  </div>
</template>

<script>
import ClockBox from './clockBox';
import StartButton from './startButton';

export default {
  name: 'Taskbar',
  components: {
    ClockBox,
    StartButton
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
