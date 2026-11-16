<template>
  <div
    v-if="isOpen"
    :key="name"
    class="a-window"
    ref="windowEl"
    :aria-label="aria"
    :style="windowStyle"
    @mousedown="focus"
  >
    <!-- top bar -->
    <div
      class="a-window__top-bar"
      @mousedown="beginDrag"
      @mouseup="endDrag"
      v-touch:press="touchBeginDrag"
      v-touch:drag="touchDrag"
    >
      {{ title }}
      <CloseButton @closeWindow="close" />
    </div>
    <MenuBar />
    <!-- window content -->
    <div :class="contentClass">
      <slot>default window content</slot>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useDrag } from '~composables/useDrag';
import { useIsMobile } from '~composables/useIsMobile';
import { useWindowState } from '~composables/useWindows';
import CloseButton from './closeButton';
import MenuBar from './menuBar';

const props = defineProps({
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
});

const isMobile = useIsMobile();
const { isOpen, zIndex, focus, close } = useWindowState(props.name);

// set initial window position
const startPosition = isMobile.value
  ? props.initialPosition.mobile
  : props.initialPosition.desktop;
const top = ref(startPosition.top);
const left = ref(startPosition.left);

const windowEl = ref(null);
const { beginDrag, endDrag, touchBeginDrag, touchDrag } = useDrag(
  windowEl,
  top,
  left
);

// class for window content based on content type (image, text, icons)
const contentClass = computed(() => [
  'a-window__content',
  `a-window__content--${props.modifier}`
]);

// variable styles for a-window
const windowStyle = computed(() => {
  const style = { top: top.value, left: left.value, zIndex: zIndex.value };
  if (props.size) {
    const size = isMobile.value ? props.size.mobile : props.size.desktop;
    if (size.height) style.height = size.height;
    if (size.width) style.width = size.width;
  }
  return style;
});
</script>

<style lang="scss">
@import './index.scss';
</style>
