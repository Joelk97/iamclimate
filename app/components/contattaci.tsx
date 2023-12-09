"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const Contattaci = () => {
  const [name, setName] = useState<string | null>();
  const t = useTranslations("Home");
  const [email, setEmail] = useState<string | null>();
  const [message, setMessage] = useState<string | null>();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name && email && message) {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("access_key", `d4f938ae-020e-44b9-9d79-7c746ccfe791`);
      formData.append("Pagina del form", "Contattaci");
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
        alert("Messaggio inviato correttamente");
        console.log(result);
      }
    }
  }
  return (
    <div className="py-24 flex flex-col gap-16 items-center">
      <h1 className="text-5xl bg-white">{t("contattaci")}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 ">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          <div className="flex flex-col justify-start">
            <label className="text-2xl" htmlFor="name">
              {t("nome")}
            </label>
            <input
              className="h-10 border-4 rounded-lg text-2xl"
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
              className="h-10 border-4 rounded-lg text-2xl"
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
            className="h-20 border-4 rounded-lg text-2xl flex-wrap"
            name="message"
            id="message"
            value={message ? message : ""}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          disabled={!name || !email || !message}
          type="submit"
          className="self-center mt-8 px-6 py-3 w-1/2 rounded-xl text-2xl text-black bg-orange"
        >
          {t("invia")}
        </button>
      </form>
    </div>
  );
};
export default Contattaci;
