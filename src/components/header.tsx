import Socials from "./socials";

import data from "../assets/data/lang.json";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { languageContext } from "../App";
import { IconLang } from "./icons";
import { useParams, useNavigate } from "react-router-dom";

import { handleLangNav } from "../utils/nav";

const { title_name, title_tld } = data.common;

export const languages = {
  es: "Español (AR)",
  en: "English",
};

function Header() {
  const { lang, setLang } = useContext(languageContext);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLangChange(lang: string) {
    setLang(lang as keyof typeof languages);

    let path = location.pathname;
    if (params.lang) path = path.replace(`/${params.lang}`, "");
    path = `${lang !== "es" ? `/${lang}` : ""}${path}`;
    navigate(path);
  }

  return (
    <header className="flex flex-col gap-[32px]">
      <h1
        className="text-[calc(var(--h2))] lg:text-[calc(var(--h1))]
      text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)]"
      >
        <Link to={handleLangNav("", params.lang)}>
          {title_name}
          <span
            className="text-[var(--color-accent-light)]
      dark:text-[var(--color-accent-dark)]"
          >
            {title_tld}
          </span>
        </Link>
      </h1>
      <Socials />
      <nav className="ml-auto flex gap-4">
        <ul
          className="flex gap-4 items-center
        [&>li>a]:px-2 [&>li>a]:py-1
        [&>li>button]:px-2 [&>li>button]:py-1
        [&>li]:transition-colors [&>li]:duration-150
        [&>li]:rounded-md
        [&>li:hover]:text-[var(--color-accent-light)] [&>li:hover]:dark:text-[var(--color-accent-dark)]
        "
        >
          <li
            id="langMenuHover"
            className="flex items-center gap-1 pl-2 pr-2 cursor-default
            peer/lang
            "
            aria-label="Change language"
            title="Change language"
          >
            <span className="min-w-[90px] text-left">
              {languages[lang as keyof typeof languages]}
            </span>
            <span>
              <IconLang />
            </span>
          </li>
          <li
            id="langMenu"
            className="transition-all duration-300 ease-in-out
            max-h-0 overflow-hidden
            absolute z-50
            min-w-[134px]
            right-0 top-[100%]
            bg-[var(--color-secondary-light)] dark:bg-[var(--color-secondary-dark)]
            text-[var(--color-dark)] dark:text-[var(--color-light)]
            rounded-md shadow-md
            hover:max-h-max
            peer-hover/lang:max-h-max
            "
          >
            <ul
              className="[&>li:hover]:bg-[var(--color-secondary-dark)]
              [&>li:hover]:dark:bg-[var(--color-secondary-light)]
              [&>li:hover]:text-[var(--color-light)]
              [&>li:hover]:dark:text-[var(--color-dark)]
              [&>li]:rounded-md
              [&>li]:cursor-pointer
              p-0
              "
            >
              {Object.entries(languages).map(([lang_, label], idx) =>
                lang === lang_ ? null : (
                  <li key={idx}>
                    <button
                      onClick={() => handleLangChange(lang_)}
                      className="px-2 py-1 w-full text-left"
                    >
                      {label}
                    </button>
                  </li>
                )
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
