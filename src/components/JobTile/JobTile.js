import React from 'react';
import PropTypes from 'prop-types';
import './JobTile.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdChevronRight, MdOutlineClose } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const JobTile = ({
  company,
  salaryFrom,
  salaryTo,
  province,
  city,
  logo,
  jobTitle,
}) => {
  const toggleFavourite = (e) => {
    e.stopPropagation();
    e.target.classList.toggle('favourite');
  };

  return (
    <div className='job-tile'>
      <div className='job-tile__info'>
        <div className='job-tile__img-wrapper'>
          <img className='job-tile__logo' src={logo} alt={company} />
        </div>
        <div className='job-tile__desc-wrapper'>
          <h2 className='job-tile__company-name'>{company}</h2>
          <h3 className='job-tile__position'>{jobTitle}</h3>
          <div className='job-tile__salary-wrapper'>
            <span className='job-tile__salary-from'>{salaryFrom}</span>

            {salaryTo && (
              <>
                {' '}
                <span> - </span>
                <span className='job-tile__salary-to'>{salaryTo}</span>
              </>
            )}
            <span className='job-tile__salary-currency'> PLN</span>
          </div>
          <div className='job-tile__address-wrapper'>
            <HiOutlineLocationMarker style={{ marginRight: '5px' }} />
            <span className='job-tile__address-province'>{province}</span>
            <span>, </span>
            <span className='job-tile__address-city'>{city}</span>
          </div>
        </div>
      </div>

      <div className='job-tile__controls'>
        <Link to='/ogloszenie' className='job-tile__btn'>
          Aplikuj teraz{' '}
          <MdChevronRight style={{ width: '15px', height: '15px' }} />
        </Link>
        <button className='job-tile__btn' onClick={toggleFavourite}>
          <FiHeart className='heart-icon' />
        </button>
        <button className='job-tile__btn'>
          <MdOutlineClose />
        </button>
      </div>
    </div>
  );
};

JobTile.propTypes = {
  company: PropTypes.string.isRequired,
  salaryFrom: PropTypes.number.isRequired,
  salaryTo: PropTypes.number,
  province: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};

export default JobTile;
