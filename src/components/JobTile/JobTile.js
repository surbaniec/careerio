import React from 'react';
import './JobTile.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdChevronRight, MdOutlineClose } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';

const JobTile = () => {
  return (
    <div className='job-tile'>
      <div className='job-tile__info'>
        <div className='job-tile__img-wrapper'>
          <img src='../../assets/company-logo.png' alt='company logo' />
        </div>
        <div className='job-tile__desc-wrapper'>
          <h2 className='job-tile__company-name'>UI CENTER SGS</h2>
          <h3 className='job-tile__position'>Junior UI Designer</h3>
          <div className='job-tile__salary-wrapper'>
            <span className='job-tile__salary-from'>3 000</span>
            <span> - </span>
            <span className='job-tile__salary-to'>5 000</span>
            <span className='job-tile__salary-currency'> PLN</span>
          </div>
          <div className='job-tile__address-wrapper'>
            <HiOutlineLocationMarker style={{ marginRight: '5px' }} />
            <span className='job-tile__address-province'>Śląsk</span>
            <span>, </span>
            <span className='job-tile__address-city'>Katowice</span>
          </div>
        </div>
      </div>

      <div className='job-tile__controls'>
        <button className='job-tile__btn'>
          Aplikuj teraz <MdChevronRight />
        </button>
        <button className='job-tile__btn'>
          <FiHeart />
        </button>
        <button className='job-tile__btn'>
          <MdOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default JobTile;
