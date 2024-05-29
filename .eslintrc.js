module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
        commonjs: true,
    },
    parserOptions: {
        sourceType: 'module',
    },
    "overrides": [
        {
          "files": ["src/script/"],
          "env": {
            "node": true
          },
          "parserOptions": {
            "ecmaVersion": 12
          },
        }
      ],
    extends:'eslint:recommended',
    rules: {
        strict: ['error', 'global'],
        'func-style': ['error', 'expression'],
        'no-new-func': 'error',
        'no-param-reassign': 'error',
        'prefer-arrow-callback': 'error',
        'arrow-parens': ['error', 'always'],
        'arrow-body-style': ['error', 'as-needed'],
        'new-cap': 'error',
        'no-invalid-this': 'error',
        'prefer-const': 'error'
    }
};