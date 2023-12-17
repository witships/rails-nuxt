module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': 0,
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    indent: [2, 2],
  },
}
