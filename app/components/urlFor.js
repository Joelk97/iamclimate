import React from "react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: "ai8uqufs",
  dataset: "production",
});

export default function urlFor(source) {
  return builder.image(source);
}
