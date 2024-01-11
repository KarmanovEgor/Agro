import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Burger.css";
import { headerContent } from "../constants/constants";

const Burger = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const { pathname } = useLocation();
  const location = useLocation();
  const { textDoc, textCont } = headerContent[location.pathname] || {};

  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  return (
    <nav className="header__navigation">
      <ul
        className={`header__lists ${
          activeBurger ? "header__lists_active " : ""
        }`}
      >
            <li className="header__links ">
              <Link
                to={"/documents"}
                className={`header__link ${
                  pathname === "/documents" ? "header__link_active" : ""
                }`}
              >
               {textDoc} 
              </Link>
            </li>
            <li className="header__links ">
              <Link
                to={"/contacts"}
                className={`header__link ${
                  pathname === "/contacts" ? "header__link_active" : ""
                }`}
              >
                {textCont}
              </Link>
            </li>
          </ul>
      <div
        className={`header__overlay ${
          activeBurger ? "header__overlay-active" : ""
        }`}
      ></div>
      <div
        onClick={handleClickBurger}
        className={`burger header__button${
          activeBurger ? " burger_active" : ""
        }`}
      >
        <div
          className={`burger-line ${activeBurger ? " burger-first-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-second-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-third-line" : ""}`}
        ></div>
      </div>
    </nav>
  );
};

export default Burger;
