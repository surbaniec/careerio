import React from 'react';
import './RecommendedJob.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdChevronRight, MdOutlineClose } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';

const RecommendedJob = () => {
  return (
    <div className='recommended-job'>
      <div className='recommended-job__info'>
        <div className='recommended-job__img-wrapper'>
          <img src='../../assets/company-logo.png' alt='company logo' />
        </div>
        <div className='recommended-job__desc-wrapper'>
          <h2 className='recommended-job__company-name'>UI CENTER SGS</h2>
          <h3 className='recommended-job__position'>Junior UI Designer</h3>
          <div className='recommended-job__salary-wrapper'>
            <span className='recommended-job__salary-from'>3 000</span>
            <span> - </span>
            <span className='recommended-job__salary-to'>5 000</span>
            <span className='recommended-job__salary-currency'> PLN</span>
          </div>
          <div className='recommended-job__address-wrapper'>
            <HiOutlineLocationMarker style={{ marginRight: '5px' }} />
            <span className='recommended-job__address-province'>Śląsk</span>
            <span>, </span>
            <span className='recommended-job__address-city'>Katowice</span>
          </div>
        </div>
      </div>

      <div className='recommended-job__controls'>
        <button className='recommended-job__btn'>
          Aplikuj teraz <MdChevronRight />
        </button>
        <button className='recommended-job__btn'>
          <FiHeart />
        </button>
        <button className='recommended-job__btn'>
          <MdOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default RecommendedJob;
