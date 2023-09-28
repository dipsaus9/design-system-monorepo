import { Named, Format } from "style-dictionary";

import { createHeader } from "../helpers/createHeader";
import { createTemplate } from "../helpers/createTemplate";

import { formatColorTokens } from "./helpers/formatColorTokens";

/**
 * Color TypeScript Web
 * Uses prettier for formatting
 */
export const FormatterNameColorTypeScript = "ts/colorTokens";

export const FormatterColorTypeScript: Named<Format> = {
  name: FormatterNameColorTypeScript,
  formatter({ dictionary }) {
    return createTemplate("colors/templates/color.js.ejs")({
      tokens: formatColorTokens(dictionary.allTokens),
      header: createHeader(),
    });
  },
};
