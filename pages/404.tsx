import React from "react";
// import { useRouter } from "aleph/react";
import Logo from "~/components/logo.tsx";
import { Link } from "~/components/link.tsx";

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
        <Link to="/">home</Link>
        <span></span>
        <Link to="/react_todo_list_beginning">
          react_todo_list_beginning
        </Link>
      </p>
    </div>
  );
}
