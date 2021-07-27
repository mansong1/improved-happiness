module.exports = {
   "parserOptions": {
    "parser": "babel-eslint",
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