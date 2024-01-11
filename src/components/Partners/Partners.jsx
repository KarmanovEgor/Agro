import './Partners.css'
import { partnersContent, partnersData } from '../constants/constants'
import { Link, useLocation } from 'react-router-dom'

export default function Partners() {
    const location = useLocation();
    const { title } = partnersContent[location.pathname] || {};
    return(
        <section className='partners page__partners'>
        <div className="partners__container">
            <h2 className='partners__title'>{title}</h2>
            <div className="partners__grid">
                {partnersData.map((partner, index) => (
                    <div key={index} className="partners__grid_item">
                        <Link to={partner.link} className='partners__link' title={partner.alt}>
                            <img className='partners__img' src={partner.image} alt={partner.alt} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}