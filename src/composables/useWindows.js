import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

// Open windows are stored in the URL as ?window=a&window=b.
export function useWindows() {
  const route = useRoute();
  const router = useRouter();
  const store = useStore();

  const openWindows = computed(() => {
    const query = route.query.window;
    if (!query) return [];
    return Array.isArray(query) ? [...query] : [query];
  });

  function focusWindow(name) {
    store.commit('addWindow', name);
  }

  function openWindow(name) {
    if (openWindows.value.includes(name)) {
      focusWindow(name);
      return;
    }
    router.replace({ query: { window: [...openWindows.value, name] } });
  }

  function closeWindow(name) {
    router.replace({
      query: { window: openWindows.value.filter(item => item !== name) }
    });
    store.commit('removeWindow', name);
  }

  return { openWindows, focusWindow, openWindow, closeWindow };
}

// State for a single window: whether it is open and its stacking order.
export function useWindowState(name) {
  const store = useStore();
  const { openWindows, focusWindow, closeWindow } = useWindows();
  const isOpen = ref(false);

  watch(
    openWindows,
    windows => {
      const shouldBeOpen = windows.includes(name);
      if (shouldBeOpen && !isOpen.value) {
        focusWindow(name);
      }
      isOpen.value = shouldBeOpen;
    },
    { immediate: true }
  );

  const zIndex = computed(() => store.getters.getWindowIndex(name));

  return {
    isOpen,
    zIndex,
    focus: () => focusWindow(name),
    close: () => closeWindow(name)
  };
}
