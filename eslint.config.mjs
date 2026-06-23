import love from 'eslint-config-love'

export default [
  {
    ...love,
    files: ['**/*.js', '**/*.ts'],
    rules: {
      ...love.rules,
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/class-methods-use-this': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
]