import { useContext } from "react";

import { backgroundStyles } from "../components/styles";

import { languageContext } from "../Root";
import Header from "../components/header";

import data from "../assets/data/lang.json";

const { mission, vision } = data.ar.mvv;
const {
  mission: mission_en,
  vision: vision_en,
} = data.en.mvv;

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
        </div>
      </div>
    </languageContext.Provider>
  );
}

export default App;
