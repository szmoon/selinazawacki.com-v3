import { onBeforeUnmount, ref } from 'vue';
import { isMobileDevice } from '~helpers/deviceHelpers.js';

export function useIsMobile() {
  const isMobile = ref(isMobileDevice());

  function handleResize() {
    isMobile.value = isMobileDevice();
  }

  window.addEventListener('resize', handleResize);
  onBeforeUnmount(() => window.removeEventListener('resize', handleResize));

  return isMobile;
}
