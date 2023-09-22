import { colors as colorTokens } from "@dipsaus9/design-tokens/dist/js/colors";

const baseValues = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
};

export const colors = {
  ...baseValues,
  ...colorTokens,
};
