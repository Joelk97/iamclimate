"use client";

import { useState } from "react";

import { useTranslations, useLocale } from "next-intl";

const RiservaOra = () => {
  const locale = useLocale();
  const t = useTranslations("Home");
  const [name, setName] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  const [message, setMessage] = useState<string | null>();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name && email && message) {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("access_key", `d4f938ae-020e-44b9-9d79-7c746ccfe791`);
      formData.append("Pagina del form", "Riserva ora la valigia");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
      }
    }
  }
  return (
    <div className="py-24 flex flex-col gap-16 items-center">
      <h1 className="text-5xl bg-white dark:bg-black dark:text-white">
        {t("riserva")}
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-row gap-24">
          <div className="flex flex-col justify-start">
            <label className="text-2xl" htmlFor="name">
              {t("nome")}
            </label>
            <input
              className="h-10 border-4 rounded-lg text-2xl dark:bg-black dark:text-white"
              name="name"
              id="name"
              type="text"
              value={name ? name : ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start">
            <label className="text-2xl" htmlFor="email">
              Email
            </label>
            <input
              className="h-10 border-4 rounded-lg text-2xl dark:bg-black dark:text-white"
              name="email"
              id="email"
              type="email"
              value={email ? email : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <label className="text-2xl" htmlFor="message">
            {t("messaggio")}
          </label>
          <textarea
            className="h-20 border-4 rounded-lg text-2xl flex-wrap dark:bg-black dark:text-white"
            name="message"
            id="message"
            value={message ? message : ""}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="self-center mt-8 px-6 py-3 w-1/2 rounded-xl text-2xl dark:text-white dark:bg-orange text-black bg-orange"
        >
          {t("invia")}
        </button>
      </form>
    </div>
  );
};
export default RiservaOra;
