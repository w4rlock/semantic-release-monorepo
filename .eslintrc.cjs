module.exports = {
  parserOptions: {
    ecmaVersion: 'latest', // Allows the use of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  plugins: ['prettier'],
  // Uses the linting rules from @typescript-eslint/eslint-plugin
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-control-regex': 0,
    'prettier/prettier': 2
  },
  env: {
    node: true // Enable Node.js global variables
  }
};
