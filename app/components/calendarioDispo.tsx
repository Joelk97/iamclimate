import Image from "next/image";
import googleCalendar from "../../public/googleCalendar.png";
import { useLocale, useTranslations } from "next-intl";

const Disponibilita = () => {
  const locale = useLocale();
  const t = useTranslations("Home");
  return (
    <div className="py-24 flex flex-col gap-20 w-full items-center bg-orange">
      <h1 className="text-5xl dark:text-black">{t("dispo")}</h1>
      <Image
        alt="Google Calendar"
        src={googleCalendar}
        width={1000}
        height={500}
      />
      <button className="px-6 py-3 rounded-xl text-2xl dark:text-white dark:bg-black text-black bg-white">
        {t("scopri")}
      </button>
    </div>
  );
};

export default Disponibilita;
