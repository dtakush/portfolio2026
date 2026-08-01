import Typograf from "typograf";

const tp = new Typograf({
  locale: ["ru", "en-US"],
});

// включает правила для русской типографики
tp.enableRule("common/nbsp/*");

export const typography = (text: string) => tp.execute(text);