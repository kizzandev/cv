import { Dictionary } from "../dictionaries";

export default function CallToAction({ dict: dict }: { dict: Dictionary }) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
      <div className="flex h-full items-center">
        <h2 className="!md:text-[calc(var(--h3))] !text-[calc(var(--h4))]">
          {dict.callToAction.title}
        </h2>
      </div>
      <div className="flex h-full flex-col items-center justify-end gap-[8px]">
        <a
          className="w-full max-w-[max(50%,_196px)] focus:text-[var(--color-primary-dark)]"
          href="mailto:kevin@kizzan.dev"
          target="_blank"
          rel="noreferrer"
        >
          <p className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg border border-[var(--bg-secondary)] bg-transparent px-[24px] py-[8px] transition-colors duration-300 hover:border-[var(--color-primary-light)]">
            {dict.callToAction.email}
          </p>
        </a>
        <span className="!text-sm [&>a]:underline [&>a]:transition-colors [&>a]:duration-300 [&>a]:hover:text-[var(--color-primary-dark)] [&>a]:focus:text-[var(--color-primary-dark)]">
          {dict.callToAction.linkedin}{" "}
          <a
            href="https://www.linkedin.com/messaging/compose/?recipient=kevinzanzi"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </span>
      </div>
    </div>
  );
}
