import React, { useState } from 'react';
import FilteredJob from '../../views/Jobs/FilteredJob/FilteredJob';
import JobFilters from '../../views/Jobs/JobFilters/JobFilters';
import JobSearch from '../../components/JobSearch/JobSearch';
import MobileFilters from '../../views/Jobs/MobileJobFilters/MobileFilters';
import './SearchPage.scss';
import { jobAdvertisements } from '../../data';
import Pagination from '../../components/Pagination/Pagination';

const SearchPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  return (
    <section className='search-page'>
      <section className='search-page__hero'>
        <JobSearch />
      </section>
      <section className='search-page__filters'>
        <JobFilters toggleMobileFilters={toggleMobileFilters} />
        {mobileFiltersOpen ? (
          <MobileFilters toggleMobileFilters={toggleMobileFilters} />
        ) : null}
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
          <Pagination
            data={jobAdvertisements}
            RenderComponent={FilteredJob}
            pageLimit={4}
            dataLimit={3}
          />
        </div>
      </section>
    </section>
  );
};

export default SearchPage;
