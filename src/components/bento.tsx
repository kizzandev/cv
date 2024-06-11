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

const data_ar = data.ar.bento;
const data_en = data.en.bento;

const getBlogRSS = async (lang: string) => {
  try {
    const parser = new DOMParser();
    let url = "https://blog.kizzan.dev/rss.xml";
    if (lang === "en") {
      url = "https://blog.kizzan.dev/en/rss.xml";
    }

    const rss = await fetch(url);
    const xmldoc = parser.parseFromString(await rss.text(), "text/xml");
    const item = xmldoc.getElementsByTagName("item")[0];
    const title = item.getElementsByTagName("title")[0].textContent;
    const description = item.getElementsByTagName("description")[0].textContent;
    return { title: title, description: description };
  } catch (error) {
    let msgTitle = "Parece que hubo un error";
    let msgDescription = "Siempre podés visitar mi blog en blog.kizzan.dev";
    if (lang === "en") {
      msgTitle = "There was an error";
      msgDescription = "You can always visit my blog at blog.kizzan.dev/en";
    }
    return {
      title: msgTitle,
      description: msgDescription,
    };
  }
};

export default function Bento() {
  const { lang } = useContext(languageContext);

  const [blogTitle, setBlogTitle] = useState(
    lang === "es" ? "Cargando..." : "Loading..."
  );
  const [blogDescription, setBlogDescription] = useState(
    lang === "es" ? "Cargando..." : "Loading..."
  );

  useEffect(() => {
    getBlogRSS(lang).then((feed) => {
      if (feed) {
        setBlogTitle(feed.title!);
        setBlogDescription(feed.description!);
      }
    });
  }, [lang]);

  // Flag alt text
  const [flagAlt, setFlagAlt] = useState(
    `${lang === "es" ? "Bandera de " : "Flag of "}`
  );

  useEffect(() => {
    setFlagAlt(`${lang === "es" ? "Bandera de " : "Flag of "}`);
  }, [lang]);

  return (
    <article className="flex flex-col gap-4 transition-all duration-300 ease-in-out">
      <section
        id="bento"
        className="grid grid-cols-[18] grid-rows-1 md:grid-rows-4 lg:grid-rows-12 gap-4
         auto-cols-fr
      [&>article]:bg-[var(--bg-secondary)]
      [&>article]:p-[16px]
      [&>article]:rounded-[var(--border-radius-8)]
      transition-all duration-300 ease-in-out
      "
      >
        {/* MARK: CURRENT JOB
         */}
        <article
          className="flex flex-col gap-1
          col-span-full md:col-[1/span_18] lg:col-[1/span_12] _lg:col-[1/span_6]
          row-span-1 lg:row-[1/span_6]
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
          col-span-full md:col-[1/span_18] lg:col-[7/span_6]
          row-span-1 lg:row-[1/span_6]
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
          col-span-full md:col-[1/span_6] lg:col-[13/span_6] xl:col-[13/span_3]
          row-span-1 lg:row-[1/span_2] xl:row-[1/span_3]"
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
          className="hidden xl:block 
           dark:bg-gradient-to-tr dark:from-[var(--bg-primary-dark)] dark:to-[var(--bg-secondary)]
           col-span-full xl:col-[16/span_3]
           row-span-1 xl:row-[1/span_3]"
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
           col-span-full md:col-[7/span_6] lg:col-[13/span_6] xl:col-[13/span_3]
           row-span-1 lg:row-[3/span_2] xl:row-[4/span_3]"
        >
          <h2
            className="text-[clamp(calc(var(--h3-low)),_calc(var(--h3)),_100%)]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]
             overflow-x-hidden text-ellipsis"
            title={lang === "es" ? data_ar.education : data_en.education}
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
        col-span-full md:col-[13/span_6] lg:col-[13/span_6] xl:col-[16/span_3]
        row-span-1 lg:row-[5/span_2] xl:row-[4/span_3]"
        >
          <section className="flex gap-4 flex-wrap">
            <h2
              className="w-full h-auto text-[clamp(calc(var(--h3-low)),_calc(var(--h3)),_100%)]
              text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]
              overflow-x-hidden text-ellipsis"
              title={lang === "es" ? data_ar.languages : data_en.languages}
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

        {/* MARK: NODEJS
         */}
        <article
          className="hidden md:flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[1/span_6] lg:col-[1/span_4]
        row-span-1 lg:row-[7/span_3]"
        >
          <IconNode className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div
            className="
          left-0
          bg-gradient-to-t
          from-[var(--bg-primary-dark)] dark:from-black to-transparent
          w-full h-full absolute z-20"
          ></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_1_1 : data_en.list_1_1}
          </p>
        </article>

        {/* MARK: NEXTJS
         */}
        <article
          className="hidden md:flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[7/span_6] lg:col-[5/span_4]
        row-span-1 lg:row-[7/span_3]"
        >
          <IconNext className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-[var(--bg-primary-dark)] dark:from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_1_2 : data_en.list_1_2}
          </p>
        </article>

        {/* MARK: REACTJS
         */}
        <article
          className="hidden md:flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[13/span_6] lg:col-[9/span_4]
        row-span-1 lg:row-[7/span_3]"
        >
          <IconReact className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-[var(--bg-primary-dark)] dark:from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_1_3 : data_en.list_1_3}
          </p>
        </article>

        {/* MARK: PROBLEMS
         */}
        <article
          className="hidden md:flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[1/span_6] lg:col-[1/span_4]
        row-span-1 lg:row-[10/span_3]"
        >
          <IconProblems className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-[var(--bg-primary-dark)] dark:from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_2_1 : data_en.list_2_1}
          </p>
        </article>

        {/* MARK: TEAM
         */}
        <article
          className="hidden md:flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[7/span_6] lg:col-[5/span_4]
        row-span-1 lg:row-[10/span_3]"
        >
          <IconTeam className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-[var(--bg-primary-dark)] dark:from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_2_2 : data_en.list_2_2}
          </p>
        </article>

        {/* MARK: AUTHOR
         */}
        <article
          className="hidden md:flex items-center min-h-[100px] relative overflow-hidden
        col-span-full md:col-[13/span_6] lg:col-[9/span_4]
        row-span-1 lg:row-[10/span_3]"
        >
          <IconAuthor className="left-0 absolute w-full max-w-[50%] h-full z-10" />
          <div className="left-0 bg-gradient-to-t from-[var(--bg-primary-dark)] dark:from-black to-transparent w-full h-full absolute z-20"></div>
          <p className="text-[calc(var(--p))] leading-6 text-[var(--color-accent-dark)] font-semibold mt-auto z-40">
            {lang === "es" ? data_ar.list_2_3 : data_en.list_2_3}
          </p>
        </article>

        {/* MARK: BLOG
         */}
        <article
          className="flex flex-col gap-1
         col-span-full lg:col-[13/span_6]
         row-span-1 md:col-[1/span_18]
         lg:row-[7/span_6]
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
