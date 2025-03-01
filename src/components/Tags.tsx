import { type Dictionary } from "../dictionaries";

export default function Tags({
  dict,
  setLang,
}: {
  dict: Dictionary;
  setLang: (lang: string) => void;
}) {
  return (
    <div className="__dict-tagger flex flex-col justify-center">
      <ul
        id="intro-tag-list"
        className="__dict-tagger flex flex-wrap items-center gap-[16px]"
      >
        {dict.summary.tags.map((tag, idx) => {
          const isSpanish =
            tag === "lang: Spanish" || tag === "idioma: Español";
          const isEnglish = tag === "lang: English" || tag === "idioma: Inglés";

          return (
            <li
              key={idx}
              className="__dict-tagger rounded-lg border border-[var(--bg-secondary)] text-sm shadow-[0_0_6px_-3px_var(--color-primary-dark)] [&>]:py-1 [&>*]:px-4"
            >
              {isSpanish ? (
                <button
                  className="h-full w-full cursor-pointer transition-colors duration-300 hover:text-[var(--color-primary-dark)] focus:text-[var(--color-primary-dark)]"
                  onClick={() => setLang("ag")}
                  aria-label={dict.summary.toSpanish}
                >
                  {tag}
                </button>
              ) : isEnglish ? (
                <button
                  className="h-full w-full cursor-pointer transition-colors duration-300 hover:text-[var(--color-primary-dark)] focus:text-[var(--color-primary-dark)]"
                  onClick={() => setLang("en")}
                  aria-label={dict.summary.toEnglish}
                >
                  {tag}
                </button>
              ) : (
                <span>{tag}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
