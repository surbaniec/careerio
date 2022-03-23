import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img
        className='header__logo'
        src='./assets/logo-careerio.svg'
        alt='careerio'
      />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
