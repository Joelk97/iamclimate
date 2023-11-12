/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog Post")
              .child(
                S.documentList()
                  .title("Blog post")
                  .filter('_type == "blogPost"')
              ),
            S.listItem()
              .title("Progetti")
              .child(
                S.documentList().title("Progetti").filter('_type=="project"')
              ),
            S.listItem()
              .title("Eventi")
              .child(
                S.documentList().title("Eventi").filter('_type == "events"')
              ),
            S.listItem()
              .title("Chi siamo")
              .child(
                S.document()
                  .title("Chi siamo")
                  .schemaType("chiSiamo")
                  .id("1797cca6-76ef-43b6-b9be-3819febfd5b3")
              ),
            S.listItem()
              .title("Slogan")
              .child(
                S.document()
                  .title("Slogan")
                  .schemaType("slogan")
                  .id("eaf27218-9cac-40a0-9d2f-d87fd0c2316e")
              ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
