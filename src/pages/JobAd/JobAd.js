import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './JobAd.scss';
import { FiHeart } from 'react-icons/fi';
import { MdChevronRight, MdOutlineClose } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
import { HiFire } from 'react-icons/hi';
import ListItem from '../../components/ListItem/ListItem';
import JobTile from '../../components/JobTile/JobTile';

const JobAd = ({ jobOffers: { jobOffers, loading } }) => {
  const { jobOfferId } = useParams();
  const [selectedJobOffer, setSelectedJobOffer] = useState(null);

  useEffect(() => {
    if (loading === false) {
      setSelectedJobOffer(
        jobOffers.find((jobOffer) => jobOffer.id === parseInt(jobOfferId))
      );
    }
  }, [loading, jobOfferId]);

  const toggleFavourite = () => {
    document.querySelector('.heart-icon').classList.toggle('favourite');
  };

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
        {!loading && selectedJobOffer !== null && (
          <>
            <section className='job-ad'>
              <header className='job-ad__header'>
                <div className='job-ad__header-company-info'>
                  <img
                    src={selectedJobOffer.company.imageUrl}
                    alt={selectedJobOffer.company.name}
                    className='job-ad__logo'
                  />
                  <div className='job-ad__header-company-name-wrapper'>
                    <h2 className='job-ad__company-name'>
                      {selectedJobOffer.company.name}
                    </h2>
                    <span className='job-ad__job-title'>
                      {selectedJobOffer.jobTitle}
                    </span>
                  </div>
                </div>
                <div className='job-ad__controls-wrapper'>
                  <Link className='job-ad__link' to='/profil-firmy'>
                    <IoPersonOutline style={{ marginRight: '3px' }} /> Odwiedź
                    profil firmy
                  </Link>
                  <div className='job-ad__controls'>
                    <button className='job-ad__btn'>
                      Aplikuj teraz <MdChevronRight />
                    </button>
                    <button className='job-ad__btn' onClick={toggleFavourite}>
                      <FiHeart className='heart-icon' />
                    </button>
                    <button className='job-ad__btn'>
                      <MdOutlineClose />
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
                    {selectedJobOffer.company.adress.street},
                    {selectedJobOffer.company.adress.city},
                    {selectedJobOffer.company.adress.postCode},
                    {selectedJobOffer.company.adress.province}
                  </span>
                </div>
                <div className='job-ad__info-wrapper'>
                  <div className='job-ad__info-icon-container'>
                    <HiFire style={{ width: '15px', height: '15px' }} />
                  </div>
                  <span className='job-ad__info'>
                    {selectedJobOffer.typeOfContract.typeOfContractDescription}
                  </span>
                </div>
                <div className='job-ad__info-wrapper'>
                  <div className='job-ad__info-icon-container'>
                    <HiFire style={{ width: '15px', height: '15px' }} />
                  </div>
                  <span className='job-ad__info'>
                    {
                      selectedJobOffer.experienceLevel
                        .experienceLevelDescription
                    }
                  </span>
                </div>
                <div className='job-ad__info-wrapper'>
                  <div className='job-ad__info-icon-container'>
                    <HiFire style={{ width: '15px', height: '15px' }} />
                  </div>
                  <span className='job-ad__info'>rekrutacja zdalna</span>
                </div>
                <div className='job-ad__info-wrapper'>
                  <div className='job-ad__info-icon-container'>
                    <HiFire style={{ width: '15px', height: '15px' }} />
                  </div>
                  <span className='job-ad__info'>
                    ważne jeszcze 11 dni - do: 27 marca 2022
                  </span>
                </div>
                <div className='job-ad__info-wrapper'>
                  <div className='job-ad__info-icon-container'>
                    <HiFire style={{ width: '15px', height: '15px' }} />
                  </div>
                  <span className='job-ad__info'>
                    {selectedJobOffer.workingHours.workingHoursDescription}
                  </span>
                </div>
                <div className='job-ad__info-wrapper'>
                  <div className='job-ad__info-icon-container'>
                    <HiFire style={{ width: '15px', height: '15px' }} />
                  </div>
                  <span className='job-ad__info'>praca zdalna</span>
                </div>
              </div>
              <div className='duties__container'>
                <h2 className='duties__title'>Twój zakres obowiązków</h2>
                <div className='duties__wrapper'>
                  {selectedJobOffer.responsibilities.allResponsibilities.map(
                    (responsibility, i) => {
                      return <ListItem key={i} text={responsibility} />;
                    }
                  )}
                </div>
              </div>
              <div className='requirements__container'>
                <h2 className='requirements__title'>
                  Nasze wymagania wobec Ciebie
                </h2>
                <div className='requirements__wrapper'>
                  {selectedJobOffer.requirements.allRequirements.map(
                    (requirement, i) => {
                      return <ListItem key={i} text={requirement} />;
                    }
                  )}
                </div>
              </div>
              <div className='benefits__container'>
                <h2 className='benefits__title'>
                  Benefity oferowane przez firmę
                </h2>
                <div className='benefits__wrapper'>
                  {selectedJobOffer.company.benefits.benefit.map(
                    (benefit, i) => {
                      return <ListItem key={i} text={benefit} />;
                    }
                  )}
                </div>
              </div>
            </section>

            <aside className='similar-ads'>
              <h2 className='similar-ads__title'>Sprawdź podobne</h2>
              <div className='similar-ads__container'>
                <JobTile
                  key={jobOffers[0].id}
                  jobOfferId={jobOffers[0].id}
                  company={jobOffers[0].company.name}
                  salaryFrom={jobOffers[0].salaryFrom}
                  salaryTo={jobOffers[0].salaryTo}
                  province={jobOffers[0].company.adress.province}
                  city={jobOffers[0].company.adress.city}
                  logo={jobOffers[0].company.imageUrl}
                  jobTitle={jobOffers[1].jobTitle}
                />
                <JobTile
                  key={jobOffers[1].id}
                  jobOfferId={jobOffers[1].id}
                  company={jobOffers[1].company.name}
                  salaryFrom={jobOffers[1].salaryFrom}
                  salaryTo={jobOffers[1].salaryTo}
                  province={jobOffers[1].company.adress.province}
                  city={jobOffers[1].company.adress.city}
                  logo={jobOffers[1].company.imageUrl}
                  jobTitle={jobOffers[1].jobTitle}
                />
                <JobTile
                  key={jobOffers[2].id}
                  jobOfferId={jobOffers[2].id}
                  company={jobOffers[2].company.name}
                  salaryFrom={jobOffers[2].salaryFrom}
                  salaryTo={jobOffers[2].salaryTo}
                  province={jobOffers[2].company.adress.province}
                  city={jobOffers[2].company.adress.city}
                  logo={jobOffers[2].company.imageUrl}
                  jobTitle={jobOffers[2].jobTitle}
                />
                <JobTile
                  key={jobOffers[3].id}
                  jobOfferId={jobOffers[3].id}
                  company={jobOffers[3].company.name}
                  salaryFrom={jobOffers[3].salaryFrom}
                  salaryTo={jobOffers[3].salaryTo}
                  province={jobOffers[3].company.adress.province}
                  city={jobOffers[3].company.adress.city}
                  logo={jobOffers[3].company.imageUrl}
                  jobTitle={jobOffers[3].jobTitle}
                />
              </div>
            </aside>
          </>
        )}
      </div>
    </section>
  );
};

JobAd.propTypes = {
  jobOffers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { jobOffers: state.jobOffer };
};

export default connect(mapStateToProps)(JobAd);
