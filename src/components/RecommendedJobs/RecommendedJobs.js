import React from 'react';
import JobTile from '../JobTile/JobTile';
import './RecommendedJobs.scss';

const RecommendedJobs = () => {
  return (
    <section className='recommended-jobs'>
      <h2 className='recommended-jobs__title'>Oferty wybrane dla Ciebie</h2>
      <div className='recommended-jobs__wrapper'>
        <JobTile />
        <JobTile />
        <JobTile />
      </div>
    </section>
  );
};

export default RecommendedJobs;
