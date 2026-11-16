import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettier from '@vue/eslint-config-prettier';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  prettier,
  {
    languageOptions: { globals: { ...globals.browser } },
    rules: {
      'vue/no-unused-vars': 'off',
      'vue/no-unused-components': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
];
