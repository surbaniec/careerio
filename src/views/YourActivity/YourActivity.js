import React from 'react';
import './YourActivity.scss';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FiStar, FiSend } from 'react-icons/fi';
import JobTile from '../../components/JobTile/JobTile';
import { jobAdvertisements } from '../../data';

const YourActivity = () => {
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
      </div>
    </section>
  );
};

export default YourActivity;
