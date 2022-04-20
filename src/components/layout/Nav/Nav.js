import React, { useContext, useEffect, useState } from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
// react icons
import { BsBriefcase, BsPlusCircle } from 'react-icons/bs';
import { FiMenu, FiMessageSquare, FiUsers } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineCog } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown, MdOutlineClose } from 'react-icons/md';
import { SubmenuOpenContext } from '../../../App';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { submenuOpen, setSubmenuOpen } = useContext(SubmenuOpenContext);

  // disable background scrolling when mobile menu is active
  useEffect(() => {
    if (navbarOpen) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [navbarOpen]);

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
            <NavLink
              to='/search'
              className={({ isActive }) =>
                isActive ? 'dropdown-menu__link active' : 'dropdown-menu__link'
              }
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Oferty pracy
            </NavLink>
          </li>
          <li
            className='dropdown-menu__item'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FiMessageSquare style={iconStyle} />
            <NavLink
              to='/porady'
              className={({ isActive }) =>
                isActive ? 'dropdown-menu__link active' : 'dropdown-menu__link'
              }
            >
              Porady
            </NavLink>
          </li>
          <li
            className='dropdown-menu__item'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FiUsers style={iconStyle} />
            <NavLink
              to='/pracodawcy'
              className={({ isActive }) =>
                isActive ? 'dropdown-menu__link active' : 'dropdown-menu__link'
              }
            >
              Profile pracodawców
            </NavLink>
          </li>
          <li
            className='dropdown-menu__item'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <CgFileDocument style={iconStyle} />
            <NavLink
              to='/kreator-cv'
              className={({ isActive }) =>
                isActive ? 'dropdown-menu__link active' : 'dropdown-menu__link'
              }
            >
              Kreator CV
            </NavLink>
          </li>
          <li
            className='dropdown-menu__item'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <HiOutlineCog style={iconStyle} />
            <NavLink
              to='/dla-firm'
              className={({ isActive }) =>
                isActive ? 'dropdown-menu__link active' : 'dropdown-menu__link'
              }
            >
              Dla firm
            </NavLink>
          </li>
          <li
            className='dropdown-menu__item dropdown-menu__item--blue'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <BsPlusCircle
              style={{
                color: '#fff',
                width: '25px',
                height: 'auto',
                marginRight: '10px',
              }}
            />
            <NavLink
              to='/dodaj-ogloszenie'
              className={({ isActive }) =>
                isActive
                  ? 'dropdown-menu__link dropdown-menu__link--blue active'
                  : 'dropdown-menu__link dropdown-menu__link--blue'
              }
            >
              Dodaj ogłoszenie
            </NavLink>
          </li>
          <li
            className='dropdown-menu__item dropdown-menu__item--blue'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <MdOutlineKeyboardArrowDown
              style={{
                color: '#fff',
                width: '25px',
                height: 'auto',
                marginRight: '10px',
              }}
            />
            <NavLink
              to='/logowanie'
              className={({ isActive }) =>
                isActive
                  ? 'dropdown-menu__link dropdown-menu__link--blue active'
                  : 'dropdown-menu__link dropdown-menu__link--blue'
              }
            >
              Zaloguj się
            </NavLink>
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
            <NavLink
              to='/dodaj-ogloszenie'
              className={({ isActive }) =>
                isActive ? 'nav-desktop__link active' : 'nav-desktop__link'
              }
            >
              Dodaj ogłoszenie
            </NavLink>
          </li>
          <li className='nav-desktop__item nav-desktop__item--bg'>
            <NavLink
              to='/logowanie'
              className={({ isActive }) =>
                isActive ? 'nav-desktop__link active' : 'nav-desktop__link'
              }
            >
              Zaloguj się
            </NavLink>
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
