import React from 'react';
import FilteredJob from '../../components/FilteredJob/FilteredJob';
import JobFilters from '../../components/JobFilters/JobFilters';
import JobSearch from '../../components/JobSearch/JobSearch';
import './SearchPage.scss';

const SearchPage = () => {
  return (
    <section className='search-page'>
      <section className='search-page__hero'>
        <JobSearch />
      </section>
      <section className='search-page__filters'>
        <JobFilters />
      </section>
      <section className='search-page__recommended'>
        <h2 className='search-page__recommended-title'>
          Oferty pracy rekomendowane dla Ciebie
        </h2>
        <p className='search-page__recommended-text'>
          Na podstawie Twojej aktywności wybraliśmy oferty dopasowane do Twoich
          oczekiwań.
        </p>
        <div className='search-page__recommended-jobs'>
          <FilteredJob />
          <FilteredJob />
          <FilteredJob />
          <FilteredJob />
          <FilteredJob />
        </div>
      </section>
    </section>
  );
};

export default SearchPage;
