import React from 'react';
import './EmployerOffers.scss';
import { Link } from 'react-router-dom';
import { MdOutlineSpaceDashboard, MdListAlt, MdAdd } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoReceiptOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { DASHBOARD, OFFERSFORM } from '../../Routes/routes';
import { useContext } from 'react';
import JobOffersContext from '../../context/jobOffers/jobOffersContext';
import CompaniesContext from '../../context/companies/companiesContext';
import { useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import DashboardMenu from '../../layout/DashboardMenu/DashboardMenu';

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
    toast.success('Usunięto ofertę pracy');
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
              {jobOffers !== null && company !== null ? (
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
                <p>Brak ofert pracy</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerOffers;
