import { useContext, useEffect, useState } from "react";

import {
  IconAt,
  IconGithub,
  IconLinkedin,
  IconBlog,
  IconCV,
  IconTheme,
} from "./icons";

import data from "../assets/data/lang.json";
import { languageContext } from "../Root";

const { email, linkedin, github, blog } = data.common;

const {
  title_email,
  title_linkedin,
  title_github,
  title_blog,
  title_download_cv,
  title_change_theme,
} = data.ar.socials;

const {
  title_email: title_email_en,
  title_linkedin: title_linkedin_en,
  title_github: title_github_en,
  title_blog: title_blog_en,
  title_download_cv: title_download_cv_en,
  title_change_theme: title_change_theme_en,
} = data.en.socials;

const mailto = `mailto:${email}`;

function Socials() {
  const { lang } = useContext(languageContext);

  const [cvHref, setCVHref] = useState(
    `/${lang === "es" ? "ar" : "en"} Kevin S Zanzi CV.pdf`
  );

  useEffect(() => {
    setCVHref(`/${lang === "es" ? "ar" : "en"} Kevin S Zanzi CV.pdf`);
  }, [lang]);

  const [theme, setTheme] = useState(localStorage.theme);

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
        <a
          title={lang === "es" ? title_blog : title_blog_en}
          aria-label={lang === "es" ? title_blog : title_blog_en}
          href={blog}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)]"
        >
          <IconBlog
            width="48px"
            height="48px"
            className="hover:bg-[var(--bg-secondary)]
                    transition-colors duration-150
                    rounded-lg p-1"
          />
        </a>

        <a
          title={lang === "es" ? title_download_cv : title_download_cv_en}
          aria-label={lang === "es" ? title_download_cv : title_download_cv_en}
          href={cvHref}
          download="Kevin S Zanzi CV.pdf"
          className="hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)]"
        >
          <IconCV
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
          onClick={() => {
            localStorage.theme =
              localStorage.theme === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("dark");
            const url = new URL(window.location.href);
            url.searchParams.set("theme", localStorage.theme);
            window.history.replaceState({}, "", url);

            let palabra_correcta;
            if (localStorage.theme === "dark" && lang === "es") {
              palabra_correcta = "claro";
            } else if (localStorage.theme === "light" && lang === "es") {
              palabra_correcta = "oscuro";
            } else if (localStorage.theme === "dark" && lang === "en") {
              palabra_correcta = "light";
            } else if (localStorage.theme === "light" && lang === "en") {
              palabra_correcta = "dark";
            }

            setTheme(palabra_correcta);
          }}
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
