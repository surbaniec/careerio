import React from 'react';
import './JobFilters.scss';
import { IoFilter } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const JobFilters = () => {
  return (
    <div className='job-filters'>
      <div className='job-filters__wrapper'>
        <IoFilter style={{ width: '15px', height: 'auto' }} />
        <span>Filtruj oferty</span>
      </div>
      <button className='job-filters__btn'>
        Lista filtrów{' '}
        <MdOutlineKeyboardArrowDown
          style={{ width: '15px', height: 'auto', marginLeft: '5px' }}
        />
      </button>
    </div>
  );
};

export default JobFilters;
