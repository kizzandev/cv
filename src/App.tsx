import { useState, createContext } from "react";

import Header from "./components/header";

import { backgroundStyles } from "./components/styles";

import { Outlet } from "react-router-dom";

export const languageContext = createContext({
  lang: document.documentElement.lang,
  /*@ts-ignore*/
  setLang: (lang: string) => {},
});

export const themeContext = createContext({
  theme: localStorage.theme,
  /*@ts-ignore*/
  setTheme: (theme: "dark" | "light") => {},
});

function App() {
  const [lang, setLang] = useState(document.documentElement.lang);
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  return (
    <languageContext.Provider value={{ lang, setLang }}>
      <themeContext.Provider value={{ theme, setTheme }}>
        <div className={backgroundStyles}>
          <div className="flex flex-col gap-[48px]">
            <Header />
            <Outlet />
          </div>
        </div>
      </themeContext.Provider>
    </languageContext.Provider>
  );
}

export default App;
