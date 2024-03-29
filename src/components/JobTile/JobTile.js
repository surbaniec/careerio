import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './JobTile.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdChevronRight, MdOutlineClose } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LocalStorageUserContext from '../../context/localStorageUser/localStorageUserContext';

const JobTile = ({
  jobOfferId,
  companyName,
  salaryFrom,
  salaryTo,
  province,
  city,
  logo,
  jobTitle,
}) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    LocalStorageUserContext
  );

  const heartIcon = useRef(null);

  useEffect(() => {
    const tempItem = favourites.find((i) => i.jobOfferId === jobOfferId);

    if (tempItem) {
      heartIcon.current.classList.add('favourite');
    } else {
      heartIcon.current.classList.remove('favourite');
    }
    //eslint-disable-next-line
  }, [favourites]);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    heartIcon.current.classList.toggle('favourite');
    if (heartIcon.current.classList.contains('favourite')) {
      addToFavourites(
        jobOfferId,
        companyName,
        salaryFrom,
        salaryTo,
        province,
        city,
        logo,
        jobTitle
      );
    } else {
      removeFromFavourites(jobOfferId);
    }
  };

  // const handleRemove = (e) => {
  //   e.stopPropagation();
  //   e.target.parentElement.parentElement.remove();
  // };

  return (
    <div className='job-tile'>
      <div className='job-tile__info'>
        <div className='job-tile__img-wrapper'>
          <img className='job-tile__logo' src={logo} alt={companyName} />
        </div>
        <div className='job-tile__desc-wrapper'>
          <h2 className='job-tile__company-name'>{companyName}</h2>
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
            <HiOutlineLocationMarker
              style={{ marginRight: '5px', width: '12px', height: 'auto' }}
            />
            <span className='job-tile__address-province'>{province}</span>
            <span className='job-tile__address-divider'>, </span>
            <span className='job-tile__address-city'>{city}</span>
          </div>
        </div>
      </div>

      <div className='job-tile__controls'>
        <Link to={`/ogloszenie/${jobOfferId}`} className='job-tile__btn'>
          Aplikuj teraz{' '}
          <MdChevronRight style={{ width: '15px', height: '15px' }} />
        </Link>
        <button
          className='job-tile__btn'
          onClick={toggleFavourite}
          ref={heartIcon}
        >
          <FiHeart
            className='heart-icon'
            style={{ width: '15px', height: '15px' }}
          />
        </button>
        {/* <button className='job-tile__btn' onClick={handleRemove}>
          <MdOutlineClose
            style={{ width: '15px', height: '15px', pointerEvents: 'none' }}
          />
        </button> */}
      </div>
    </div>
  );
};

JobTile.propTypes = {
  jobOfferId: PropTypes.number,
  companyName: PropTypes.string.isRequired,
  salaryFrom: PropTypes.number.isRequired,
  salaryTo: PropTypes.number,
  province: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};

export default JobTile;
