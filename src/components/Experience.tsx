import { Dictionary } from "../dictionaries";

const ITEMS_PER_PAGE = 4;

export default function Experience({ dict: dict }: { dict: Dictionary }) {
  return (
    <article className="flex flex-col gap-[16px]">
      <h2 className="!text-[calc(var(--h4))]">{dict.experience.title}</h2>
      <section className="flex flex-row gap-4">
        <div
          className={`before:absolute before:top-2 before:bottom-8 before:w-px before:bg-[var(--brand-grey-low)] after:absolute after:bottom-0 after:h-8 after:w-px after:bg-[linear-gradient(transparent_33%,_var(--brand-grey-low)_0%)] after:bg-[length:1px_10px] after:bg-repeat-y`}
        ></div>
        <ul className="flex flex-col gap-[24px]">
          {dict.experience.items.slice(0, ITEMS_PER_PAGE).map((item, idx) => {
            const isSameDate = item.date_start === item.date_end;

            return (
              <li
                key={idx}
                className="before:absolute before:top-2 before:-left-5 before:size-2 before:rounded-full before:bg-[var(--brand-blue)]"
              >
                <p className="!text-sm !leading-6 text-pretty text-[var(--brand-grey-light-low)]">
                  {isSameDate
                    ? `${item.date_start}`
                    : `${item.date_start} - ${item.date_end}`}
                </p>
                <h3 className="!text-[calc(var(--h5))] !font-semibold">
                  {item.title}
                </h3>
                <h4 className="!text-[calc(var(--p))] !leading-5 text-pretty text-[var(--brand-grey-light-low)]">
                  {item.org}
                </h4>
                <p className="mt-2 !text-[calc(var(--small-low))] !leading-5 text-pretty text-[var(--brand-grey-light-low)]">
                  {item.desc}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
