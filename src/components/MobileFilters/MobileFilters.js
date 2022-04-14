import React from 'react';
import PropTypes from 'prop-types';
import './MobileFilters.scss';
import { MdOutlineClose } from 'react-icons/md';

const MobileFilters = ({ toggleMobileFilters }) => {
  return (
    <div className='mobile-filters'>
      <div className='mobile-filters__header'>
        <h2 className='mobile-filters__title'>Filtry</h2>
        <MdOutlineClose
          onClick={toggleMobileFilters}
          style={{ width: '20px', height: 'auto', cursor: 'pointer' }}
        />
      </div>
      <div className='mobile-filters__body'>
        <select
          className='mobile-filters__select'
          name='job-categories'
          id='job-categories'
        >
          <option value=''>Kategorie</option>
          <option value='frontend'>Frontend developer</option>
          <option value='backend'>Backend developer</option>
          <option value='fullstack'>Fullstack developer</option>
          <option value='devops'>DevOps engineer</option>
        </select>

        <select
          className='mobile-filters__select'
          name='seniority-level'
          id='seniority-level'
        >
          <option value=''>Poziom stanowiska</option>
          <option value='intern'>Staż</option>
          <option value='junior'>Junior</option>
          <option value='mid'>Mid</option>
          <option value='senior'>Senior</option>
        </select>

        <select
          className='mobile-filters__select'
          name='employment-type'
          id='employment-type'
        >
          <option value=''>Rodzaj umowy</option>
          <option value='b2b'>B2B</option>
          <option value='uop'>Umowa o pracę</option>
          <option value='uz'>Umowa zlecenie</option>
        </select>

        <button className='mobile-filters__btn'>Pozostałe filtry</button>
      </div>
      <div className='mobile-filters__footer'>
        <button className='mobile-filters__btn'>Wyczyść filtry</button>
        <button className='mobile-filters__btn btn-blue'>
          Wyświetl oferty
        </button>
      </div>
    </div>
  );
};

MobileFilters.propTypes = {
  toggleMobileFilters: PropTypes.func.isRequired,
};

export default MobileFilters;
