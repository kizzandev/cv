import { useContext, useEffect, useState } from "react";
import data from "../assets/data/lang.json";

import { handleLangNav } from "../utils/nav";

import { languageContext } from "../App";
import BentoArticle from "./bentoArticle";
import { Link, useParams } from "react-router-dom";
import BentoExperienceEntry from "./bentoJobExperience";

const data_ar = data.ar.bento;
const data_en = data.en.bento;

const { mission, vision } = data.ar.mvv;
const { mission: mission_en, vision: vision_en } = data.en.mvv;

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
    const link = item.getElementsByTagName("link")[0].textContent;
    return { title: title, description: description, link: link };
  } catch (error) {
    let title = "Parece que hubo un error";
    let description = "Siempre podés visitar mi blog en blog.kizzan.dev";
    if (lang === "en") {
      title = "There was an error";
      description = "You can always visit my blog at blog.kizzan.dev/en";
    }
    return {
      error: true,
      title: title,
      description: description,
    };
  }
};

export default function Bento() {
  const { lang } = useContext(languageContext);
  const params = useParams();

  const [blogTitle, setBlogTitle] = useState(
    lang === "es" ? "Cargando..." : "Loading..."
  );
  const [blogDescription, setBlogDescription] = useState(
    lang === "es" ? "Cargando..." : "Loading..."
  );
  const [blogLink, setBlogLink] = useState("https://blog.kizzan.dev");

  useEffect(() => {
    getBlogRSS(lang).then((feed) => {
      if (feed.error) console.error("Error fetching blog RSS");
      setBlogTitle(feed.title!);
      setBlogDescription(feed.description!);
      if (feed.link) setBlogLink(feed.link);
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
    <section
      id="bento"
      className="grid gap-4
           grid-cols-6
           md:grid-rows-5
          _lg:grid-rows-8
          lg:grid-rows-[repeat(8,_minmax(0,_78px))]
          transition-all duration-300 ease-in-out
          "
    >
      {/* MARK: EXPERIENCE
       */}
      {/* prettier-ignore */}
      <BentoArticle
        title={lang === "es" ? `Experiencia` : "Experience"}
        mdColStart="1" mdColSpan="3"
        mdRowStart="1" mdRowSpan="1"
        lgColStart="1" lgColSpan="2"
        lgRowStart="1" lgRowSpan="4"
        className="max-h-[500px] overflow-hidden"
      >
        <section className="overflow-y-scroll overflow-x-hidden flex flex-col gap-4 my-1 py-4 pr-4">
          {lang === "es"
            ? data.ar.experience.map(
                ({ title, mode, company, startYear, endYear, description }) => (
                  <>
                    {BentoExperienceEntry(
                      title,
                      mode,
                      company,
                      startYear,
                      endYear,
                      description
                    )}
                  </>
                )
              )
            : data.en.experience.map(
                ({ title, mode, company, startYear, endYear, description }) => (
                  <>
                    {BentoExperienceEntry(
                      title,
                      mode,
                      company,
                      startYear,
                      endYear,
                      description
                    )}
                  </>
                )
              )}
        </section>

        {/* buttons */}
        <span className="grid _grid-cols-2 mt-auto gap-4">
          {/* {_bentoLink(lang === "es" ? "Ver CV" : "View CV", "/")} */}
          {/* {_bentoLink(lang === "es" ? "Descargar CV" : "Download CV", "/")} */}
        </span>
      </BentoArticle>

      {/* MARK: START UP
       */}
      {/* prettier-ignore */}
      <BentoArticle
          title={lang === "es" ? data_ar.job_title : data_en.job_title}
          mdColStart="4" mdColSpan="3"
          mdRowStart="1" mdRowSpan="1"
          lgColStart="3" lgColSpan="2"
          lgRowStart="1" lgRowSpan="4"
        >
          <h3 className="text-[calc(var(--small))] leading-4">
            {lang === "es"
              ? data_ar.job_location
              : data_en.job_location}
          </h3>
          <p className="text-[calc(var(--p))] leading-6">
            {lang === "es"
              ? data_ar.job_text
              : data_en.job_text}
          </p>
        </BentoArticle>

      {/* MARK: MISION & VISION
       */}
      {/* prettier-ignore */}
      <BentoArticle
          mdColStart="1" mdColSpan="2"
          mdRowStart="2" mdRowSpan="1"
          lgColStart="5" lgColSpan="2"
          lgRowStart="1" lgRowSpan="2"
          title={<>{lang === "es" ? 'Misión' : 'Mission'} & {lang === "es" ? 'Visión' : 'Vision'}</>}
        >
          <h3
            className="text-[calc(var(--small))] leading-4 line-clamp-1"
            title={lang === "es" ? mission : mission_en}
          >
            {lang === "es" ? 'Misión: ' + mission : 'Mission: ' + mission_en}
          </h3>
          <h3
            className="text-[calc(var(--small))] leading-4 line-clamp-1"
            title={lang === "es" ? vision : vision_en}
          >
            {lang === "es" ? 'Visión: ' + vision : 'Vision: ' + vision_en}
          </h3>
          {_bentoLink(lang === "es" ? 'Leer más' : 'Read more', handleLangNav("mv", params.lang), undefined, true, "mt-4")}
        </BentoArticle>

      {/* MARK: CALL TO ACTION (CTA)
       */}
      {/* prettier-ignore */}
      <BentoArticle
          title={lang === "es" ? 'Trabajemos juntos' : 'Let\'s work together'}
          mdColStart="3" mdColSpan="4"
          mdRowStart="2" mdRowSpan="1"
          lgColStart="5" lgColSpan="2"
          lgRowStart="3" lgRowSpan="2"
        >
        <p className="text-[calc(var(--p))] leading-6">
          {lang === "es"
          ? `Hablemos para ver cómo podemos colaborar`
          : `Get in touch to see how we can collaborate`}
        </p>
          
          <span className="grid grid-cols-2 mt-auto gap-4">
            {_bentoLink("LinkedIn", data.common.linkedin, true, true)}
            {_bentoLink('Gmail', `mailto:${data.common.email}`, undefined, true)}
          </span>
        </BentoArticle>

      {/* MARK: PROJECTS
       */}
      {/* prettier-ignore */}
      <BentoArticle
          title={lang === "es" ? 'Proyectos' : 'Projects'}
          mdColStart="1" mdColSpan="4"
          mdRowStart="3" mdRowSpan="2"
          lgColStart="1" lgColSpan="2"
          lgRowStart="5" lgRowSpan="4"
        >
          {/* picture */}
          <img
            src="/last_project.webp"
            alt={`${lang === "es" ? 'Imagen del último proyecto' : 'Last project image'}`}
            className="rounded-[var(--border-radius-8)] w-full h-full
            _object-contain object-fill object-center aspect-[16/9]
            _border-[1px] border-[var(--bg-secondary)]
            grid place-items-center
            filter grayscale-[0.51]
            my-2"
          />
          
          {_bentoLink(lang === "es" ? 'Ir a proyectos' : 'Go to projects', handleLangNav("projects", params.lang))}
        </BentoArticle>

      {/* MARK: LIVE ON TWITCH || YOUTUBE || LANGS
       */}
      {/* prettier-ignore */}
      <BentoArticle
          title={lang === "es" ? data_ar.languages : data_en.languages}
          mdColStart="5" mdColSpan="2"
          mdRowStart="3" mdRowSpan="1"
          lgColStart="3" lgColSpan="2"
          lgRowStart="5" lgRowSpan="2"
        >
        <section className="flex gap-4 flex-wrap py-2">
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
        </BentoArticle>

      {/* MARK: SHAMELESS TIP JAR
       */}
      {/* prettier-ignore */}
      <BentoArticle
          /*title={_bentoLink(lang === "es" ? '¿Me invitás un café?' : 'Would you buy me a coffee?',
            "", true, undefined,
            "grid place-items-center w-full h-full !text-[calc(var(--h5-low))]")}/**/
            title={lang === "es" ? 'Un poco más sobre mí' 
              : 'A little more about me'}
          mdColStart="5" mdColSpan="2"
          mdRowStart="4" mdRowSpan="1"
          lgColStart="3" lgColSpan="2"
          lgRowStart="7" lgRowSpan="2"
        >
          {lang === "es" ? 
          _bentoLink('Conoceme', 'https://blog.kizzan.dev/article/quien-es-kevin', true) 
        : _bentoLink('Know me', 'https://blog.kizzan.dev/en/article/who-is-kevin', true)}
          </BentoArticle>

      {/* MARK: BLOG LAST ARTICLE
       */}
      {/* prettier-ignore */}
      <BentoArticle
          title={lang === "es" ? data_ar.blog_title : data_en.blog_title}
          mdColStart="1" mdColSpan="6"
          mdRowStart="5" mdRowSpan="1"
          lgColStart="5" lgColSpan="2"
          lgRowStart="5" lgRowSpan="4"
        >
          <h3 className="text-[calc(var(--h4))] leading-8 font-semibold">
            {blogTitle}
          </h3>
          <p className="text-[calc(var(--p))] leading-6">{blogDescription}</p>
          
        <span className="grid grid-cols-2 mt-auto gap-4">
          {lang === "es" ? _bentoLink("Ver blog", "https://blog.kizzan.dev", true) : _bentoLink("Go to blog", "https://blog.kizzan.dev/en", true) }
          
          {_bentoLink(lang === "es" ? 'Leer más' : 'Read more', blogLink, true)}
        </span>
        </BentoArticle>
    </section>
  );
}

// A nice looking button to be placed in the lower part of the bento article
// Either 1 full width or 2 half width
function _bentoLink(
  title: string,
  link: string,
  external?: boolean | undefined,
  smaller?: boolean | undefined,
  className?: string
) {
  return (
    <Link
      to={link}
      target={external ? "_blanck" : "_self"}
      className={`block text-center hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)]
      text-[calc(var(--p))] ${smaller ? `leading-6` : ""}
      transition-all duration-300 ease-in-out
      py-1 rounded-[var(--border-radius-4)]
      border border-secondary hover:border-[var(--color-accent-light)] dark:hover:border-[var(--color-accent-dark)]
       border-opacity-10
       mt-auto ${className ? className : ""}`}
    >
      {title}
    </Link>
  );
}
