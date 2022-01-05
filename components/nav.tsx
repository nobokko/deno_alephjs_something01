import React from "react";
import { nanoid } from "nanoid";

import { getAllHistories } from "~/lib/history.ts";
import { Link } from "~/components/link.tsx";

export default function Nav() {
  return (
    <ul className="breadcrumbs">
      {getAllHistories().map((info) => (
        <li>
          <Link rel="nav" to={info.url} key={'nav_' + nanoid()}>{info.title}</Link>
        </li>
      ))}
      {
        /* <a rel="nav" href="/">Home</a>
        <a rel="nav" data-active-className="current" href="/about">About</a>
        <a rel="nav" data-active-style={{ fontWeight: 'bold' }} href="/contact">Contact</a> */
      }
    </ul>
  );
}
