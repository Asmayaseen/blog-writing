module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended", // Tailwind CSS rules
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "tailwindcss", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    // Tailwind CSS rules
    "tailwindcss/classnames-order": "warn", // Reorder Tailwind CSS classes
    "tailwindcss/enforces-shorthand": "warn", // Enforce shorthand classes where possible
    "tailwindcss/no-custom-classname": "warn", // Disallow custom class names
  },
};
