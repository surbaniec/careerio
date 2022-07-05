import React, { useContext, useEffect, useState } from 'react';
import './OffersForm.scss';
import AuthContext from '../../context/auth/authContext';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { MdOutlineSpaceDashboard, MdListAlt, MdAdd } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoReceiptOutline } from 'react-icons/io5';

const employmentTypeOptions = [
  { value: 'b2b', label: 'B2B' },
  { value: 'uop', label: 'Umowa o pracę' },
  { value: 'uz', label: 'Umowa zlecenie' },
];

const experienceLevelOptions = [
  { value: 'junior', label: 'Junior' },
  { value: 'mid', label: 'Mid' },
  { value: 'Senior', label: 'Senior' },
];

const workingHoursOptions = [
  { value: 'part-time', label: 'Niepełny etat' },
  { value: 'fulltime', label: 'Pełny etat' },
];

const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: '1rem',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#575757',

    '@media(min-width: 768px)': {
      fontSize: '1.2rem',
    },
    '@media(min-width: 1200px)': {
      fontSize: '1.4rem',
    },
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    display: 'flex',
    height: '40px',
    backgroundColor: '#e8e8e8',
    border: '1px solid #f3f3f3',
    borderRadius: '10px',
    padding: '5px',
    marginTop: '5px',
    marginRight: '5px',
    fontSize: '1rem',
    lineHeight: '1.75rem',
    color: '#575757',
    cursor: 'pointer',

    '@media(min-width: 768px)': {
      fontSize: '1.2rem',
      width: '200px',
    },

    '@media(min-width: 1200px)': {
      marginTop: '5px',
      height: '50px',
      padding: '5px',
      fontSize: '1.6rem',
      width: '300px',
    },
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = '#575757';

    return { ...provided, opacity, transition, color };
  },
};

const OffersForm = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className='offers-form'>
        <div className='offers-form__page-wrapper'>
          <div className='offers-form__left-wrap'>
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
                <Link to='' className='dashboard-menu__link '>
                  <div className='dashboard-menu__tile '>
                    <CgProfile
                      style={{ width: '20px', height: 'auto', color: '#fff' }}
                    />
                    <span>Profil pracodawcy</span>
                  </div>
                </Link>
              </li>
              <li className='dashboard-menu__item'>
                <Link to='' className='dashboard-menu__link'>
                  <div className='dashboard-menu__tile'>
                    <MdListAlt
                      style={{ width: '20px', height: 'auto', color: '#fff' }}
                    />

                    <span>Oferty pracy</span>
                  </div>
                </Link>
              </li>
              <li className='dashboard-menu__item'>
                <Link
                  to=''
                  className='dashboard-menu__link dashboard-menu__link--active'
                >
                  <div className='dashboard-menu__tile dashboard-menu__tile--active'>
                    <MdAdd
                      style={{
                        width: '20px',
                        height: 'auto',
                        color: '#575757',
                      }}
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
          <div className='offers-form__right-wrap'>
            <div className='offers-form__box-wrapper'>
              <div className='offers-form__box'>
                <div className='offers-form__title-wrapper'>
                  <h2 className='offers-form__title'>
                    Dodaj lub edytuj ogłoszenie
                  </h2>
                </div>
                <form className='offers-form__form'>
                  <label htmlFor='jobPosition' className='offers-form__label'>
                    Nazwa stanowiska
                  </label>
                  <input
                    className='offers-form__input'
                    type='text'
                    name='jobPosition'
                    placeholder='Wpisz nazwę stanowiska...'
                  />
                  <label
                    htmlFor='experienceLevel'
                    className='offers-form__label'
                  >
                    Poziom doświadczenia
                  </label>
                  <Select
                    name='experienceLevel'
                    options={experienceLevelOptions}
                    styles={selectStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    defaultValue={{
                      label: 'Wybierz poziom doświadczenia',
                      value: null,
                    }}
                    // onChange={(e) =>
                    //   setEmploymentOption({ value: e.value, label: e.label })
                    // }
                  />
                  <label
                    htmlFor='employmentType'
                    className='offers-form__label'
                  >
                    Rodzaj umowy
                  </label>
                  <Select
                    name='employmentType'
                    options={employmentTypeOptions}
                    styles={selectStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    defaultValue={{
                      label: 'Wybierz rodzaj umowy',
                      value: null,
                    }}
                    // onChange={(e) =>
                    //   setEmploymentOption({ value: e.value, label: e.label })
                    // }
                  />
                  <label htmlFor='workingHours' className='offers-form__label'>
                    Wymiar czasu pracy
                  </label>
                  <Select
                    name='workingHours'
                    options={workingHoursOptions}
                    styles={selectStyles}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    defaultValue={{
                      label: 'Wybierz wymiar czasu pracy',
                      value: null,
                    }}
                    // onChange={(e) =>
                    //   setEmploymentOption({ value: e.value, label: e.label })
                    // }
                  />
                  <p className='offers-form__p'>Widełki płacowe</p>
                  <label
                    htmlFor='salaryFrom'
                    className='offers-form__label inline'
                  >
                    Od:{' '}
                  </label>
                  <input
                    className='offers-form__input'
                    type='number'
                    name='salaryFrom'
                    id='salaryFrom'
                    min={0}
                    max={50000}
                    required
                  />

                  <label
                    htmlFor='salaryTo'
                    className='offers-form__label inline'
                  >
                    Do:{' '}
                  </label>
                  <input
                    className='offers-form__input'
                    type='number'
                    name='salaryTo'
                    id='salaryTo'
                    min={0}
                    max={50000}
                  />

                  <label htmlFor='jobDuties' className='offers-form__label'>
                    Zakres obowiązków
                  </label>
                  <textarea
                    className='offers-form__textarea'
                    type='textarea'
                    name='jobDuties'
                    placeholder='Wpisz zakres obowiązków, rozdzielając średnikami...'
                  />
                  <label
                    htmlFor='jobRequirements'
                    className='offers-form__label'
                  >
                    Wymagania wobec kandydata
                  </label>
                  <textarea
                    className='offers-form__textarea'
                    type='textarea'
                    name='jobRequirements'
                    placeholder='Wpisz wymagania wobec kandydata, rozdzielając średnikami...'
                  />

                  <label
                    className='offers-form__label inline'
                    htmlFor='remoteRecruitment'
                  >
                    Rekrutacja zdalna
                  </label>
                  <input
                    className='offers-form__checkbox'
                    type='checkbox'
                    name='remoteRecruitment'
                    id='remoteRecruitment'
                  />

                  <button className='offers-form__btn' type='submit'>
                    Zapisz zmiany
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffersForm;
