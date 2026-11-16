import { defineStore } from 'pinia';
import { ref } from 'vue';

// Tracks window stacking order. The last window in the list is on top.
export const useWindowStore = defineStore('windows', () => {
  const windowOrder = ref([]);

  function addWindow(windowName) {
    // if window is already on top, do nothing
    if (windowOrder.value.at(-1) === windowName) return;

    windowOrder.value = [
      ...windowOrder.value.filter(id => id !== windowName),
      windowName
    ];
  }

  function removeWindow(windowName) {
    windowOrder.value = windowOrder.value.filter(id => id !== windowName);
  }

  // z-index for a window, 0 if it is not in the list
  function getWindowIndex(windowName) {
    return windowOrder.value.indexOf(windowName) + 1;
  }

  return { windowOrder, addWindow, removeWindow, getWindowIndex };
});
