import { type Dictionary } from "../dictionaries";

function getLang(tag: string): [boolean, string] {
  switch (tag) {
    case "lang: Spanish":
    case "idioma: Español":
      return [true, "ag"];
    case "lang: English":
    case "idioma: Inglés":
      return [true, "en"];
    default:
      return [false, ""];
  }
}

// MARK: EXPORT DEFAULT
export default function Tags({
  dict,
  setLang,
}: {
  dict: Dictionary;
  setLang: (lang: string) => void;
}) {
  return (
    <article className="flex flex-col justify-center">
      <ul
        id="intro-tag-list"
        className="flex flex-wrap items-center gap-[8px] md:gap-[16px]"
      >
        {dict.summary.tags.map((tag, idx) => {
          const [isLang, langCode] = getLang(tag);
          const label =
            langCode === "ag" ? dict.summary.toSpanish : dict.summary.toEnglish;

          return (
            <li
              key={idx}
              className="rounded-lg border border-[var(--bg-secondary)] text-sm shadow-[0_0_6px_-3px_var(--color-primary-dark)] [&>]:py-1 [&>*]:px-2 [&>*]:md:px-4"
            >
              {isLang ? (
                <button
                  className="h-full w-full cursor-pointer transition-colors duration-300 hover:text-[var(--color-primary-dark)] focus:text-[var(--color-primary-dark)]"
                  onClick={() => setLang(langCode)}
                  aria-label={label}
                >
                  <span className="border-b border-dashed">{tag}</span>
                </button>
              ) : (
                <span>{tag}</span>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
