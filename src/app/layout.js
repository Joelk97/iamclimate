import Link from "next/link";
import "./globals.css";
import Image from "next/legacy/image";
import Logo from "../../public/iamclimate.svg";

export const metadata = {
  title: "I am climate",
  description: "Ecoligia, la valigia didattica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <main>
          <nav className="navbar">
            <div className="navbarTop">
              <div className="colorChanger"></div>
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
        <footer></footer>
      </body>
    </html>
  );
}
