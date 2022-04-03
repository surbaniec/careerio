import React, { useContext, useState } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
// react icons
import { BsBriefcase, BsPlusCircle } from 'react-icons/bs';
import { FiMenu, FiMessageSquare, FiUsers } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineCog } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown, MdOutlineClose } from 'react-icons/md';
import { SubmenuOpenContext } from '../../App';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { submenuOpen, setSubmenuOpen } = useContext(SubmenuOpenContext);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <>
      <nav className='nav'>
        {navbarOpen ? (
          <MdOutlineClose onClick={handleToggle} style={iconStyle} />
        ) : (
          <FiMenu onClick={handleToggle} style={iconStyle} />
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
                marginRight: '10px',
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
                marginRight: '10px',
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

      <nav className='nav-desktop'>
        <ul className='nav-desktop__menu'>
          <li className='nav-desktop__item'>
            <BsPlusCircle
              style={{
                color: '#575757',
                width: '20px',
                height: 'auto',
                marginRight: '8px',
              }}
            />
            <Link to='/' className='nav-desktop__link'>
              Dodaj ogłoszenie
            </Link>
          </li>
          <li className='nav-desktop__item nav-desktop__item--bg'>
            <Link to='/' className='nav-desktop__link'>
              Zaloguj się
            </Link>
            <MdOutlineKeyboardArrowDown
              style={{
                color: '#575757',
                width: '20px',
                height: 'auto',
                marginLeft: '5px',
              }}
            />
          </li>
          <li
            className='nav-desktop__item'
            onClick={(handleToggle, handleSubmenuToggle)}
          >
            {submenuOpen ? (
              <MdOutlineClose style={iconStyle} />
            ) : (
              <FiMenu style={iconStyle} />
            )}
            <span>MENU</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

const iconStyle = {
  width: '25px',
  height: 'auto',
  color: '#575757',
  marginRight: '10px',
};

export default Nav;
