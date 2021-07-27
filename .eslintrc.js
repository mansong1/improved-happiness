module.exports = {
   "parser": "babel-eslint",
   "parserOptions": {
    "ecmaVersion": 11,
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