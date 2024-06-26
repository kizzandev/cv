import { useContext, useEffect } from "react";
import { useRouteError } from "react-router-dom";
import { languageContext } from "../App";

export default function ErrorPage() {
  const { lang } = useContext(languageContext);

  useEffect(() => {
    document.title = `Error | ${document.title}`;

    return () => {
      document.title = document.title.replace(`Error | `, "");
    };
  }, [lang]);

  const error = useRouteError() as {
    statusText: string;
    message: string;
    status: number;
  };
  console.error(error);

  const genericMessage =
    lang === "es"
      ? "Parece que ha ocurrido un error inesperado."
      : "Seems an unexpected error has occurred.";

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
          Error {error.status ?? 9001}:{" "}
          <i>{error.statusText || error.message}</i>
        </p>
      </section>
    </article>
  );
}
