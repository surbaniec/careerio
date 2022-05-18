import React from 'react';
import JobTile from '../../../components/JobTile/JobTile';
import './RecommendedJobs.scss';
import { jobAdvertisements } from '../../../data';

const RecommendedJobs = () => {
  return (
    <section className='recommended-jobs'>
      <h2 className='recommended-jobs__title'>Oferty wybrane dla Ciebie</h2>
      <div className='recommended-jobs__wrapper'>
        {/* {jobAdvertisements.map((job) => {
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
        })} */}
        <JobTile
          key={jobAdvertisements[0].jobAdvertisementId}
          company={jobAdvertisements[0].company}
          salaryFrom={jobAdvertisements[0].salaryFrom}
          salaryTo={jobAdvertisements[0].salaryTo}
          province={jobAdvertisements[0].province}
          city={jobAdvertisements[0].city}
          logo={jobAdvertisements[0].logo}
          jobTitle={jobAdvertisements[0].jobTitle}
        />
        <JobTile
          key={jobAdvertisements[1].jobAdvertisementId}
          company={jobAdvertisements[1].company}
          salaryFrom={jobAdvertisements[1].salaryFrom}
          salaryTo={jobAdvertisements[1].salaryTo}
          province={jobAdvertisements[1].province}
          city={jobAdvertisements[1].city}
          logo={jobAdvertisements[1].logo}
          jobTitle={jobAdvertisements[1].jobTitle}
        />
        <JobTile
          key={jobAdvertisements[2].jobAdvertisementId}
          company={jobAdvertisements[2].company}
          salaryFrom={jobAdvertisements[2].salaryFrom}
          salaryTo={jobAdvertisements[2].salaryTo}
          province={jobAdvertisements[2].province}
          city={jobAdvertisements[2].city}
          logo={jobAdvertisements[2].logo}
          jobTitle={jobAdvertisements[2].jobTitle}
        />
        <JobTile
          key={jobAdvertisements[3].jobAdvertisementId}
          company={jobAdvertisements[3].company}
          salaryFrom={jobAdvertisements[3].salaryFrom}
          salaryTo={jobAdvertisements[3].salaryTo}
          province={jobAdvertisements[3].province}
          city={jobAdvertisements[3].city}
          logo={jobAdvertisements[3].logo}
          jobTitle={jobAdvertisements[3].jobTitle}
        />
      </div>
    </section>
  );
};

export default RecommendedJobs;
