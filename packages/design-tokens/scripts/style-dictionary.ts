import { transforms, registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

import {
  FilterNameTypography,
  FilterTypography,
  FormatterNameTypographyJavaScriptFlatModule,
  FormatterTypographyTypeScript,
} from "./typography";
import {
  FilterNameShadow,
  FilterShadow,
  FormatterNameShadowTypeScriptWeb,
  FormatterShadowTypeScriptWeb,
} from "./shadows";
import {
  FilterColor,
  FilterNameColor,
  FormatterColorTypeScript,
  FormatterNameColorTypeScript,
} from "./colors";

registerTransforms(StyleDictionary);

StyleDictionary.registerFormat(FormatterTypographyTypeScript);
StyleDictionary.registerFilter(FilterTypography);

StyleDictionary.registerFormat(FormatterShadowTypeScriptWeb);
StyleDictionary.registerFilter(FilterShadow);

StyleDictionary.registerFormat(FormatterColorTypeScript);
StyleDictionary.registerFilter(FilterColor);

StyleDictionary.registerTransform({
  type: "name",
  name: "name/ts/cleanup",
  transformer: (token) =>
    token.name.replace(
      /^spacing-|^shadows-|^shadow-|^border-radius-|^border-width-|^border-tokens-|^font-family-|^font-size-|^font-weight-|^line-height-|^letter-spacing-|^opacity-/,
      ""
    ),
});

StyleDictionary.registerTransformGroup({
  name: "custom/tokens-studio",
  transforms: [...transforms, "name/cti/kebab", "name/ts/cleanup"],
});

function init() {
  const sd = StyleDictionary.extend({
    source: ["./source/*.json"],
    platforms: {
      js: {
        transformGroup: "tokens-studio",
        buildPath: "dist/js/",
        files: [
          {
            destination: "all.js",
            format: "javascript/module-flat",
          },
        ],
      },
      tailwindExtend: {
        buildPath: "dist/js/",
        transforms: [
          "attribute/cti",
          "size/rem",
          "color/hex",
          "name/cti/kebab",
          "name/ts/cleanup",
        ],
        files: [
          {
            format: FormatterNameTypographyJavaScriptFlatModule,
            destination: "typography.js",
            filter: FilterNameTypography,
          },
          {
            format: FormatterNameShadowTypeScriptWeb,
            destination: "shadow.js",
            filter: FilterNameShadow,
          },
          {
            format: FormatterNameColorTypeScript,
            destination: "colors.js",
            filter: FilterNameColor,
          },
        ],
      },
      tailwind: {
        transformGroup: "custom/tokens-studio",
        buildPath: "dist/js/",
        files: [
          {
            destination: "spacing.js",
            format: "javascript/module-flat",
            filter: (token) => {
              return token.type === "spacing" || token.type === "composition";
            },
          },
          {
            destination: "border-radius.js",
            format: "javascript/module-flat",
            filter: (token) => {
              return (
                token.type === "borderRadius" || token.type === "composition"
              );
            },
          },
          {
            destination: "border-width.js",
            format: "javascript/module-flat",
            filter: (token) => {
              return (
                token.type === "borderWidth" ||
                token.type === "composition" ||
                token.type === "border"
              );
            },
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
