import { useContext } from "react";
import data from "../assets/data/lang.json";
import { languageContext } from "../Root";

const experience = data.ar.experience;
const experience_en = data.en.experience;

export default function Experience() {
  const { lang } = useContext(languageContext);

  return (
    <article className="flex flex-col gap-1">
      <h2 className="text-[calc(var(--h2-low))]">
        {lang === "es"
          ? "Previamente en la vida..."
          : "Previously in my life..."}
      </h2>
      <section className="flex flex-col gap-2 max-w-[80ch]">
        {lang === "es"
          ? experience.map((exp, i) => (
              <article key={i} className="flex flex-col gap-1">
                <h2 className="text-[calc(var(--h3-low))]">{exp.title}</h2>
                <h3 className="text-[calc(var(--small-low))]">
                  {exp.location}
                </h3>
                <p className="text-[calc(var(--p))] leading-6">
                  {exp.description}
                </p>
              </article>
            ))
          : experience_en.map((exp, i) => (
              <article key={i} className="flex flex-col gap-1">
                <h2 className="text-[calc(var(--h3-low))]">{exp.title}</h2>
                <h3 className="text-[calc(var(--small-low))]">
                  {exp.location}
                </h3>
                <p className="text-[calc(var(--p))] leading-6">
                  {exp.description}
                </p>
              </article>
            ))}
      </section>
    </article>
  );
}
