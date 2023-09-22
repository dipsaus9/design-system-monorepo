import { createTemplate } from "./createTemplate";

export function createHeader() {
  return createTemplate("helpers/templates/themeHeader.ejs")();
}
