import type { Named, Filter } from "style-dictionary";

export const FilterNameShadow = "isShadow";

export const FilterShadow: Named<Filter> = {
  name: FilterNameShadow,
  matcher(token) {
    return token.type === "boxShadow" || token.type === "composition";
  },
};
