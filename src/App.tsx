import { useState, useEffect } from "react";
import { allowedLangs, getDictionary, type Dictionary } from "./dictionaries";

import Header from "./components/Header";
import Tags from "./components/Tags";
import CallToAction from "./components/CallToAction";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function App() {
  const start_lang =
    document.querySelector("html")?.getAttribute("lang") ?? "ag";
  const [lang, setLang] = useState(localStorage.getItem("lang") ?? start_lang);
  const [dict, setDict] = useState<Dictionary>(getDictionary(start_lang));

  useEffect(() => {
    let dlang = lang;
    if (!allowedLangs.includes(dlang)) {
      dlang = "ag";
    }
    setDict(getDictionary(dlang));
    localStorage.lang = dlang;
    if (dlang === "ag") {
      dlang = "es";
    }
    document.documentElement.lang = dlang;
  }, [lang]);

  return (
    <article className="min-h-screen bg-[var(--brand-grey)] px-[16px] py-[48px] text-[var(--brand-grey-light)]">
      <main className="_max-w-7xl mx-auto flex max-w-[80ch] flex-col gap-[48px] selection:bg-[var(--brand-green)] selection:text-[var(--brand-grey)] **:focus:border-[var(--brand-blue)] **:focus:outline-none">
        <Header dict={dict} />
        <Tags dict={dict} setLang={setLang} />
        <CallToAction dict={dict} />
        <Experience dict={dict} />
        <Blog dict={dict} lang={lang} />
        <Footer />
      </main>
    </article>
  );
}
