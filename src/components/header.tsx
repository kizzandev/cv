import Socials from "./socials";

import data from "../assets/data/lang.json";

const { title_name, title_tld } = data.common;

function Header(props: any) {
  return (
    <header className="flex flex-col gap-[32px]">
      <h1
        className="text-[calc(var(--h2))] lg:text-[calc(var(--h1))]
      text-[var(--color-primary-light)] dark:text-[var(--color-primary-dark)]"
      >
        {title_name}
        <span
          className="text-[var(--color-accent-light)]
      dark:text-[var(--color-accent-dark)]"
        >
          {title_tld}
        </span>
      </h1>
      <Socials lang={props.lang} setLang={props.setLang} />
    </header>
  );
}

export default Header;
