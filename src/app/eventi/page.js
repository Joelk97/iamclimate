import styles from "../page.module.css";
import "../globals.css";
import Navbar from "@/components/navbar";
import OrangeBanner from "@/components/orangeBanner";
import Footer from "@/components/footer";
import stylesEventi from "../eventi.module.css";
import ContactForm from "@/components/contactForm";
import { client } from "../../../sanity/lib/client";
import transformDate from "@/components/transformDate";
const queryEvents = `*[_type == "events"]|order(date desc)[0..2]`;
export default async function Eventi() {
  const events = await client.fetch(queryEvents);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const today = `${day}.${month}.${year}`;
  return (
    <div className={styles.main}>
      <Navbar />
      <OrangeBanner bannerText="Eventi" />
      <div className={stylesEventi.containerEventi}>
        <h1 className={`${styles.titleSection} ${stylesEventi.titleSection}`}>
          Eventi futuri
        </h1>
        {events
          .filter((e) => transformDate(e.date).substring(6, 10) >= year)
          .map((e, i) => {
            return (
              <div className={stylesEventi.containerEvento} key={i}>
                <p className={stylesEventi.date}>{transformDate(e.date)}</p>
                <div className={stylesEventi.testoEvent}>
                  <h1 className={stylesEventi.titleEvent}>{e.title.it}</h1>
                  <p className={stylesEventi.textEvent}>{e.intro.it}</p>
                </div>
              </div>
            );
          })}
        <button className={`${stylesEventi.buttonMore}`}>Altri eventi</button>
      </div>
      <div className={stylesEventi.containerEventi}>
        <h1 className={`${styles.titleSection} ${stylesEventi.titleSection}`}>
          Eventi passati
        </h1>
        {events
          .filter((e) => transformDate(e.date).substring(6, 10) < year)
          .map((e, i) => {
            return (
              <div className={stylesEventi.containerEvento} key={i}>
                <p className={stylesEventi.date}>{transformDate(e.date)}</p>
                <div className={stylesEventi.testoEvent}>
                  <h1 className={stylesEventi.titleEvent}>{e.title.it}</h1>
                  <p className={stylesEventi.textEvent}>{e.intro.it}</p>
                </div>
              </div>
            );
          })}
        <button className={`${stylesEventi.buttonMore}`}>Altri eventi</button>
      </div>
      <ContactForm title="Vuoi organizzare un evento?" />
      <Footer />
    </div>
  );
}
