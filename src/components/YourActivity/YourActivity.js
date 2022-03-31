import React from 'react';
import './YourActivity.scss';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FiStar, FiSend } from 'react-icons/fi';
import JobTile from '../JobTile/JobTile';

const YourActivity = () => {
  return (
    <section className='your-activity'>
      <h2 className='your-activity__title'>Twoja aktywność na Career.io</h2>
      <div className='your-activity__controls'>
        <button className='your-activity__btn active'>
          <IoPhonePortraitOutline style={{ height: '15px', width: '15px' }} />{' '}
          Ostatnio oglądane
        </button>
        <button className='your-activity__btn'>
          <FiStar style={{ height: '15px', width: '15px' }} /> Ulubione oferty
        </button>
        <button className='your-activity__btn'>
          <FiSend style={{ height: '15px', width: '15px' }} /> Ostatnie
          aplikacje
        </button>
      </div>
      <div className='your-activity__tiles'>
        <JobTile />
        <JobTile />
        <JobTile />
      </div>
    </section>
  );
};

export default YourActivity;
