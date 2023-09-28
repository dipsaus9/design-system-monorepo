import { boxShadow as boxShadowTokens } from "@dipsaus9/design-tokens/dist/js/shadow";

const baseValues = {
  lala: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
};

export const boxShadow = {
  ...baseValues,
  ...boxShadowTokens,
};
