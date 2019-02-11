import Link from "next/link";
import { A } from "../lib/typography";

export const DefaultNav = () => (
  <header>
    <nav>
      <Link href="/">
        <A>Home</A>
      </Link>{" "}
      |
      <Link href="/about">
        <A>About</A>
      </Link>{" "}
      |
      <Link href="/contact">
        <A>Contact</A>
      </Link>
    </nav>
  </header>
);
