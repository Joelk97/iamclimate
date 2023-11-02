"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import IAmClimate from "../public/iamclimate.svg";
import IAmClimateDark from "../public/iamclimateDark.svg";
import OrangeBanner from "./components/orangeBanner";
import { useTheme } from "next-themes";
import Link from "next/link";
import ThreeElements from "./components/3elements";
import Disponibilita from "./components/calendarioDispo";
import RiservaOra from "./components/riservaOra";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
interface Slogan {
  content?: {
    it: string;
  };
}
const queryBlogs = `*[_type == "blogPost"]|order(date desc)[0..2]`;
const queryEvents = `*[_type == "events"]|order(date desc)[0..2]`;
const querySlogan = `*[_type == "slogan"][0]`;

const Home: React.FC = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [blogs, setBlogs] = useState<[] | null>();
  const [events, setEvents] = useState<[] | null>();
  const [slogan, setSlogan] = useState<Slogan | null>();
  useEffect(() => {
    const getBlogs = async () => {
      const res = await client.fetch(queryBlogs);
      setBlogs(res);
    };
    const getEvents = async () => {
      const res = await client.fetch(queryEvents);
      setEvents(res);
    };
    const getSlogan = async () => {
      const res = await client.fetch(querySlogan);
      setSlogan(res);
    };
    getBlogs();
    getEvents();
    getSlogan();
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

      <OrangeBanner content={slogan?.content?.it || ""} />
      <div className="grid grid-cols-2 gap-6 w-full">
        <ThreeElements title="Blog" elements={blogs} />
        <ThreeElements title="Eventi" elements={events} />
      </div>
      <Disponibilita />
      <RiservaOra />
    </div>
  );
};
export default Home;
