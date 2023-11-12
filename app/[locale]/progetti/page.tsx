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
const ecoligia: Progetto = {
  content: { it: [], en: [] },
  title: { it: "Ecoligia", en: "Ecoligia" },
  intro: {
    it: "Lorem duis enim eiusmod fugiat eiusmod culpa eiusmod eu dolore est reprehenderit officia occaecat. Sunt incididunt excepteur esse duis non ut qui fugiat labore est exercitation exercitation duis esse. Deserunt id et ea velit enim. Pariatur est cillum aliqua non nostrud do consectetur excepteur culpa nulla non elit sunt. Cillum duis aliqua consectetur in dolor do mollit cupidatat. Mollit proident eu reprehenderit veniam velit deserunt esse qui magna. Quis sint cillum sunt excepteur voluptate.",
    en: "Incididunt esse tempor proident fugiat minim cillum do est ex quis excepteur mollit Lorem qui. Ipsum irure aute aliqua cillum. Ad sint veniam in est commodo commodo cupidatat anim duis labore exercitation. Reprehenderit dolore ut excepteur irure ad exercitation dolore aliqua. Excepteur laborum sit sit velit proident velit qui ea eiusmod. Cillum eiusmod sint culpa ex tempor ea eu ex ullamco. Non esse eu non do eiusmod elit adipisicing.",
  },
  image: "",
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
    },
  ]);

  useEffect(() => {
    const getContent = async () => {
      const res = await client.fetch(`*[_type == "project"][]{
        content,
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
      <OrangeBanner content={t("progetti")} />
      <div className="flex flex-col items-center py-10 w-2/3">
        <div className="flex flex-row flex-wrap justify-evenly gap-20 items-base my-20">
          {/* <ProjectCard project={ecoligia} /> */}
          {content?.map((project, i) => {
            return <ProjectCard key={i} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
