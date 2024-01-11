import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhone, FaTelegram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import "./Contacts.css";
import { contactsContent } from "../constants/constants";

export default function Contacts() {
  const phoneNumber = "+79132241789";
  const email = "agrowww@mail.ru";
  const location = useLocation();
  const { mail, phone, wahtsapp, telega } = contactsContent[location.pathname] || {};

  return (
    <>
      <section className="contacts page__contacts">
        <div className="contacts__container">
          <Link to={`tel:${phoneNumber}`} className="contacts__links"><FaPhone /> {phone}</Link>
          <Link to={`https://t.me/${phoneNumber}`} className="contacts__links"><FaTelegram /> {telega}</Link>
          <Link to={`https://wa.me/${phoneNumber}?text=Здравствуйте,пишу с вашего сайта Agro`} className="contacts__links"><FaWhatsapp /> {wahtsapp}</Link>
          <Link to={`mailto:${email}`} className="contacts__links"><FaEnvelope /> {mail}</Link>
        </div>
      </section>
    </>
  );
}

