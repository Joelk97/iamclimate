import Image from "next/image";
import googleCalendar from "../../public/googleCalendar.png";
import { useLocale, useTranslations } from "next-intl";

const Disponibilita = () => {
  const locale = useLocale();
  const t = useTranslations("Home");
  return (
    <div className="py-24 flex flex-col gap-20 w-full items-center bg-orange">
      <h1 className="text-5xl">{t("dispo")}</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&%23ffffff&ctz=Europe%2FZurich&showTz=1&showCalendars=1&src=NGViYjgyYTg3ZmM1ZjkzZjY1MWM0MzUwZjQ3NzAyNzAyMjZiNTI2N2M1ZjRkMTBkMGM1MGZkN2NlMTA2MWU5Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300"
        style={{ border: "0px", borderRadius: "4px", width: "90%" }}
        height="500"
      ></iframe>
    </div>
  );
};

export default Disponibilita;
