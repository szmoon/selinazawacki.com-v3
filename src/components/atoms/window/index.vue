<template>
  <div
    v-if="isOpen"
    :key="name"
    class="a-window"
    ref="window"
    :aria-label="aria"
    :style="windowStyle"
  >
    <!-- top bar -->
    <div
      class="a-window__top-bar"
      @mousedown="beginDrag"
      @mouseup="endDrag"
      v-touch:start="touchBeginDrag"
      v-touch:moving="touchDrag"
    >
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
    <MenuBar />
    <!-- window content -->
    <div :class="contentClass">
      <slot>default window content</slot>
    </div>
  </div>
</template>

<script>
import '~atoms/fontAwesomeIcons';
import { isMobileDevice } from '~helpers/deviceHelpers.js';
import MenuBar from './menuBar';

export default {
  name: 'Window',
  components: {
    MenuBar
  },
  props: {
    aria: {
      type: String,
      required: true
    },
    initialPosition: {
      type: Object,
      required: true
    },
    modifier: {
      type: String,
      default: 'icons',
      validator(value) {
        return ['icons', 'image', 'text'].indexOf(value) !== -1;
      }
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: Object,
      default: undefined
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
      left: undefined,
      isMobileDevice: undefined,
      isOpen: false
    };
  },
  computed: {
    contentClass() {
      const classes = ['a-window__content'];

      let extraClass = classes[0] + '--' + this.modifier;
      classes.push(extraClass);

      return classes;
    },
    windowStyle() {
      let style = { top: this.top, left: this.left };

      if (this.size) {
        if (this.isMobileDevice) {
          style.height = this.size.mobile.height;
          style.width = this.size.mobile.width;
        } else {
          style.height = this.size.desktop.height;
          style.width = this.size.desktop.width;
        }
      }
      return style;
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    // set initial window position
    this.isMobileDevice = isMobileDevice();
    if (this.isMobileDevice) {
      this.top = this.initialPosition.mobile.top;
      this.left = this.initialPosition.mobile.left;
    } else {
      this.top = this.initialPosition.desktop.top;
      this.left = this.initialPosition.desktop.left;
    }

    this.checkWindowStatus();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  watch: {
    $route() {
      this.checkWindowStatus();
    }
  },
  mounted() {
    document.addEventListener('mouseleave', this.endDrag);
  },
  beforeDestroy() {
    document.removeEventListener('mouseleave', this.endDrag);
  },
  methods: {
    handleResize() {
      this.isMobileDevice = isMobileDevice();
    },
    beginDrag(e) {
      e.preventDefault();
      // get/set the mouse cursor position at start
      this.startX = e.clientX;
      this.startY = e.clientY;

      // add event listener for mousemove
      document.addEventListener('mousemove', this.drag);
    },
    checkWindowStatus() {
      // see if window should be open
      let query = this.$route.query;
      if (!query.window) {
        this.isOpen = false;
      }

      if (Array.isArray(query.window)) {
        if (query.window.includes(this.name)) {
          this.isOpen = true;
        } else {
          this.isOpen = false;
        }
      } else {
        if (query.window == this.name) {
          this.isOpen = true;
        } else {
          this.isOpen = false;
        }
      }
    },
    closeWindow() {
      let openWindows = [];
      let windowQuery = this.$route.query.window;

      if (Array.isArray(windowQuery)) {
        openWindows = [...windowQuery];
      } else {
        openWindows = [windowQuery];
      }

      let newWindows = openWindows.filter(item => item !== this.name);

      this.$router.push({
        query: { window: newWindows }
      });
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
    },
    endDrag() {
      // remove event listener for mousemove
      document.removeEventListener('mousemove', this.drag);
    },
    touchBeginDrag(e) {
      if (!e.changedTouches) return;
      // get/set the mouse cursor position at start
      this.startX = e.changedTouches[0].clientX;
      this.startY = e.changedTouches[0].clientY;
    },
    touchDrag(e) {
      if (!e.changedTouches) return;

      // calculate the new cursor position
      let pos1 = this.startX - e.changedTouches[0].clientX;
      let pos2 = this.startY - e.changedTouches[0].clientY;
      this.startX = e.changedTouches[0].clientX;
      this.startY = e.changedTouches[0].clientY;

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
