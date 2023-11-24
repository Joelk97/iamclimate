"use client";
import Image from "next/image";
import Link from "next/link";
import IAmClimate from "/public/iamclimate.svg";
import IAmClimateDark from "/public/iamclimateDark.svg";
import { useTheme } from "next-themes";
import OrangeBanner from "../../components/orangeBanner";
import PortableText from "react-portable-text";
import React, { ReactChild, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ChiSiamo } from "@/types/chiSiamo-types";
import MemberCard from "../../components/memberCard";
import Contattaci from "../../components/contattaci";
import { useLocale } from "next-intl";
import { Paperclip } from "lucide-react";
type props = {
  children: React.ReactNode;
};
const serializers = {
  h1: (props: props) => <h1 className="text-4xl">{props.children}</h1>,
  h2: (props: props) => <h2 className="text-3xl">{props.children}</h2>,
  h3: (props: props) => <h3 className="text-2xl">{props.children}</h3>,
  h4: (props: props) => <h4 className="text-4xl">{props.children}</h4>,
  normal: (props: props) => <p className="my-2">{props.children}</p>,
  blockquote: (props: props) => (
    <blockquote className="bg-gray-100 border-l-4 border-gray-600 p-2 italic">
      {props.children}
    </blockquote>
  ),
  li: (props: props) => <li className="ml-4 list-disc">{props.children}</li>,
};
export default function ChiSiamo() {
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const [content, setContent] = useState<ChiSiamo>({
    text: { it: [] },
    textStatutes: { it: [] },
    statutesFile: "",
    titleStatutes: { it: "" },
    title: { it: "", en: "" },
    textMembers: { it: [] },
    titleAboutUs: { it: "", en: "" },
    titleMembers: { it: "", en: "" },
    members: [],
  });

  useEffect(() => {
    const getContent = async () => {
      const res = await client.fetch(`*[_type == "chiSiamo"][0]{
        text,
        title,
        titleAboutUs,
        titleMembers,
        textMembers,
        titleStatutes,
        "statutesFile":statutesFile.asset->url,
        testStatutes,
        "members": *[_type=="members"]|order(prio asc)[]{
          name,
          text,
          "memberImage": image.asset -> url,
          function
        }
      }`);
      setContent(res);
    };
    getContent();
  }, []);
  console.log(content);
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-between font-Futura">
      <Link href={`/`}>
        <Image
          alt="Logo IAMCLIMATE"
          src={theme === "dark" ? IAmClimateDark : IAmClimate}
          width={360}
          height={220}
        />
      </Link>
      <OrangeBanner content={content?.title?.[locale]} />
      <div className="flex flex-col items-center py-10 w-full">
        <div className="w-3/4 xl:w-2/3 flex flex-col gap-10 p-5 lg:p-10">
          <h1 className="text-5xl text-orange leading-6">
            {content?.titleAboutUs?.[locale]}
          </h1>
          {content?.text?.[locale]?.length > 0 && (
            <div className="text-justify">
              <PortableText
                content={content?.text?.[locale]}
                serializers={serializers}
              />
            </div>
          )}
        </div>
        <div className="w-3/4 xl:w-2/3 flex flex-col gap-10 p-10">
          <h1 className="text-5xl text-orange">
            {content?.titleMembers?.[locale]}
          </h1>
          {content?.textMembers?.[locale]?.length > 0 && (
            <PortableText
              content={content?.textMembers?.[locale]}
              serializers={serializers}
            />
          )}

          <div className="grid grid-cols-1 gap-16 gap-y-24 items-baseline my-20 text-justify">
            {content?.members?.map((member, i) => {
              return <MemberCard key={i} member={member} />;
            })}
          </div>
        </div>
      </div>{" "}
      {content?.textStatutes?.it?.length > 0 ||
        (content?.statutesFile && (
          <div className="w-2/3 flex flex-col gap-10 p-10">
            <h1 className="text-5xl text-orange">
              {content?.titleStatutes?.[locale]}
            </h1>
            {content?.textStatutes?.it?.length > 0 && (
              <PortableText
                content={content?.textStatutes?.[locale]}
                serializers={serializers}
              />
            )}
            <Link
              target="_blank"
              href={content.statutesFile ? content.statutesFile : ""}
            >
              <div className="flex flex-row gap-2">
                <Paperclip />
                <span>{content?.titleStatutes?.[locale]}</span>
              </div>
            </Link>
          </div>
        ))}
      <Contattaci />
    </div>
  );
}
