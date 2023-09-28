import type { Named, Format } from "style-dictionary";

import { createHeader } from "../helpers/createHeader";
import { createTemplate } from "../helpers/createTemplate";

import { formatShadowTokens } from "./helpers/formatShadowName";

/**
 * Shadow TypeScript Web
 * Uses prettier for formatting
 */
export const FormatterNameShadowTypeScriptWeb = "ts/ShadowTokens";

export const FormatterShadowTypeScriptWeb: Named<Format> = {
  name: FormatterNameShadowTypeScriptWeb,
  formatter({ dictionary }) {
    const tokens = formatShadowTokens(dictionary.allTokens);

    return createTemplate("shadows/templates/shadows.js.ejs")({
      tokens,
      header: createHeader(),
    });
  },
};
