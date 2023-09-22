import { Named, Format } from "style-dictionary";

import { createHeader } from "../helpers/createHeader";
import { createTemplate } from "../helpers/createTemplate";

import {
  formatFontFamilyTokens,
  formatFontSizeTokens,
  formatFontWeightTokens,
  formatLineHeightTokens,
  formatLetterSpacing,
} from "./formatFontFamilyTokens";

/**
 * Typography TypeScript Web
 * Uses prettier for formatting
 */
export const FormatterNameTypographyJavaScriptFlatModule =
  "js/typographyTokens/flatModule";

export const FormatterTypographyTypeScript: Named<Format> = {
  name: FormatterNameTypographyJavaScriptFlatModule,
  formatter({ dictionary }): string {
    const file = createTemplate("typography/templates/typography.js.ejs")({
      fontFamilyTokens: formatFontFamilyTokens(dictionary.allTokens),
      fontSizeTokens: formatFontSizeTokens(dictionary.allTokens),
      fontWeightTokens: formatFontWeightTokens(dictionary.allTokens),
      lineHeightTokens: formatLineHeightTokens(dictionary.allTokens),
      letterSpacing: formatLetterSpacing(dictionary.allTokens),
      header: createHeader(),
    });

    return file;
  },
};
