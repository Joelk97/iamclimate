import "../globals.css";
import Script from "next/script";

export const metadata = {
  title: "I am climate - Eventi",
  description: "Ecoligia, la valigia didattica",
};

export default function EventiLayout({ children }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <html lang="it">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
