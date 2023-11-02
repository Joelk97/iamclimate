import { defineField, defineType } from "sanity";

export default defineType({
  name: "chiSiamo",
  title: "Chi Siamo",
  type: "document",
  fields: [
    defineField({
      title: "Titolo orange banner",
      name: "title",
      type: "localeString",
    }),
    defineField({
      title: "Titolo pragrafo 'su di noi'",
      name: "titleAboutUs",
      type: "localeString",
    }),
    defineField({
      title: "Testo",
      name: "text",
      type: "localeBlockContent",
    }),
    defineField({
      title: "Titolo pragrafo 'i nostri membri'",
      name: "titleMembers",
      type: "localeString",
    }),
    defineField({
      title: "Testo i nostri membri",
      name: "textMembers",
      type: "localeBlockContent",
    }),
    defineField({
      title: "Membri",
      name: "members",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "members",
            },
          ],
        },
      ],
    }),
    defineField({
      title: "Titolo statuti",
      name: "titleStatutes",
      type: "localeString",
    }),
    defineField({
      title: "Testo statuti",
      name: "textStatutes",
      type: "localeBlockContent",
    }),
  ],
  preview: {
    select: {
      title: `title`,
    },
    prepare({ title }) {
      return {
        title: title.it,
      };
    },
  },
});
