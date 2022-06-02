import React, { useState } from 'react';
import './JobSearch.scss';
import { IoSearch } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import Select from 'react-select';

const employmentTypeOptions = [
  { value: 'b2b', label: 'B2B' },
  { value: 'uop', label: 'Umowa o pracę' },
  { value: 'uz', label: 'Umowa zlecenie' },
];

const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: '1.4rem',
    paddingTop: '15px',
    paddingBottom: '15px',
    color: '#575757',

    '@media(min-width: 768px)': {
      fontSize: '1.6rem',
    },
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: 'flex',
    height: '60px',
    backgroundColor: '#fafafa',
    border: '1px solid #f3f3f3',
    borderRadius: '10px',
    padding: '10px',
    marginRight: '5px',
    fontSize: '1.4rem',
    lineHeight: '1.75rem',
    color: '#575757',
    cursor: 'pointer',

    '@media(min-width: 768px)': {
      fontSize: '1.8rem',
      width: '250px',
    },

    '@media(min-width: 1200px)': {
      fontSize: '1.6rem',
      width: '200px',
    },
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = '#575757';

    return { ...provided, opacity, transition, color };
  },
};

const JobSearch = () => {
  const [employmentOption, setEmploymentOption] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const changeEmploymentOption = (e) => {
    setEmploymentOption({ value: e.value, label: e.label });
  };

  return (
    <form className='job-search' onSubmit={handleSubmit}>
      <ul>
        <li>
          <h2 className='job-search__title'>
            <IoSearch style={{ marginRight: '10px', fontSize: '20px' }} />
            Wyszukiwarka ofert
          </h2>
        </li>
        <li>
          <input
            className='job-search__input'
            name='job-keyword'
            type='text'
            placeholder='stanowisko, firma, slowo kluczowe...'
          />
        </li>
        <li>
          <input
            className='job-search__input'
            name='job-address'
            type='text'
            placeholder='miejscowość, województwo lub kraj...'
          />
        </li>
        <li>
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
          <button className='job-search__input job-search__btn' type='submit'>
            Szukaj
            <FaChevronRight style={{ marginLeft: '10px' }} />
          </button>
        </li>
      </ul>
    </form>
  );
};

export default JobSearch;
