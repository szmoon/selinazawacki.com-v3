<template>
  <div>
    <Icon
      :icon="icon"
      :name="iconName"
      :alt="iconAlt"
      :aria="iconAria"
      @doubleClickIcon="doubleClickIcon"
    />
    <Window
      v-if="isOpen"
      :aria="windowAria"
      :initialPosition="{ top: 50, left: 400 }"
      :name="windowName"
      :title="windowTitle"
      @closeWindow="closeWindow"
    >
      <slot name="windowContent"></slot>
    </Window>
  </div>
</template>

<script>
import Icon from '~atoms/icon';
import Window from '~atoms/window';

export default {
  name: 'IconAndWindow',
  components: {
    Icon,
    Window
  },
  props: {
    // icon image to use
    icon: {
      type: String,
      required: true
    },
    iconAlt: {
      type: String,
      required: true
    },
    iconAria: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      required: true
    },
    windowAria: {
      type: String,
      required: true
    },
    windowName: {
      type: String,
      required: true
    },
    windowTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {},
  methods: {
    closeWindow() {
      this.isOpen = false;

      let openWindows = [];
      let windowQuery = this.$route.query.window;
      if (Array.isArray(windowQuery)) {
        openWindows = [...windowQuery];
      } else {
        openWindows = [windowQuery];
      }

      let newWindows = openWindows.filter(item => item !== this.windowName);

      this.$router.push({
        query: newWindows
      });
    },
    // triggered by emit in icon
    doubleClickIcon() {
      this.isOpen = true;

      // get current open windows
      let openWindows = [];
      if (this.$route.query.window) {
        let windowQuery = this.$route.query.window;
        if (Array.isArray(windowQuery)) {
          openWindows = [...windowQuery];
        } else {
          openWindows = [windowQuery];
        }
      }
      if (!openWindows.includes(this.windowName)) {
        openWindows.push(this.windowName);
        this.$router.push({
          query: { window: openWindows }
        });
      }
    }
  }
};
</script>

<style lang="scss"></style>
