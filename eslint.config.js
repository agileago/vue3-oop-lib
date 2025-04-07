import { defineConfig } from '@configurajs/eslint'

export default defineConfig({
  ignores: ['dist', 'packages/**/dist'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
  },
})
