import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        My Library{" "}
      </a>
      <Link
        id="search"
        to="/"
        className={
          window.location.pathname === "/" || window.location.pathname === "/"
            ? "nav-link active"
            : "nav-link"
        }
      >
        {" "}
        Search{" "}
      </Link>
      <Link
        id="saved"
        to="/savedBooks"
        className={
          window.location.pathname === "/savedBooks" ||
          window.location.pathname === "/savedBooks"
            ? "nav-link active"
            : "nav-link"
        }
      >
        {" "}
        Saved{" "}
      </Link>
    </nav>
  );
}

export default Nav;
