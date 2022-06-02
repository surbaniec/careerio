import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CompanyProfile.scss';
import { Link, useParams } from 'react-router-dom';
import { FiLink } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';
import JobTile from '../../components/JobTile/JobTile';
import store from '../../store';
import { fetchCompanies } from '../../actions/companyActions';

store.dispatch(fetchCompanies());

const CompanyProfile = ({
  jobOffers: { jobOffers },
  companies: { companies, loading },
}) => {
  const { companyId } = useParams();
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    if (loading === false) {
      setSelectedCompany(
        companies.find((company) => company.id === parseInt(companyId))
      );
    }
    //eslint-disable-next-line
  }, [loading, companyId]);

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
        {!loading && selectedCompany !== null && jobOffers.length > 0 && (
          <>
            <div className='company-profile'>
              <header className='company-profile__header'>
                <div className='company-profile__header-company-info'>
                  <div className='company-profile__header-logo-wrapper'>
                    {selectedCompany.imageUrl && (
                      <img
                        src={selectedCompany.imageUrl}
                        alt={selectedCompany.name}
                        className='company-profile__logo'
                      />
                    )}
                  </div>

                  <div className='company-profile__header-company-name-wrapper'>
                    <h2 className='company-profile__company-name'>
                      {selectedCompany.name}
                    </h2>
                    <span className='company-profile__company-desc'>
                      Lorem ipsum dolor sit amet.
                    </span>
                  </div>
                </div>
                <div className='company-profile__controls-wrapper'>
                  <Link className='company-profile__link' to='/'>
                    Subskrybuj oferty
                  </Link>
                  <div className='company-profile__controls'>
                    {selectedCompany.url && (
                      <Link
                        className='company-profile__link'
                        to={selectedCompany.url}
                      >
                        <FiLink />
                      </Link>
                    )}

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
                  <span className='company-profile__info-title'>
                    Lokalizacja:
                  </span>
                  <span className='company-profile__info'>
                    {selectedCompany.adress.street}, <span> </span>
                    {selectedCompany.adress.city}, <span> </span>
                    {selectedCompany.adress.postCode}, <span> </span>
                    {selectedCompany.adress.province}
                  </span>
                </div>

                {selectedCompany.numberOfEmployees && (
                  <div className='company-profile__info-wrapper'>
                    <div className='company-profile__info-icon-container'>
                      <HiFire style={{ width: '15px', height: '15px' }} />
                    </div>
                    <span className='company-profile__info-title'>
                      Wielkość firmy
                    </span>
                    <span className='company-profile__info'>
                      {selectedCompany.numberOfEmployees}
                    </span>
                  </div>
                )}

                {selectedCompany.industry && (
                  <div className='company-profile__info-wrapper'>
                    <div className='company-profile__info-icon-container'>
                      <HiFire style={{ width: '15px', height: '15px' }} />
                    </div>
                    <span className='company-profile__info-title'>Branża:</span>
                    <span className='company-profile__info'>
                      {selectedCompany.industry}
                    </span>
                  </div>
                )}

                {selectedCompany.dateOfStarting && (
                  <div className='company-profile__info-wrapper'>
                    <div className='company-profile__info-icon-container'>
                      <HiFire style={{ width: '15px', height: '15px' }} />
                    </div>
                    <span className='company-profile__info-title'>
                      Rok założenia
                    </span>
                    <span className='company-profile__info'>
                      {selectedCompany.dateOfStarting}
                    </span>
                  </div>
                )}

                {selectedCompany.relatedIndustries.allIndustries && (
                  <div className='company-profile__info-wrapper'>
                    <div className='company-profile__info-icon-container'>
                      <HiFire style={{ width: '15px', height: '15px' }} />
                    </div>
                    <span className='company-profile__info-title'>
                      Pracujemy z branżami:
                    </span>
                    <span className='company-profile__badges-container'>
                      {selectedCompany.relatedIndustries.allIndustries.map(
                        (industry) => {
                          return (
                            <div className='company-profile__badge'>
                              {industry}
                            </div>
                          );
                        }
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className='company-profile__section'>
                <h2 className='company-profile__section-title'>O firmie</h2>
                <div className='company-profile__about'>
                  <p className='company-profile__about-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam adipisci rem perspiciatis eaque unde in neque
                    molestiae facilis eos quis? Sint voluptas, vero delectus
                    magni assumenda asperiores alias repudiandae dolorum
                    dignissimos, impedit aliquam qui, sunt omnis obcaecati nobis
                    expedita illum eum ex. Voluptates ipsa error blanditiis est
                    officia quaerat unde?
                  </p>
                  <p className='company-profile__about-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam adipisci rem perspiciatis eaque unde in neque
                    molestiae facilis eos quis? Sint voluptas, vero delectus
                    magni assumenda asperiores alias repudiandae dolorum
                    dignissimos, impedit aliquam qui, sunt omnis obcaecati nobis
                    expedita illum eum ex. Voluptates ipsa error blanditiis est
                    officia quaerat unde?
                  </p>
                  <p className='company-profile__about-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam adipisci rem perspiciatis eaque unde in neque
                    molestiae facilis eos quis? Sint voluptas, vero delectus
                    magni assumenda asperiores alias repudiandae dolorum
                    dignissimos, impedit aliquam qui, sunt omnis obcaecati nobis
                    expedita illum eum ex. Voluptates ipsa error blanditiis est
                    officia quaerat unde?
                  </p>
                </div>
              </div>

              {selectedCompany.technologies.allTechnologies && (
                <div className='company-profile__section'>
                  <h2 className='company-profile__section-title'>
                    Technologie i oprogramowanie
                  </h2>
                  <div className='company-profile__badges-container'>
                    {selectedCompany.technologies.allTechnologies.map(
                      (technology) => {
                        return (
                          <div className='company-profile__badge'>
                            {technology}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              )}

              {selectedCompany.benefits.benefit && (
                <div className='company-profile__section'>
                  <h2 className='company-profile__section-title'>
                    Benefity i udogodnienia
                  </h2>
                  <div className='company-profile__badges-container'>
                    {selectedCompany.benefits.benefit.map((benefit) => {
                      return (
                        <div className='company-profile__badge'>{benefit}</div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className='company-profile__section'>
                <h2 className='company-profile__section-title'>
                  Galeria firmy
                </h2>
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
                <JobTile
                  key={jobOffers[0].id}
                  jobOfferId={jobOffers[0].id}
                  company={jobOffers[0].company.name}
                  salaryFrom={jobOffers[0].salaryFrom}
                  salaryTo={jobOffers[0].salaryTo}
                  province={jobOffers[0].company.adress.province}
                  city={jobOffers[0].company.adress.city}
                  logo={jobOffers[0].company.imageUrl}
                  jobTitle={jobOffers[1].jobTitle}
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
              </div>
            </aside>
          </>
        )}
      </div>
    </section>
  );
};

CompanyProfile.propTypes = {
  jobOffers: PropTypes.object.isRequired,
  companies: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { jobOffers: state.jobOffer, companies: state.company };
};

export default connect(mapStateToProps)(CompanyProfile);
