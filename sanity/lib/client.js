import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2021-08-31",
  dataset: "production",
  projectId: "gano3dir",
  useCdn: "true",
});
