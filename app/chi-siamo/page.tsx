"use client";
import Image from "next/image";
import Link from "next/link";
import "../components/RichTextComponents";
import IAmClimate from "../../public/iamclimate.svg";
import IAmClimateDark from "../../public/iamclimateDark.svg";
import { useTheme } from "next-themes";
import OrangeBanner from "../components/orangeBanner";
import { PortableText } from "@portabletext/react";

export default function ChiSiamo() {
  const { theme, setTheme } = useTheme();
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
      <div>
        <h1 className="text-5xl">La nostra storia</h1>
      </div>
    </div>
  );
}
