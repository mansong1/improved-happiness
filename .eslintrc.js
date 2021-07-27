module.exports = {
  "parser": "babel-eslint",
   "parserOptions": {
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