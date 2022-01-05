import React from "react";
// import { useRouter } from "aleph/react";
import Logo from "~/components/logo.tsx";

export default function E404() {
//   const routerinfo = useRouter();
//   console.log({routerinfo});
//   routerinfo.push('/');
  return (
    <div className="e404">
      <head>
        <title>404 - Page Not Found</title>
        <link rel="stylesheet" href="../style/e404.css" />
      </head>
      <h1>404 - Page Not Found</h1>
      <p className="logo">
        <Logo />
      </p>
      <p className="links">
        <a rel="nav" href="/">home</a>
        <span></span>
        <a rel="nav" href="/react_todo_list_beginning">
          react_todo_list_beginning
        </a>
      </p>
    </div>
  );
}
