import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const src = path => fileURLToPath(new URL(`./src/${path}`, import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.vue'],
    alias: {
      '@': src(''),
      '~': src(''),
      images: src('assets/images'),
      '~atoms': src('components/atoms'),
      '~components': src('components'),
      '~composables': src('composables'),
      '~data': src('data'),
      '~globals': src('components/globals'),
      '~helpers': src('helpers'),
      '~layouts': src('layouts'),
      '~molecules': src('components/molecules'),
      '~organisms': src('components/organisms'),
      '~styles': src('styles'),
      styles: src('styles'),
      '~views': src('views')
    }
  },
  css: {
    preprocessorOptions: {
      scss: { silenceDeprecations: ['import', 'global-builtin'] }
    }
  }
});
