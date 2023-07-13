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
import imageCase from "../../../public/icons/imageCase.png";
import OrangeBanner from "@/components/orangeBanner";
import Footer from "@/components/footer";
import stylesProgetti from "../progetti.module.css";
import ContactForm from "@/components/contactForm";

export default function Progetti() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={styles.main}>
      <Navbar />
      <OrangeBanner bannerText="Progetti" />
      <div className={stylesProgetti.containerProgetti}>
        <div className={stylesProgetti.schedaProgetto}>
          <div className={stylesProgetti.imageProject}>
            <Image
              alt="image project"
              src={imageCase}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1>Titolo progetto</h1>
          <p>
            Piccola descrizione del progetto, description9j 98wrhg owuehf
            quwehfuew{" "}
          </p>
          <button className={`${stylesProgetti.buttonMore}`}>
            Continua a leggere
          </button>
        </div>
        <div className={stylesProgetti.schedaProgetto}>
          <div className={stylesProgetti.imageProject}>
            <Image
              alt="image project"
              src={imageCase}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1>Titolo progetto</h1>
          <p>
            Piccola descrizione del progetto, description9j 98wrhg owuehf
            quwehfuew{" "}
          </p>
          <button className={`${stylesProgetti.buttonMore}`}>
            Continua a leggere
          </button>
        </div>
        <div className={stylesProgetti.schedaProgetto}>
          <div className={stylesProgetti.imageProject}>
            <Image
              alt="image project"
              src={imageCase}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1>Titolo progetto</h1>
          <p>
            Piccola descrizione del progetto, description9j 98wrhg owuehf
            quwehfuew{" "}
          </p>
          <button className={`${stylesProgetti.buttonMore}`}>
            Continua a leggere
          </button>
        </div>
        <div className={stylesProgetti.schedaProgetto}>
          <div className={stylesProgetti.imageProject}>
            <Image
              alt="image project"
              src={imageCase}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1>Titolo progetto</h1>
          <p>
            Piccola descrizione del progetto, description9j 98wrhg owuehf
            quwehfuew{" "}
          </p>
          <button className={`${stylesProgetti.buttonMore}`}>
            Continua a leggere
          </button>
        </div>
        <div className={stylesProgetti.schedaProgetto}>
          <div className={stylesProgetti.imageProject}>
            <Image
              alt="image project"
              src={imageCase}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1>Titolo progetto</h1>
          <p>
            Piccola descrizione del progetto, description9j 98wrhg owuehf
            quwehfuew{" "}
          </p>
          <button className={`${stylesProgetti.buttonMore}`}>
            Continua a leggere
          </button>
        </div>
        <div className={stylesProgetti.schedaProgetto}>
          <div className={stylesProgetti.imageProject}>
            <Image
              alt="image project"
              src={imageCase}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1>Titolo progetto</h1>
          <p>
            Piccola descrizione del progetto, description9j 98wrhg owuehf
            quwehfuew{" "}
          </p>
          <button className={`${stylesProgetti.buttonMore}`}>
            Continua a leggere
          </button>
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
      <ContactForm title="Riservala ora la valigia!" />
      <Footer />
    </div>
  );
}
