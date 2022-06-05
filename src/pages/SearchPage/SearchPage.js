import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilteredJob from '../../views/Jobs/FilteredJob/FilteredJob';
import JobSearch from '../../components/JobSearch/JobSearch';
import './SearchPage.scss';
import Pagination from '../../components/Pagination/Pagination';

const SearchPage = ({ jobOffers: { jobOffers, loading } }) => {
  const [keywordOption, setKeywordOption] = useState('');
  const [addressOption, setAddressOption] = useState('');
  const [employmentOption, setEmploymentOption] = useState(null);

  const [filteredOffers, setFilteredOffers] = useState(null);

  const filterOffers = () => {
    // change the data type to get ability to use array methods (filter)
    const jobOffersArray = Array.from(jobOffers);
    let jobFilterResults;

    if (
      keywordOption !== '' &&
      addressOption !== '' &&
      employmentOption !== null
    ) {
      jobFilterResults = jobOffersArray.filter((jobOffer) => {
        return (
          (jobOffer.jobTitle
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
            jobOffer.company.name
              .toUpperCase()
              .includes(keywordOption.toUpperCase()) ||
            jobOffer.experienceLevel.experienceLevelDescription
              .toUpperCase()
              .includes(keywordOption.toUpperCase())) &&
          (jobOffer.company.adress?.city
            .toUpperCase()
            .includes(addressOption.toUpperCase()) ||
            jobOffer.company.adress?.country
              .toUpperCase()
              .includes(addressOption.toUpperCase())) &&
          jobOffer.typeOfContract?.typeOfContractDescription
            .toUpperCase()
            .includes(employmentOption.label.toUpperCase())
        );
      });
    } else if (keywordOption !== '' && addressOption !== '') {
      jobFilterResults = jobOffersArray.filter((jobOffer) => {
        return (
          (jobOffer.jobTitle
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
            jobOffer.company.name
              .toUpperCase()
              .includes(keywordOption.toUpperCase()) ||
            jobOffer.experienceLevel.experienceLevelDescription
              .toUpperCase()
              .includes(keywordOption.toUpperCase())) &&
          (jobOffer.company.adress?.city
            .toUpperCase()
            .includes(addressOption.toUpperCase()) ||
            jobOffer.company.adress?.country
              .toUpperCase()
              .includes(addressOption.toUpperCase()))
        );
      });
    } else if (keywordOption !== '' && employmentOption !== null) {
      jobFilterResults = jobOffersArray.filter((jobOffer) => {
        return (
          (jobOffer.jobTitle
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
            jobOffer.company.name
              .toUpperCase()
              .includes(keywordOption.toUpperCase()) ||
            jobOffer.experienceLevel.experienceLevelDescription
              .toUpperCase()
              .includes(keywordOption.toUpperCase())) &&
          jobOffer.typeOfContract?.typeOfContractDescription
            .toUpperCase()
            .includes(employmentOption.label.toUpperCase())
        );
      });
    } else if (addressOption && employmentOption) {
      jobFilterResults = jobOffersArray.filter((jobOffer) => {
        return (
          (jobOffer.company.adress?.city
            .toUpperCase()
            .includes(addressOption.toUpperCase()) ||
            jobOffer.company.adress?.country
              .toUpperCase()
              .includes(addressOption.toUpperCase())) &&
          jobOffer.typeOfContract?.typeOfContractDescription
            .toUpperCase()
            .includes(employmentOption.label.toUpperCase())
        );
      });
    } else if (keywordOption !== '') {
      jobFilterResults = jobOffersArray.filter((jobOffer) => {
        return (
          jobOffer.jobTitle
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
          jobOffer.experienceLevel.experienceLevelDescription
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
          jobOffer.company.name
            .toUpperCase()
            .includes(keywordOption.toUpperCase())
        );
      });
    } else if (addressOption !== '') {
      jobFilterResults = jobOffersArray.filter((jobOffer) => {
        return (
          jobOffer.company.adress.city
            .toUpperCase()
            .includes(addressOption.toUpperCase()) ||
          jobOffer.company.adress.country
            .toUpperCase()
            .includes(addressOption.toUpperCase())
        );
      });
    } else if (employmentOption !== null) {
      jobFilterResults = jobOffersArray.filter((jobOffer) => {
        return jobOffer.typeOfContract?.typeOfContractDescription
          .toUpperCase()
          .includes(employmentOption.label.toUpperCase());
      });
    }
    setFilteredOffers(jobFilterResults);
  };

  return (
    <section className='search-page'>
      <section className='search-page__hero'>
        <JobSearch
          setKeywordOption={setKeywordOption}
          setAddressOption={setAddressOption}
          setEmploymentOption={setEmploymentOption}
          filterOffers={filterOffers}
        />
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
          {filteredOffers && (
            <Pagination
              data={filteredOffers}
              RenderComponent={FilteredJob}
              pageLimit={3}
              dataLimit={5}
            />
          )}

          {!loading && jobOffers !== null && filteredOffers === null && (
            <Pagination
              data={jobOffers}
              RenderComponent={FilteredJob}
              pageLimit={3}
              dataLimit={5}
            />
          )}
        </div>
      </section>
    </section>
  );
};

SearchPage.propTypes = {
  jobOffers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { jobOffers: state.jobOffer };
};

export default connect(mapStateToProps)(SearchPage);
