"use client";
import Image from "next/image";
import Link from "next/link";
import IAmClimate from "../../public/iamclimate.svg";
import IAmClimateDark from "../../public/iamclimateDark.svg";
import { useTheme } from "next-themes";
import OrangeBanner from "../components/orangeBanner";
import PortableText from "react-portable-text";
import React, { ReactChild, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ChiSiamo } from "@/types/chiSiamo-types";
type props = {
  children: React.ReactNode;
};

export default function ChiSiamo() {
  const { theme, setTheme } = useTheme();
  const [content, setContent] = useState<ChiSiamo>({
    text: { it: [] },
    title: { it: "", en: "" },
  });
  useEffect(() => {
    const getContent = async () => {
      const res = await client.fetch(`*[_type == "chiSiamo"][0]{
        text,
        title
      }`);
      setContent(res);
    };
    getContent();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between font-Futura">
      <Link href={`/`}>
        <Image
          alt="Logo IAMCLIMATE"
          src={theme === "dark" ? IAmClimateDark : IAmClimate}
          width={360}
          height={220}
        />
      </Link>
      <OrangeBanner content="Chi siamo" />
      <div className=" w-4/5 flex flex-col gap-10 p-10">
        <h1 className="text-5xl">La nostra storia</h1>
        <PortableText
          content={content?.text?.it}
          serializers={{
            h1: (props: props) => (
              <h1 className="text-4xl">{props.children}</h1>
            ),
            h2: (props: props) => (
              <h2 className="text-3xl">{props.children}</h2>
            ),
            h3: (props: props) => (
              <h3 className="text-2xl">{props.children}</h3>
            ),
            h4: (props: props) => (
              <h4 className="text-4xl">{props.children}</h4>
            ),
            blockquote: (props: props) => (
              <blockquote className="bg-gray-100 border-l-4 border-gray-600 p-2 italic">
                {props.children}
              </blockquote>
            ),
            li: (props: props) => (
              <li className="ml-4 list-disc">{props.children}</li>
            ),
          }}
        />
      </div>
    </div>
  );
}
