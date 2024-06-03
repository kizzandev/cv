import { useContext } from "react";

import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Technologies from "./components/technologies";
import Bento from "./components/bento";

import { backgroundStyles } from "./components/styles";

import { languageContext } from "./Root";

function App() {
  const { lang, setLang } = useContext(languageContext);

  return (
    <languageContext.Provider value={{ lang, setLang }}>
      <div className={backgroundStyles}>
        <div className="flex flex-col gap-[64px]">
          <Header />
          <About />
          <Bento />
          <Experience />
          <Technologies />
        </div>
      </div>
    </languageContext.Provider>
  );
}

export default App;
