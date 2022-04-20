import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './JobFilters.scss';
import { IoFilter } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaChevronRight } from 'react-icons/fa';
import useCheckDesktopScreen from '../../../hooks/useCheckDesktopScreen';
import Select from 'react-select';

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '1.4rem',
    paddingTop: '15px',
    paddingBottom: '15px',
    color: '#575757',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: 'flex',
    width: '280px',
    backgroundColor: '#f3f3f3',
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    padding: '15px',
    fontSize: '1.4rem',
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

const JobFilters = ({ toggleMobileFilters }) => {
  const [categoryOption, setCategoryOption] = useState();
  const [seniorityLevelOption, setSeniorityLevelOption] = useState();
  const [employmentOption, setEmploymentOption] = useState();

  const changeCategory = (e) => {
    setCategoryOption({ value: e.value, label: e.label });
  };

  const changeSeniorityLevel = (e) => {
    setSeniorityLevelOption({ value: e.value, label: e.label });
  };

  const changeEmploymentOption = (e) => {
    setEmploymentOption({ value: e.value, label: e.label });
  };

  const isDesktopScreen = useCheckDesktopScreen();

  return (
    <div className='job-filters'>
      <div className='job-filters__wrapper'>
        <IoFilter style={{ width: '20px', height: 'auto' }} />
        <span>Filtruj oferty</span>
      </div>
      {isDesktopScreen ? (
        <div className='job-filters__options'>
          <Select
            options={categoriesOptions}
            styles={selectStyles}
            components={{
              IndicatorSeparator: () => null,
            }}
            defaultValue={{ label: 'Kategorie', value: null }}
            value={categoryOption}
            onChange={changeCategory}
          />

          <Select
            options={seniorityLevelOptions}
            styles={selectStyles}
            components={{
              IndicatorSeparator: () => null,
            }}
            defaultValue={{ label: 'Poziom stanowiska', value: null }}
            value={seniorityLevelOption}
            onChange={changeSeniorityLevel}
          />

          <Select
            options={employmentTypeOptions}
            styles={selectStyles}
            components={{
              IndicatorSeparator: () => null,
            }}
            defaultValue={{ label: 'Rodzaj umowy', value: null }}
            value={employmentOption}
            onChange={changeEmploymentOption}
          />
          <button className='job-filters__more-btn'>
            Pozostałe filtry{' '}
            <FaChevronRight
              style={{ width: '15px', height: 'auto', marginLeft: '5px' }}
            />
          </button>
        </div>
      ) : (
        <button className='job-filters__btn' onClick={toggleMobileFilters}>
          Lista filtrów{' '}
          <MdOutlineKeyboardArrowDown
            style={{ width: '15px', height: 'auto', marginLeft: '5px' }}
          />
        </button>
      )}
    </div>
  );
};

JobFilters.propTypes = {
  toggleMobileFilters: PropTypes.func.isRequired,
};

export default JobFilters;
