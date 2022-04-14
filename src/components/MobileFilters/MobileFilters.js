import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './MobileFilters.scss';
import Select from 'react-select';
import { MdOutlineClose } from 'react-icons/md';

const selectStyles = {
  option: (provided, state) => ({
    ...provided,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: 'flex',
    backgroundColor: '#f3f3f3',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    marginTop: '30px',
    padding: '15px',
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '1.75rem',
    color: '#575757',
    cursor: 'pointer',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const categoriesOptions = [
  { value: 'frontend', label: 'Frontend developer' },
  { value: 'backend', label: 'Backend developer' },
  { value: 'fullstack', label: 'Fullstack developer' },
  { value: 'devops', label: 'DevOps engineer' },
];

const seniorityLevelOptions = [
  { value: 'intern', label: 'Staż' },
  { value: 'junior', label: 'Junior' },
  { value: 'mid', label: 'Mid' },
  { value: 'senior', label: 'Senior' },
];

const employmentTypeOptions = [
  { value: 'b2b', label: 'B2B' },
  { value: 'uop', label: 'Umowa o pracę' },
  { value: 'uz', label: 'Umowa zlecenie' },
];

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
        <Select
          options={categoriesOptions}
          styles={selectStyles}
          defaultValue={{ label: 'Kategorie', value: '' }}
        />

        <Select
          options={seniorityLevelOptions}
          styles={selectStyles}
          defaultValue={{ label: 'Poziom stanowiska', value: '' }}
        />

        <Select
          options={employmentTypeOptions}
          styles={selectStyles}
          defaultValue={{ label: 'Rodzaj umowy', value: '' }}
        />

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
