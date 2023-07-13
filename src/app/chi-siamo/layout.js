import "../globals.css";
import Script from "next/script";

export const metadata = {
  title: "I am climate - Chi siamo",
  description: "Ecoligia, la valigia didattica",
};

export default function ChiSiamiLayout({ children }) {
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
        <main>{children}</main>
      </body>
    </html>
  );
}
