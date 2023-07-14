import styles from "../page.module.css";
import "../globals.css";
import Image from "next/legacy/image";
import googleCalendar from "../../../public/googleCalendar.png";
import stylesContact from "../contact.module.css";
import Link from "next/link";
import Logo from "../../../public/iamclimate.svg";
import ProfilePict from "../../../public/icons/profilePict.svg";
import Navbar from "@/components/navbar";
import imageCase from "../../../public/icons/imageCase.png";
import OrangeBanner from "@/components/orangeBanner";
import Footer from "@/components/footer";
import stylesBlog from "../blog.module.css";
import ContactForm from "@/components/contactForm";
import { client } from "../../../sanity/lib/client";
import transformDate from "@/components/transformDate";
const queryBlog = `*[_type == "blogPost"]|order(date desc)[0..2]`;
export default async function Blog() {
  const blogs = await client.fetch(queryBlog);
  return (
    <div className={styles.main}>
      <Navbar />
      <OrangeBanner bannerText="Blog" />

      <div className={stylesBlog.containerBlog}>
        {blogs.map((e, i) => {
          return (
            <div key={i} className={stylesBlog.blog}>
              <p className={stylesBlog.date}>{transformDate(e.date)}</p>
              <div className={stylesBlog.testoBlog}>
                <h1 className={stylesBlog.titleBlog}>{e.title.it}</h1>
                <p className={stylesBlog.textEvent}>{e.intro.it}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
