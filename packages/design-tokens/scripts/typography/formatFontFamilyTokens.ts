import type { TransformedToken } from "style-dictionary";

export function formatFontFamilyTokens(tokens: TransformedToken[]) {
  return tokens
    .map((token) => {
      if (token.type === "fontFamilies") {
        return {
          isTypographyToken: false,
          name: token.name,
          value: token.value,
        };
      }

      if (token.type === "typography") {
        return {
          isTypographyToken: true,
          name: token.name,
          value: token.value.fontFamily,
        };
      }

      return null;
    })
    .filter((token) => token);
}

export function formatFontSizeTokens(tokens: TransformedToken[]) {
  return tokens
    .map((token) => {
      if (token.type === "fontSizes") {
        return {
          isTypographyToken: false,
          name: token.name,
          value: {
            size: token.value,
            lineHeight: 1,
          },
        };
      }

      if (token.type === "typography") {
        return {
          isTypographyToken: true,
          name: token.name,
          value: {
            size: token.value.fontSize,
            lineHeight: token.value.lineHeight,
            fontWeight: remapFontWeight(token.value.fontWeight).toLowerCase(),
          },
        };
      }

      return null;
    })
    .filter((token) => token);
}

export function formatFontWeightTokens(tokens: TransformedToken[]) {
  return tokens
    .map((token) => {
      if (token.type === "fontWeights") {
        // Reverse name and value due to fontWeights setup
        return {
          isTypographyToken: false,
          name: token.value.toLowerCase(),
          value: token.name,
        };
      }

      if (token.type === "typography") {
        return {
          isTypographyToken: true,
          name: token.name,
          value: remapFontWeight(token.value.fontWeight).toLowerCase(),
        };
      }

      return null;
    })
    .filter((token) => token);
}

export function formatLineHeightTokens(tokens: TransformedToken[]) {
  return tokens
    .map((token) => {
      if (token.type === "lineHeights") {
        return {
          isTypographyToken: false,
          name: token.name,
          value: token.value,
        };
      }

      if (token.type === "typography") {
        return {
          isTypographyToken: true,
          name: token.name,
          value: token.value.lineHeight,
        };
      }

      return null;
    })
    .filter((token) => token);
}

export function formatLetterSpacing(tokens: TransformedToken[]) {
  return tokens
    .map((token) => {
      if (token.type === "letterSpacing") {
        return {
          isTypographyToken: false,
          name: token.name,
          value: token.value,
        };
      }

      if (token.type === "typography") {
        return {
          isTypographyToken: true,
          name: token.name,
          value: token.value.letterSpacing,
        };
      }

      return null;
    })
    .filter((token) => token);
}

/**
 * Remap font weight tokens to usable font weights
 */
function remapFontWeight(value: string): string {
  switch (value.toLowerCase()) {
    case "regular":
      return "400";
    case "bold":
      return "700";
    case "extrabold":
      return "800";
    case "black":
      return "900";
    default:
      return value;
  }
}
