module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  //config rule to all producto, example to ;
  rules: {
    // 'semi': ['error', 'always'],
    'prettier/prettier': 0,
    'jsx-a11y/click-events-have-key-events':'off',
    'jsx-a11y/label-has-associated-control':'off',
    'jsx-a11y/label-has-for':'off',
    'jsx-a11y/no-static-element-interactions':'off',
    'jsx-a11y/no-noninteractive-element-interactions':'off',
    'jsx-a11y/no-autofocus':'off',
    'jsx-a11y/no-noninteractive-tabindex':'off',
  },
};
