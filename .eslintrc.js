module.exports = {
   "parser": "@babel/eslint-parser",
   "parserOptions": {
    "ecmaVersion": 11,
    "requireConfigFile": false,
    "sourceType": "module",
   },
    "settings": {
      "import/resolver": {
        "node": {
          "paths": ["src", "src/gestures"],
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      },
    },
  }