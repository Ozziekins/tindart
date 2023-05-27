module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'jest'],
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-unused-vars': 1,
    'react/no-array-index-key': 0,
    'no-debugger': 1,
    'no-param-reassign': [2, { props: false }],
    'no-shadow': 0,
    '@typescript-eslint/no-var-requires': 0
  }
}
