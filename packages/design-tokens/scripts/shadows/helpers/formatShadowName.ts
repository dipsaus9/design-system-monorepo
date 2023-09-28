import type { TransformedToken } from "style-dictionary";

function hexToRGB(hex: string, alpha: string = "1") {
  if (!hex.startsWith("#")) {
    return hex;
  }

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

export function formatShadowTokens(tokens: TransformedToken[]) {
  return tokens
    .map((token) => {
      if (token.type === "boxShadow") {
        return {
          isShadowToken: true,
          name: token.name,
          x: `${token.value.x}`,
          y: `${token.value.y}`,
          spread: `${token.value.spread}`,
          blur: `${token.value.blur}`,
          color: hexToRGB(token.value.color),
        };
      }

      if (token.type === "composition" && token.value.boxShadow) {
        return {
          isShadowToken: false,
          name: token.name,
          x: `${token.value.boxShadow.x}`,
          y: `${token.value.boxShadow.y}`,
          spread: `${token.value.boxShadow.spread}`,
          blur: `${token.value.boxShadow.blur}`,
          color: hexToRGB(token.value.boxShadow.color),
        };
      }

      return null;
    })
    .filter((token) => token);
}
