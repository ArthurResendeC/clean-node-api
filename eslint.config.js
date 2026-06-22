import love from 'eslint-config-love'

export default [
  {
    ...love,
    files: ['**/*.js', '**/*.ts'],
    rules: {
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
    }
  },
]