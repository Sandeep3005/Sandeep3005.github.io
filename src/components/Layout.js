import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import * as styles from "../styles/layout.module.css";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="d-md-none set-background-color">
        <Navbar />
      </div>
      <div className="d-none d-md-block">
        <Sidebar />
      </div>
      <div
        style={{ marginLeft: 0 }}
        className={`container ${styles.margin_top_5}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
