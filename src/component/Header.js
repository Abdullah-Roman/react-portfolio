import React, { useState } from "react";
import "../stylesheet/header.css";

import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);
  const path = window.location.pathname;
  return (
    <div className="menu">
      {header ? (
        <AiOutlineClose
          onClick={() => setHeader(!header)}
          className="icon position-fixed top-0 end-0"
        />
      ) : (
        <GiHamburgerMenu
          onClick={() => setHeader(!header)}
          className="icon position-fixed end-0"
        />
      )}
      <ul className={`${header ? "show-header" : "hide-header"}`}>
        <li className={`${path === "/" && "active"}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${path === "/project" && "active"}`}>
          <Link to="/project">Project</Link>
        </li>
        <li className={`${path === "/contact" && "active"}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
