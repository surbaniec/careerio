import React from 'react';
import './JobSearch.scss';
import { IoSearch } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';

const JobSearch = () => {
  return (
    <form className='job-search'>
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
          <select
            className='job-search__input job-search__input--select'
            name='job-type'
          >
            <option value=''>umowa</option>
            <option value='b2b'>B2B</option>
            <option value='uop'>umowa o pracę</option>
            <option value='uz'>umowa zlecenie</option>
          </select>
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
