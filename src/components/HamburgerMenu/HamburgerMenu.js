import React, { useState } from 'react';
import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';
// react icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { BsBriefcase, BsPlusCircle } from 'react-icons/bs';
import { FiMessageSquare, FiUsers } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineCog } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const HamburgerMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className='nav'>
      {navbarOpen ? (
        <FaTimes onClick={handleToggle} style={iconStyle} />
      ) : (
        <GiHamburgerMenu onClick={handleToggle} style={iconStyle} />
      )}
      <span onClick={handleToggle}>MENU</span>
      <ul className={`dropdown-menu ${navbarOpen ? 'show-menu' : ''}`}>
        <li className='dropdown-menu__item'>
          <BsBriefcase style={iconStyle} />
          <Link to='/' className='dropdown-menu__link'>
            Oferty pracy
          </Link>
        </li>
        <li className='dropdown-menu__item'>
          <FiMessageSquare style={iconStyle} />
          <Link to='/' className='dropdown-menu__link'>
            Porady
          </Link>
        </li>
        <li className='dropdown-menu__item'>
          <FiUsers style={iconStyle} />
          <Link to='/' className='dropdown-menu__link'>
            Profile pracodawców
          </Link>
        </li>
        <li className='dropdown-menu__item'>
          <CgFileDocument style={iconStyle} />
          <Link to='/' className='dropdown-menu__link'>
            Kreator CV
          </Link>
        </li>
        <li className='dropdown-menu__item'>
          <HiOutlineCog style={iconStyle} />
          <Link to='/' className='dropdown-menu__link'>
            Dla firm
          </Link>
        </li>
        <li className='dropdown-menu__item dropdown-menu__item--blue'>
          <BsPlusCircle
            style={{
              color: '#fff',
              width: '25px',
              height: 'auto',
              marginRight: '15px',
            }}
          />
          <Link
            to='/'
            className='dropdown-menu__link dropdown-menu__link--blue'
          >
            Dodaj ogłoszenie
          </Link>
        </li>
        <li className='dropdown-menu__item dropdown-menu__item--blue'>
          <MdOutlineKeyboardArrowDown
            style={{
              color: '#fff',
              width: '25px',
              height: 'auto',
              marginRight: '15px',
            }}
          />
          <Link
            to='/'
            className='dropdown-menu__link dropdown-menu__link--blue'
          >
            Zaloguj się
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const iconStyle = {
  width: '25px',
  height: 'auto',
  color: '#575757',
  marginRight: '15px',
};

export default HamburgerMenu;
