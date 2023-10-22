"use client";

import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";

const Navbar = () => {
  const pathName = usePathname();
  const firstPath = pathName.split("/");
  return (
    <div
      className={`flex flex-row w-full justify-between px-[140px] py-20 ${
        firstPath?.[1] == "studio" ? "hidden" : ""
      }`}
    >
      <ThemeSwitcher />
      <ul className="flex flex-row gap-10 text-base">
        <li className="px-4 py-2 hover:bg-[#EAAA3B] hover:rounded-xl hover:cursor-pointer">
          <Link href={`/chi-siamo`}>chi siamo</Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#EAAA3B] hover:rounded-xl hover:cursor-pointer">
          progetti
        </li>
        <li className="px-4 py-2 hover:bg-[#EAAA3B] hover:rounded-xl hover:cursor-pointer">
          eventi
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
