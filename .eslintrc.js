module.exports = {
   "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": "2015",
    "sourceType": "module"
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