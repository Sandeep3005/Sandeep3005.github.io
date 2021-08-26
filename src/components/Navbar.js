import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/navbar.module.css";

const Navbar = () => {
  const { bg_custom, link_color, test } = styles;
  console.log(styles);
  return (
    <nav className={`navbar fixed-top navbar-light ${bg_custom}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className={`navbar-toggler navbar-toggler-right`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "#ff6e40" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className={`nav-link ${link_color}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${link_color}`} to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${link_color}`} to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${link_color}`} to="/connect">
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
