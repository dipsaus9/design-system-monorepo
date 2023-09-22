import { borderRadius } from "./border-radius";
import { borderWidth } from "./border-width";
import { boxShadow, dropShadow } from "./shadow";
import { colors } from "./colors";
import {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from "./typography";
import { spacing } from "./spacing";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1536px",
};

const TailwindPreset = {
  theme: {
    colors: colors,
    spacing: spacing,
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    boxShadow: boxShadow,
    dropShadow: dropShadow,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    fontSize: fontSize,
    letterSpacing: letterSpacing,
    screens: {
      ...breakpoints,
    },
  },
  extend: {},
  plugins: [],
};

module.exports = TailwindPreset;
