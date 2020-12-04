module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "eol-last": ["error", "always"],
    "no-trailing-spaces": ["error"],
    "prettier/prettier": ["off", {
      "singleQuote": true,
      "semi": false
    }]
  }
}
