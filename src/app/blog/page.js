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
import stylesBlog from "../blog.module.css";
import ContactForm from "@/components/contactForm";

export default function Blog() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={styles.main}>
      <Navbar />
      <OrangeBanner bannerText="Blog" />

      <div className={stylesBlog.containerBlog}>
        <div className={stylesBlog.blog}>
          <p className={stylesBlog.date}>13.10.2023</p>
          <div className={stylesBlog.testoBlog}>
            <h1 className={stylesBlog.titleBlog}>Titolo post blog</h1>
            <p className={stylesBlog.textEvent}>
              Occaecat sint ipsum ea dolor minim adipisicing dolor duis aliquip
              non velit cillum ad sint. In eiusmod velit ut pariatur eu laboris
              minim. Labore mollit veniam excepteur laborum anim dolor
              adipisicing eu fugiat eiusmod ex velit. Quis minim voluptate nulla
              ullamco aute do sint et reprehenderit sint. Excepteur quis ipsum
              elit dolor eiusmod incididunt est aute est pariatur duis sunt
              cillum consequat. Cillum id laboris officia deserunt tempor aliqua
              elit dolor anim laboris. Labore enim tempor magna officia aliqua
              mollit excepteur Lorem pariatur in eiusmod.
            </p>
          </div>
        </div>
        <div className={stylesBlog.blog}>
          <p className={stylesBlog.date}>13.10.2023</p>
          <div className={stylesBlog.testoBlog}>
            <h1 className={stylesBlog.titleBlog}>Titolo post blog</h1>
            <p className={stylesBlog.textEvent}>
              Occaecat sint ipsum ea dolor minim adipisicing dolor duis aliquip
              non velit cillum ad sint. In eiusmod velit ut pariatur eu laboris
              minim. Labore mollit veniam excepteur laborum anim dolor
              adipisicing eu fugiat eiusmod ex velit. Quis minim voluptate nulla
              ullamco aute do sint et reprehenderit sint. Excepteur quis ipsum
              elit dolor eiusmod incididunt est aute est pariatur duis sunt
              cillum consequat. Cillum id laboris officia deserunt tempor aliqua
              elit dolor anim laboris. Labore enim tempor magna officia aliqua
              mollit excepteur Lorem pariatur in eiusmod.
            </p>
          </div>
        </div>
        <div className={stylesBlog.blog}>
          <p className={stylesBlog.date}>13.10.2023</p>
          <div className={stylesBlog.testoBlog}>
            <h1 className={stylesBlog.titleBlog}>Titolo post blog</h1>
            <p className={stylesBlog.textEvent}>
              Occaecat sint ipsum ea dolor minim adipisicing dolor duis aliquip
              non velit cillum ad sint. In eiusmod velit ut pariatur eu laboris
              minim. Labore mollit veniam excepteur laborum anim dolor
              adipisicing eu fugiat eiusmod ex velit. Quis minim voluptate nulla
              ullamco aute do sint et reprehenderit sint. Excepteur quis ipsum
              elit dolor eiusmod incididunt est aute est pariatur duis sunt
              cillum consequat. Cillum id laboris officia deserunt tempor aliqua
              elit dolor anim laboris. Labore enim tempor magna officia aliqua
              mollit excepteur Lorem pariatur in eiusmod.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
