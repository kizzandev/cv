"use client";

import { useEffect, useRef, useState } from "react";

export default function BentoExperienceEntry(
  title: string,
  mode: string,
  company: string,
  startYear: string,
  endYear: string,
  description: string
) {
  const bothYears =
    startYear === endYear ? startYear : `${startYear} - ${endYear}`;

  const id = (title + company + bothYears.split(" ")[0]).replace(/\s/g, "");

  const pRef = useRef<HTMLParagraphElement | null>(null);

  const [isPTagVisible, setIsPTagVisible] = useState(false);

  useEffect(() => {
    if (!pRef.current) return;

    if (isPTagVisible) {
      pRef.current.style.maxHeight = pRef.current.scrollHeight + "px";
    } else {
      pRef.current.style.maxHeight = "0";
    }

    const article = pRef.current.parentElement; // article in this component
    const parent = article?.parentElement; // section with the list of articles
    // close all other articles when one is opened
    parent?.childNodes.forEach((child) => {
      if (child !== article) {
        child.addEventListener("click", () => {
          setIsPTagVisible(false);
        });
      }
    });

    return () => {
      parent?.childNodes.forEach((child) => {
        if (child !== article) {
          child.removeEventListener("click", () => {
            setIsPTagVisible(false);
          });
        }
      });
    };
  }, [isPTagVisible]);

  const handleMaxHeight = () => setIsPTagVisible(!isPTagVisible);

  return (
    <article
      key={id}
      className={`border border-[var(--bg-secondary)] border-solid w-full rounded-md p-2 text-pretty cursor-pointer`}
      onClick={handleMaxHeight}
      id={`_id__${id}`}
    >
      <section className="flex items-center gap-2">
        <h3 className="text-[calc(var(--h5-low))] leading-6">{title}</h3>
        <span className="text-[calc(var(--small-low))] leading-3">
          {" "}
          --&gt; {mode}
        </span>
        <span className="text-[calc(var(--small-low))] leading-3 text-end ml-auto">
          {bothYears}
        </span>
      </section>
      <small className="text-[cal(var(--small-low))] leading-3 flex justify-between">
        {company} <span>↓</span>
      </small>
      <p
        ref={pRef}
        className={`text-[calc(var(--small-low))] leading-4 overflow-hidden m-o pt-2 transition-all duration-300 ease-in-out`}
        style={{ maxHeight: "0" }}
      >
        {description}
      </p>
    </article>
  );
}
