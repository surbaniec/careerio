import React from 'react';
import './CompanyProfile.scss';
import { Link } from 'react-router-dom';
import { FiHeart, FiLink } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdChevronRight, MdOutlineClose } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';
import { jobAdvertisements } from '../../data';
import JobTile from '../../components/JobTile/JobTile';

const CompanyProfile = () => {
  return (
    <section className='company-profile__container'>
      <div className='company-profile__background-wrapper'>
        <img
          className='company-profile__background-img'
          src='../../assets/company-background.png'
          alt=''
        />
      </div>
      <div className='company-profile__wrapper'>
        <div className='company-profile'>
          <header className='company-profile__header'>
            <div className='company-profile__header-company-info'>
              <img
                src='../../assets/company-logo.png'
                alt=''
                className='company-profile__logo'
              />
              <div className='company-profile__header-company-name-wrapper'>
                <h2 className='company-profile__company-name'>UI CENTER SGS</h2>
                <span className='company-profile__company-desc'>
                  Digital Agency Katowice
                </span>
              </div>
            </div>
            <div className='company-profile__controls-wrapper'>
              <Link className='company-profile__link' to='/'>
                Subskrybuj oferty firmy
              </Link>
              <div className='company-profile__controls'>
                <Link className='company-profile__link' to='/'>
                  <FiLink />
                </Link>
                <Link className='company-profile__link' to='/'>
                  <FaFacebookF />
                </Link>
                <Link className='company-profile__link' to='/'>
                  <FaTwitter />
                </Link>
                <Link className='company-profile__link' to='/'>
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </header>
          <div className='company-profile__informations'>
            <div className='company-profile__info-wrapper'>
              <div className='company-profile__info-icon-container'>
                <HiFire style={{ width: '15px', height: '15px' }} />
              </div>
              <span className='company-profile__info-title'>Lokalizacja:</span>
              <span className='company-profile__info'>
                Mickiewicza 29b, Katowice 40-001, śląskie
              </span>
            </div>
            <div className='company-profile__info-wrapper'>
              <div className='company-profile__info-icon-container'>
                <HiFire style={{ width: '15px', height: '15px' }} />
              </div>
              <span className='company-profile__info-title'>
                Wielkość firmy
              </span>
              <span className='company-profile__info'>80+</span>
            </div>
            <div className='company-profile__info-wrapper'>
              <div className='company-profile__info-icon-container'>
                <HiFire style={{ width: '15px', height: '15px' }} />
              </div>
              <span className='company-profile__info-title'>Branża:</span>
              <span className='company-profile__info'>Digital Agency</span>
            </div>

            <div className='company-profile__info-wrapper'>
              <div className='company-profile__info-icon-container'>
                <HiFire style={{ width: '15px', height: '15px' }} />
              </div>
              <span className='company-profile__info-title'>Założona</span>
              <span className='company-profile__info'>2015</span>
            </div>
            <div className='company-profile__info-wrapper'>
              <div className='company-profile__info-icon-container'>
                <HiFire style={{ width: '15px', height: '15px' }} />
              </div>
              <span className='company-profile__info-title'>
                Pracujemy z branżami:
              </span>
              <span className='company-profile__badges-container'>
                <div className='company-profile__badge'>Retail</div>
                <div className='company-profile__badge'>Fintech</div>
                <div className='company-profile__badge'>Banking</div>
              </span>
            </div>
          </div>
          <div className='company-profile__section'>
            <h2 className='company-profile__section-title'>O firmie</h2>
            <div className='company-profile__about'>
              <p className='company-profile__about-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                adipisci rem perspiciatis eaque unde in neque molestiae facilis
                eos quis? Sint voluptas, vero delectus magni assumenda
                asperiores alias repudiandae dolorum dignissimos, impedit
                aliquam qui, sunt omnis obcaecati nobis expedita illum eum ex.
                Voluptates ipsa error blanditiis est officia quaerat unde?
              </p>
              <p className='company-profile__about-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                adipisci rem perspiciatis eaque unde in neque molestiae facilis
                eos quis? Sint voluptas, vero delectus magni assumenda
                asperiores alias repudiandae dolorum dignissimos, impedit
                aliquam qui, sunt omnis obcaecati nobis expedita illum eum ex.
                Voluptates ipsa error blanditiis est officia quaerat unde?
              </p>
              <p className='company-profile__about-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                adipisci rem perspiciatis eaque unde in neque molestiae facilis
                eos quis? Sint voluptas, vero delectus magni assumenda
                asperiores alias repudiandae dolorum dignissimos, impedit
                aliquam qui, sunt omnis obcaecati nobis expedita illum eum ex.
                Voluptates ipsa error blanditiis est officia quaerat unde?
              </p>
            </div>
          </div>
          <div className='company-profile__section'>
            <h2 className='company-profile__section-title'>
              Technologie i oprogramowanie
            </h2>
            <div className='company-profile__badges-container'>
              <div className='company-profile__badge'>Figma</div>
              <div className='company-profile__badge'>UxPin</div>
              <div className='company-profile__badge'>Jira</div>
              <div className='company-profile__badge'>Adobe Xd</div>
              <div className='company-profile__badge'>Adobe Photoshop</div>
            </div>
          </div>
          <div className='company-profile__section'>
            <h2 className='company-profile__section-title'>
              Benefity i udogodnienia
            </h2>
            <div className='company-profile__badges-container'>
              <div className='company-profile__badge'>Praca zdalna</div>
              <div className='company-profile__badge'>Darmowa kawa</div>
              <div className='company-profile__badge'>Kuchnia</div>
              <div className='company-profile__badge'>Parking</div>
            </div>
          </div>
          <div className='company-profile__section'>
            <h2 className='company-profile__section-title'>Galeria firmy</h2>
            <div className='company-profile__gallery'>
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-1.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-2.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-3.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-4.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-5.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-6.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-7.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-8.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-9.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-10.png'
                alt=''
              />
              <img
                className='company-profile__gallery-img'
                src='../../../assets/company-gallery-11.png'
                alt=''
              />
              <button className='company-profile__gallery-btn'>
                Pokaż wszystkie{' '}
                <MdChevronRight style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
          </div>
        </div>
        <aside className='company-profile__section'>
          <h2 className='company-profile__section-title'>Oferty Firmy</h2>
          <div className='company-profile__ads-container'>
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
      </div>
    </section>
  );
};

export default CompanyProfile;
