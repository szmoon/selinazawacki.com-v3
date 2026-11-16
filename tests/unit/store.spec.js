import { describe, it, expect } from 'vitest';
import store from '~/store';

describe('window order store', () => {
  it('moves a refocused window to the top', () => {
    store.commit('addWindow', 'about');
    store.commit('addWindow', 'contact');
    store.commit('addWindow', 'about');
    expect(store.state.windowOrder).toEqual(['contact', 'about']);
    expect(store.getters.getWindowIndex('about')).toBe(2);
  });

  it('removes a closed window', () => {
    store.commit('removeWindow', 'about');
    expect(store.state.windowOrder).toEqual(['contact']);
  });
});
