import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
type Current = {
  current: string;
};
type Intro = {
  [key: string]: string;
};
type Slug = {
  [key: string]: Current;
};
interface Element {
  date: string;
  intro?: Intro;
  slug: Slug;
}

interface ThreeElementsProps {
  title: string;
  elements: Element[] | null | undefined;
}

const ThreeElements: React.FC<ThreeElementsProps> = ({ title, elements }) => {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <div className=" group flex flex-col items-center px-20 hover:bg-orange dark:hover:text-black py-24 gap-20">
      <h1 className="text-5xl">{title}</h1>
      <ul className="flex flex-col gap-20">
        {elements != undefined &&
          elements?.length > 0 &&
          elements.map((e, i) => {
            return (
              <Link key={i} href={`/blog/${e?.slug?.[locale]?.current}`}>
                {" "}
                <li className="w-full flex flex-row gap-16 text-base hover:cursor-pointer">
                  <span className="whitespace-nowrap">
                    {e?.intro?.[locale] && e.date}
                  </span>
                  <p>{e.intro?.[locale]}</p>
                </li>
              </Link>
            );
          })}
      </ul>
      <button className="px-4 py-2 rounded-xl text-base bg-orange group-hover:bg-white dark:group-hover:bg-black dark:group-hover:text-white">
        {t("altri")} {title.toLowerCase()}
      </button>
    </div>
  );
};

export default ThreeElements;
