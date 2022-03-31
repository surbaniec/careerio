import React from 'react';
import RecommendedJob from '../RecommendedJob/RecommendedJob';
import './RecommendedJobs.scss';

const RecommendedJobs = () => {
  return (
    <section className='recommended-jobs'>
      <h2 className='recommended-jobs__title'>Oferty wybrane dla Ciebie</h2>
      <div className='recommended-jobs__wrapper'>
        <RecommendedJob />
        <RecommendedJob />
        <RecommendedJob />
      </div>
    </section>
  );
};

export default RecommendedJobs;
