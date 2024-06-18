import { useContext, useEffect } from "react";
import { languageContext } from "../App";

export default function Ohno() {
  const { lang } = useContext(languageContext);

  const error = {
    statusText:
      lang === "es"
        ? "No Disponible por Razones Legales"
        : "Unavailable For Legal Reasons",
    status: 451,
  };

  const genericMessage =
    lang === "es"
      ? "Parece que ha ocurrido un error inesperado."
      : "Seems an unexpected error has occurred.";

  useEffect(() => {
    document.title = `Whoops! | ${document.title}`;

    return () => {
      document.title = document.title.replace(`Whoops! | `, "");
    };
  }, [lang]);

  return (
    <article
      id="error-page"
      className="grid place-items-center min-w-full min-h-screen"
    >
      <section>
        <h1 className="text-7xl font-bold text-center text-red-500">Whoops!</h1>
        <p className="mt-6 text-center text-lg text-gray-700 dark:text-gray-300">
          {genericMessage}
        </p>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          Error {error.status}: <i>{error.statusText}</i>
        </p>
      </section>
    </article>
  );
}
