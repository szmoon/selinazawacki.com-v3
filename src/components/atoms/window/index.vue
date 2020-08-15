<template>
  <div
    class="a-window"
    ref="window"
    :aria-label="aria"
    :style="{ top: top, left: left }"
  >
    <!-- top bar -->
    <div class="a-window__top-bar" @mousedown="beginDrag" @mouseup="endDrag">
      {{ name }}
      <!-- close button -->
      <div class="a-window__close-button" aria-label="close button">
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
      <slot></slot>
      window content
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
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      startX: 0,
      startY: 0,
      top: '50px',
      left: '400px'
    };
  },
  computed: {},
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
    endDrag() {
      // remove event listener for mousemove
      document.removeEventListener('mousemove', this.drag);
    },
    drag(e) {
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
    }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
