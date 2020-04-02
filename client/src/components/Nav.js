import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-light ">
      <ul className="nav">
        <li className="nav-item">
          <a className="navbar-brand" href="/">
            Google Books
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Search
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/saved">
            Saved
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
