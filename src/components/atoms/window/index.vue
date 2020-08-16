<template>
  <div
    :key="name"
    class="a-window"
    ref="window"
    :aria-label="aria"
    :style="{ top: top, left: left }"
  >
    <!-- top bar -->
    <div class="a-window__top-bar" @mousedown="beginDrag" @mouseup="endDrag">
      {{ title }}
      <!-- close button -->
      <div
        class="a-window__close-button"
        aria-label="close button"
        @click="closeWindow"
      >
        <font-awesome-icon icon="times" color="white" />
      </div>
    </div>
    <!-- menu -->
    <div class="a-window__menu-bar">
      <span>File</span>
      <span>Home</span>
      <span>Share</span>
      <span>View</span>
      <span>Manage</span>
    </div>
    <!-- window content -->
    <div class="a-window__content">
      <slot>default window content</slot>
    </div>
  </div>
</template>

<script>
import '~atoms/fontAwesomeIcons';
export default {
  name: 'Window',
  props: {
    aria: {
      type: String,
      required: true
    },
    initialPosition: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      startX: 0,
      startY: 0,
      top: undefined,
      left: undefined
    };
  },
  created() {
    // set initial window position
    this.top = this.initialPosition.top + 'px';
    this.left = this.initialPosition.left + 'px';
  },
  //   mounted() {
  //     document.addEventListener('mouseleave', this.endDrag);
  //   },
  //   beforeDestroy() {
  //     document.removeEventListener('mouseleave', this.endDrag);
  //   },
  methods: {
    beginDrag(e) {
      e.preventDefault();
      // get/set the mouse cursor position at start
      this.startX = e.clientX;
      this.startY = e.clientY;

      // add event listener for mousemove
      document.addEventListener('mousemove', this.drag);
    },
    closeWindow() {
      this.$emit('closeWindow');
    },
    drag(e) {
      console.log('e', e);
      //   console.log('this.name', test);
      e.preventDefault();

      // calculate the new cursor position
      let pos1 = this.startX - e.clientX;
      let pos2 = this.startY - e.clientY;
      this.startX = e.clientX;
      this.startY = e.clientY;

      // calculate and set the element's new position
      let newTop = this.$refs.window.offsetTop - pos2 + 'px';
      let newBottom = this.$refs.window.offsetLeft - pos1 + 'px';

      this.top = newTop;
      this.left = newBottom;
    },
    endDrag() {
      // remove event listener for mousemove
      document.removeEventListener('mousemove', this.drag);
    }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
