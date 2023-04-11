import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default function Navbar({navProps}) {
  //Hamburger menu state
  console.log(navProps)
  

  function handleHamburgerClick() {
    navProps.setHamburgerState(!navProps.hamburgerState);
  }

  function handleMenuClick() {
    navProps.setHamburgerState(false);
  }

  return (
    <div className={classnames(style.linkContainer, {[style.linkContainerShowMenu]: navProps.hamburgerState}, {[style.linkContainerHideMenu]: !navProps.hamburgerState})}>
      <ul id={classnames(style.navigationList)}>
        <div className={style.hamburgerMenu} onClick={handleHamburgerClick}>
          <span
            className={`${style.hamburgerLine} ${
              navProps.hamburgerState ? style.active : ""
            }`}
          ></span>
          <span
            className={`${style.hamburgerLine} ${
              navProps.hamburgerState ? style.active : ""
            }`}
          ></span>
          <span
            className={`${style.hamburgerLine} ${
              navProps.hamburgerState ? style.active : ""
            }`}
          ></span>
        </div>
        <Link to="/projects" className={style.linkStyle}>
          <li
            className={classnames(style.linkListItem, {
              [style.linkListItemVisible]: navProps.hamburgerState,
            })}
            onClick={handleMenuClick}
          >
            Projects
          </li>
        </Link>
        <Link to="/about" className={style.linkStyle}>
          <li
            className={classnames(style.linkListItem, {
              [style.linkListItemVisible]: navProps.hamburgerState,
            })}
            onClick={handleMenuClick}
          >
            About
          </li>
        </Link>
        <Link to="/contact" className={style.linkStyle}>
          <li
            className={classnames(style.linkListItem, {
              [style.linkListItemVisible]: navProps.hamburgerState,
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
