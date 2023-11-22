import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

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
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className={`bg-white dark:bg-black`}>
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
