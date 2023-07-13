"use client";

import styles from "../page.module.css";
import "../globals.css";
import Image from "next/legacy/image";
import googleCalendar from "../../../public/googleCalendar.png";
import { useState } from "react";
import stylesContact from "../contact.module.css";
import Link from "next/link";
import Logo from "../../../public/iamclimate.svg";
import ProfilePict from "../../../public/icons/profilePict.svg";
import Navbar from "@/components/navbar";
import OrangeBanner from "@/components/orangeBanner";
import Footer from "@/components/footer";
import stylesChiSiamo from "../chiSiamo.module.css";
import ContactForm from "@/components/contactForm";

export default function ChiSiamo() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={styles.main}>
      <Navbar />
      <OrangeBanner bannerText="Chi siamo" />
      <div className={`${stylesChiSiamo.section} ${stylesChiSiamo.section1}`}>
        <h1 className={`${styles.titleSection} ${stylesChiSiamo.titleSection}`}>
          La nostra storia
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={`${stylesChiSiamo.section} ${stylesChiSiamo.section2}`}>
        <h1 className={`${styles.titleSection} ${stylesChiSiamo.titleSection}`}>
          I membri
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={stylesChiSiamo.containerMembri}>
          <div className={stylesChiSiamo.schedaMembro}>
            <div className={stylesChiSiamo.imageMembro}>
              <Image
                alt="Profile Picture"
                src={ProfilePict}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1>Nome Membro</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={stylesChiSiamo.schedaMembro}>
            <div className={stylesChiSiamo.imageMembro}>
              <Image
                alt="Profile Picture"
                src={ProfilePict}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1>Nome Membro</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={stylesChiSiamo.schedaMembro}>
            <div className={stylesChiSiamo.imageMembro}>
              <Image
                alt="Profile Picture"
                src={ProfilePict}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1>Nome Membro</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={stylesChiSiamo.schedaMembro}>
            <div className={stylesChiSiamo.imageMembro}>
              <Image
                alt="Profile Picture"
                src={ProfilePict}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1>Nome Membro</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={stylesChiSiamo.schedaMembro}>
            <div className={stylesChiSiamo.imageMembro}>
              <Image
                alt="Profile Picture"
                src={ProfilePict}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1>Nome Membro</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <ContactForm title="Contattaci!" />
      <Footer />
    </div>
  );
}
