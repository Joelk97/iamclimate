"use client";

import OrangeBanner from "@/app/components/orangeBanner";
import { client } from "@/sanity/lib/client";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import IAmClimate from "/public/iamclimate.svg";
import IAmClimateDark from "/public/iamclimateDark.svg";
import { useEffect, useState } from "react";
import PortableText from "react-portable-text";
interface PostContext {
  title: {
    [key: string]: string;
  };
  image: string;
  intro: {
    [key: string]: string;
  };
  slug: {
    [key: string]: {
      current: string;
    };
  };
  date: string;
  [key: string]: any;
}
type props = {
  children: React.ReactNode;
};
const serializers = {
  h1: (props: props) => <h1 className="text-4xl">{props.children}</h1>,
  h2: (props: props) => <h2 className="text-3xl">{props.children}</h2>,
  h3: (props: props) => <h3 className="text-2xl">{props.children}</h3>,
  h4: (props: props) => <h4 className="text-4xl">{props.children}</h4>,
  normal: (props: props) => (
    <p className="my-2">{props.children == "" ? <br /> : props.children}</p>
  ),
  blockquote: (props: props) => (
    <blockquote className="bg-gray-100 border-l-4 border-gray-600 p-2 italic">
      {props.children}
    </blockquote>
  ),
  li: (props: props) => <li className="ml-4 list-disc">{props.children}</li>,
};
export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<PostContext | null>(null);
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  useEffect(() => {
    const getPost = async () => {
      const res = await client.fetch(
        `*[_type=="blogPost" && slug.${locale}.current == "${params.slug}"][0]{
          title,
          intro,
          slug,
          date,
          content,
          "image": image.asset -> url,
        }`
      );
      setPost(res);
    };
    getPost();
  }, [locale, params.slug]);
  console.log(post);
  return (
    <>
      {post ? (
        <div className="flex min-h-screen flex-col items-center justify-between font-Futura">
          <Link href={`/`}>
            <Image
              alt="Logo IAMCLIMATE"
              src={theme === "dark" ? IAmClimateDark : IAmClimate}
              width={360}
              height={220}
            />
          </Link>
          <OrangeBanner content={post?.title?.[locale]} />
          <div className="flex flex-col items-center w-3/4 lg:w-2/3 py-32 gap-14">
            {post?.image && (
              <Image
                width={300}
                height={300}
                alt="post image"
                src={post?.image}
              />
            )}
            {/*  {post?.intro?.[locale] && (
              <p className=" font-thin italic">{post?.intro?.[locale]}</p>
            )} */}
            {post?.content?.[locale].length > 0 && (
              <PortableText
                serializers={serializers}
                content={post?.content?.[locale]}
              />
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
