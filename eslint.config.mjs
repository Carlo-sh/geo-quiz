import js from "@eslint/js";

module.exports = [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",
    },
  },
];
