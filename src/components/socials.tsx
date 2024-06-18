import { useContext } from "react";

import { IconAt, IconGithub, IconLinkedin, IconTheme } from "./icons";

import data from "../assets/data/lang.json";
import { languageContext, themeContext } from "../App";

const { email, linkedin, github } = data.common;

const { title_email, title_linkedin, title_github, title_change_theme } =
  data.ar.socials;

const {
  title_email: title_email_en,
  title_linkedin: title_linkedin_en,
  title_github: title_github_en,
  title_change_theme: title_change_theme_en,
} = data.en.socials;

const mailto = `mailto:${email}`;

function Socials() {
  const { lang } = useContext(languageContext);
  const { theme, setTheme } = useContext(themeContext);

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.theme = newTheme;
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const url = new URL(window.location.href);
    if (url.searchParams.get("theme")) {
      url.searchParams.set("theme", newTheme);
      window.history.replaceState({}, "", url);
    }
  };

  return (
    <article className="ml-auto flex flex-col md:flex-row gap-4">
      <section className="flex flex-row gap-4 justify-end">
        <a
          title={lang === "es" ? title_email : title_email_en}
          aria-label={lang === "es" ? title_email : title_email_en}
          href={mailto}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)]"
        >
          <IconAt
            width="48px"
            height="48px"
            className="hover:bg-[var(--bg-secondary)]
            transition-colors duration-150
            rounded-lg p-1"
          />
        </a>

        <a
          title={lang === "es" ? title_linkedin : title_linkedin_en}
          aria-label={lang === "es" ? title_linkedin : title_linkedin_en}
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)]"
        >
          <IconLinkedin
            width="48px"
            height="48px"
            className="hover:bg-[var(--bg-secondary)]
                    transition-colors duration-150
                    rounded-lg p-1"
          />
        </a>

        <a
          title={lang === "es" ? title_github : title_github_en}
          aria-label={lang === "es" ? title_github : title_github_en}
          href={github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)]"
        >
          <IconGithub
            width="48px"
            height="48px"
            className="hover:bg-[var(--bg-secondary)]
                transition-colors duration-150
                rounded-lg p-1"
          />
        </a>
      </section>

      <section className="flex flex-row gap-4 justify-end">
        <button
          title={
            lang === "es"
              ? `${title_change_theme} ${theme}`
              : `${title_change_theme_en} ${theme} mode`
          }
          aria-label={
            lang === "es"
              ? `${title_change_theme} ${theme}`
              : `${title_change_theme_en} ${theme} mode`
          }
          onClick={handleTheme}
          className="hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)]"
        >
          <IconTheme
            width="48px"
            height="48px"
            className="hover:bg-[var(--bg-secondary)]
                            transition-colors duration-150
                            rounded-lg p-1"
          />
        </button>
      </section>
    </article>
  );
}

export default Socials;
