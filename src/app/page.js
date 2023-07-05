"use client";

import styles from "./page.module.css";
import "./globals.css";
import Image from "next/legacy/image";
import googleCalendar from "../../public/googleCalendar.png";
import { useState } from "react";
import stylesContact from "./contact.module.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={styles.main}>
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
          <Image src={googleCalendar} layout="fill" objectFit="contain" />
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
      <div className={styles.containerRiservala}>
        <h1 className={styles.titleSection}>Riservala ora!</h1>
        <div className={stylesContact.contactModuleContainer}>
          <div className={`${stylesContact.name} ${stylesContact.inputs}`}>
            <label for="name">Nome</label>
            <input type="text" name="name"></input>
          </div>
          <div className={`${stylesContact.email} ${stylesContact.inputs}`}>
            <label for="email">Email</label>
            <input type="text" name="email"></input>
          </div>
          <div className={`${stylesContact.message} ${stylesContact.inputs}`}>
            <label for="message">Messaggio</label>
            <input type="text" name="message"></input>
          </div>
          <button className={`${styles.buttonMore} ${stylesContact.button}`}>
            Invia
          </button>
        </div>
      </div>
    </div>
  );
}
