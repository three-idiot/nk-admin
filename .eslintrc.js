module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'google',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "linebreak-style": 0,
        "max-len": [
            2,
            {
                "code": 130,
                "tabWidth": 2,
                "ignoreUrls": true
            }
        ],
        "space-before-function-paren": 0,
        "quotes":0,
        "comma-dangle":0,
        "object-curly-spacing":0,
        "arrow-parens":0,
        "no-invalid-this":0,
        "require-jsdoc":0,
        "valid-jsdoc":0,
        "camelcase":0,
        "new-cap":0,
  }
}
