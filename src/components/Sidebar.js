import React from "react";
import { Link } from "gatsby";
import Avatar from "react-avatar";
import * as styles from "../styles/sidebar.module.css";

const Sidebar = () => {
  const {
    sidebar_width_350,
    sidebar_background,
    sidebar_visibility_true,
    link_color,
    spread_content,
  } = styles;
  return (
    <div
      className={`offcanvas offcanvas-start show ${sidebar_width_350} ${sidebar_visibility_true} ${sidebar_background}`}
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div className="offcanvas-header" style={{ justifyContent: "center" }}>
        <div className="text-center">
          <Avatar name="Sandeep Chikhale" size={150} round={true} />
        </div>
      </div>
      <div className="offcanvas-body">
        <ul className={`navbar-nav text-center ${spread_content}`}>
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
  );
};

export default Sidebar;
