import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { DASHBOARD, EMPLOYER_OFFERS, OFFERSFORM } from '../../Routes/routes';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__wrapper'>
          <h2 className='footer__title'>Dla kandydatów</h2>
          <NavLink to='/' className='footer__link'>
            Pomoc
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Kalkulator wynagrodzeń
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Pracuj w grupie Career.io
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Urzędy pracy
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Webinarium Career.io
          </NavLink>
        </div>
        <div className='footer__wrapper'>
          <h2 className='footer__title'>Dla firm</h2>
          <NavLink to={OFFERSFORM} className='footer__link'>
            Dodaj ogłoszenie
          </NavLink>
          <NavLink to={DASHBOARD} className='footer__link'>
            Konto pracodawcy
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Pomoc dla firm
          </NavLink>
          <NavLink to='/' className='footer__link'>
            System rekrutacyjny
          </NavLink>
        </div>
        <div className='footer__wrapper'>
          <h2 className='footer__title'>Informacje</h2>
          <NavLink to='/' className='footer__link'>
            Regulamin
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Polityka prywatności
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Polityka plików cookies
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Ustawienia plików cookies
          </NavLink>
        </div>
        <div className='footer__wrapper'>
          <h2 className='footer__title'>Szybki dostęp</h2>
          <NavLink to={EMPLOYER_OFFERS} className='footer__link'>
            Oferty pracy
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Porady
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Profile pracodawców
          </NavLink>
          <NavLink to='/' className='footer__link'>
            Kreator CV
          </NavLink>
        </div>
        <div className='footer__wrapper'>
          <h2 className='footer__title'>Pobierz aplikacje</h2>
          <img
            className='footer__img'
            src='../../assets/application.png'
            alt='application'
          />
        </div>
        <div className='footer__wrapper'>
          <Link to='/' className='footer__link'>
            <img
              className='footer__logo'
              src='../../assets/logo-careerio.svg'
              alt='careerio'
            />
          </Link>

          <p className='footer__copyright'>
            &copy; {new Date().getFullYear()} Career.io
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
