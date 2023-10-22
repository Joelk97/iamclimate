"use client";
import Image from "next/image";
import insta from "../../public/icons/insta.svg";
import email from "../../public/icons/mi_email.svg";
import phone from "../../public/icons/phone.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const iconStyle = { color: "#050505" };

const Footer = () => {
  const pathName = usePathname();
  const firstPath = pathName.split("/");
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div
      className={`bg-orange flex flex-col pt-10 pb-5 pl-10 gap-20 ${
        firstPath?.[1] == "studio" ? "hidden" : ""
      }`}
    >
      <div className="flex flex-row gap-16 self-center">
        <Link href={`mailto:iamclimate.earth@gmail.com`}>
          <Image
            style={iconStyle}
            alt="email"
            src={email}
            width={36}
            height={36}
          />
        </Link>
        <Link href={`tel:00415765656`}>
          <Image
            style={iconStyle}
            alt="phone"
            src={phone}
            width={36}
            height={36}
          />
        </Link>
        <Link
          href={`https://www.instagram.com/iamclimate.earth/`}
          target="_blank"
        >
          <Image
            style={iconStyle}
            alt="insta"
            src={insta}
            width={36}
            height={36}
          />
        </Link>
      </div>
      <span className="text-xs">
        © Copyright - {year} Joel Kuehl Web & Software Development
      </span>
    </div>
  );
};

export default Footer;
