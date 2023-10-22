import supportedLanguages from "./supportedLanguages";

export default {
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      title: "Traduzione",
      name: "translation",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "translation",
  })),
};
