"use client";

import Image from "next/image";
import IAmClimate from "/public/iamclimate.svg";
import IAmClimateDark from "/public/iamclimateDark.svg";
import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import ThreeElements from "@/app/components/3elements";
import OrangeBanner from "@/app/components/orangeBanner";
import ThreeElementsWide from "@/app/components/3elementsWide";
type Content = {
  [key: string]: string;
};
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
interface Slogan {
  content?: Content;
}
const queryEvents = `*[_type == "events"]|order(date desc)[0..2]`;
const querySlogan = `*[_type == "slogan"][0]`;

const Blog = () => {
  const t = useTranslations("Home");
  const router = useRouter();
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const [events, setEvents] = useState<Element[] | null>();
  const [slogan, setSlogan] = useState<Slogan | null>();
  const [today, setToday] = useState<string>();
  const [eventiFuturi, setEventiFuturi] = useState<Element[] | null>();
  const [eventiPassati, setEventiPassati] = useState<Element[] | null>();
  useEffect(() => {
    const getEvents = async () => {
      const res = await client.fetch(queryEvents);
      setEvents(res);
    };
    const getSlogan = async () => {
      const res = await client.fetch(querySlogan);
      setSlogan(res);
    };
    getEvents();
    getSlogan();
    setToday(new Date().toISOString().split("T")[0]); // set the current date
  }, []);

  useEffect(() => {
    if (events && today) {
      const fut = events.filter((event) => event.date >= today);
      fut.length > 0 && setEventiFuturi(fut);
      const pas = events.filter((event) => event.date < today);
      pas.length > 0 &&
        setEventiPassati(events.filter((event) => event.date < today));
    }
  }, [events, today]);
  console.log(today);
  {
    events && console.log(events?.[0]?.date);
  }
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
      <OrangeBanner content={slogan?.content?.[locale] || ""} />
      <div className="flex flex-col items-center gap-2 sm:gap-6 w-full ">
        {eventiFuturi && (
          <ThreeElementsWide
            title={t("eventiFuturi")}
            elements={eventiFuturi}
            link="eventi"
          />
        )}
        {eventiPassati && (
          <ThreeElementsWide
            link="eventi"
            title={t("eventiPassati")}
            elements={eventiPassati}
          />
        )}
      </div>
      {/* <Disponibilita />
      <RiservaOra /> */}
    </div>
  );
};
export default Blog;
