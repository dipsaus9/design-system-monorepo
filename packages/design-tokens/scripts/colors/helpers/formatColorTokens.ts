import type { TransformedToken } from "style-dictionary";

/**
 * Figma tokens can contain a color token or its based on a nested object like border tokens
 */
export function formatColorTokens(tokens: TransformedToken[]) {
  return tokens
    .map((token) => {
      if (token.type === "color") {
        return {
          isColorToken: true,
          value: token.value,
          name: token.name,
        };
      }

      if (token.type === "composition" && token.value.fill) {
        return {
          isColorToken: false,
          value: token.value.fill,
          name: token.name,
        };
      }

      return null;
    })
    .filter((token) => token);
}
