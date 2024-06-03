import Socials from "./socials";

import data from "../assets/data/lang.json";
import { Link } from "react-router-dom";

const { title_name, title_tld } = data.common;

function Header() {
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
      <Socials />
      <nav className="ml-auto">
        <ul
          className="flex gap-4
        [&>li>*]:px-2 [&>li>*]:py-1
        [&>li]:transition-colors [&>li]:duration-150
        [&>li]:rounded-md
        [&>li:hover]:bg-[var(--bg-secondary)]
        [&>li:hover]:text-[var(--color-accent-light)] [&>li:hover]:dark:text-[var(--color-accent-dark)]
        "
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/mvv"}>MVV</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
