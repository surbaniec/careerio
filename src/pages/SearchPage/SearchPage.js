import React, { useContext, useState } from 'react';
import FilteredJob from '../../views/Jobs/FilteredJob/FilteredJob';
import JobSearch from '../../components/JobSearch/JobSearch';
import './SearchPage.scss';
import Pagination from '../../components/Pagination/Pagination';
import JobOffersContext from '../../context/jobOffers/jobOffersContext';
import CompaniesContext from '../../context/companies/companiesContext';
import { useEffect } from 'react';

const SearchPage = () => {
  const jobOffersContext = useContext(JobOffersContext);
  const companiesContext = useContext(CompaniesContext);

  const { jobOffers, getJobOffers } = jobOffersContext;
  const { companies, getCompanies } = companiesContext;

  const [jobOffersToRender, setJobOffersToRender] = useState([]);

  const [keywordOption, setKeywordOption] = useState('');
  const [addressOption, setAddressOption] = useState('');
  const [employmentOption, setEmploymentOption] = useState(null);

  const [filteredOffers, setFilteredOffers] = useState(null);

  useEffect(() => {
    getJobOffers();
    getCompanies();
    if (
      jobOffersContext.loading === false &&
      companiesContext.loading === false
    ) {
      createJobOffersToRender();
    }

    // eslint-disable-next-line
  }, [jobOffersContext.loading, companiesContext.loading]);

  const createJobOffersToRender = () => {
    const tempJobOffers = [];
    let companyName = '';
    let currentCompany;

    if (filteredOffers !== null) {
      filteredOffers.forEach((jobOffer) => {
        companyName = jobOffer.companyName;
        currentCompany = companies.find(
          (company) => company.name === companyName
        );

        tempJobOffers.push({
          jobOfferId: jobOffer.id,
          companyName,
          salaryFrom: jobOffer.salaryFrom,
          salaryTo: jobOffer.salaryTo,
          city: currentCompany.city,
          province: currentCompany.province,
          logo: currentCompany.imageUrl,
          jobTitle: jobOffer.jobTitle,
        });
      });
    } else {
      jobOffers.forEach((jobOffer) => {
        companyName = jobOffer.companyName;
        currentCompany = companies.find(
          (company) => company.name === companyName
        );

        tempJobOffers.push({
          jobOfferId: jobOffer.id,
          companyName,
          salaryFrom: jobOffer.salaryFrom,
          salaryTo: jobOffer.salaryTo,
          city: currentCompany.city,
          province: currentCompany.province,
          logo: currentCompany.imageUrl,
          jobTitle: jobOffer.jobTitle,
          typeOfContract: jobOffer.typeOfContractDescription,
          experienceLevel: jobOffer.experienceLevelDescription,
        });
      });
    }

    setJobOffersToRender(tempJobOffers);
  };

  const filterOffers = () => {
    // change the data type to get ability to use array methods (filter)
    let jobFilterResults;

    if (
      keywordOption !== '' &&
      addressOption !== '' &&
      employmentOption !== null
    ) {
      jobFilterResults = jobOffersToRender.filter((jobOffer) => {
        return (
          (jobOffer.jobTitle
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
            jobOffer.companyName
              .toUpperCase()
              .includes(keywordOption.toUpperCase()) ||
            jobOffer.experienceLevel
              .toUpperCase()
              .includes(keywordOption.toUpperCase())) &&
          (jobOffer.city.toUpperCase().includes(addressOption.toUpperCase()) ||
            jobOffer.province
              .toUpperCase()
              .includes(addressOption.toUpperCase())) &&
          jobOffer.typeOfContract
            .toUpperCase()
            .includes(employmentOption.label.toUpperCase())
        );
      });
    } else if (keywordOption !== '' && addressOption !== '') {
      jobFilterResults = jobOffersToRender.filter((jobOffer) => {
        return (
          (jobOffer.jobTitle
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
            jobOffer.companyName
              .toUpperCase()
              .includes(keywordOption.toUpperCase()) ||
            jobOffer.experienceLevel
              .toUpperCase()
              .includes(keywordOption.toUpperCase())) &&
          (jobOffer.city.toUpperCase().includes(addressOption.toUpperCase()) ||
            jobOffer.province
              .toUpperCase()
              .includes(addressOption.toUpperCase()))
        );
      });
    } else if (keywordOption !== '' && employmentOption !== null) {
      jobFilterResults = jobOffersToRender.filter((jobOffer) => {
        return (
          (jobOffer.jobTitle
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
            jobOffer.companyName
              .toUpperCase()
              .includes(keywordOption.toUpperCase()) ||
            jobOffer.experienceLevel
              .toUpperCase()
              .includes(keywordOption.toUpperCase())) &&
          jobOffer.typeOfContract
            .toUpperCase()
            .includes(employmentOption.label.toUpperCase())
        );
      });
    } else if (addressOption && employmentOption) {
      jobFilterResults = jobOffersToRender.filter((jobOffer) => {
        return (
          (jobOffer.city.toUpperCase().includes(addressOption.toUpperCase()) ||
            jobOffer.province
              .toUpperCase()
              .includes(addressOption.toUpperCase())) &&
          jobOffer.typeOfContract
            .toUpperCase()
            .includes(employmentOption.label.toUpperCase())
        );
      });
    } else if (keywordOption !== '') {
      jobFilterResults = jobOffersToRender.filter((jobOffer) => {
        return (
          jobOffer.jobTitle
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
          jobOffer.experienceLevel
            .toUpperCase()
            .includes(keywordOption.toUpperCase()) ||
          jobOffer.companyName
            .toUpperCase()
            .includes(keywordOption.toUpperCase())
        );
      });
    } else if (addressOption !== '') {
      jobFilterResults = jobOffersToRender.filter((jobOffer) => {
        return (
          jobOffer.city.toUpperCase().includes(addressOption.toUpperCase()) ||
          jobOffer.province.toUpperCase().includes(addressOption.toUpperCase())
        );
      });
    } else if (employmentOption !== null) {
      jobFilterResults = jobOffersToRender.filter((jobOffer) => {
        return jobOffer.typeOfContract
          .toUpperCase()
          .includes(employmentOption.label.toUpperCase());
      });
    } else {
      jobFilterResults = jobOffersToRender;
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
          {filteredOffers !== null ? (
            <Pagination
              data={filteredOffers}
              RenderComponent={FilteredJob}
              pageLimit={3}
              dataLimit={5}
            />
          ) : (
            <Pagination
              data={jobOffersToRender}
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

export default SearchPage;
