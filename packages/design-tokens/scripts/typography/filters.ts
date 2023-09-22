import type { Named, Filter } from "style-dictionary";

/**
 * Filter name for typography used by FilterTypography
 */
export const FilterNameTypography = "isTypography";

/**
 * Extract typography from typography, fontFamilies, fontSizes tokens
 */
export const FilterTypography: Named<Filter> = {
  name: FilterNameTypography,
  matcher(token) {
    const { type } = token;

    return (
      type === "typography" ||
      type === "fontFamilies" ||
      type === "fontSizes" ||
      type === "fontWeights" ||
      type === "lineHeights" ||
      type === "letterSpacing"
    );
  },
};
