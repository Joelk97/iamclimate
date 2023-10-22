import Link from "next/link";
import urlFor from "./urlFor";
import urlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";
const builder = urlBuilder(client);
export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        // <div
        //   style={{ position: "relative", width: "100%", height: "200%" }}
        //   className="relative w-full h-96 m-10 mx-auto"
        // >
        //   <Image
        //     objectFit="contain"
        //     src={urlFor(value).url()}
        //     alt="Blog Post Image"
        //     layout="fill"
        //   />
        // </div>

        // <img src={urlFor(value).url()} />

        <img src={urlFor(value).url()} />
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link target="_blank" href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
  },
};
