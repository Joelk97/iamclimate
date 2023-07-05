import Link from "next/link";
import "./globals.css";
import Image from "next/legacy/image";
import Logo from "../../public/iamclimate.svg";
import Script from "next/script";
import email from "../../public/icons/mi_email.svg";
import phone from "../../public/icons/phone.svg";
import insta from "../../public/icons/insta.svg";

export const metadata = {
  title: "I am climate",
  description: "Ecoligia, la valigia didattica",
};

export default function RootLayout({ children }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <html lang="it">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-SQ8TX5ZD6R`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '"G-SQ8TX5ZD6R"');
  `}
      </Script>
      <body>
        <main>
          <nav className="navbar">
            <div className="navbarTop">
              <div className="containerLogo">
                <Link href="/">
                  <Image layout="fill" objectFit="contain" src={Logo} />
                </Link>
              </div>
              <ul className="navRouting">
                <li>
                  <Link href="/chi-siamo">chi siamo</Link>
                </li>
                <li>
                  <p>progetti</p>
                </li>
                <li>
                  <p>eventi</p>
                </li>
              </ul>
            </div>
          </nav>
          <div className="orangeBanner">
            <h1>Ecoligia, la valigia didattica</h1>
          </div>
          {children}
        </main>
        <footer className="footerContainer">
          <div className="containerLinks">
            <div className="icon">
              <a href="mailto:iamclimate.earth@gmail.com">
                <Image layout="fill" objectFit="contain" src={email} />
              </a>
            </div>
            <div className="icon">
              <a href="tel:00415675656">
                <Image layout="fill" objectFit="contain" src={phone} />
              </a>
            </div>
            <div className="icon">
              <a
                target="_blank"
                href="https://www.instagram.com/iamclimate.earth/"
              >
                <Image layout="fill" objectFit="contain" src={insta} />
              </a>
            </div>
          </div>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.joelkuehl.ch/"
          >
            <p className="copyright">{`© Copyright - ${year} Joel Kuehl Web & Software Development`}</p>
          </a>
        </footer>
      </body>
    </html>
  );
}
