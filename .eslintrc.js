module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-underscore-dangle": 'off',
        "comma-dangle": 'off',
        "no-use-before-define": 'off',
        "linebreak-style": 0,
        "class-methods-use-this": 'off'
    }
};
