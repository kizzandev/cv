import { useEffect, useState } from "react";
import { Dictionary } from "../dictionaries";
import getRSSFeed, { type BlogItem } from "../lib/utils";
import Link from "../icons/link";

export default function Blog({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  const [feed, setFeed] = useState<BlogItem[] | null>(null);

  useEffect(() => {
    const get = async () => {
      const feed = await getRSSFeed(lang);
      setFeed(feed);
    };
    get();
  }, [lang]);

  return (
    <article className="flex flex-col gap-[16px]">
      <h2 className="!text-[calc(var(--h4))]">{dict.blog.title}</h2>
      <section className="flex flex-row gap-4">
        {feed ? (
          <>
            <div className="before:absolute before:top-5 before:bottom-7 before:w-px before:bg-[var(--brand-grey-low)]"></div>
            <ul className="flex flex-col gap-[24px]">
              {feed.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="rounded-sm border border-[var(--brand-grey-low)] transition-colors duration-300 before:absolute before:top-4 before:-left-5 before:size-2 before:rounded-full before:bg-[var(--brand-blue)] hover:border-[var(--brand-blue)]"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block w-full cursor-pointer px-2 pt-0.5 pb-2 hover:[&>h3]:text-[var(--brand-green)] focus:[&>h3]:text-[var(--brand-green)]"
                    >
                      <span>{item.pubDate}</span>
                      <h3 className="!text-[calc(var(--h5))] !font-semibold text-pretty transition-colors duration-300">
                        {item.title}{" "}
                        <Link
                          className="absolute -top-1 inline-block h-full w-fit pl-0.5"
                          height={16}
                          width={16}
                        />
                      </h3>
                      <p className="!text-[calc(var(--small-low))] !leading-5 text-pretty text-[var(--brand-grey-light-low)]">
                        {item.description}
                      </p>
                    </a>
                  </li>
                );
              })}
              <li
                key={feed.length}
                className="pl-2 before:absolute before:top-2 before:-left-4 before:h-3 before:w-3 before:rounded-bl-[4px] before:border before:border-transparent before:border-b-[var(--brand-grey-low)] before:border-l-[var(--brand-grey-low)] after:absolute after:top-4 after:-left-3 after:size-2 after:rounded-full after:bg-[var(--brand-blue)]"
              >
                <a
                  href={"https://blog.kizzan.dev"}
                  target="_blank"
                  rel="noreferrer"
                  key="0"
                  className="inline-block w-full cursor-pointer hover:[&>p]:text-[var(--brand-green)] focus:[&>p]:text-[var(--brand-green)]"
                >
                  <p className="!text-[calc(var(--h6))] !font-semibold text-pretty underline underline-offset-2 transition-colors duration-300">
                    {dict.blog.readmore}
                    {""}
                    <Link
                      className="absolute -top-1 inline-block h-full w-fit pl-0.5"
                      height={16}
                      width={16}
                    />
                  </p>
                </a>
              </li>
            </ul>
          </>
        ) : (
          <a
            href={"https://blog.kizzan.dev"}
            target="_blank"
            rel="noreferrer"
            key="0"
            className="-mt-2 inline-block w-full cursor-pointer hover:[&>p]:text-[var(--brand-green)] focus:[&>p]:text-[var(--brand-green)]"
          >
            <p className="!text-[calc(var(--h6))] !font-semibold text-pretty underline underline-offset-2 transition-colors duration-300">
              {dict.blog.readmore}
              {""}
              <Link
                className="absolute -top-1 inline-block h-full w-fit pl-0.5"
                height={16}
                width={16}
              />
            </p>
          </a>
        )}
      </section>
    </article>
  );
}
