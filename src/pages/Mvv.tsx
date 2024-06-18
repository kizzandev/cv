import { useContext, useEffect } from "react";

import { languageContext } from "../App";

import data from "../assets/data/lang.json";

const { mission, vision } = data.ar.mvv;
const { mission: mission_en, vision: vision_en } = data.en.mvv;

function App() {
  const { lang } = useContext(languageContext);

  useEffect(() => {
    document.title = `${
      lang === "es" ? "Misión y Visión" : "Mission and Vision"
    } | ${document.title}`;

    return () => {
      document.title = document.title.replace(
        `${lang === "es" ? "Misión y Visión" : "Mission and Vision"} | `,
        ""
      );
    };
  }, [lang]);

  return (
    <>
      <h1 className="text-[calc(var(--h1-low))]">
        {lang === "es" ? "Misión y Visión" : "Mission and Vision"}
      </h1>
      <article>
        <h2 className="text-[calc(var(--h2-low))]">
          {lang === "es" ? "Misión" : "Mission"}
        </h2>
        <p className="text-[calc(var(--p-low))] max-w-[80ch] text-pretty">
          {lang === "es" ? mission : mission_en}
        </p>
      </article>
      <article>
        <h2 className="text-[calc(var(--h2-low))]">
          {lang === "es" ? "Visión" : "Vision"}
        </h2>
        <p className="text-[calc(var(--p-low))] max-w-[80ch] text-pretty">
          {lang === "es" ? vision : vision_en}
        </p>
      </article>
    </>
  );
}

export default App;
