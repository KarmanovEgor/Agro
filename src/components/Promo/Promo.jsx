import { useLocation } from "react-router-dom";
import { promoContent } from "../constants/constants";
import "./Promo.css";
export default function Promo() {
  const location = useLocation();
  const { className, text, button } = promoContent[location.pathname] || {};
  return (
    <>
      {className && (
        <section className={`promo page__promo ${className}`}>
          <div className="promo__container">
            <div className="promo__logo"></div>
            <div className="promo__content">
              <h1 className="promo__text">{text}</h1>
              <button className="promo__btn">
                {button}
                <div className="promo__arrow"></div>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
