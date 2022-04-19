import React from 'react';
import JobTile from '../JobTile/JobTile';
import './RecommendedJobs.scss';
import { jobAdvertisements } from '../../data';

const RecommendedJobs = () => {
  return (
    <section className='recommended-jobs'>
      <h2 className='recommended-jobs__title'>Oferty wybrane dla Ciebie</h2>
      <div className='recommended-jobs__wrapper'>
        {jobAdvertisements.map((job) => {
          return (
            <JobTile
              key={job.jobAdvertisementId}
              company={job.company}
              salaryFrom={job.salaryFrom}
              salaryTo={job.salaryTo}
              province={job.province}
              city={job.city}
              logo={job.logo}
              jobTitle={job.jobTitle}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecommendedJobs;
