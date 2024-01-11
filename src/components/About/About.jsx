import { useLocation } from 'react-router-dom';
import { aboutContent } from '../constants/constants';
import './About.css'

export default function About() {
    const location = useLocation();
    const { title, text} = aboutContent[location.pathname] || {};
    return(
<section className='about page__about'>
    <div className="about__container">
        <h2 className='about__title'>{title}</h2>
        <p className='about__text'>{text}</p>
    </div>
</section>
    )
}