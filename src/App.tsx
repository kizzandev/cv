import { useState, useEffect } from "react";
import { getDictionary, type Dictionary } from "./dictionaries";

import Header from "./components/Header";
import Tags from "./components/Tags";
import CallToAction from "./components/CallToAction";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") ?? "ag");
  const [dict, setDict] = useState<Dictionary>(getDictionary("ag"));

  useEffect(() => {
    const dlang = lang as "en" | "ag";
    setDict(getDictionary(dlang));
    localStorage.lang = dlang;
    const finalLang = dlang === "ag" ? "es" : dlang;
    document.documentElement.lang = finalLang;
  }, [lang]);

  return (
    <section className="min-h-screen bg-[var(--bg-primary)] px-[16px] py-[48px] text-[var(--text-color)]">
      <div className="_max-w-7xl mx-auto flex max-w-[80ch] flex-col gap-[48px] selection:bg-[var(--color-primary-light)] selection:text-[var(--text-color)]">
        <Header dict={dict} />
        <Tags dict={dict} setLang={setLang} />
        <CallToAction dict={dict} />
        <Experience dict={dict} />
        <Blog dict={dict} lang={lang} />
        <Footer />
      </div>
    </section>
  );
}
