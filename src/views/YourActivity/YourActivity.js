import React from 'react';
import './YourActivity.scss';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FiStar, FiSend } from 'react-icons/fi';
import JobTile from '../../components/JobTile/JobTile';
import { useContext } from 'react';
import JobOffersContext from '../../context/jobOffers/jobOffersContext';
import CompaniesContext from '../../context/companies/companiesContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const YourActivity = () => {
  const jobOffersContext = useContext(JobOffersContext);
  const companiesContext = useContext(CompaniesContext);

  const { jobOffers, loading } = jobOffersContext;
  const companies = companiesContext.companies;

  const jobOffersToRender = [];

  const createJobOffersToRender = () => {
    const jobOffersAmount = jobOffers.length;
    let companyName = '';
    let currentCompany;

    for (let i = jobOffersAmount - 1; i >= jobOffersAmount - 4; i--) {
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

  if (!loading && jobOffers !== null && companies !== null) {
    createJobOffersToRender();
  }

  // add & remove 'active' class on clicked btn
  const changeActiveBtn = (e) => {
    const buttons = [...document.querySelectorAll('.your-activity__btn')];

    buttons.forEach((btn) => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      }

      if (btn.dataset.id === e.target.dataset.id) {
        btn.classList.add('active');
      }
    });
  };

  return (
    <section className='your-activity'>
      <div className='your-activity__wrapper'>
        <h2 className='your-activity__title'>Twoja aktywność na Career.io</h2>
        <div className='your-activity__controls'>
          <button
            className='your-activity__btn active'
            data-id='0'
            onClick={changeActiveBtn}
          >
            <IoPhonePortraitOutline style={{ height: 'auto', width: '15px' }} />
            Ostatnio oglądane
          </button>
          <button
            className='your-activity__btn'
            data-id='1'
            onClick={changeActiveBtn}
          >
            <FiStar style={{ height: 'auto', width: '15px' }} />
            Ulubione oferty
          </button>
          <button
            className='your-activity__btn'
            data-id='2'
            onClick={changeActiveBtn}
          >
            <FiSend style={{ height: 'auto', width: '15px' }} />
            Ostatnie aplikacje
          </button>
        </div>
      </div>

      <div className='your-activity__tiles'>
        <div className='your-activity__tiles-wrapper'>
          {!loading && jobOffersToRender.length > 0 ? (
            jobOffersToRender.map((jobOffer, i) => {
              return <JobTile key={i} {...jobOffer} />;
            })
          ) : (
            <>
              <Skeleton
                sx={{ bgcolor: 'grey.500' }}
                animation='wave'
                variant='rectangular'
                width={210}
                height={118}
                style={{ margin: '0 50px' }}
              />
              <Skeleton
                sx={{ bgcolor: 'grey.500' }}
                animation='wave'
                variant='rectangular'
                width={210}
                height={118}
                style={{ margin: '0 50px' }}
              />
              <Skeleton
                sx={{ bgcolor: 'grey.500' }}
                animation='wave'
                variant='rectangular'
                width={210}
                height={118}
                style={{ margin: '0 50px' }}
              />
              <Skeleton
                sx={{ bgcolor: 'grey.500' }}
                animation='wave'
                variant='rectangular'
                width={210}
                height={118}
                style={{ margin: '0 50px' }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default YourActivity;
