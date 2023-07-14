import styles from "./page.module.css";
import "./globals.css";
import Image from "next/legacy/image";
import googleCalendar from "../../public/googleCalendar.png";
import stylesContact from "./contact.module.css";
import Link from "next/link";
import email from "../../public/icons/mi_email.svg";
import phone from "../../public/icons/phone.svg";
import insta from "../../public/icons/insta.svg";
import Navbar from "@/components/navbar";
import OrangeBanner from "@/components/orangeBanner";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";
import { client } from "../../sanity/lib/client";
import transformDate from "@/components/transformDate";
const queryBlog = `*[_type == "blogPost"]|order(date desc)[0..2]`;
const queryEvents = `*[_type == "events"]|order(date desc)[0..2]`;
export default async function Home() {
  const blogs = await client.fetch(queryBlog);
  const events = await client.fetch(queryEvents);
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={styles.main}>
      <Navbar />
      <OrangeBanner bannerText="Ecoligia, la valigia didattica" />
      <div className={styles.containerBlogEvents}>
        <div className={`${styles.containerBlog} ${styles.containerParallel}`}>
          <h1 className={`${styles.titleBlogEvents} ${styles.titleSection}`}>
            Blog
          </h1>
          {blogs.map((e, i) => {
            return (
              <div className={styles.blog} key={i}>
                <p>{transformDate(e.date)}</p>
                <div className={styles.testoBlog}>
                  <h1 className={styles.titleBlog}>{e.title.it}</h1>
                  <p className={styles.textBlog}>{e.intro.it}</p>
                </div>
              </div>
            );
          })}
          <button className={styles.buttonMore}>
            <Link
              style={{ textDecoration: "none", color: "#050505" }}
              href="/blog"
            >
              Altri blog
            </Link>
          </button>
        </div>
        <div
          className={`${styles.containerEvents} ${styles.containerParallel}`}
        >
          <h1 className={`${styles.titleBlogEvents} ${styles.titleSection}`}>
            Eventi
          </h1>
          {events.map((e, i) => {
            return (
              <div key={i} className={styles.event}>
                <p>{transformDate(e.date)}</p>
                <div className={styles.testoEvent}>
                  <h1 className={styles.titleEvent}>{e.title.it}</h1>
                  <p className={styles.textEvent}>{e.intro.it}</p>
                </div>
              </div>
            );
          })}

          <button className={styles.buttonMore}>
            <Link
              style={{ textDecoration: "none", color: "#050505" }}
              href="/eventi"
            >
              Altri eventi
            </Link>
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
      <ContactForm title="Riservala ora!" />
      <Footer />
    </div>
  );
}
