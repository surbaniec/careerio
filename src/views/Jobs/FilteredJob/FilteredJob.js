import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FilteredJob.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const FilteredJob = ({ data }) => {
  const navigate = useNavigate();

  const {
    city,
    companyName,
    jobOfferId,
    jobTitle,
    logo,
    province,
    salaryFrom,
    salaryTo,
  } = data;

  const handleRedirect = () => {
    navigate(`/ogloszenie/${jobOfferId}`);
  };

  return (
    <div className='filtered-job'>
      <div className='filtered-job__details' onClick={handleRedirect}>
        <div className='filtered-job__img-wrapper'>
          <img className='filtered-job__logo' src={logo} alt={companyName} />
        </div>
        <div className='filtered-job__info'>
          <h2 className='filtered-job__company-name'>{companyName}</h2>
          <h3 className='filtered-job__position'>{jobTitle}</h3>
          <div className='filtered-job__address-wrapper'>
            <HiOutlineLocationMarker style={{ marginRight: '5px' }} />
            <span className='filtered-job__address-province'>{province}</span>
            <span>-</span>
            <span className='filtered-job__address-city'>{city}</span>
          </div>
          <div className='filtered-job__job-type-wrapper'>
            <AiOutlineHome style={{ marginRight: '5px' }} />
            <span>praca zdalna</span>
          </div>
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
      </div>
    </div>
  );
};

FilteredJob.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FilteredJob;
