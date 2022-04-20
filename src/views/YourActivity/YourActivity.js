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
            <IoPhonePortraitOutline
              style={{ height: 'auto', width: '15px', marginRight: '5px' }}
            />
            Ostatnio oglądane
          </button>
          <button
            className='your-activity__btn'
            data-id='1'
            onClick={changeActiveBtn}
          >
            <FiStar
              style={{ height: 'auto', width: '15px', marginRight: '5px' }}
            />
            Ulubione oferty
          </button>
          <button
            className='your-activity__btn'
            data-id='2'
            onClick={changeActiveBtn}
          >
            <FiSend
              style={{ height: 'auto', width: '15px', marginRight: '5px' }}
            />
            Ostatnie aplikacje
          </button>
        </div>
      </div>

      <div className='your-activity__tiles'>
        <div className='your-activity__tiles-wrapper'>
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
      </div>
    </section>
  );
};

export default YourActivity;
