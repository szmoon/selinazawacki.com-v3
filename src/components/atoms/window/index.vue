<template>
  <div class="a-window" id="mydiv" :aria-label="aria">
    <!-- top bar -->
    <div class="a-window__top-bar" id="mydivheader">
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
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      elmnt: undefined
    };
  },
  computed: {},
  mounted() {
    this.dragElement(document.getElementById('mydiv'));
    this.elmnt = document.getElementById('mydiv');
  },
  methods: {
    dragElement(elmnt) {
      if (document.getElementById(elmnt.id + 'header')) {
        // if present, the header is where you move the DIV from:
        document.getElementById(
          elmnt.id + 'header'
        ).onmousedown = this.onMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = this.onMouseDown;
      }
    },
    onMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      document.onmouseup = this.closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = this.elementDrag;
    },
    closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    },
    elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      this.pos1 = this.pos3 - e.clientX;
      this.pos2 = this.pos4 - e.clientY;
      this.pos3 = e.clientX;
      this.pos4 = e.clientY;
      // set the element's new position:
      this.elmnt.style.top = this.elmnt.offsetTop - this.pos2 + 'px';
      this.elmnt.style.left = this.elmnt.offsetLeft - this.pos1 + 'px';
    }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
