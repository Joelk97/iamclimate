import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Progetto",
  type: "document",
  fields: [
    defineField({
      title: "Titolo",
      name: "title",
      type: "localeString",
    }),

    defineField({
      title: "Intro",
      name: "intro",
      type: "localeText",
    }),
    defineField({
      title: "Contenuto",
      name: "content",
      type: "localeBlockContent",
    }),
    defineField({
      title: "Immagine",
      name: "image",
      type: "image",
    }),
  ],

  preview: {
    select: {
      title: `title`,
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title.it,
        media: media,
      };
    },
  },
});
