import {  useLocation } from "react-router-dom";
import "./Footer.css";
import { footerContent } from "../constants/constants";
import Dev from "../Develops/Develops";



export default function Footer() {
  const location = useLocation();
  const { title, text, name, job, city } = footerContent[location.pathname] || {};

  return (
    <footer className="footer page__footer">
      <div className="footer__container">
        <div className="footer__logo"></div>
        <div className="footer__info-list">
        <p className="footer__info">{title}</p>
        <p className="footer__info">{city}</p>
        <p className="footer__info">ИНН: 2225162646 КПП: 2221501001</p>
        </div>
        <div className="footer__block_contact">
          <p className="footer__text">{text}:</p>
          <p className="footer__text footer__text-border">+7 913 224 1789</p>
          <p className="footer__text"> {job}</p>
          <p className="footer__text"> {name}</p>
        </div>
       <Dev />
      </div>
    </footer>
  );
}
