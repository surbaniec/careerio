import React, { useState } from 'react';
import './FilteredJob.scss';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FilteredJob = ({ data }) => {
  const [favourite, setFavourite] = useState(false);
  const {
    company,
    logo,
    jobTitle,
    province,
    city,
    salaryFrom,
    salaryTo,
    remoteJob,
  } = data;

  const toggleFavourite = () => {
    setFavourite(!favourite);
  };

  return (
    <Link className='filtered-job__link' to='/ogloszenie'>
      <div className='filtered-job'>
        <div className='filtered-job__details'>
          <div className='filtered-job__img-wrapper'>
            <img className='filtered-job__logo' src={logo} alt={company} />
          </div>
          <div className='filtered-job__info'>
            <h2 className='filtered-job__company-name'>{company}</h2>
            <h3 className='filtered-job__position'>{jobTitle}</h3>
            <div className='filtered-job__address-wrapper'>
              <HiOutlineLocationMarker style={{ marginRight: '5px' }} />
              <span className='filtered-job__address-province'>{province}</span>
              <span>-</span>
              <span className='filtered-job__address-city'>{city}</span>
            </div>
            {remoteJob && (
              <div className='filtered-job__job-type-wrapper'>
                <AiOutlineHome style={{ marginRight: '5px' }} />
                <span>praca zdalna</span>
              </div>
            )}
          </div>
        </div>
        <div className='filtered-job__controls'>
          <p className='filtered-job__controls-salary'>
            <span className='text-blue'>
              {salaryFrom}
              {salaryTo && <> - {salaryTo}</>}
            </span>{' '}
            PLN
          </p>
          <div
            className='filtered-job__controls-favourite'
            onClick={toggleFavourite}
          >
            {favourite ? (
              <>
                {' '}
                <span className='text-blue'>Dodano do ulubionych </span>
                <FiHeart style={{ marginLeft: '5px', color: '#2a95ff' }} />
              </>
            ) : (
              <>
                <span>Dodaj do ulubionych </span>
                <FiHeart style={{ marginLeft: '5px' }} />
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilteredJob;
