import React from 'react';
import { Link } from 'react-router-dom';
import './JobAd.scss';
import { FiHeart } from 'react-icons/fi';
import { MdChevronRight, MdOutlineClose } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
import { HiFire } from 'react-icons/hi';
import ListItem from '../../components/ListItem/ListItem';
import JobTile from '../../components/JobTile/JobTile';
import { jobAdvertisements } from '../../data';

const JobAd = () => {
  return (
    <section className='job-ad__container'>
      <div className='job-ad__background-wrapper'>
        <img
          className='job-ad__background-img'
          src='../../assets/company-background-mobile.png'
          alt=''
        />
      </div>
      <section className='job-ad'>
        <header className='job-ad__header'>
          <div className='job-ad__header-company-info'>
            <img
              src='../../assets/company-logo.png'
              alt=''
              className='job-ad__logo'
            />
            <div className='job-ad__header-company-name-wrapper'>
              <h2 className='job-ad__company-name'>UI CENTER SGS</h2>
              <span className='job-ad__job-title'>Junior UI Designer</span>
            </div>
          </div>
          <div className='job-ad__controls-wrapper'>
            <Link className='job-ad__link' to='/'>
              <IoPersonOutline style={{ marginRight: '3px' }} /> Odwiedź profil
              firmy
            </Link>
            <div className='job-ad__controls'>
              <button className='job-ad__btn'>
                Aplikuj teraz <MdChevronRight />
              </button>
              <button className='job-ad__btn'>
                <FiHeart />
              </button>
              <button className='job-ad__btn'>
                <MdOutlineClose />
              </button>
            </div>
          </div>
        </header>
        <div className='job-ad__informations'>
          <div className='job-ad__info-wrapper'>
            <div className='job-ad__info-icon-container'>
              <HiFire />
            </div>
            <span className='job-ad__info'>
              Mickiewicza 29b, Katowice 40-001, śląskie
            </span>
          </div>
          <div className='job-ad__info-wrapper'>
            <div className='job-ad__info-icon-container'>
              <HiFire />
            </div>
            <span className='job-ad__info'>umowa o pracę, kontrakt B2B</span>
          </div>
          <div className='job-ad__info-wrapper'>
            <div className='job-ad__info-icon-container'>
              <HiFire />
            </div>
            <span className='job-ad__info'>początkujący - staż / junior</span>
          </div>
          <div className='job-ad__info-wrapper'>
            <div className='job-ad__info-icon-container'>
              <HiFire />
            </div>
            <span className='job-ad__info'>rekrutacja zdalna</span>
          </div>
          <div className='job-ad__info-wrapper'>
            <div className='job-ad__info-icon-container'>
              <HiFire />
            </div>
            <span className='job-ad__info'>
              ważne jeszcze 11 dni - do: 27 marca 2022
            </span>
          </div>
          <div className='job-ad__info-wrapper'>
            <div className='job-ad__info-icon-container'>
              <HiFire />
            </div>
            <span className='job-ad__info'>pełny etat / staż</span>
          </div>
          <div className='job-ad__info-wrapper'>
            <div className='job-ad__info-icon-container'>
              <HiFire />
            </div>
            <span className='job-ad__info'>praca zdalna</span>
          </div>
        </div>
        <div className='duties__container'>
          <h2 className='duties__title'>Twój zakres obowiązków</h2>
          <div className='duties__wrapper'>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>
        <div className='requirements__container'>
          <h2 className='requirements__title'>Nasze wymagania wobec Ciebie</h2>
          <div className='requirements__wrapper'>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>
        <div className='benefits__container'>
          <h2 className='benefits__title'>Benefity oferowane przez firmę</h2>
          <div className='benefits__wrapper'>
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>
      </section>
      <aside className='similar-ads'>
        <h2 className='similar-ads__title'>Sprawdź podobne</h2>
        <div className='similar-ads__container'>
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
      </aside>
    </section>
  );
};

export default JobAd;
