import { rmSync } from "fs";

import { registerTransforms } from "@tokens-studio/sd-transforms";

import StyleDictionary from "style-dictionary";

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
registerTransforms(StyleDictionary);

function init() {
  // rmSync(`./build/`, { recursive: true, force: true });

  const sd = StyleDictionary.extend({
    source: ["./source/*.json"],
    platforms: {
      js: {
        transformGroup: "tokens-studio",
        buildPath: "dist/js/",
        files: [
          {
            destination: "variables.js",
            format: "javascript/es6",
          },
        ],
      },
      css: {
        transforms: [
          "ts/descriptionToComment",
          "ts/size/px",
          "ts/opacity",
          "ts/size/lineheight",
          "ts/typography/fontWeight",
          "ts/resolveMath",
          "ts/size/css/letterspacing",
          "ts/typography/css/fontFamily",
          "ts/typography/css/shorthand",
          "ts/border/css/shorthand",
          "ts/shadow/css/shorthand",
          "ts/color/css/hexrgba",
          "ts/color/modifiers",
          "name/cti/kebab",
        ],
        buildPath: "dist/css/",
        files: [
          {
            destination: "variables.css",
            format: "css/variables",
          },
        ],
      },
    },
  });

  sd.cleanAllPlatforms();
  sd.buildAllPlatforms();
}

init();
