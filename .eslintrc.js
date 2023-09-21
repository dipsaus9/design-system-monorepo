module.exports = {
  root: true,
  extends: ["@dipsaus9/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
};
