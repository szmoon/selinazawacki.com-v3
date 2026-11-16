<template>
  <Window
    :aria="data.aria"
    :initial-position="data.initialPosition"
    :size="data.size"
    :name="data.name"
    :modifier="data.modifier"
    :title="data.title"
  >
    <IconList v-if="data.icons" :icon-data="data.icons" />
    <img v-else-if="imgSrc" :src="imgSrc" :alt="data.contentImageAlt" />
    <span v-else-if="text" v-html="text" />
  </Window>
</template>

<script setup>
import { computed } from 'vue';
import IconList from '~molecules/iconList';
import Window from '~atoms/window';

const images = import.meta.glob('images/*.png', {
  eager: true,
  import: 'default'
});

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const imgSrc = computed(() => {
  if (!props.data.contentImage) return;
  return images[`/src/assets/images/${props.data.contentImage}`];
});

const text = computed(() => {
  if (!props.data.contentText) return;
  return props.data.contentText + '<span class="blinking-cursor">|</span>';
});
</script>

<style lang="scss"></style>
