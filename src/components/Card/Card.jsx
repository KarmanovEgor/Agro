import { Link } from "react-router-dom";
import "./Card.css";


export default function Card(props) {
  const { lastname, name, emproy, mailPerson, telphone, image } = props;
  return (
    <section className="card">
      <div className="card__container">
        <img className="card__img" src={image} alt={name} />
        <div className="card__block">
          <div className="card__header">
            <h2 className="card__title">{lastname}</h2>
            <h3 className="card__subtitle">{name}</h3>
            <p className="card__subtitle">{emproy}</p>
          </div>
          <Link to={`tel:${telphone}`} className="contacts__links">{telphone}</Link>
          <Link to={`mailto:${mailPerson}`} className="contacts__links">
            {mailPerson}
          </Link>
          <Link to={`mailto: agrowww.mail.ru`} className="contacts__links">
          agrowww.mail.ru
          </Link>
        </div>
      </div>
    </section>
  );
}
