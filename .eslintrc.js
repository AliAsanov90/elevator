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
    "prettier/prettier": ["warn", {
      "singleQuote": true,
      "semi": false
    }],
    "vue/max-attributes-per-line": ["warn", {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/html-closing-bracket-newline": ["warn", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue/singleline-html-element-content-newline": ["warn", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
    }],
    "vue/block-tag-newline": ["warn", {
      "singleline": "never",
      "multiline": "always",
      "maxEmptyLines": 0
    }]
  }
}
