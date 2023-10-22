"use client";

import { useState } from "react";

const RiservaOra = () => {
  const [name, setName] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  const [message, setMessage] = useState<string | null>();
  return (
    <div className="py-24 flex flex-col gap-16 items-center">
      <h1 className="text-5xl bg-white dark:bg-black dark:text-white">
        Riservala ora!
      </h1>
      <form className="flex flex-col gap-8">
        <div className="flex flex-row gap-24">
          <div className="flex flex-col justify-start">
            <label className="text-2xl" htmlFor="name">
              Nome
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
            Messaggio
          </label>
          <textarea
            className="h-20 border-4 rounded-lg text-2xl flex-wrap dark:bg-black dark:text-white"
            name="message"
            id="message"
            value={message ? message : ""}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="self-center mt-8 px-6 py-3 w-1/2 rounded-xl text-2xl dark:text-white dark:bg-orange text-black bg-orange">
          Scopri di più
        </button>
      </form>
    </div>
  );
};
export default RiservaOra;
