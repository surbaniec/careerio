import React, { useContext, useEffect, useState } from 'react';
import './Nav.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { SubmenuOpenContext } from '../../App';
import AuthContext from '../../context/auth/authContext';
import {
  BRAND_STORIES,
  DASHBOARD,
  DASHBOARD_ADD_OFFER,
  LOGIN,
  SEARCH_PAGE,
} from '../../Routes/routes';
import toast, { Toaster } from 'react-hot-toast';
// react icons
import { BsBriefcase } from 'react-icons/bs';
import { BiPlusCircle } from 'react-icons/bi';
import { FiMenu, FiMessageSquare, FiUsers } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineCog } from 'react-icons/hi';
import { MdOutlineClose, MdLogout, MdLogin } from 'react-icons/md';
import CompaniesContext from '../../context/companies/companiesContext';

const Nav = () => {
  const authContext = useContext(AuthContext);
  const companiesContext = useContext(CompaniesContext);
  let navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { submenuOpen, setSubmenuOpen } = useContext(SubmenuOpenContext);

  const { isAuthenticated, logout } = authContext;

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

  const handleLogin = () => {
    if (isAuthenticated) {
      // logout current user and clear current company state
      logout();
      companiesContext.clearCurrentCompany();
      companiesContext.clearErrors();
      toast.success('Wylogowano pomyślnie!');
    } else {
      navigate(LOGIN);
    }
  };

  return (
    <>
      <div>
        <Toaster
          toastOptions={{
            className: 'toaster',
          }}
        />
      </div>
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
              to={SEARCH_PAGE}
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
              to={BRAND_STORIES}
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
              to={DASHBOARD}
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
            <BiPlusCircle
              style={{
                color: '#fff',
                width: '25px',
                height: 'auto',
                marginRight: '10px',
              }}
            />
            <NavLink
              to={DASHBOARD_ADD_OFFER}
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
            {isAuthenticated ? (
              <MdLogout
                style={{
                  color: '#fff',
                  width: '25px',
                  height: 'auto',
                  marginRight: '10px',
                }}
              />
            ) : (
              <MdLogin
                style={{
                  color: '#fff',
                  width: '25px',
                  height: 'auto',
                  marginRight: '10px',
                }}
              />
            )}
            <NavLink
              to={LOGIN}
              onClick={handleLogin}
              className={({ isActive }) =>
                isActive
                  ? 'dropdown-menu__link dropdown-menu__link--blue active'
                  : 'dropdown-menu__link dropdown-menu__link--blue'
              }
            >
              {isAuthenticated ? 'Wyloguj się' : 'Zaloguj się'}
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className='nav-desktop'>
        <ul className='nav-desktop__menu'>
          <li className='nav-desktop__item'>
            <BiPlusCircle
              style={{
                color: '#575757',
                width: '20px',
                height: 'auto',
                marginRight: '8px',
              }}
            />
            <NavLink
              to={DASHBOARD_ADD_OFFER}
              className={({ isActive }) =>
                isActive ? 'nav-desktop__link active' : 'nav-desktop__link'
              }
            >
              Dodaj ogłoszenie
            </NavLink>
          </li>
          <li className='nav-desktop__item nav-desktop__item--bg'>
            <NavLink
              to={LOGIN}
              onClick={handleLogin}
              className={({ isActive }) =>
                isActive ? 'nav-desktop__link active' : 'nav-desktop__link'
              }
            >
              {isAuthenticated ? 'Wyloguj się' : 'Zaloguj się'}
            </NavLink>
            {isAuthenticated ? (
              <MdLogout
                style={{
                  color: '#575757',
                  width: '20px',
                  height: 'auto',
                  marginLeft: '10px',
                }}
              />
            ) : (
              <MdLogin
                style={{
                  color: '#575757',
                  width: '20px',
                  height: 'auto',
                  marginLeft: '10px',
                }}
              />
            )}
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
