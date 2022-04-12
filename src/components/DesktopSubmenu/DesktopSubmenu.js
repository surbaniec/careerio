import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './DesktopSubmenu.scss';

// react icons
import { BsBriefcase } from 'react-icons/bs';
import { FiMessageSquare, FiUsers } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineCog } from 'react-icons/hi';
import { SubmenuOpenContext } from '../../App';

const DesktopSubmenu = () => {
  const { submenuOpen } = useContext(SubmenuOpenContext);

  return (
    <ul className={`desktop-submenu ${submenuOpen ? 'show-submenu' : ''}`}>
      <li className='desktop-submenu__item'>
        <Link to='/search' className='desktop-submenu__link'>
          <BsBriefcase style={iconStyle} />
          Oferty pracy
        </Link>
      </li>
      <li className='desktop-submenu__item'>
        <Link to='/' className='desktop-submenu__link'>
          <FiMessageSquare style={iconStyle} />
          Porady
        </Link>
      </li>
      <li className='desktop-submenu__item'>
        <Link to='/' className='desktop-submenu__link'>
          <FiUsers style={iconStyle} />
          Profile pracodawców
        </Link>
      </li>
      <li className='desktop-submenu__item'>
        <Link to='/' className='desktop-submenu__link'>
          <CgFileDocument style={iconStyle} />
          Kreator CV
        </Link>
      </li>
      <li className='desktop-submenu__item'>
        <Link to='/' className='desktop-submenu__link'>
          <HiOutlineCog style={iconStyle} />
          Dla firm
        </Link>
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
