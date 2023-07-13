"use client";

import styles from "./page.module.css";
import "./globals.css";
import Image from "next/legacy/image";
import googleCalendar from "../../public/googleCalendar.png";
import { useState } from "react";
import stylesContact from "./contact.module.css";
import Link from "next/link";
import email from "../../public/icons/mi_email.svg";
import phone from "../../public/icons/phone.svg";
import insta from "../../public/icons/insta.svg";
import Navbar from "@/components/navbar";
import OrangeBanner from "@/components/orangeBanner";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={styles.main}>
      <Navbar />
      <OrangeBanner bannerText="Ecoligia, la valigia didattica" />
      <div className={styles.containerBlogEvents}>
        <div className={`${styles.containerBlog} ${styles.containerParallel}`}>
          <h1 className={`${styles.titleBlogEvents} ${styles.titleSection}`}>
            Blog
          </h1>
          <div className={styles.blog}>
            <p>26.06.2023</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.blog}>
            <p>26.06.2023</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.blog}>
            <p>26.06.2023</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <button className={styles.buttonMore}>Altri blog</button>
        </div>
        <div
          className={`${styles.containerEvents} ${styles.containerParallel}`}
        >
          <h1 className={`${styles.titleBlogEvents} ${styles.titleSection}`}>
            Eventi
          </h1>
          <div className={styles.event}>
            <p>26.06.2023</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.event}>
            <p>26.06.2023</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <button className={styles.buttonMore}>Altri eventi</button>
        </div>
      </div>
      <div className={styles.containerCalendar}>
        <h1 className={styles.titleSection}>Disponibilità della valigia</h1>
        <div className={styles.googleCalendarContainer}>
          <Image
            alt="google calendar"
            src={googleCalendar}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button
          className={styles.buttonMore}
          style={{
            background: "#fafafa",
            margin: "0",
            marginBottom: "6rem",
            fontSize: "24px",
          }}
        >
          Scopri di più!
        </button>
      </div>
      <ContactForm title="Riservala ora!" />
      <Footer />
    </div>
  );
}
