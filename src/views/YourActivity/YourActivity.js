import React from 'react';
import { connect } from 'react-redux';
import './YourActivity.scss';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FiStar, FiSend } from 'react-icons/fi';
import JobTile from '../../components/JobTile/JobTile';

const YourActivity = ({ jobOffers: { jobOffers, loading } }) => {
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
          {!loading && jobOffers !== null && (
            <>
              <JobTile
                key={jobOffers[0].id}
                jobOfferId={jobOffers[0].id}
                company={jobOffers[0].company.name}
                salaryFrom={jobOffers[0].salaryFrom}
                salaryTo={jobOffers[0].salaryTo}
                province={jobOffers[0].company.adress.province}
                city={jobOffers[0].company.adress.city}
                logo={jobOffers[0].company.imageUrl}
                jobTitle={jobOffers[0].jobTitle}
              />
              <JobTile
                key={jobOffers[1].id}
                jobOfferId={jobOffers[1].id}
                company={jobOffers[1].company.name}
                salaryFrom={jobOffers[1].salaryFrom}
                salaryTo={jobOffers[1].salaryTo}
                province={jobOffers[1].company.adress.province}
                city={jobOffers[1].company.adress.city}
                logo={jobOffers[1].company.imageUrl}
                jobTitle={jobOffers[1].jobTitle}
              />
              <JobTile
                key={jobOffers[2].id}
                jobOfferId={jobOffers[2].id}
                company={jobOffers[2].company.name}
                salaryFrom={jobOffers[2].salaryFrom}
                salaryTo={jobOffers[2].salaryTo}
                province={jobOffers[2].company.adress.province}
                city={jobOffers[2].company.adress.city}
                logo={jobOffers[2].company.imageUrl}
                jobTitle={jobOffers[2].jobTitle}
              />
              <JobTile
                key={jobOffers[3].id}
                jobOfferId={jobOffers[3].id}
                company={jobOffers[3].company.name}
                salaryFrom={jobOffers[3].salaryFrom}
                salaryTo={jobOffers[3].salaryTo}
                province={jobOffers[3].company.adress.province}
                city={jobOffers[3].company.adress.city}
                logo={jobOffers[3].company.imageUrl}
                jobTitle={jobOffers[3].jobTitle}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return { jobOffers: state.jobOffer };
};

export default connect(mapStateToProps)(YourActivity);
