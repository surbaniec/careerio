import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './JobAd.scss';
import { FiHeart } from 'react-icons/fi';
import { MdChevronRight } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
import { HiFire } from 'react-icons/hi';
import ListItem from '../../components/ListItem/ListItem';
import JobTile from '../../components/JobTile/JobTile';
import { useContext } from 'react';
import JobOffersContext from '../../context/jobOffers/jobOffersContext';
import CompaniesContext from '../../context/companies/companiesContext';

const JobAd = () => {
  const jobOffersContext = useContext(JobOffersContext);
  const companiesContext = useContext(CompaniesContext);
  const jobOffers = jobOffersContext.jobOffers;
  const jobOffersLoading = jobOffersContext.loading;
  const companies = companiesContext.companies;
  const companiesLoading = companiesContext.loading;
  const { jobOfferId } = useParams();

  const [currentJobOffer, setCurrentJobOffer] = useState(null);
  const [currentCompany, setCurrentCompany] = useState(null);

  // job offers to display on sidebar
  const jobOffersToRender = [];

  useEffect(() => {
    if (jobOffersLoading || companiesLoading) {
      jobOffersContext.getJobOffers();
      companiesContext.getCompanies();
    }

    if (jobOffersLoading === false && companiesLoading === false) {
      const resJobOffer = jobOffers.find((jobOffer) => {
        return jobOffer.id === parseInt(jobOfferId);
      });

      const companyName = resJobOffer.companyName;
      const resCompany = companies.find((company) => {
        return company.name === companyName;
      });

      setCurrentJobOffer({
        id: resJobOffer.id,
        experience: resJobOffer.experienceLevelDescription,
        isRemoteRecruitment: resJobOffer.isRemoteRecruitment,
        jobTitle: resJobOffer.jobTitle,
        requirements: resJobOffer.requirements,
        responsibilities: resJobOffer.responsibilities,
        salaryFrom: resJobOffer.salaryFrom,
        salaryTo: resJobOffer.salaryTo,
        typeOfContract: resJobOffer.typeOfContractDescription,
        workingHours: resJobOffer.workingHoursDescription,
      });

      setCurrentCompany({
        companyId: resCompany.id,
        companyName: resCompany.name,
        city: resCompany.city,
        postCode: resCompany.postCode,
        province: resCompany.province,
        street: resCompany.street,
        imageUrl: resCompany.imageUrl,
        benefits: resCompany.benefits,
        companyEmail: resCompany.email,
      });
    }

    //eslint-disable-next-line
  }, [jobOfferId, companies, jobOffers]);

  const toggleFavourite = () => {
    document.querySelector('.heart-icon').classList.toggle('favourite');
  };

  const createJobOffersToRender = () => {
    const jobOffersAmount = jobOffers.length;
    let companyName = '';
    let currentCompany;

    for (let i = jobOffersAmount - 1; i >= jobOffersAmount - 4; i--) {
      if (jobOffers[i].id === parseInt(jobOfferId)) {
        continue;
      }
      companyName = jobOffers[i].companyName;
      currentCompany = companies.find(
        (company) => company.name === companyName
      );

      jobOffersToRender.push({
        jobOfferId: jobOffers[i].id,
        companyName,
        salaryFrom: jobOffers[i].salaryFrom,
        salaryTo: jobOffers[i].salaryTo,
        city: currentCompany.city,
        province: currentCompany.province,
        logo: currentCompany.imageUrl,
        jobTitle: jobOffers[i].jobTitle,
      });
    }
  };

  if (jobOffers !== null && companies !== null) {
    createJobOffersToRender();
  }

  return (
    <section className='job-ad__container'>
      <div className='job-ad__background-wrapper'>
        <img
          className='job-ad__background-img'
          src='../../assets/company-background.png'
          alt=''
        />
      </div>
      <div className='job-ad__wrapper'>
        {currentJobOffer !== null && currentCompany !== null && (
          <>
            <section className='job-ad'>
              <header className='job-ad__header'>
                <div className='job-ad__header-company-info'>
                  <div className='job-ad__header-logo-wrapper'>
                    {currentCompany.imageUrl && (
                      <img
                        src={currentCompany.imageUrl}
                        alt={currentCompany.companyName}
                        className='job-ad__logo'
                      />
                    )}
                  </div>

                  <div className='job-ad__header-company-name-wrapper'>
                    <h2 className='job-ad__company-name'>
                      {currentCompany.companyName}
                    </h2>
                    <span className='job-ad__job-title'>
                      {currentJobOffer.jobTitle}
                    </span>
                  </div>
                </div>
                <div className='job-ad__controls-wrapper'>
                  <Link
                    className='job-ad__link'
                    to={`/profil-firmy/${currentCompany.companyId}`}
                  >
                    <IoPersonOutline style={{ marginRight: '3px' }} />
                    Profil firmy
                  </Link>
                  <div className='job-ad__controls'>
                    <button
                      className='job-ad__btn'
                      onClick={() =>
                        (window.location.href = `mailto:${currentCompany.companyEmail}`)
                      }
                    >
                      Aplikuj teraz <MdChevronRight />
                    </button>
                    <button className='job-ad__btn' onClick={toggleFavourite}>
                      <FiHeart className='heart-icon' />
                    </button>
                  </div>
                </div>
              </header>
              <div className='job-ad__informations'>
                <div className='job-ad__info-wrapper'>
                  <div className='job-ad__info-icon-container'>
                    <HiFire style={{ width: '15px', height: '15px' }} />
                  </div>
                  <span className='job-ad__info'>
                    {currentCompany.street}, <span> </span>
                    {currentCompany.city}, <span> </span>
                    {currentCompany.postCode}, <span> </span>
                    {currentCompany.province}
                  </span>
                </div>
                {currentJobOffer.typeOfContract && (
                  <div className='job-ad__info-wrapper'>
                    <div className='job-ad__info-icon-container'>
                      <HiFire style={{ width: '15px', height: '15px' }} />
                    </div>
                    <span className='job-ad__info'>
                      {currentJobOffer.typeOfContract}
                    </span>
                  </div>
                )}

                {currentJobOffer.experience && (
                  <div className='job-ad__info-wrapper'>
                    <div className='job-ad__info-icon-container'>
                      <HiFire style={{ width: '15px', height: '15px' }} />
                    </div>
                    <span className='job-ad__info'>
                      {currentJobOffer.experience}
                    </span>
                  </div>
                )}

                {currentJobOffer.isRemoteRecruitment && (
                  <div className='job-ad__info-wrapper'>
                    <div className='job-ad__info-icon-container'>
                      <HiFire style={{ width: '15px', height: '15px' }} />
                    </div>
                    <span className='job-ad__info'>rekrutacja zdalna</span>
                  </div>
                )}

                <div className='job-ad__info-wrapper'>
                  <div className='job-ad__info-icon-container'>
                    <HiFire style={{ width: '15px', height: '15px' }} />
                  </div>
                  <span className='job-ad__info'>
                    ważne jeszcze 11 dni - do: 27 marca 2022
                  </span>
                </div>

                {currentJobOffer.workingHours && (
                  <div className='job-ad__info-wrapper'>
                    <div className='job-ad__info-icon-container'>
                      <HiFire style={{ width: '15px', height: '15px' }} />
                    </div>
                    <span className='job-ad__info'>
                      {currentJobOffer.workingHours}
                    </span>
                  </div>
                )}

                <div className='job-ad__info-wrapper'>
                  <div className='job-ad__info-icon-container'>
                    <HiFire style={{ width: '15px', height: '15px' }} />
                  </div>
                  <span className='job-ad__info'>praca zdalna</span>
                </div>
              </div>

              {currentJobOffer.responsibilities && (
                <div className='duties__container'>
                  <h2 className='duties__title'>Twój zakres obowiązków</h2>
                  <div className='duties__wrapper'>
                    {currentJobOffer.responsibilities.map(
                      (responsibility, i) => {
                        return <ListItem key={i} text={responsibility} />;
                      }
                    )}
                  </div>
                </div>
              )}

              {currentJobOffer.requirements && (
                <div className='requirements__container'>
                  <h2 className='requirements__title'>
                    Nasze wymagania wobec Ciebie
                  </h2>
                  <div className='requirements__wrapper'>
                    {currentJobOffer.requirements.map((requirement, i) => {
                      return <ListItem key={i} text={requirement} />;
                    })}
                  </div>
                </div>
              )}

              {currentCompany.benefits && (
                <div className='benefits__container'>
                  <h2 className='benefits__title'>
                    Benefity oferowane przez firmę
                  </h2>
                  <div className='benefits__wrapper'>
                    {currentCompany.benefits.map((benefit, i) => {
                      return <ListItem key={i} text={benefit} />;
                    })}
                  </div>
                </div>
              )}
            </section>

            <aside className='similar-ads'>
              <h2 className='similar-ads__title'>Sprawdź podobne</h2>
              <div className='similar-ads__container'>
                {jobOffersToRender.map((jobOffer, i) => {
                  return (
                    <JobTile
                      key={i}
                      jobOfferId={jobOffer.jobOfferId}
                      companyName={jobOffer.companyName}
                      salaryFrom={jobOffer.salaryFrom}
                      salaryTo={jobOffer.salaryTo}
                      city={jobOffer.city}
                      province={jobOffer.province}
                      logo={jobOffer.logo}
                      jobTitle={jobOffer.jobTitle}
                    />
                  );
                })}
              </div>
            </aside>
          </>
        )}
      </div>
    </section>
  );
};

export default JobAd;
