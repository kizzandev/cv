import { useState } from "react";
import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Technologies from "./components/technologies";
import Bento from "./components/bento";

function App() {
  const [lang, setLang] = useState(document.documentElement.lang);

  return (
    <div
      className="bg-[var(--bg-primary-light)] dark:bg-[var(--bg-primary-dark)]
      min-h-screen
      text-[var(--color-dark)] dark:text-[var(--color-light)]
      py-[50px] px-[16px]
      transition-colors duration-300"
    >
      <div className="flex flex-col gap-[64px] max-w-7xl mx-auto">
        <Header lang={lang} setLang={setLang} />
        <About lang={lang} />
        <Bento lang={lang} />
        <Experience lang={lang} />
        <Technologies lang={lang} />
      </div>
    </div>
  );
}

export default App;
