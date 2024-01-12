import React, { useState } from "react";
import Burger from "../Burger/Burger";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [activeBurger, setActiveBurger] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  function handleLanguageChange(event) {
    const selectedLanguages = event.target.value;
    let languageCode = "";
    
    if (selectedLanguages === "russian") {
      languageCode = "ru";
    } else if (selectedLanguages === "english") {
      languageCode = "en";
    } else if (selectedLanguages === "china") {
      languageCode = "zh";
    }
    
    if (languageCode) {
      let currentPath = location.pathname;
      let newPath;
    
      // Удаляем текущий язык из пути, если он уже есть
      if (currentPath.startsWith("/ru/") || currentPath.startsWith("/en/") || currentPath.startsWith("/zh/")) {
        currentPath = currentPath.replace(/^(\/ru|\/en|\/zh)\//, "/");
      }
    
      // Формируем новый путь с выбранным языком в зависимости от текущего пути
      if (currentPath.startsWith("/documents")) {
        newPath = `/documents/${languageCode}`;
      } else if (currentPath.startsWith("/contacts")) {
        newPath = `/contacts/${languageCode}`;
      } else {
        newPath = `/${languageCode}`;
      }
    
      navigate(newPath); // Перенаправляем на новый путь с выбранным языком
     
    }
  }

  return (
    <header
      className={`header page__header ${activeBurger ? "header_active" : ""} ${
        location.pathname === "/" ? "header_theme_blue" : "header_theme_black"
      }`}
    >
      <div className="header__container">
        <Link to={"/"} className="header__link-home"></Link>
        <>
          <Burger
            activeBurger={activeBurger}
            handleClickBurger={handleClickBurger}
          />
        </>
        <form className="header__language">
          <select
            name="lang"
            id="language-select"
            onChange={handleLanguageChange}
            className="header__select"
          >
            <option value="russian">Ru</option>
            <option value="english">En</option>
            <option value="china">中国</option>
          </select>
        </form>
      </div>
    </header>
  );
}