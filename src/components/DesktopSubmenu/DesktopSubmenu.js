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
  const { submenuOpen, setSubmenuOpen } = useContext(SubmenuOpenContext);

  return (
    <ul className={`desktop-submenu ${submenuOpen ? 'show-submenu' : ''}`}>
      <li className='desktop-submenu__item'>
        <BsBriefcase style={iconStyle} />
        <Link to='/' className='desktop-submenu__link'>
          Oferty pracy
        </Link>
      </li>
      <li className='desktop-submenu__item'>
        <FiMessageSquare style={iconStyle} />
        <Link to='/' className='desktop-submenu__link'>
          Porady
        </Link>
      </li>
      <li className='desktop-submenu__item'>
        <FiUsers style={iconStyle} />
        <Link to='/' className='desktop-submenu__link'>
          Profile pracodawców
        </Link>
      </li>
      <li className='desktop-submenu__item'>
        <CgFileDocument style={iconStyle} />
        <Link to='/' className='desktop-submenu__link'>
          Kreator CV
        </Link>
      </li>
      <li className='desktop-submenu__item'>
        <HiOutlineCog style={iconStyle} />
        <Link to='/' className='desktop-submenu__link'>
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
