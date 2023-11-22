import { defineField, defineType } from "sanity";

export default defineType({
  name: "members",
  title: "Membri",
  type: "document",
  fields: [
    defineField({
      title: "Nome",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Funzione",
      name: "function",
      type: "localeString",
    }),
    defineField({
      title: "Testo",
      name: "text",
      type: "localeText",
    }),
    defineField({
      title: "Immagine",
      name: "image",
      type: "image",
    }),
    defineField({
      title: "prio",
      name: "prio",
      type: "number",
    }),
  ],
  /*
  preview: {
    select: {
      title: `name`,
      media: "image",
    },
    prepare({ name, media }) {
      return {
        title: name,
        media: media,
      };
    },
  },*/
});
