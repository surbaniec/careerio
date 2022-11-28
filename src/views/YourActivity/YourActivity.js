import React, { useState, useEffect } from 'react';
import './YourActivity.scss';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FiStar, FiSend } from 'react-icons/fi';
import JobTile from '../../components/JobTile/JobTile';
import 'react-loading-skeleton/dist/skeleton.css';

const YourActivity = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const [bookmarkName, setBookmarkName] = useState('recentlyVisited');

  // fetch jobOffers from ls
  const checkLocalStorage = (bookmarkName) => {
    const tempOffers = JSON.parse(localStorage.getItem(bookmarkName));
    setJobOffers(tempOffers);
  };

  useEffect(() => {
    checkLocalStorage(bookmarkName);
  }, [bookmarkName]);

  // add & remove 'active' class on clicked btn
  const changeActiveBtn = (e) => {
    const buttons = [...document.querySelectorAll('.your-activity__btn')];

    setBookmarkName(e.target.dataset.name);

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
            data-name='recentlyVisited'
            onClick={changeActiveBtn}
          >
            <IoPhonePortraitOutline style={{ height: 'auto', width: '15px' }} />
            Ostatnio oglądane
          </button>
          <button
            className='your-activity__btn'
            data-id='1'
            data-name='favourites'
            onClick={changeActiveBtn}
          >
            <FiStar style={{ height: 'auto', width: '15px' }} />
            Ulubione oferty
          </button>
          <button
            className='your-activity__btn'
            data-id='2'
            data-name='lastApplications'
            onClick={changeActiveBtn}
          >
            <FiSend style={{ height: 'auto', width: '15px' }} />
            Ostatnie aplikacje
          </button>
        </div>
      </div>

      <div className='your-activity__tiles'>
        <div className='your-activity__tiles-wrapper'>
          {jobOffers.length > 0 ? (
            jobOffers.map((jobOffer, i) => {
              return <JobTile key={i} {...jobOffer} />;
            })
          ) : (
            <p className='your-activity__info'>Brak aktywności</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default YourActivity;
