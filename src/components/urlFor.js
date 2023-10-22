import client from "../sanityClient";
import imageUrlBuiler from "@sanity/image-url";

const builder = imageUrlBuiler(client);

function urlFor(source) {
  return builder.image(source);
}
export default urlFor;
