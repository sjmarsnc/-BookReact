import React from "react";
import "./nav.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-light ">
      <ul className="nav">
        <li className="nav-item">
          <a className="navbar-brand" href="/">
            Google Books
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Search
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              props.enableSaved
                ? ""
                : "disabled data-toggle='tooltip' title='No saved books yet'"
            }`}
            href="/saved"
          >
            Saved
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
