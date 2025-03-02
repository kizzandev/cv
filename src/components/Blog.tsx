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
        <div className="relative before:absolute before:top-0 before:bottom-0 before:w-px before:bg-[var(--bg-secondary)]"></div>
        <ul className="flex flex-col gap-[24px]">
          {feed
            ? feed.map((item, idx) => {
                return (
                  <li className="rounded-sm border border-[var(--bg-secondary)] before:absolute before:top-4 before:-left-5 before:size-2 before:rounded-full before:bg-[var(--color-primary-light)]">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      key={idx}
                      className="inline-block w-full cursor-pointer px-2 pt-0.5 pb-2 hover:[&>h3]:text-[var(--color-primary-dark)] focus:[&>h3]:text-[var(--color-primary-dark)]"
                    >
                      <span>{item.pubDate}</span>
                      <h3 className="!text-[calc(var(--h5))] !font-semibold text-pretty transition-colors duration-300">
                        {item.title}{" "}
                        <Link
                          className="absolute -top-1 right-0 inline-block h-full w-fit"
                          height={16}
                          width={16}
                        />
                      </h3>
                      <p className="!text-[calc(var(--small-low))] !leading-5 text-pretty text-[var(--text-color-secondary)]">
                        {item.description}
                      </p>
                    </a>
                  </li>
                );
              })
            : null}
        </ul>
      </section>
    </article>
  );
}
