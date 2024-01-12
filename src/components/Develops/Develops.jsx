import { useState } from "react";
import "./Develops.css";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dev() {
 const [showIconsKarmanov, setShowIconsKarmanov] = useState(false);
  const [showIconsGolikova, setShowIconsGolikova] = useState(false);

  const toggleIconsKarmanov = () => {
    setShowIconsKarmanov(!showIconsKarmanov);
    setShowIconsGolikova(false); // Скрыть иконки для "Design Golikova"
  };

  const toggleIconsGolikova = () => {
    setShowIconsGolikova(!showIconsGolikova);
    setShowIconsKarmanov(false); // Скрыть иконки для "Developer Karmanov"
  };
  const phoneNumber1 = "+79384668988";
  const phoneNumber2 = "+79836084033";
  return (
    <section className="dev">
    <div className="dev__developers">
      <div className="dev__developer">
        <p className="dev__hoverable" onClick={toggleIconsKarmanov}>Developer Karmanov</p>
        {showIconsKarmanov && (
          <div className="dev__links">
            <Link to={`https://t.me/${phoneNumber1}`} className="dev__link">
              <FaTelegram /> Go to Telegram
            </Link>
            <Link
              to={`https://wa.me/${phoneNumber1}?text=Здравствуйте,пишу с вашего сайта Agro`}
              className="dev__link"
            >
              <FaWhatsapp /> Go to WhatsApp
            </Link>
          </div>
        )}
      </div>
      <div className="dev__developer">
        <p className="dev__hoverable" onClick={toggleIconsGolikova}>Design Golikova</p>
        {showIconsGolikova && (
          <div className="dev__links">
            <Link to={`https://t.me/${phoneNumber2}`} className="dev__link">
              <FaTelegram /> Go to Telegram
            </Link>
            <Link
              to={`https://wa.me/${phoneNumber2}?text=Здравствуйте,пишу с вашего сайта Agro`}
              className="dev__link"
            >
              <FaWhatsapp /> Go to WhatsApp
            </Link>
          </div>
        )}
      </div>
    </div>
  </section>
  );
}
