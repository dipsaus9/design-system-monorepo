/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["../../packages/**/src/**/*.{js,jsx,ts,tsx}"],
  },
  presets: [require("@dipsaus9/tailwind-theme")],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
