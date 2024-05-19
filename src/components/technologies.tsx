import data from "../assets/data/lang.json";

const technologies = data.ar.technologies;
const technologies_en = data.en.technologies;

export default function Technologies({ lang }: { lang: string }) {
  return (
    <article className="flex flex-col gap-1">
      <h2 className="text-[calc(var(--h2-low))]">
        {lang === "es"
          ? "Tecnologías en un mapa no ordenado"
          : "Technologies in an unordered map"}
      </h2>
      <section className="flex flex-wrap gap-4">
        {lang === "es"
          ? technologies.map((tech, i) => (
              <p key={i} className="text-[calc(var(--p))] leading-6">{tech}</p>
            ))
          : technologies_en.map((tech, i) => (
              <p key={i} className="text-[calc(var(--p))] leading-6">{tech}</p>
            ))}
      </section>
    </article>
  );
}
