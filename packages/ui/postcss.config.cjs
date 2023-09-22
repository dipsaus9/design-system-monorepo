const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  plugins: [tailwindcss(tailwindConfig), autoprefixer],
};
