import React, { useContext, useEffect, useState } from 'react';
import './OffersForm.scss';
import AuthContext from '../../context/auth/authContext';
import Select from 'react-select';

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
      <section className='top'></section>
      <div className='offersform-page-wrapper'>
        <div className='left-wrap'>
          <div className='icons'>
            <p>Profil pracodawcy</p>
          </div>
          <div className='icons'>
            <p>Panel pracodawcy</p>
          </div>
          <div className='icons'>
            <p>Artykuły</p>
          </div>
          <div className='icons'>
            <p>Oferty pracy</p>
          </div>
          <div className='icons'>
            <p>Faktury</p>
          </div>
        </div>
        <div className='right-wrap'>
          <div className='big-box2'>
            <div className='offer-box2'>
              <div className='login-title'>
                <h2>Dodaj lub edytuj ogłoszenie</h2>
              </div>
              <form className='form-wrapper'>
                <p>Nazwa stanowiska</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz nazwę stanowiska...'
                />
                <p>Poziom doświadczenia</p>
                <Select
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
                <p>Rodzaj umowy</p>
                <Select
                  options={employmentTypeOptions}
                  styles={selectStyles}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  defaultValue={{ label: 'Wybierz rodzaj umowy', value: null }}
                  // onChange={(e) =>
                  //   setEmploymentOption({ value: e.value, label: e.label })
                  // }
                />
                <p>Wymiar czasu pracy</p>
                <Select
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
                <p>Widełki płacowe</p>
                <label htmlFor='salaryFrom'>Od: </label>
                <input
                  type='number'
                  name='salaryFrom'
                  id='salaryFrom'
                  min={0}
                  max={50000}
                  required
                />

                <label htmlFor='salaryTo'>Do: </label>
                <input
                  type='number'
                  name='salaryTo'
                  id='salaryTo'
                  min={0}
                  max={50000}
                />

                <p>Zakres obowiązków</p>
                <textarea
                  className='login-name'
                  type='textarea'
                  placeholder='Wpisz zakres obowiązków, rozdzielając średnikami...'
                />
                <p>Wymagania wobec kandydata</p>
                <textarea
                  className='login-name'
                  type='textarea'
                  placeholder='Wpisz wymagania wobec kandydata, rozdzielając średnikami...'
                />

                <label
                  className='offers-form__label'
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

export default OffersForm;
