<template>
  <div
    :aria-label="aria"
    class="a-icon"
    @dblclick="clickIcon"
    v-touch="touchIcon"
  >
    <div :class="iconClass">
      <img :src="imgSrc" :alt="alt" />
    </div>
    {{ label }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useWindows } from '~composables/useWindows';

const iconImages = import.meta.glob('images/icons/*.png', {
  eager: true,
  import: 'default'
});
const images = import.meta.glob('images/*.png', {
  eager: true,
  import: 'default'
});

const props = defineProps({
  alt: {
    type: String,
    required: true
  },
  aria: {
    type: String,
    required: true
  },
  href: {
    type: String,
    default: undefined
  },
  iconName: {
    type: String,
    default: undefined
  },
  iconImage: {
    type: String,
    default: undefined
  },
  label: {
    type: String,
    required: true
  },
  windowName: {
    type: String,
    default: undefined
  }
});

const { openWindow } = useWindows();

const iconClass = computed(() =>
  props.iconName ? 'a-icon__container--icon' : 'a-icon__container--image'
);

const imgSrc = computed(() => {
  if (props.iconName) {
    return iconImages[`/src/assets/images/icons/${props.iconName}.png`];
  }
  return images[`/src/assets/images/${props.iconImage}.png`];
});

function clickIcon() {
  if (props.href) {
    window.open(props.href, '_blank');
    return;
  }
  openWindow(props.windowName);
}

function touchIcon(e) {
  if (e.changedTouches) {
    // safeguard for mobile touch icon vs window
    e.preventDefault();
    clickIcon();
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
