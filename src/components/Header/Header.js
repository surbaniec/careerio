import React from 'react';
import Nav from '../Nav/Nav';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <img
          className='header__logo'
          src='./assets/logo-careerio.svg'
          alt='careerio'
        />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
