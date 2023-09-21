module.exports = {
  extends: ["turbo", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // https://basarat.gitbook.io/typescript/main-1/defaultisbad
    "import/prefer-default-export": "off",
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "local", varsIgnorePattern: "_" },
    ],
    // Use function hoisting to improve code readability
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    // Don't import devDependencies except for tests and mocks
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "codegen.ts",
          "*.config.*",
          "server/*",
          "setup-tests.js",
          "mocks/**/*",
          "app/**/*.{spec,test}.{ts,tsx}",
          "app/test/**/*",
          "test-utils/**/*",
          "app/**/*/@generated/**/*",
          "./tests/**/*",
          "scripts/*",
          "src/*/*.stories.tsx",
        ],
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "*",
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        next: "return",
        prev: "*",
      },
      {
        blankLine: "never",
        next: "*",
        prev: ["case", "default"],
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["multiline-const"],
      },
    ],
    // Promises can conflict with Error boundaries, disabled for now
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",

    // Valid use cases for routing and process env
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/require-prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/display-name": "off",

    // Temporary disabled
    "@typescript-eslint/no-unsafe-assignment": "off",
    "react/react-in-jsx-scope": "off",
  },
};