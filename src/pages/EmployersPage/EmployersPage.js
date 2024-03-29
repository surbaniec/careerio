import React, { useContext, useEffect } from 'react';
import './EmployersPage.scss';
import AuthContext from '../../context/auth/authContext';
import { useState } from 'react';
import CompaniesContext from '../../context/companies/companiesContext';
import { MdDeleteOutline } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';

const EmployersPage = () => {
  const authContext = useContext(AuthContext);
  const companiesContext = useContext(CompaniesContext);

  const [technology, setTechnology] = useState('');
  const [benefit, setBenefit] = useState('');
  const [photo, setPhoto] = useState('');

  const [company, setCompany] = useState({
    id: null,
    name: '',
    url: '',
    email: '',
    country: '',
    province: '',
    postCode: '',
    city: '',
    street: '',
    dateOfStarting: '',
    numberOfEmployees: '',
    shortDescription: '',
    longDescription: '',
    industry: '',
    technologies: [],
    benefits: [],
    imageUrl: '',
    photos: [],
    relatedIndustries: '',
  });

  // On page refresh load user
  useEffect(() => {
    if (authContext.isAuthenticated === null && authContext.loading === true) {
      authContext.loadUser();
    }
    if (companiesContext.companies === null) {
      companiesContext.getCompanies();
    }
    // eslint-disable-next-line
  }, []);

  // After load user, get current logged in company
  useEffect(() => {
    if (authContext.user && companiesContext.currentCompany === null) {
      companiesContext.getCompany(authContext.user.id);
    }
    // eslint-disable-next-line
  }, [authContext.user]);

  // Save current company in state
  useEffect(() => {
    if (companiesContext.currentCompany) {
      const {
        id,
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
        id,
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
    //eslint-disable-next-line
  }, [companiesContext.currentCompany]);

  const onCompanyInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleAddValue = (e) => {
    e.preventDefault();

    if (e.target.dataset.name === 'technology') {
      if (!technology) {
        return;
      }
      const existingTechnologies = company.technologies;
      existingTechnologies.push(technology);
      setCompany({ ...company, technologies: existingTechnologies });
      setTechnology('');
      toast.success('Dodano pomyślnie!');
    }
    if (e.target.dataset.name === 'benefit') {
      if (!benefit) {
        return;
      }
      const existingBenefits = company.benefits;
      existingBenefits.push(benefit);
      setCompany({
        ...company,
        benefits: existingBenefits,
      });
      setBenefit('');
      toast.success('Dodano pomyślnie!');
    }
    if (e.target.dataset.name === 'photo') {
      if (!photo) {
        return;
      }
      if (
        photo.match(
          '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
        )
      ) {
        const existingPhotos = company.photos;
        existingPhotos.push(photo);
        setCompany({
          ...company,
          photos: existingPhotos,
        });
        setPhoto('');
        toast.success('Dodano pomyślnie!');
      }
    }
  };

  const handleDeleteValue = (e, value) => {
    e.preventDefault();

    if (e.target.dataset.name === 'technology') {
      const index = company.technologies.indexOf(value);
      if (index > -1) {
        company.technologies.splice(index, 1);
        companiesContext.updateCompany(
          companiesContext.currentCompany.id,
          company
        );
        toast.success('Usunięto pomyślnie!');
      }
    }
    if (e.target.dataset.name === 'benefit') {
      const index = company.benefits.indexOf(value);
      if (index > -1) {
        company.benefits.splice(index, 1);
        companiesContext.updateCompany(
          companiesContext.currentCompany.id,
          company
        );
        toast.success('Usunięto pomyślnie!');
      }
    }
    if (e.target.dataset.name === 'photo') {
      const index = company.photos.indexOf(value);
      if (index > -1) {
        company.photos.splice(index, 1);
        companiesContext.updateCompany(
          companiesContext.currentCompany.id,
          company
        );
        toast.success('Usunięto pomyślnie!');
      }
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

    // Validate data
    if (
      name !== '' &&
      url.match(
        '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
      ) &&
      email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
      country !== '' &&
      postCode !== '' &&
      city !== '' &&
      street !== '' &&
      longDescription !== '' &&
      shortDescription !== '' &&
      benefits.length > 0 &&
      imageUrl.match(
        '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
      ) &&
      technologies.length > 0 &&
      photos.length > 0
    ) {
      // If current company exists, update data
      if (companiesContext.currentCompany !== null) {
        companiesContext.setCurrentCompany(company);
        companiesContext.updateCompany(
          companiesContext.currentCompany.id,
          company
        );
        if (companiesContext.error === null) {
          toast.success('Uaktualniono dane!');
        } else {
          toast.error('Ups... coś poszło nie tak!');
        }

        // If current company doesn't exists, add company data
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
        if (companiesContext.error === null) {
          toast.success('Założono profil firmy!');
        } else {
          toast.error('Ups... coś poszło nie tak!');
        }
      }
    } else {
      toast.error(
        'Dane niepoprawne! Upewnij się, że wypełniłeś wszystkie pola.'
      );
    }
  };

  return (
    <>
      <div>
        <Toaster
          toastOptions={{
            className: 'toaster',
          }}
        />
      </div>
      <section className='employer-page'>
        <div className='employer-page__box'>
          <div className='employer-page__title-wrapper'>
            <h2 className='employer-page__title'>Dane podstawowe</h2>
          </div>
          <form className='employer-page__form' onSubmit={onCompanySubmit}>
            <label htmlFor='name' className='employer-page__label'>
              Nazwa firmy*
            </label>
            <input
              className='employer-page__input'
              type='text'
              placeholder='Wpisz nazwę firmy...'
              value={company.name}
              name='name'
              maxLength={20}
              onChange={onCompanyInputChange}
              required
            />
            <label htmlFor='url' className='employer-page__label'>
              Adres WWW*
            </label>
            <input
              className='employer-page__input'
              type='text'
              placeholder='Wpisz adres www firmy...'
              value={company.url}
              name='url'
              onChange={onCompanyInputChange}
              maxLength={50}
              required
            />
            <label htmlFor='email' className='employer-page__label'>
              Adres e-mail*
            </label>
            <input
              className='employer-page__input'
              type='text'
              placeholder='Wpisz adres e-mail firmy...'
              value={company.email}
              name='email'
              onChange={onCompanyInputChange}
              maxLength={20}
              required
            />
            <label htmlFor='country' className='employer-page__label'>
              Kraj*
            </label>
            <input
              className='employer-page__input'
              type='text'
              placeholder='Wpisz kraj...'
              value={company.country}
              name='country'
              onChange={onCompanyInputChange}
              maxLength={30}
              required
            />
            <label htmlFor='province' className='employer-page__label'>
              Województwo
            </label>
            <input
              className='employer-page__input'
              type='text'
              placeholder='Wpisz województwo...'
              value={company.province}
              name='province'
              onChange={onCompanyInputChange}
              maxLength={30}
            />
            <label htmlFor='postCode' className='employer-page__label'>
              Kod pocztowy*
            </label>
            <input
              className='employer-page__input'
              type='text'
              placeholder='Wpisz kod pocztowy..'
              value={company.postCode}
              name='postCode'
              onChange={onCompanyInputChange}
              maxLength={6}
              required
            />
            <label htmlFor='city' className='employer-page__label'>
              Miasto*
            </label>
            <input
              className='employer-page__input'
              type='text'
              placeholder='Wpisz miasto...'
              value={company.city}
              name='city'
              onChange={onCompanyInputChange}
              maxLength={15}
              required
            />
            <label htmlFor='street' className='employer-page__label'>
              Ulica*
            </label>
            <input
              className='employer-page__input'
              type='text'
              placeholder='Wpisz ulicę i numer budynku...'
              value={company.street}
              name='street'
              onChange={onCompanyInputChange}
              maxLength={30}
              required
            />
            <label htmlFor='dateOfStarting' className='employer-page__label'>
              Data założenia
            </label>
            <input
              className='employer-page__input'
              type='number'
              min='1900'
              max='2099'
              step='1'
              placeholder='Wpisz datę założenia firmy...'
              value={company.dateOfStarting}
              name='dateOfStarting'
              onChange={onCompanyInputChange}
            />
            <label htmlFor='numberOfEmployees' className='employer-page__label'>
              Liczba pracowników
            </label>
            <input
              className='employer-page__input'
              type='number'
              placeholder='Wpisz wielkość firmy...'
              value={company.numberOfEmployees}
              name='numberOfEmployees'
              onChange={onCompanyInputChange}
              min='1'
            />
            <button className='employer-page__btn' type='submit'>
              Zapisz zmiany
            </button>
          </form>
        </div>

        <div className='employer-page__box'>
          <div className='employer-page__title-wrapper'>
            <h2 className='employer-page__title'>Logo firmy*</h2>
          </div>
          <form className='employer-page__form' onSubmit={onCompanySubmit}>
            {/* <label htmlFor='logo'>
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
                /> */}
            <input
              className='employer-page__input'
              type='text'
              placeholder='Podaj adres url logo firmy...'
              value={company.imageUrl}
              name='imageUrl'
              onChange={onCompanyInputChange}
              required
            />
            <button className='employer-page__btn' type='submit'>
              Zapisz zmiany
            </button>
          </form>
        </div>

        <div className='employer-page__box'>
          <div className='employer-page__title-wrapper'>
            <h2 className='employer-page__title'>Dane dodatkowe</h2>
          </div>
          <form className='employer-page__form' onSubmit={onCompanySubmit}>
            <label htmlFor='shortDescription' className='employer-page__label'>
              Nagłówek firmy*
            </label>
            <textarea
              className='employer-page__textarea'
              type='textarea'
              placeholder='Opisz w jednym zdaniu swoją firmę...'
              value={company.shortDescription}
              name='shortDescription'
              onChange={onCompanyInputChange}
              maxLength='80'
              required
            />
            <label htmlFor='longDescription' className='employer-page__label'>
              O firmie*
            </label>
            <textarea
              className='employer-page__textarea'
              type='textarea'
              placeholder='Opisz swoją firmę...'
              value={company.longDescription}
              name='longDescription'
              onChange={onCompanyInputChange}
              maxLength='300'
              required
            />
            <label htmlFor='industry' className='employer-page__label'>
              Branża
            </label>
            <input
              className='employer-page__input'
              type='text'
              placeholder='Podaj branżę...'
              value={company.industry}
              name='industry'
              onChange={onCompanyInputChange}
              maxLength='50'
            />
            <label htmlFor='technologies' className='employer-page__label'>
              Używane technologie*
            </label>
            <div className='employer-page__input-wrapper'>
              <input
                className='employer-page__input'
                type='text'
                placeholder='Dodaj używane technologie przez firmę'
                value={technology}
                name='technologies'
                onChange={(e) => setTechnology(e.target.value)}
              />
              <button
                className='employer-page__add-btn'
                data-name='technology'
                onClick={handleAddValue}
              >
                Dodaj
              </button>
              <div className='employer-page__list-wrapper'>
                <ul className='employer-page__list'>
                  {company.technologies &&
                    company.technologies.map((technology, i) => {
                      return (
                        <li className='employer-page__list-item' key={i}>
                          <span className='employer-page__list-value'>
                            {technology}
                          </span>
                          <button
                            className='employer-page__list-btn'
                            data-name='technology'
                            onClick={(e) => handleDeleteValue(e, technology)}
                          >
                            <MdDeleteOutline
                              style={{
                                width: '20px',
                                height: 'auto',
                                color: '#575757',
                              }}
                            />
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <label htmlFor='benefits' className='employer-page__label'>
              Benefity i udogodnienia*
            </label>
            <div className='employer-page__input-wrapper'>
              <input
                className='employer-page__input'
                type='text'
                placeholder='Dodaj benefity'
                value={benefit}
                name='benefits'
                onChange={(e) => setBenefit(e.target.value)}
              />
              <button
                className='employer-page__add-btn'
                data-name='benefit'
                onClick={handleAddValue}
              >
                Dodaj
              </button>
              <div className='employer-page__list-wrapper'>
                <ul className='employer-page__list'>
                  {company.benefits &&
                    company.benefits.map((benefit, i) => {
                      return (
                        <li className='employer-page__list-item' key={i}>
                          <span className='employer-page__list-value'>
                            {benefit}
                          </span>
                          <button
                            className='employer-page__list-btn'
                            data-name='benefit'
                            onClick={(e) => handleDeleteValue(e, benefit)}
                          >
                            <MdDeleteOutline
                              style={{
                                width: '20px',
                                height: 'auto',
                                color: '#575757',
                              }}
                            />
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <label htmlFor='photos' className='employer-page__label'>
              Galeria firmy*
            </label>
            <div className='employer-page__input-wrapper'>
              <input
                className='employer-page__input'
                type='text'
                placeholder='Podaj adresy url do zdjęć'
                value={photo}
                name='photos'
                onChange={(e) => setPhoto(e.target.value)}
              />
              <button
                className='employer-page__add-btn'
                data-name='photo'
                onClick={handleAddValue}
              >
                Dodaj
              </button>
              <div className='employer-page__list-wrapper'>
                <ul className='employer-page__list'>
                  {company.photos &&
                    company.photos.map((photo, i) => {
                      return (
                        <li className='employer-page__list-item' key={i}>
                          <span className='employer-page__list-value'>
                            {photo}
                          </span>
                          <button
                            className='employer-page__list-btn'
                            data-name='photo'
                            onClick={(e) => handleDeleteValue(e, photo)}
                          >
                            <MdDeleteOutline
                              style={{
                                width: '20px',
                                height: 'auto',
                                color: '#575757',
                              }}
                            />
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <button className='employer-page__btn' type='submit'>
              Zapisz zmiany
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EmployersPage;
