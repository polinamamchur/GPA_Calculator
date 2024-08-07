// eslint-disable-next-line no-undef
module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  plugins: ['react', 'react-hooks', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
