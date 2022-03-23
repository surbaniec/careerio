import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
  return (
    <nav className='nav'>
      <GiHamburgerMenu
        style={{ width: '30px', height: '25px', color: '#575757' }}
      />
      <span>MENU</span>
    </nav>
  );
};

export default HamburgerMenu;
