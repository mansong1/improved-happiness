module.exports = {
   "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
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