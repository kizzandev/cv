import { useContext, useEffect, useState } from "react";
import data from "../assets/data/lang.json";

import {
  IconNode,
  IconNext,
  IconReact,
  IconProblems,
  IconTeam,
  IconAuthor,
} from "./icons";

import { languageContext } from "../Root";

/**
 * Bento component
 * grid
 */

const data_ar = data.ar.bento;
const data_en = data.en.bento;

export default function BentoWIP() {
  // We only want title and description from the RSS feed
  // item[0].title and item[0].description
  // Get RSS feed from
  // blog.kizzan.dev/rss.xml IF lang is "es"
  // blog.kizzan.dev/en/rss.xml IF lang is "en"
  // Fetch RSS feed

  const { lang } = useContext(languageContext);

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
      {/* set all widts to the same */}
      <section
        id="bento"
        className="grid grid-cols-[18] grid-rows-4 gap-4
         auto-cols-fr
      [&>article]:bg-[var(--bg-secondary)]
      [&>article]:p-[16px]
      [&>article]:rounded-[var(--border-radius-8)]
      "
      >
        {/* MARK: CURRENT JOB
         */}
        <article
          className="flex flex-col gap-1
          col-span-full md:col-[1/span_12] _md:col-[1/span_6]
          row-[1/span_2]
           dark:bg-gradient-to-tr dark:from-[var(--bg-primary-dark)] dark:to-[var(--bg-secondary)]"
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
          className="hidden _flex flex-col gap-1
          col-span-full md:col-[7/span_6]
          row-[1/span_2]
          dark:bg-gradient-to-tr dark:from-[var(--bg-primary-dark)] dark:to-[var(--bg-secondary)]"
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

        {/* MARK: YEARS OF EXPERIENCE
         */}
        <article
          className="
           dark:bg-gradient-to-tr dark:from-[var(--bg-primary-dark)] dark:to-[var(--bg-secondary)]
          col-[13/span_3] row-[1/span_1]"
        >
          <h2
            className="text-[calc(var(--h3))]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
          >
            {data.common.years_of_experience}+
          </h2>
          <p className="text-[calc(var(--p))] leading-6">
            {lang === "es" ? data_ar.years : data_en.years}
          </p>
        </article>

        {/* MARK: CURRENT JOB
         */}
        <article
          className="hidden lg:block 
           dark:bg-gradient-to-tr dark:from-[var(--bg-primary-dark)] dark:to-[var(--bg-secondary)]
           col-[16/span_3] row-[1/span_1]"
        >
          <h2
            className="text-[calc(var(--h3))]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
          >
            {/* {data_ar.now} */}
            {lang === "es" ? data_ar.now : data_en.now}
          </h2>
          <p className="text-[calc(var(--p))] leading-6">
            {lang === "es" ? data_ar.job_title : data_en.job_title}
          </p>
        </article>

        {/* MARK: EDUCATION
         */}
        <article
          className="
           dark:bg-gradient-to-tr dark:from-[var(--bg-primary-dark)] dark:to-[var(--bg-secondary)]
           col-[13/span_3] row-[2/span_1]"
        >
          <h2
            className="text-[clamp(calc(var(--h3-low)),_calc(var(--h3)),_100%)]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
          >
            {lang === "es" ? data_ar.education : data_en.education}
          </h2>
          <p className="text-[calc(var(--p))] leading-6">
            {lang === "es" ? data_ar.degree : data_en.degree}
          </p>
        </article>

        {/* MARK: LANGUAGES
         */}
        <article
          className="
           dark:bg-gradient-to-tr dark:from-[var(--bg-primary-dark)] dark:to-[var(--bg-secondary)]
        col-[16/span_3] row-[2/span_1]"
        >
          <section className="flex gap-4 flex-wrap">
            <h2
              className="w-full h-auto text-[clamp(calc(var(--h3-low)),_calc(var(--h3)),_100%)]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]"
            >
              {lang === "es" ? data_ar.languages : data_en.languages}
            </h2>
            {data.common.langs.map((lang, idx) => (
              <img
                key={`${idx}lang`}
                src={`/${lang}_flag.webp`}
                alt={`${flagAlt} ${
                  lang === "ar" ? "Argentina" : "United States"
                }`}
                className="rounded-[4px]
                  max-w-[76px] max-h-[42.75px] aspect-[76/42.75]"
              />
            ))}
          </section>
          {/* <p className="text-[calc(var(--p))] leading-6 mt-3">
              {lang === "es" ? data_ar.languages : data_en.languages}
            </p> */}
        </article>

        {/* MARK: TOOLS
         */}
        <article
          className="flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[1/span_4] row-[3/span_1]"
        >
          <IconNode className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_1_1 : data_en.list_1_1}
          </p>
        </article>

        <article
          className="flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[5/span_4] row-[3/span_1]"
        >
          <IconNext className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_1_2 : data_en.list_1_2}
          </p>
        </article>

        <article
          className="flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[9/span_4] row-[3/span_1]"
        >
          <IconReact className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_1_3 : data_en.list_1_3}
          </p>
        </article>

        <article
          className="flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[1/span_4] row-[4/span_1]"
        >
          <IconProblems className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_2_1 : data_en.list_2_1}
          </p>
        </article>

        <article
          className="flex items-center min-h-[100px] relative overflow-hidden
        col-span-full  md:col-[5/span_4] row-[4/span_1]"
        >
          <IconTeam className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_2_2 : data_en.list_2_2}
          </p>
        </article>

        <article
          className="flex items-center min-h-[100px] relative overflow-hidden
        col-span-full  md:col-[9/span_4] row-[4/span_1]"
        >
          <IconAuthor className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_2_3 : data_en.list_2_3}
          </p>
        </article>

        {/* MARK: BLOG
         */}
        <article
          className="flex flex-col gap-1
         col-span-full md:col-[13/span_6] row-[3/span_2]
        dark:bg-gradient-to-tr dark:from-[var(--bg-primary-dark)] dark:to-[var(--bg-secondary)]"
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
