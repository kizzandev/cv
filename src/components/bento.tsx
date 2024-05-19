import { useEffect, useState } from "react";
import data from "../assets/data/lang.json";

import {
  IconNode,
  IconNext,
  IconReact,
  IconProblems,
  IconTeam,
  IconAuthor,
} from "./icons";

/**
 * Bento component
 * grid
 */

const data_ar = data.ar.bento;
const data_en = data.en.bento;

export default function Bento({ lang }: { lang: string }) {
  // We only want title and description from the RSS feed
  // item[0].title and item[0].description
  // Get RSS feed from
  // blog.kizzan.dev/rss.xml IF lang is "es"
  // blog.kizzan.dev/en/rss.xml IF lang is "en"
  // Fetch RSS feed

  const [blogTitle, setBlogTitle] = useState(
    lang === "es" ? "Cargando..." : "Loading..."
  );
  const [blogDescription, setBlogDescription] = useState(
    lang === "es" ? "Cargando..." : "Loading..."
  );

  const fetchRSS = async () => {
    const response = await fetch(
      lang === "es"
        ? "https://blog.kizzan.dev/rss.xml"
        : "https://blog.kizzan.dev/en/rss.xml"
    );
    const data = await response.text();

    if (!data) return;

    // Find first index of <item>
    const articleIndex = data.indexOf("<item>");
    // Find first appeareance of <title>
    const articleTitleIndex = data.indexOf("<title>", articleIndex);
    const articleEndTitleIndex = data.indexOf("</title>", articleTitleIndex);
    setBlogTitle(data.substring(articleTitleIndex + 7, articleEndTitleIndex));
    // Find first appeareance of <description>
    const articleDescriptionIndex = data.indexOf(
      "<description>",
      articleEndTitleIndex
    );
    const articleEndDescriptionIndex = data.indexOf(
      "</description>",
      articleDescriptionIndex
    );
    setBlogDescription(
      data.substring(articleDescriptionIndex + 13, articleEndDescriptionIndex)
    );
  };
  fetchRSS();

  // Flag alt text
  const [flagAlt, setFlagAlt] = useState(
    `${lang === "es" ? "Bandera de " : "Flag of "}`
  );

  useEffect(() => {
    setFlagAlt(`${lang === "es" ? "Bandera de " : "Flag of "}`);
  }, [lang]);

  return (
    <article className="flex flex-col gap-4">
      {/* MARK: TOP BENTO
       */}
      <section
        id="topBento"
        className="grid grid-cols-6 grid-rows-2 gap-4
      [&>article]:bg-[var(--bg-secondary)]
      [&>article]:p-[16px]
      [&>article]:rounded-[var(--border-radius-8)]"
      >
        {/* MARK: CURRENT JOB
         */}
        <article
          className="flex flex-col gap-1
          col-span-full row-span-2 md:col-span-2
           bg-gradient-to-tr from-[var(--bg-primary-dark)] to-[var(--bg-secondary)]"
        >
          <h2
            className="text-[calc(var(--h3))]
          text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
          >
            {lang === "es" ? data_ar.job_title : data_en.job_title}
          </h2>
          <h3 className="text-[calc(var(--small))] leading-4">
            {lang === "es" ? data_ar.job_location : data_en.job_location}
          </h3>
          <p className="text-[calc(var(--p))] leading-6">
            {lang === "es" ? data_ar.job_text : data_en.job_text}
          </p>
        </article>

        {/* MARK: MY PROJECT
         */}
        <article
          className="flex flex-col gap-1
          col-span-full row-span-2 md:col-span-2
          bg-gradient-to-tr from-[var(--bg-primary-dark)] to-[var(--bg-secondary)]"
        >
          <h2
            className="text-[calc(var(--h3))]
          text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
          >
            {lang === "es" ? data_ar.main_project : data_en.main_project}
          </h2>
          <h3 className="text-[calc(var(--small))] leading-4">
            {lang === "es"
              ? data_ar.main_project_advocacy
              : data_en.main_project_advocacy}
          </h3>
          <p className="text-[calc(var(--p))] leading-6">
            {lang === "es"
              ? data_ar.main_project_text
              : data_en.main_project_text}
          </p>
        </article>

        {/* MARK: MY DATA
         */}
        <article
          className="
         !bg-transparent
         !p-0
          grid grid-cols-1 lg:grid-cols-2 gap-4
         col-span-full row-span-2
        md:col-span-2
        [&>section]:bg-[var(--bg-secondary)]
        [&>section]:p-[16px]
        [&>section]:rounded-[var(--border-radius-8)]
        "
        >
          {/* MARK: YEARS OF EXPERIENCE
           */}
          <section className="
           bg-gradient-to-tr from-[var(--bg-primary-dark)] to-[var(--bg-secondary)]">
            <h2
              className="text-[calc(var(--h3))]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
            >
              {data.common.years_of_experience}+
            </h2>
            <p className="text-[calc(var(--p))] leading-6">
              {lang === "es" ? data_ar.years : data_en.years}
            </p>
          </section>

          {/* MARK: CURRENT JOB
           */}
          <section className="hidden lg:block 
           bg-gradient-to-tr from-[var(--bg-primary-dark)] to-[var(--bg-secondary)]">
            <h2
              className="text-[calc(var(--h3))]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
            >
              {data_ar.now}
            </h2>
            <p className="text-[calc(var(--p))] leading-6">
              {lang === "es" ? data_ar.job_title : data_en.job_title}
            </p>
          </section>

          {/* MARK: EDUCATION
           */}
          <section className="
           bg-gradient-to-tr from-[var(--bg-primary-dark)] to-[var(--bg-secondary)]">
            <h2
              className="text-[calc(var(--h3))]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
            >
              {data_ar.education}
            </h2>
            <p className="text-[calc(var(--p))] leading-6">
              {lang === "es" ? data_ar.degree : data_en.degree}
            </p>
          </section>

          {/* MARK: LANGUAGES
           */}
          <section className="
           bg-gradient-to-tr from-[var(--bg-primary-dark)] to-[var(--bg-secondary)]">
            <article
              className="flex gap-4 flex-wrap
              text-[calc(var(--h3))]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
            >
              {data.common.langs.map((lang, idx) => (
                <img
                  key={`${idx}lang`}
                  src={`/${lang}_flag.webp`}
                  alt={`${flagAlt} ${
                    lang === "ar" ? "Argentina" : "United States"
                  }`}
                  className="rounded-[4px]
                  max-w-[100px] max-h-[56.25px] aspect-[100/56.25]"
                />
              ))}
            </article>
            <p className="text-[calc(var(--p))] leading-6 mt-3">
              {lang === "es" ? data_ar.languages : data_en.languages}
            </p>
          </section>
        </article>
      </section>

      {/* MARK: BOTTOM BENTO
       */}
      <section
        id="bottomBento"
        className="grid grid-cols-6 grid-rows-2 gap-4
      [&>article]:bg-[var(--bg-secondary)]
      [&>article]:p-[16px]
      [&>article]:rounded-[var(--border-radius-8)]"
      >
        <article
          className="
         !bg-transparent
         !p-0
          grid gap-4
         col-span-full row-span-2
        md:col-span-4
        [&>section>article]:bg-[var(--bg-secondary)]
        [&>section>article]:p-[16px]
        [&>section>article]:rounded-[var(--border-radius-8)]
        "
        >
          <section className="grid gap-4 grid-cols-1 md:grid-cols-3 col-span-full [&>article]:md:col-span-1">
            <article className="flex items-center min-h-[100px] relative overflow-hidden">
              <IconNode className="left-0 absolute w-full max-w-[50%] h-full z-10" />
              <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
              <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
                {lang === "es" ? data_ar.list_1_1 : data_en.list_1_1}
              </p>
            </article>

            <article className="flex items-center min-h-[100px] relative overflow-hidden">
              <IconNext className="left-0 absolute w-full max-w-[50%] h-full z-10" />
              <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
              <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
                {lang === "es" ? data_ar.list_1_2 : data_en.list_1_2}
              </p>
            </article>

            <article className="flex items-center min-h-[100px] relative overflow-hidden">
              <IconReact className="left-0 absolute w-full max-w-[50%] h-full z-10" />
              <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
              <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
                {lang === "es" ? data_ar.list_1_3 : data_en.list_1_3}
              </p>
            </article>
          </section>

          <section className="grid gap-4 grid-cols-1 md:grid-cols-3 col-span-full [&>article]:md:col-span-1">
            <article className="flex items-center min-h-[100px] relative overflow-hidden">
              <IconProblems className="left-0 absolute w-full max-w-[50%] h-full z-10" />
              <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
              <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
                {lang === "es" ? data_ar.list_2_1 : data_en.list_2_1}
              </p>
            </article>

            <article className="flex items-center min-h-[100px] relative overflow-hidden">
              <IconTeam className="left-0 absolute w-full max-w-[50%] h-full z-10" />
              <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
              <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
                {lang === "es" ? data_ar.list_2_2 : data_en.list_2_2}
              </p>
            </article>

            <article className="flex items-center min-h-[100px] relative overflow-hidden">
              <IconAuthor className="left-0 absolute w-full max-w-[50%] h-full z-10" />
              <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
              <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
                {lang === "es" ? data_ar.list_2_3 : data_en.list_2_3}
              </p>
            </article>
          </section>
        </article>

        <article
          className="grid gap-1
         col-span-full row-span-2
        md:col-span-2
        bg-gradient-to-tr from-[var(--bg-primary-dark)] to-[var(--bg-secondary)]"
        >
          <h2
            className="text-[calc(var(--h3))]
          text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
          >
            {lang === "es" ? data_ar.blog_title : data_en.blog_title}
          </h2>
          <h3 className="text-[calc(var(--h4))] leading-8 font-semibold">
            {blogTitle}
          </h3>
          <p className="text-[calc(var(--p))] leading-6">{blogDescription}</p>
        </article>
      </section>
    </article>
  );
}
