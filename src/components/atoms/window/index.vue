<template>
  <div
    v-if="isOpen"
    :key="name"
    class="a-window"
    ref="window"
    :aria-label="aria"
    :style="windowStyle"
    @mousedown="addWindow"
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
      <CloseButton @closeWindow="closeWindow" />
    </div>
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
import CloseButton from './closeButton';
import MenuBar from './menuBar';

export default {
  name: 'Window',
  components: {
    CloseButton,
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
    // class for window content based on content type (image, text, icons)
    contentClass() {
      const classes = ['a-window__content'];

      let extraClass = classes[0] + '--' + this.modifier;
      classes.push(extraClass);

      return classes;
    },
    // variable styles for a-window
    windowStyle() {
      let style = { top: this.top, left: this.left, zIndex: this.zIndex };
      if (this.size) {
        let size;

        if (this.isMobileDevice) {
          size = this.size.mobile;
        } else {
          size = this.size.desktop;
        }
        if (size.height) {
          style.height = size.height;
        }
        if (size.width) {
          style.width = size.width;
        }
      }

      return style;
    },
    // zindex based on window position in store
    zIndex() {
      return this.$store.getters.getWindowIndex(this.name);
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
    addWindow() {
      this.$store.commit('addWindow', this.name);
    },
    beginDrag(e) {
      //   this.updateZIndex();
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

      let windowQuery = query.window;
      if (!Array.isArray(windowQuery)) {
        windowQuery = [windowQuery];
      }
      // this.isOpen == true &&
      if (windowQuery.includes(this.name)) {
        if (this.isOpen == false) {
          this.isOpen = true;
          this.addWindow();
        }
      } else {
        this.isOpen = false;
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

      // remove window from windowOrder
      this.$store.commit('removeWindow', this.name);
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
    handleResize() {
      this.isMobileDevice = isMobileDevice();
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
