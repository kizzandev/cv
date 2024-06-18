import { useContext, useEffect } from "react";

import { languageContext } from "../App";

import data from "../assets/data/lang.json";
import { Link } from "react-router-dom";

const projects = data.ar.projects;
const projects_en = data.en.projects;

type ProjectSchema = {
  title: string;
  description: string;
  advocacy?: string;
  link?: string;
  highlight?: boolean;
};

export default function Projects() {
  const { lang } = useContext(languageContext);

  useEffect(() => {
    document.title = `${lang === "es" ? "Proyectos" : "Projects"} | ${
      document.title
    }`;

    return () => {
      document.title = document.title.replace(
        `${lang === "es" ? "Proyectos | " : "Projects | "}`,
        ""
      );
    };
  }, [lang]);

  return (
    <article>
      <h1 className="text-[calc(var(--h1-low))]">
        {lang === "es" ? "Proyectos" : "Projects"}
      </h1>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-[32px]">
        {lang === "es"
          ? projects.map((project) => _projectCard(project, lang))
          : projects_en.map((project) => _projectCard(project, lang))}
      </section>
    </article>
  );
}

function _projectCard(project: ProjectSchema, lang: string) {
  return (
    <article
      key={project.title}
      className="flex flex-col border pt-2 pb-4 px-4 rounded-md border-[var(--bg-secondary)] bg-[var(--bg-secondary)] dark:bg-transparent shadow-md dark:shadow-lg transition-all duration-300 ease-in-out"
    >
      <h2 className="text-[calc(var(--h3-low))] leading-10">{project.title}</h2>
      <p className="text-[calc(var(--p-low))] leading-5 pt-[4px] pb-[8px]">
        {project.description}
      </p>
      {project.link && (
        <Link
          className="text-[calc(var(--p-low))] hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)]
        bg-[var(--color-secondary)] px-2 mt-auto
        underline ml-auto rounded-md
        border border-[var(--bg-secondary)] hover:border-[var(--color-accent-light)] dark:hover:border-[var(--color-accent-dark)]"
          to={project.link}
          target="_blank"
        >
          {lang === "es" ? "Ver más" : "View more"}
        </Link>
      )}
    </article>
  );
}
