import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import classnames from "classnames";

export default function Navbar() {
  //Hamburger menu state
  const [hamburgerState, setHamburgerState] = useState(false);

  function handleHamburgerClick() {
    setHamburgerState(!hamburgerState);
  }

  function handleMenuClick() {
    setHamburgerState(false);
  }

  return (
    <div className={classnames(style.linkContainer, {[style.linkContainerShowMenu]: hamburgerState})}>
      <ul id={classnames(style.navigationList)}>
        <div className={style.hamburgerMenu} onClick={handleHamburgerClick}>
          <span
            className={`${style.hamburgerLine} ${
              hamburgerState ? style.active : ""
            }`}
          ></span>
          <span
            className={`${style.hamburgerLine} ${
              hamburgerState ? style.active : ""
            }`}
          ></span>
          <span
            className={`${style.hamburgerLine} ${
              hamburgerState ? style.active : ""
            }`}
          ></span>
        </div>
        <Link to="/projects" className={style.linkStyle}>
          <li
            className={classnames(style.linkListItem, {
              [style.linkListItemVisible]: hamburgerState,
            })}
            onClick={handleMenuClick}
          >
            Projects
          </li>
        </Link>
        <Link to="/about" className={style.linkStyle}>
          <li
            className={classnames(style.linkListItem, {
              [style.linkListItemVisible]: hamburgerState,
            })}
            onClick={handleMenuClick}
          >
            About
          </li>
        </Link>
        <Link to="/contact" className={style.linkStyle}>
          <li
            className={classnames(style.linkListItem, {
              [style.linkListItemVisible]: hamburgerState,
            })}
            onClick={handleMenuClick}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}
