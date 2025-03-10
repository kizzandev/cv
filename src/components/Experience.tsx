import { Dictionary } from "../dictionaries";

export default function Experience({ dict: dict }: { dict: Dictionary }) {
  return (
    <article className="flex flex-col gap-[16px]">
      <h2 className="!text-[calc(var(--h4))]">{dict.experience.title}</h2>
      <section className="flex flex-row gap-4">
        <div className="relative before:absolute before:top-2 before:bottom-0 before:w-px before:bg-[var(--bg-secondary)]"></div>
        <ul className="flex flex-col gap-[24px]">
          {dict.experience.items.map((item, idx) => {
            const isSameDate = item.date_start === item.date_end;

            return (
              <li
                key={idx}
                className="before:absolute before:top-2 before:-left-5 before:size-2 before:rounded-full before:bg-[var(--color-primary-light)]"
              >
                <p className="!text-sm !leading-6 text-pretty text-[var(--text-color-secondary)]">
                  {isSameDate
                    ? `${item.date_start}`
                    : `${item.date_start} - ${item.date_end}`}
                </p>
                <h3 className="!text-[calc(var(--h5))] !font-semibold">
                  {item.title}
                </h3>
                <h4 className="!text-[calc(var(--p))] !leading-5 text-pretty text-[var(--text-color-secondary)]">
                  {item.org}
                </h4>
                <p className="mt-2 !text-[calc(var(--small-low))] !leading-5 text-pretty text-[var(--text-color-secondary)]">
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
