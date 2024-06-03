import { useContext } from "react";

import { backgroundStyles } from "../components/styles";

import { languageContext } from "../Root";
import Header from "../components/header";

import data from "../assets/data/lang.json";

const { mission, vision, values } = data.ar.mvv;
const {
  mission: mission_en,
  vision: vision_en,
  values: values_en,
} = data.en.mvv;

const values_titles = values.map((value: string) => value.split("#")[0]);
const values_text = values.map((value: string) => value.split("#")[1]);
const values_en_titles = values_en.map((value: string) => value.split("#")[0]);
const values_en_text = values_en.map((value: string) => value.split("#")[1]);

function App() {
  const { lang, setLang } = useContext(languageContext);

  return (
    <languageContext.Provider value={{ lang, setLang }}>
      <div className={backgroundStyles}>
        <div className="flex flex-col gap-[64px]">
          <Header />
          <h1 className="text-[calc(var(--h1-low))]">
            {lang === "es"
              ? "Misión, Visión, y Valores"
              : "Mission, Vision, and Values"}
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
          <article>
            <h2 className="text-[calc(var(--h2-low))]">
              {lang === "es" ? "Valores" : "Values"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {lang === "es"
                ? values_titles.map((title, index) => (
                    <div
                      key={index}
                      className="bg-[var(--bg-secondary)] p-4 rounded-lg shadow flex flex-col gap-2"
                    >
                      <h3 className="text-[calc(var(--h3-low))]">{title}</h3>
                      <p className="text-[calc(var(--p-low))] text-pretty leading-6">
                        {values_text[index]}
                      </p>
                    </div>
                  ))
                : values_en_titles.map((title, index) => (
                    <div
                      key={index}
                      className="bg-[var(--bg-secondary)] p-4 rounded-lg shadow flex flex-col gap-2"
                    >
                      <h3 className="text-[calc(var(--h3-low))]">{title}</h3>
                      <p className="text-[calc(var(--p-low))] text-pretty leading-6">
                        {values_en_text[index]}
                      </p>
                    </div>
                  ))}
            </div>
          </article>
        </div>
      </div>
    </languageContext.Provider>
  );
}

export default App;
