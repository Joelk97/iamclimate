"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
  const [firstPath, setFirstPath] = useState();
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navigation");
  useEffect(() => {
    setFirstPath(pathName.split("/"));
  }, [pathName]);
  return (
    <div
      className={`flex flex-row w-full items-center justify-end px-16 md:px-[140px]  py-20 ${
        firstPath?.[1] == "studio" ? "hidden" : ""
      }`}
    >
      <div
        className={`flex flex-row items-center min-h-[40px] ${
          open && "min-w-[312px]"
        }`}
      >
        <ul
          className={`${
            open ? "flex" : "hidden"
          } md:flex gap-4 md:gap-10 text-base bg-white z-50`}
        >
          {pathName != "/" && (
            <li
              onClick={() => setOpen(false)}
              className="px-1.5 md:px-4 py-2 hover:bg-[#EAAA3B] hover:rounded-xl hover:cursor-pointer"
            >
              <Link href={`/`}>home</Link>
            </li>
          )}
          <li
            onClick={() => setOpen(false)}
            className="px-1.5 md:px-4 py-2 hover:bg-[#EAAA3B] hover:rounded-xl hover:cursor-pointer"
          >
            <Link href={`/chi-siamo`}>{t("chiSiamo")}</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="px-1.5 md:px-4 py-2 hover:bg-[#EAAA3B] hover:rounded-xl hover:cursor-pointer"
          >
            <Link href={`/progetti`}>{t("progetti")}</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="px-1.5 md:px-4 py-2 hover:bg-[#EAAA3B] hover:rounded-xl hover:cursor-pointer"
          >
            {t("eventi")}
          </li>
        </ul>
        {open ? (
          <X
            width={32}
            height={32}
            className="md:hidden ml-10 hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <Menu
            width={32}
            height={32}
            className="md:hidden ml-10 hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
