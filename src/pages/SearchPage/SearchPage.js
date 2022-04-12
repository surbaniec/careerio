import React from 'react';
import JobFilters from '../../components/JobFilters/JobFilters';
import JobSearch from '../../components/JobSearch/JobSearch';
import './SearchPage.scss';

const SearchPage = () => {
  return (
    <section className='search-page'>
      <div className='search-page__hero'>
        <JobSearch />
      </div>
      <div className='search-page__filters'>
        <JobFilters />
      </div>
    </section>
  );
};

export default SearchPage;
