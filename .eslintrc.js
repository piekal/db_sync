module.exports = {
  "extends": [
    'airbnb-base',
    'plugin:jest/recommended'
  ],
  "env": {
    "node": true,
    "jest/globals": true,
  },
  "plugins":[
    'import',
    'jest',
  ],
  "rules": {
    //"no-underscore-dangle": 0
  },
};
