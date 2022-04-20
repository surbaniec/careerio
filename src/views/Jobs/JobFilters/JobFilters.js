import React from 'react';
import PropTypes from 'prop-types';
import './JobFilters.scss';
import { IoFilter } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const JobFilters = ({ toggleMobileFilters }) => {
  return (
    <div className='job-filters'>
      <div className='job-filters__wrapper'>
        <IoFilter style={{ width: '15px', height: 'auto' }} />
        <span>Filtruj oferty</span>
      </div>
      <button className='job-filters__btn' onClick={toggleMobileFilters}>
        Lista filtrów{' '}
        <MdOutlineKeyboardArrowDown
          style={{ width: '15px', height: 'auto', marginLeft: '5px' }}
        />
      </button>
    </div>
  );
};

JobFilters.propTypes = {
  toggleMobileFilters: PropTypes.func.isRequired,
};

export default JobFilters;
