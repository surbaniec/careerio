import { useState, useEffect, useContext } from 'react';
import './CompanyProfile.scss';
import { Link, useParams } from 'react-router-dom';
import { FiLink } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';
import JobTile from '../../components/JobTile/JobTile';
import JobOffersContext from '../../context/jobOffers/jobOffersContext';
import CompaniesContext from '../../context/companies/companiesContext';

const CompanyProfile = () => {
  const jobOffersContext = useContext(JobOffersContext);
  const companiesContext = useContext(CompaniesContext);
  const jobOffers = jobOffersContext.jobOffers;
  const jobOffersLoading = jobOffersContext.loading;
  const companies = companiesContext.companies;
  const companiesLoading = companiesContext.loading;
  const { companyId } = useParams();
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companyOffers = [];

  useEffect(() => {
    if (jobOffersLoading || companiesLoading) {
      jobOffersContext.getJobOffers();
      companiesContext.getCompanies();
    }

    if (jobOffersLoading === false && companiesLoading === false) {
      const resCompany = companies.find((company) => {
        return company.id === parseInt(companyId);
      });

      setSelectedCompany({
        companyId: resCompany.id,
        companyName: resCompany.name,
        city: resCompany.city,
        postCode: resCompany.postCode,
        province: resCompany.province,
        street: resCompany.street,
        imageUrl: resCompany.imageUrl,
        benefits: resCompany.benefits,
        url: resCompany.url,
        dateOfStarting: resCompany.dateOfStarting,
        companyEmail: resCompany.email,
        industry: resCompany.industry,
        longDescription: resCompany.longDescription,
        shortDescription: resCompany.shortDescription,
        numberOfEmployees: resCompany.numberOfEmployees,
        companyGallery: resCompany.photos,
        relatedIndustries: resCompany.relatedIndustries,
        technologies: resCompany.technologies,
      });
    }
  }, [companyId, companies, jobOffers]);

  const createCompanyOffers = () => {
    const res = jobOffers.filter(
      (jobOffer) => jobOffer.companyName === selectedCompany.companyName
    );

    res.forEach((offer, i) => {
      if (i > 5) {
        return;
      }
      companyOffers.push(offer);
    });
  };

  if (jobOffers !== null && selectedCompany !== null) {
    createCompanyOffers();
  }

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
        {!companiesLoading &&
          selectedCompany !== null &&
          !jobOffersLoading &&
          jobOffers !== null && (
            <>
              <div className='company-profile'>
                <header className='company-profile__header'>
                  <div className='company-profile__header-company-info'>
                    <div className='company-profile__header-logo-wrapper'>
                      {selectedCompany.imageUrl && (
                        <img
                          src={selectedCompany.imageUrl}
                          alt={selectedCompany.companyName}
                          className='company-profile__logo'
                        />
                      )}
                    </div>

                    <div className='company-profile__header-company-name-wrapper'>
                      <h2 className='company-profile__company-name'>
                        {selectedCompany.companyName}
                      </h2>
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
                      {selectedCompany.street}, <span> </span>
                      {selectedCompany.city}, <span> </span>
                      {selectedCompany.postCode}, <span> </span>
                      {selectedCompany.province}
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
                      <span className='company-profile__info-title'>
                        Branża:
                      </span>
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

                  {selectedCompany.relatedIndustries && (
                    <div className='company-profile__info-wrapper'>
                      <div className='company-profile__info-icon-container'>
                        <HiFire style={{ width: '15px', height: '15px' }} />
                      </div>
                      <span className='company-profile__info-title'>
                        Pracujemy z branżami:
                      </span>
                      <span className='company-profile__badges-container'>
                        {selectedCompany.relatedIndustries.map(
                          (industry, i) => {
                            return (
                              <div className='company-profile__badge' key={i}>
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
                      {selectedCompany.longDescription}
                    </p>
                  </div>
                </div>

                {selectedCompany.technologies && (
                  <div className='company-profile__section'>
                    <h2 className='company-profile__section-title'>
                      Technologie i oprogramowanie
                    </h2>
                    <div className='company-profile__badges-container'>
                      {selectedCompany.technologies.map((technology, i) => {
                        return (
                          <div className='company-profile__badge' key={i}>
                            {technology}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {selectedCompany.benefits && (
                  <div className='company-profile__section'>
                    <h2 className='company-profile__section-title'>
                      Benefity i udogodnienia
                    </h2>
                    <div className='company-profile__badges-container'>
                      {selectedCompany.benefits.map((benefit, i) => {
                        return (
                          <div className='company-profile__badge' key={i}>
                            {benefit}
                          </div>
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
                      <MdChevronRight
                        style={{ width: '20px', height: '20px' }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <aside className='company-profile__section'>
                <h2 className='company-profile__section-title'>Oferty Firmy</h2>
                <div className='company-profile__ads-container'>
                  {companyOffers.map((jobOffer, i) => {
                    return (
                      <JobTile
                        key={i}
                        jobOfferId={jobOffer.id}
                        companyName={jobOffer.companyName}
                        salaryFrom={jobOffer.salaryFrom}
                        salaryTo={jobOffer.salaryTo}
                        city={selectedCompany.city}
                        province={selectedCompany.province}
                        logo={selectedCompany.imageUrl}
                        jobTitle={jobOffer.jobTitle}
                      />
                    );
                  })}
                </div>
              </aside>
            </>
          )}
      </div>
    </section>
  );
};

export default CompanyProfile;
