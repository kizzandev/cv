import { Dictionary } from "../dictionaries";

export default function CallToAction({ dict: dict }: { dict: Dictionary }) {
  return (
    <article className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
      <section className="flex h-full items-center">
        <h2 className="!md:text-[calc(var(--h3))] !text-[calc(var(--h4))]">
          {dict.callToAction.title}
        </h2>
      </section>
      <section className="flex h-full flex-col items-center justify-end gap-[8px]">
        <a
          className="w-full max-w-[max(50%,_196px)] rounded-lg border border-[var(--brand-grey-low)] transition-colors duration-300 hover:border-[var(--brand-blue)] focus:text-[var(--brand-green)]"
          href="mailto:kevin@kizzan.dev"
          target="_blank"
          rel="noreferrer"
        >
          <p className="flex h-full w-full cursor-pointer items-center justify-center bg-transparent px-[24px] py-[8px]">
            {dict.callToAction.email}
          </p>
        </a>
        <span className="!text-sm [&>a]:underline [&>a]:underline-offset-2 [&>a]:transition-colors [&>a]:duration-300 [&>a]:hover:text-[var(--brand-green)] [&>a]:focus:text-[var(--brand-green)]">
          {dict.callToAction.linkedin}{" "}
          <a
            href="https://www.linkedin.com/messaging/compose/?recipient=kevinzanzi"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </span>
      </section>
    </article>
  );
}
