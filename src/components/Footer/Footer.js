import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <h2 className='footer__title'>Dla kandydatów</h2>
        <Link to='/' className='footer__link'>
          Pomoc
        </Link>
        <Link to='/' className='footer__link'>
          Kalkulator wynagrodzeń
        </Link>
        <Link to='/' className='footer__link'>
          Pracuj w grupie Career.io
        </Link>
        <Link to='/' className='footer__link'>
          Urzędy pracy
        </Link>
        <Link to='/' className='footer__link'>
          Webinarium Career.io
        </Link>
      </div>
      <div className='footer__wrapper'>
        <h2 className='footer__title'>Dla firm</h2>
        <Link to='/' className='footer__link'>
          Dodaj ogłoszenie
        </Link>
        <Link to='/' className='footer__link'>
          Konto pracodawcy
        </Link>
        <Link to='/' className='footer__link'>
          Pomoc dla firm
        </Link>
        <Link to='/' className='footer__link'>
          System rekrutacyjny
        </Link>
      </div>
      <div className='footer__wrapper'>
        <h2 className='footer__title'>Informacje</h2>
        <Link to='/' className='footer__link'>
          Regulamin
        </Link>
        <Link to='/' className='footer__link'>
          Polityka prywatności
        </Link>
        <Link to='/' className='footer__link'>
          Polityka plików cookies
        </Link>
        <Link to='/' className='footer__link'>
          Ustawienia plików cookies
        </Link>
      </div>
      <div className='footer__wrapper'>
        <h2 className='footer__title'>Szybki dostęp</h2>
        <Link to='/' className='footer__link'>
          Oferty pracy
        </Link>
        <Link to='/' className='footer__link'>
          Porady
        </Link>
        <Link to='/' className='footer__link'>
          Profile pracodawców
        </Link>
        <Link to='/' className='footer__link'>
          Kreator CV
        </Link>
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

        <p className='footer__copyright'>Copyright© 2022 Career.io</p>
      </div>
    </footer>
  );
};

export default Footer;
