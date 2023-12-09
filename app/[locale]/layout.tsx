import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import ReactGA from "react-ga4";

const inter = Inter({ subsets: ["latin"] });
const locales = ["it", "en"];
export const metadata: Metadata = {
  title: "I AM CLIMATE",
  description: "Per iniziare a cambiare le cose, per davvero",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  process.env.ga4 && ReactGA.initialize(process.env.ga4);
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-white`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className={`bg-white`}>
            <Navbar />
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
