import { useDeno, useRouter } from "aleph/react";
import React from "react";
import Logo from "~/components/logo.tsx";
import {Link} from "~/components/link.tsx";
import useCounter from "~/lib/useCounter.ts";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter();
  const version = useDeno(() => Deno.version.deno);
  // const routerinfo = useRouter();
  // console.log({routerinfo});

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo">
        <Logo />
      </p>
      <h1>
        Welcome to use <strong>Aleph.js</strong>!
      </h1>
      <p className="links">
        <a href="https://alephjs.org" target="_blank">Website</a>
        <span></span>
        <a href="https://alephjs.org/docs/get-started" target="_blank">
          Get Started
        </a>
        <span></span>
        <a href="https://alephjs.org/docs" target="_blank">Docs</a>
        <span></span>
        <a href="https://github.com/alephjs/aleph.js" target="_blank">Github</a>
      </p>
      <p className="links">
        <Link to="/react_todo_list_beginning">react_todo_list_beginning</Link>
        <Link to="/conways_game_of_life">conways_game_of_life</Link>
        <Link to="/react_todo_list_beginningx">404</Link>
      </p>
      <div className="counter">
        <span>Counter:</span>
        {isSyncing && <em>...</em>}
        {!isSyncing && <strong>{count}</strong>}
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}
