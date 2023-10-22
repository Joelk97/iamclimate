import supportedLanguages from "./supportedLanguages";

export default {
  name: "localeSlug",
  type: "object",
  fieldsets: [
    {
      title: "Traduzione",
      name: "translation",
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "slug",
    fieldset: lang.isDefault ? null : "translation",
    options: {
      source: `title.${lang.id}`,
      maxLength: 200,
    },
  })),
};
