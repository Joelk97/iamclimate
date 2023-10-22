import { defineField, defineType } from "sanity";

export default defineType({
  name: "slogan",
  title: "Slogan",
  type: "document",
  fields: [
    defineField({
      title: "Contenuto",
      name: "content",
      type: "localeText",
    }),
  ],
});
