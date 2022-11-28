import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './DesktopSubmenu.scss';

// react icons
import { BsBriefcase } from 'react-icons/bs';
import { FiMessageSquare, FiUsers } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineCog } from 'react-icons/hi';
import { SubmenuOpenContext } from '../../App';
import {
  BRAND_STORIES,
  DASHBOARD,
  DASHBOARD_COMPANY,
  SEARCH_PAGE,
} from '../../Routes/routes';

const DesktopSubmenu = () => {
  const { submenuOpen, setSubmenuOpen } = useContext(SubmenuOpenContext);

  return (
    <ul className={`desktop-submenu ${submenuOpen ? 'show-submenu' : ''}`}>
      <li className='desktop-submenu__item'>
        <NavLink
          to={SEARCH_PAGE}
          className={({ isActive }) =>
            isActive ? 'desktop-submenu__link active' : 'desktop-submenu__link'
          }
          onClick={() => setSubmenuOpen(!submenuOpen)}
        >
          <BsBriefcase style={iconStyle} />
          Oferty pracy
        </NavLink>
      </li>
      <li className='desktop-submenu__item'>
        <NavLink
          to='/porady'
          className={({ isActive }) =>
            isActive ? 'desktop-submenu__link active' : 'desktop-submenu__link'
          }
          onClick={() => setSubmenuOpen(!submenuOpen)}
        >
          <FiMessageSquare style={iconStyle} />
          Porady
        </NavLink>
      </li>
      <li className='desktop-submenu__item'>
        <NavLink
          to={BRAND_STORIES}
          className={({ isActive }) =>
            isActive ? 'desktop-submenu__link active' : 'desktop-submenu__link'
          }
          onClick={() => setSubmenuOpen(!submenuOpen)}
        >
          <FiUsers style={iconStyle} />
          Profile pracodawców
        </NavLink>
      </li>
      <li className='desktop-submenu__item'>
        <NavLink
          to='/kreator-cv'
          className={({ isActive }) =>
            isActive ? 'desktop-submenu__link active' : 'desktop-submenu__link'
          }
          onClick={() => setSubmenuOpen(!submenuOpen)}
        >
          <CgFileDocument style={iconStyle} />
          Kreator CV
        </NavLink>
      </li>
      <li className='desktop-submenu__item'>
        <NavLink
          to={`/panel${DASHBOARD_COMPANY}`}
          className={({ isActive }) =>
            isActive ? 'desktop-submenu__link active' : 'desktop-submenu__link'
          }
          onClick={() => setSubmenuOpen(!submenuOpen)}
        >
          <HiOutlineCog style={iconStyle} />
          Dla firm
        </NavLink>
      </li>
    </ul>
  );
};

const iconStyle = {
  width: '25px',
  height: 'auto',
  color: '#575757',
  marginRight: '10px',
};

export default DesktopSubmenu;
