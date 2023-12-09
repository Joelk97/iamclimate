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
import { useLocale, useTranslations } from "next-intl";
import { Progetti, Progetto } from "@/types/progetto-types";
import ProjectCard from "@/app/components/projectCard";
import ThreeElementsWide from "@/app/components/3elementsWide";
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

export default function Progetti() {
  const t = useTranslations("Progetti");
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const [content, setContent] = useState<Progetti>([
    {
      title: { it: "" },
      content: { it: [] },
      intro: { it: "", en: "" },
      image: "",
      date: "",
      slug: { it: { current: "" } },
    },
  ]);

  useEffect(() => {
    const getContent = async () => {
      const res = await client.fetch(`*[_type == "project"][]{
        content,
        slug,
        date,
        title,
        intro,
        "image": image.asset -> url,
      }`);
      setContent(res);
    };
    getContent();
  }, []);

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
      <OrangeBanner content={content.length > 1 ? t("progetti") : "Ecoligia"} />
      <div className="flex flex-col items-center gap-2 sm:gap-6 w-full ">
        <ThreeElementsWide title={""} elements={content} link="progetti" />
      </div>
    </div>
  );
}
