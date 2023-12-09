import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Current = {
  current: string;
};
type Intro = {
  [key: string]: string;
};
type Title = {
  [key: string]: string;
};
type Slug = {
  [key: string]: Current;
};
interface Element {
  date: string;
  intro?: Intro;
  slug: Slug;
  title: Title;
}

interface ThreeElementsProps {
  title: string;
  link: string;
  elements: Element[] | null | undefined;
}

const ThreeElementsWide: React.FC<ThreeElementsProps> = ({
  title,
  elements,
  link,
}) => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const pathname = usePathname();
  console.log(elements);
  return (
    <div
      className={`group flex flex-col items-center px-10 md:px-20 w-full sm:w-2/3 ${
        pathname == "/" && "hover:bg-orange"
      } py-24 gap-20`}
    >
      <h1 className="text-5xl">{title}</h1>
      <ul className="flex flex-col gap-20">
        {elements != undefined &&
          elements?.length > 0 &&
          elements.map((e, i) => {
            return (
              <li
                key={i}
                className="w-full flex flex-row items-baseline gap-16 text-base "
              >
                <span className="whitespace-nowrap">
                  {e?.intro?.[locale] && e.date}
                </span>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl">{e.title?.[locale]}</h1>
                  <p className=" text-justify">{e.intro?.[locale]}</p>
                  <Link
                    className=" self-end mt-2 hover:cursor-pointer"
                    key={i}
                    href={`/${link.toLowerCase()}/${
                      e?.slug?.[locale]?.current
                    }`}
                  >
                    <button
                      className={`w-fit px-3 py-1 rounded-xl text-base bg-orange ${
                        pathname == "/" && "group-hover:bg-white"
                      }`}
                    >
                      {t("continuaALeggere")}
                    </button>
                  </Link>
                </div>
              </li>
            );
          })}
      </ul>
      {pathname == "/" && (
        <Link href={`/${title.toLowerCase()}`}>
          <button
            className={`px-4 py-2 rounded-xl text-2xl bg-orange ${
              pathname == "/" && "group-hover:bg-white"
            }`}
          >
            {t("altri")} {title.toLowerCase()}
          </button>
        </Link>
      )}
    </div>
  );
};

export default ThreeElementsWide;
