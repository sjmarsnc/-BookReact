import React from "react";
import "./common.css";

function HeaderBar() {
  return (
    <div className="row justify-content-between header">
      <div
        className="col col-md-4 col-12 align-self-left justify-content-center p-3"
        id="tab"
      >
        Web Development Services
      </div>

      <nav
        className="navbar navbar-expand col col-md-3 col-12 justify-content-center"
        id="main-navigation"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderBar;
