import Socials from "./socials";

import data from "../assets/data/lang.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { languageContext } from "../Root";
import { IconLang } from "./icons";

const { title_name, title_tld } = data.common;

export const languages = {
  es: "Español (AR)",
  en: "English",
};

function Header() {
  const { lang, setLang } = useContext(languageContext);

  function handleLangMenu(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
  ) {
    // Only open when clicking on the langMenuIcon
    const langMenuIcon = document.getElementById("langMenuIcon");
    const langMenu = document.getElementById("langMenu");

    if (!langMenuIcon || !langMenu) return;

    const isOpen = langMenu?.getAttribute("data-open") === "true";
    langMenu.style.maxHeight = isOpen ? "0" : `${langMenu?.scrollHeight}px`;
    langMenu.setAttribute("data-open", isOpen ? "false" : "true");

    if (langMenu.getAttribute("data-open") === "true") {
      const target = e?.target as HTMLElement;
      if (!langMenu.contains(target) && !langMenuIcon?.contains(target)) {
        langMenu.style.maxHeight = "0";
        langMenu.setAttribute("data-open", "false");
      }
    }
  }

  return (
    <header className="flex flex-col gap-[32px]">
      <h1
        className="text-[calc(var(--h2))] lg:text-[calc(var(--h1))]
      text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)]"
      >
        {title_name}
        <span
          className="text-[var(--color-accent-light)]
      dark:text-[var(--color-accent-dark)]"
        >
          {title_tld}
        </span>
      </h1>
      <Socials />
      <nav className="ml-auto flex gap-4">
        <ul
          className="flex gap-4 items-center
        [&>li>a]:px-2 [&>li>a]:py-1
        [&>li>button]:px-2 [&>li>button]:py-1
        [&>li]:transition-colors [&>li]:duration-150
        [&>li]:rounded-md
        [&>li:hover]:bg-[var(--bg-secondary)]
        [&>li:hover]:text-[var(--color-accent-light)] [&>li:hover]:dark:text-[var(--color-accent-dark)]
        "
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/mvv"}>MVV</Link>
          </li>
          <li>
            <button
              id="langMenuIcon"
              aria-label="Change language"
              onClick={handleLangMenu}
              className="flex items-center gap-1"
            >
              <span>{languages[lang as keyof typeof languages]}</span>
              <span className="">
                <IconLang />
              </span>
            </button>
          </li>
          <li
            data-open="false"
            id="langMenu"
            className="transition-all duration-300 ease-in-out
            max-h-0 overflow-hidden
            absolute z-50
            min-w-[calc(48px+48px+16px)]
            right-0 top-[100%]
            bg-[var(--color-secondary-light)] dark:bg-[var(--color-secondary-dark)]
            text-[var(--color-dark)] dark:text-[var(--color-light)]
            rounded-md shadow-md"
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
                    <Link
                      onClick={() => {
                        setLang(lang_ as keyof typeof languages);
                        handleLangMenu(null);
                      }}
                      className="px-2 py-1"
                      to={`/${lang_ === "en" ? "en" : ""}`}
                    >
                      {label}
                    </Link>
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
