module.exports = {
  extends: "standard",
  // So stupid standard...
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2, {SwitchCase: 0}],
    "operator-linebreak": ["error", "before"],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": ["error", "never"],
  },
};
