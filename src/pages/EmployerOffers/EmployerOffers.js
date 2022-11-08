import React from 'react';
import './EmployerOffers.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useContext } from 'react';
import JobOffersContext from '../../context/jobOffers/jobOffersContext';
import CompaniesContext from '../../context/companies/companiesContext';
import { useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import DashboardMenu from '../../layout/DashboardMenu/DashboardMenu';
import { Link } from 'react-router-dom';
import { OFFERSFORM } from '../../Routes/routes';

const EmployerOffers = () => {
  const jobOffersContext = useContext(JobOffersContext);
  const companiesContext = useContext(CompaniesContext);
  const authContext = useContext(AuthContext);
  const [jobOffers, setJobOffers] = useState(null);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    if (authContext.isAuthenticated === null) authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (authContext.user) {
      companiesContext.getCompany(authContext.user.id);
    }
    jobOffersContext.getJobOffers();
    // eslint-disable-next-line
  }, [authContext.user]);

  useEffect(() => {
    if (companiesContext.currentCompany) {
      setCompany(companiesContext.currentCompany);
      jobOffersContext.getCompanyJobOffers(companiesContext.currentCompany.id);
    }
    // eslint-disable-next-line
  }, [companiesContext.currentCompany]);

  useEffect(() => {
    if (jobOffersContext.currentJobOffers) {
      setJobOffers(jobOffersContext.currentJobOffers);
    }

    // eslint-disable-next-line
  }, [jobOffersContext.currentJobOffers]);

  const handleDelete = (jobOfferId) => {
    jobOffersContext.deleteJobOffer(jobOfferId);
  };

  return (
    <section className='employer-offers'>
      <div>
        <Toaster
          toastOptions={{
            className: 'toaster',
          }}
        />
      </div>
      <DashboardMenu />
      <div className='employer-offers__page-wrapper'>
        <div className='employer-offers__box-wrapper'>
          <div className='employer-offers__box'>
            <div className='employer-offers__title-wrapper'>
              <h2 className='employer-offers__title'>
                Lista aktualnych ofert pracy
              </h2>
            </div>
            <div className='employer-offers__list-wrapper'>
              {jobOffers && jobOffers.length > 0 && company !== null ? (
                jobOffers.map((jobOffer, i) => {
                  return (
                    <div className='job-offer' key={i}>
                      <div className='job-offer__info'>
                        <div className='job-offer__img-wrapper'>
                          {company.imageUrl && (
                            <img
                              className='job-offer__logo'
                              src={company.imageUrl}
                              alt={company.name}
                            />
                          )}
                        </div>
                        <div className='job-offer__desc-wrapper'>
                          <h2 className='job-offer__company-name'>
                            {company.name}
                          </h2>
                          <h3 className='job-offer__position'>
                            {jobOffer.jobTitle}
                          </h3>
                          <div className='job-offer__salary-wrapper'>
                            <span className='job-offer__salary-from'>
                              {jobOffer.salaryFrom}
                            </span>

                            {jobOffer.salaryTo && (
                              <>
                                {' '}
                                <span> - </span>
                                <span className='job-offer__salary-to'>
                                  {jobOffer.salaryTo}
                                </span>
                              </>
                            )}
                            <span className='job-offer__salary-currency'>
                              {' '}
                              PLN
                            </span>
                          </div>
                          <div className='job-offer__address-wrapper'>
                            <HiOutlineLocationMarker
                              style={{
                                marginRight: '5px',
                                width: '12px',
                                height: 'auto',
                              }}
                            />
                            <span className='job-offer__address-province'>
                              {company.province}
                            </span>
                            <span className='job-offer__address-divider'>
                              ,{' '}
                            </span>
                            <span className='job-offer__address-city'>
                              {company.city}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='job-offer__controls'>
                        <button
                          className='job-tile__btn'
                          onClick={() => handleDelete(jobOffer.id)}
                        >
                          Usuń
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <p className='employer-offers__info'>Brak ofert pracy</p>
                  <Link to={OFFERSFORM} className='employer-offers__btn'>
                    Dodaj ofertę
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerOffers;
