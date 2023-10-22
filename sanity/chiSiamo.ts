import { defineField, defineType } from "sanity";

export default defineType({
  name: "chiSiamo",
  title: "Chi Siamo",
  type: "document",
  fields: [
    defineField({
      title: "Titolo",
      name: "title",
      type: "localeString",
    }),

    defineField({
      title: "Testo",
      name: "text",
      type: "localeBlockContent",
    }),
    defineField({
      title: "Testoi nostri membri",
      name: "textMembers",
      type: "localeBlockContent",
    }),
    defineField({
      title: "Membri",
      name: "members",
      type: "reference",
      to: [
        {
          type: "members",
        },
      ],
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
