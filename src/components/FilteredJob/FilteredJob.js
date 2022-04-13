import React from 'react';
import './FilteredJob.scss';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';

const FilteredJob = () => {
  return (
    <div className='filtered-job'>
      <div className='filtered-job__details'>
        <div className='filtered-job__img-wrapper'>
          <img
            className='filtered-job__logo'
            src='../../assets/company-logo.png'
            alt='company logo'
          />
        </div>
        <div className='filtered-job__info'>
          <h2 className='filtered-job__company-name'>UI CENTER SGS</h2>
          <h3 className='filtered-job__position'>Junior UI Designer</h3>
          <div className='filtered-job__address-wrapper'>
            <HiOutlineLocationMarker style={{ marginRight: '5px' }} />
            <span className='filtered-job__address-province'>Śląsk</span>
            <span>, </span>
            <span className='filtered-job__address-city'>Katowice</span>
          </div>
          <div className='filtered-job__job-type-wrapper'>
            <AiOutlineHome style={{ marginRight: '5px' }} />
            <span>praca zdalna</span>
          </div>
        </div>
      </div>
      <div className='filtered-job__controls'>
        <p className='filtered-job__controls-salary'>
          <span className='text-blue'>3 000 - 5 500</span> PLN
        </p>
        <div className='filtered-job__controls-favourite'>
          <span>Dodaj do ulubionych </span>
          <FiHeart style={{ marginLeft: '5px' }} />
        </div>
      </div>
    </div>
  );
};

export default FilteredJob;
