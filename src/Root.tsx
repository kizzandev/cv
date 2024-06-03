import { useState, createContext } from "react";

export const languageContext = createContext({
  lang: document.documentElement.lang,
  /*@ts-ignore*/
  setLang: (lang: string) => {},
});

export default function Root({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState(document.documentElement.lang);

  return (
    <languageContext.Provider value={{ lang, setLang }}>
      {children}
    </languageContext.Provider>
  );
}
