import React from 'react';
import './DashboardMenu.scss';
import { NavLink } from 'react-router-dom';
import { DASHBOARD, EMPLOYER_OFFERS, OFFERSFORM } from '../../Routes/routes';
import { MdOutlineSpaceDashboard, MdListAlt, MdAdd } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoReceiptOutline } from 'react-icons/io5';

const DashboardMenu = () => {
  return (
    <aside className='employer-page__sidebar'>
      <ul className='dashboard-menu'>
        <li className='dashboard-menu__item'>
          <NavLink to='' className='dashboard-menu__link'>
            <div className='dashboard-menu__tile'>
              <MdOutlineSpaceDashboard
                style={{ width: '20px', height: 'auto', color: '#fff' }}
              />
              <span>Panel pracodawcy</span>
            </div>
          </NavLink>
        </li>
        <li className='dashboard-menu__item'>
          <NavLink
            to={DASHBOARD}
            className={({ isActive }) =>
              isActive
                ? 'dashboard-menu__link dashboard-menu__link--active'
                : 'dashboard-menu__link'
            }
          >
            <div className='dashboard-menu__tile'>
              <CgProfile
                style={{ width: '20px', height: 'auto', color: '#fff' }}
              />
              <span>Profil pracodawcy</span>
            </div>
          </NavLink>
        </li>
        <li className='dashboard-menu__item'>
          <NavLink
            to={EMPLOYER_OFFERS}
            className={({ isActive }) =>
              isActive
                ? 'dashboard-menu__link dashboard-menu__link--active'
                : 'dashboard-menu__link'
            }
          >
            <div className='dashboard-menu__tile'>
              <MdListAlt
                style={{ width: '20px', height: 'auto', color: '#fff' }}
              />

              <span>Oferty pracy</span>
            </div>
          </NavLink>
        </li>
        <li className='dashboard-menu__item'>
          <NavLink
            to={OFFERSFORM}
            className={({ isActive }) =>
              isActive
                ? 'dashboard-menu__link dashboard-menu__link--active'
                : 'dashboard-menu__link'
            }
          >
            <div className='dashboard-menu__tile'>
              <MdAdd style={{ width: '20px', height: 'auto', color: '#fff' }} />
              <span>Dodaj ofertę</span>
            </div>
          </NavLink>
        </li>
        <li className='dashboard-menu__item'>
          <NavLink to='' className='dashboard-menu__link'>
            <div className='dashboard-menu__tile'>
              <IoReceiptOutline
                style={{ width: '20px', height: 'auto', color: '#fff' }}
              />
              <span>Faktury</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardMenu;
