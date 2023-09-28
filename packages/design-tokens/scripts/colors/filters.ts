import type { Named, Filter } from "style-dictionary";

/**
 * Filter name for colors used by FilterColor
 */
export const FilterNameColor = "isColor";

/**
 * Extract colors from color, border, boxShadow and composition tokens
 */
export const FilterColor: Named<Filter> = {
  name: FilterNameColor,
  matcher(token) {
    const { type } = token;

    return (
      type === "color" ||
      type === "border" ||
      type === "boxShadow" ||
      type === "composition"
    );
  },
};
