import { useContext } from "react";
import data from "../assets/data/lang.json";

const { title, text } = data.ar.summary;
const { title: title_en, text: text_en } = data.en.summary;

import { languageContext } from "../Root";

export default function About() {
  const { lang } = useContext(languageContext);

  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-[calc(var(--h2-low))]">
        {lang === "es" ? title : title_en}
      </h2>
      <p className="max-w-[80ch] text-pretty">
        {lang === "es" ? text : text_en}
      </p>
    </section>
  );
}
