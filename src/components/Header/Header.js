import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <Link to='/'>
          <img
            className='header__logo'
            src='./assets/logo-careerio.svg'
            alt='careerio'
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
