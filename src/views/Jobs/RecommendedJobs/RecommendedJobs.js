import { useContext, useState } from 'react';
import JobTile from '../../../components/JobTile/JobTile';
import CompaniesContext from '../../../context/companies/companiesContext';
import JobOffersContext from '../../../context/jobOffers/jobOffersContext';
import './RecommendedJobs.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RecommendedJobs = () => {
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

  return (
    <section className='recommended-jobs'>
      <h2 className='recommended-jobs__title'>Oferty wybrane dla Ciebie</h2>
      <div className='recommended-jobs__wrapper'>
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
    </section>
  );
};

export default RecommendedJobs;
