import { onBeforeUnmount, onMounted } from 'vue';

// Moves an absolutely positioned element by updating its top/left refs.
export function useDrag(elementRef, top, left) {
  let startX = 0;
  let startY = 0;

  function start(x, y) {
    startX = x;
    startY = y;
  }

  function moveTo(x, y) {
    const el = elementRef.value;
    if (!el) return;

    top.value = el.offsetTop - (startY - y) + 'px';
    left.value = el.offsetLeft - (startX - x) + 'px';
    start(x, y);
  }

  function drag(e) {
    e.preventDefault();
    moveTo(e.clientX, e.clientY);
  }

  function beginDrag(e) {
    e.preventDefault();
    start(e.clientX, e.clientY);
    document.addEventListener('mousemove', drag);
  }

  function endDrag() {
    document.removeEventListener('mousemove', drag);
  }

  function touchBeginDrag(e) {
    if (!e.changedTouches) return;
    start(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  }

  function touchDrag(e) {
    if (!e.changedTouches) return;
    moveTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
  }

  onMounted(() => document.addEventListener('mouseleave', endDrag));
  onBeforeUnmount(() => {
    document.removeEventListener('mouseleave', endDrag);
    endDrag();
  });

  return { beginDrag, endDrag, touchBeginDrag, touchDrag };
}
