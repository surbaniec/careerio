import React, { useContext, useEffect } from 'react';
import './EmployersPage.scss';
import AuthContext from '../../context/auth/authContext';
import { useState } from 'react';
import CompaniesContext from '../../context/companies/companiesContext';
import { Link } from 'react-router-dom';
import { MdOutlineSpaceDashboard, MdListAlt, MdAdd } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoReceiptOutline } from 'react-icons/io5';
import { DASHBOARD, EMPLOYER_OFFERS, OFFERSFORM } from '../../Routes/routes';

const EmployersPage = () => {
  const authContext = useContext(AuthContext);
  const companiesContext = useContext(CompaniesContext);

  // Company details
  const [company, setCompany] = useState({
    name: '',
    url: '',
    email: '',
    country: '',
    province: '',
    postCode: '',
    city: '',
    street: '',
    dateOfStarting: 0,
    numberOfEmployees: 0,
    shortDescription: '',
    longDescription: '',
    industry: '',
    technologies: [''],
    benefits: [''],
    imageUrl: '',
    photos: [''],
    relatedIndustries: [''],
  });

  useEffect(() => {
    if (authContext.isAuthenticated === null && authContext.loading === true) {
      authContext.loadUser();
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (authContext.user && companiesContext.currentCompany === null) {
      companiesContext.getCompany(authContext.user.id);
    }
    // eslint-disable-next-line
  }, [authContext.user]);

  useEffect(() => {
    if (companiesContext.currentCompany) {
      const {
        name,
        url,
        email,
        country,
        province,
        postCode,
        city,
        street,
        dateOfStarting,
        shortDescription,
        longDescription,
        industry,
        imageUrl,
        photos,
        benefits,
        technologies,
        numberOfEmployees,
        relatedIndustries,
      } = companiesContext.currentCompany;
      setCompany({
        name,
        url,
        email,
        country,
        province,
        postCode,
        city,
        street,
        dateOfStarting,
        shortDescription,
        longDescription,
        industry,
        imageUrl,
        photos,
        benefits,
        technologies,
        numberOfEmployees,
        relatedIndustries,
      });
    }
  }, [companiesContext.currentCompany]);

  const onCompanyInputChange = (e) => {
    if (e.target.name === 'technologies') {
      const technologiesArray = e.target.value.split(';');
      setCompany({ ...company, technologies: technologiesArray });
    } else if (e.target.name === 'benefits') {
      const benefitsArray = e.target.value.split(';');
      setCompany({ ...company, benefits: benefitsArray });
    } else {
      setCompany({ ...company, [e.target.name]: e.target.value });
    }
  };

  const onCompanySubmit = (e) => {
    e.preventDefault();

    const {
      name,
      url,
      email,
      country,
      province,
      postCode,
      city,
      street,
      dateOfStarting,
      shortDescription,
      longDescription,
      industry,
      imageUrl,
      photos,
      benefits,
      technologies,
      numberOfEmployees,
      relatedIndustries,
    } = company;

    if (
      name !== '' &&
      email !== '' &&
      country !== '' &&
      postCode !== '' &&
      city !== '' &&
      street !== '' &&
      shortDescription !== '' &&
      benefits.length > 0 &&
      technologies.length > 0
    ) {
      if (companiesContext.currentCompany) {
        companiesContext.updateCompany(
          companiesContext.currentCompany.id,
          company
        );
      } else {
        companiesContext.addCompany({
          name,
          url,
          email,
          country,
          province,
          postCode,
          city,
          street,
          dateOfStarting,
          shortDescription,
          longDescription,
          industry,
          photos,
          benefits,
          technologies,
          numberOfEmployees,
          imageUrl,
          relatedIndustries,
        });
      }
    } else {
      console.log('walidacja niepomyslna');
    }
  };

  return (
    <>
      <section className='top'></section>
      <div className='employers-page-wrapper'>
        <div className='left-wrap'>
          <ul className='dashboard-menu'>
            <li className='dashboard-menu__item'>
              <Link to='' className='dashboard-menu__link'>
                <div className='dashboard-menu__tile'>
                  <MdOutlineSpaceDashboard
                    style={{ width: '20px', height: 'auto', color: '#fff' }}
                  />
                  <span>Panel pracodawcy</span>
                </div>
              </Link>
            </li>
            <li className='dashboard-menu__item'>
              <Link
                to={DASHBOARD}
                className='dashboard-menu__link dashboard-menu__link--active'
              >
                <div className='dashboard-menu__tile dashboard-menu__tile--active'>
                  <CgProfile
                    style={{ width: '20px', height: 'auto', color: '#575757' }}
                  />
                  <span>Profil pracodawcy</span>
                </div>
              </Link>
            </li>
            <li className='dashboard-menu__item'>
              <Link to={EMPLOYER_OFFERS} className='dashboard-menu__link'>
                <div className='dashboard-menu__tile'>
                  <MdListAlt
                    style={{ width: '20px', height: 'auto', color: '#fff' }}
                  />

                  <span>Oferty pracy</span>
                </div>
              </Link>
            </li>
            <li className='dashboard-menu__item'>
              <Link to={OFFERSFORM} className='dashboard-menu__link'>
                <div className='dashboard-menu__tile'>
                  <MdAdd
                    style={{ width: '20px', height: 'auto', color: '#fff' }}
                  />
                  <span>Dodaj ofertę</span>
                </div>
              </Link>
            </li>
            <li className='dashboard-menu__item'>
              <Link to='' className='dashboard-menu__link'>
                <div className='dashboard-menu__tile'>
                  <IoReceiptOutline
                    style={{ width: '20px', height: 'auto', color: '#fff' }}
                  />
                  <span>Faktury</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className='right-wrap'>
          <div className='logreg-box2'>
            <div className='login-box2'>
              <div className='login-title'>
                <h2>Dane podstawowe</h2>
              </div>
              <form className='form-wrapper' onSubmit={onCompanySubmit}>
                <p>Nazwa firmy</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz nazwę firmy...'
                  value={company.name}
                  name='name'
                  maxLength={20}
                  onChange={onCompanyInputChange}
                  required
                />
                <p>Adres WWW</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz adres www firmy...'
                  value={company.url}
                  name='url'
                  onChange={onCompanyInputChange}
                  maxLength={20}
                />
                <p>Adres e-mail</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz adres e-mail firmy...'
                  value={company.email}
                  name='email'
                  onChange={onCompanyInputChange}
                  maxLength={20}
                  required
                />
                <p>Kraj</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz kraj...'
                  value={company.country}
                  name='country'
                  onChange={onCompanyInputChange}
                  maxLength={30}
                  required
                />
                <p>Województwo</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz województwo...'
                  value={company.province}
                  name='province'
                  onChange={onCompanyInputChange}
                  maxLength={30}
                />
                <p>Kod pocztowy</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz kod pocztowy..'
                  value={company.postCode}
                  name='postCode'
                  onChange={onCompanyInputChange}
                  maxLength={30}
                  required
                />
                <p>Miasto</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz miasto...'
                  value={company.city}
                  name='city'
                  onChange={onCompanyInputChange}
                  maxLength={30}
                  required
                />
                <p>Ulica</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz ulicę i numer budynku...'
                  value={company.street}
                  name='street'
                  onChange={onCompanyInputChange}
                  maxLength={30}
                  required
                />
                <p>Data założenia</p>
                <input
                  className='login-name'
                  type='number'
                  min='1900'
                  max='2099'
                  step='1'
                  placeholder='Wpisz datę założenia firmy...'
                  value={company.dateOfStarting}
                  name='dateOfStarting'
                  onChange={onCompanyInputChange}
                />
                <p>Liczba pracowników</p>
                <input
                  className='login-name'
                  type='number'
                  placeholder='Wpisz wielkość firmy...'
                  value={company.numberOfEmployees}
                  name='numberOfEmployees'
                  onChange={onCompanyInputChange}
                  min='1'
                />
                <button className='login-submit' type='submit'>
                  Zapisz zmiany
                </button>
              </form>
            </div>

            <div className='logo-box'>
              <div className='login-title'>
                <h2>Logo firmy</h2>
              </div>
              <form className='form-wrapper'>
                <label htmlFor='logo'>
                  Format: <span className='light'>PNG, JPG, JPEG</span>
                </label>
                <input
                  className='company-logo-input'
                  type='file'
                  name='imageUrl'
                  accept='.jpg, .png, .jpeg'
                  onChange={(e) =>
                    setCompany({ ...company, logo: e.target.files[0] })
                  }
                />
              </form>
            </div>

            <div className='register-box2'>
              <div className='login-title'>
                <h2>Dane dodatkowe</h2>
              </div>
              <form className='form-wrapper' onSubmit={onCompanySubmit}>
                <p>O firmie</p>
                <textarea
                  className='login-name'
                  type='textarea'
                  placeholder='Opisz swoją firmę...'
                  value={company.shortDescription}
                  name='shortDescription'
                  onChange={onCompanyInputChange}
                  required
                />
                <p>Branża</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Podaj branżę...'
                  value={company.industry}
                  name='industry'
                  onChange={onCompanyInputChange}
                />
                <p>Używane technologie</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wypisz używane technologie firmy oddzielając je średnikiem'
                  value={company.technologies}
                  name='technologies'
                  onChange={onCompanyInputChange}
                  required
                />
                <p>Benefity i udogodnienia</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz benefity firmy oddzielając je średnikiem'
                  value={company.benefits}
                  name='benefits'
                  onChange={onCompanyInputChange}
                  required
                />
                <button className='login-submit' type='submit'>
                  Zapisz zmiany
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployersPage;
