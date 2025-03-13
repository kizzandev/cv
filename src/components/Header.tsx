import { type Dictionary } from "../dictionaries";
import Github from "../icons/github";
import LinkedIn from "../icons/linkedIn";

export default function Header({ dict: dict }: { dict: Dictionary }) {
  return (
    <header className="sd:gap-0 flex flex-col items-center justify-between gap-2 sm:flex-row">
      <h1 className="self-start !text-[calc(var(--h3))] text-[var(--brand-blue)]">
        Kizzan
        <span className="text-[var(--brand-green)]">.dev</span>
      </h1>
      <ul className="flex flex-row items-center gap-4 self-end sm:self-auto">
        <li className="flex items-center justify-center">
          <a
            href="https://github.com/kizzandev"
            target="_blank"
            rel="noreferrer"
            aria-label={dict.header.labels.github}
            className="inline-flex items-center justify-center rounded border-2 border-[var(--brand-grey-low)] px-2 py-1 text-[var(--brand-grey-light)] transition-colors duration-300 hover:cursor-pointer hover:border-[var(--brand-blue)] focus:text-[var(--brand-green)]"
          >
            <Github className="mt-1" />
          </a>
        </li>
        <li className="flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/kevinzanzi/"
            target="_blank"
            rel="noreferrer"
            aria-label={dict.header.labels.linkedin}
            className="inline-flex items-center justify-center rounded border-2 border-[var(--brand-grey-low)] px-2 py-1 text-[var(--brand-grey-light)] transition-colors duration-300 hover:cursor-pointer hover:border-[var(--brand-blue)] focus:text-[var(--brand-green)]"
          >
            <LinkedIn className="mt-1" />
          </a>
        </li>
      </ul>
    </header>
  );
}
