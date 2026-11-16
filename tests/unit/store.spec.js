import { beforeEach, describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useWindowStore } from '~/store';

describe('window order store', () => {
  let store;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useWindowStore();
  });

  it('moves a refocused window to the top', () => {
    store.addWindow('about');
    store.addWindow('contact');
    store.addWindow('about');
    expect(store.windowOrder).toEqual(['contact', 'about']);
    expect(store.getWindowIndex('about')).toBe(2);
  });

  it('removes a closed window', () => {
    store.addWindow('about');
    store.addWindow('contact');
    store.removeWindow('about');
    expect(store.windowOrder).toEqual(['contact']);
    expect(store.getWindowIndex('about')).toBe(0);
  });
});
