import React, { useContext, useEffect, useState } from 'react';
import './OffersForm.scss';
import AuthContext from '../../context/auth/authContext';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { MdOutlineSpaceDashboard, MdListAlt, MdAdd } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoReceiptOutline } from 'react-icons/io5';
import { DASHBOARD, EMPLOYER_OFFERS, OFFERSFORM } from '../../Routes/routes';
import CompaniesContext from '../../context/companies/companiesContext';
import JobOffersContext from '../../context/jobOffers/jobOffersContext';
import toast, { Toaster } from 'react-hot-toast';
import DashboardMenu from '../../layout/DashboardMenu/DashboardMenu';

const employmentTypeOptions = [
  { value: '1', label: 'B2B' },
  { value: '3', label: 'Umowa o pracę' },
  { value: '2', label: 'Umowa zlecenie' },
];

const experienceLevelOptions = [
  { value: '1', label: 'Intern' },
  { value: '2', label: 'Junior' },
  { value: '3', label: 'Mid' },
  { value: '4', label: 'Senior' },
];

const workingHoursOptions = [
  { value: '2', label: 'Niepełny etat' },
  { value: '1', label: 'Pełny etat' },
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
  const companiesContext = useContext(CompaniesContext);
  const jobOfferContext = useContext(JobOffersContext);

  const [jobOffer, setJobOffer] = useState({
    experienceLevelId: 'Wybierz poziom doświadczenia',
    isRemoteRecruitment: false,
    jobTitle: '',
    requirements: [''],
    responsibilities: [''],
    salaryFrom: 0,
    salaryTo: 0,
    typeOfContractId: null,
    workingHoursID: null,
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

  const onOfferInputChange = (e) => {
    if (e.target.name === 'responsibilities') {
      const responsibilitiesArray = e.target.value.split(';');
      setJobOffer({ ...jobOffer, responsibilities: responsibilitiesArray });
    } else if (e.target.name === 'requirements') {
      const requirementsArray = e.target.value.split(';');
      setJobOffer({ ...jobOffer, requirements: requirementsArray });
    } else {
      setJobOffer({ ...jobOffer, [e.target.name]: e.target.value });
    }
  };

  const onJobOfferSubmit = (e) => {
    e.preventDefault();
    const {
      experienceLevelId,
      isRemoteRecruitment,
      jobTitle,
      requirements,
      responsibilities,
      salaryFrom,
      salaryTo,
      typeOfContractId,
      workingHoursID,
    } = jobOffer;

    if (parseInt(salaryFrom) > parseInt(salaryTo)) {
      toast.error(
        'Niepoprawne widełki płacowe! Upewnij się, że kwota początkowa nie jest wyższa od końcowej.'
      );
      return;
    }

    if (
      experienceLevelId !== null &&
      jobTitle !== '' &&
      requirements.length > 0 &&
      responsibilities.length > 0 &&
      salaryFrom > 0 &&
      typeOfContractId !== null &&
      workingHoursID !== null
    ) {
      jobOfferContext.addJobOffer({
        jobTitle,
        salaryFrom: parseInt(salaryFrom),
        salaryTo: parseInt(salaryTo),
        remoteRecruitmentId: isRemoteRecruitment ? 1 : 2,
        typeOfContractId: parseInt(typeOfContractId),
        experienceLevelId: parseInt(experienceLevelId),
        workingHoursID: parseInt(workingHoursID),
        requirements,
        responsibilities,
      });
      if (jobOfferContext.error === null) {
        toast.success('Oferta pracy dodana pomyślnie!');
      } else if (
        jobOfferContext.error?.data ===
        'Brak firmy powiązanej z zalogowanym użytkownikiem'
      ) {
        toast.error('Aby dodać ofertę pracy stwórz profil firmy!');
      } else {
        toast.error('Ups.. coś poszło nie tak!');
      }

      setJobOffer({
        experienceLevelId: null,
        isRemoteRecruitment: false,
        jobTitle: '',
        requirements: [''],
        responsibilities: [''],
        salaryFrom: 0,
        salaryTo: 0,
        typeOfContractId: null,
        workingHoursID: null,
      });
    } else {
      toast.error('Dane niepoprawne!');
    }
  };

  return (
    <section className='offers-form'>
      <div>
        <Toaster
          toastOptions={{
            className: 'toaster',
          }}
        />
      </div>
      <DashboardMenu />
      <div className='offers-form__page-wrapper'>
        <div className='offers-form__box-wrapper'>
          <div className='offers-form__box'>
            <div className='offers-form__title-wrapper'>
              <h2 className='offers-form__title'>
                Dodaj lub edytuj ogłoszenie
              </h2>
            </div>
            <form className='offers-form__form' onSubmit={onJobOfferSubmit}>
              <label htmlFor='jobTitle' className='offers-form__label'>
                Nazwa stanowiska
              </label>
              <input
                className='offers-form__input'
                type='text'
                name='jobTitle'
                placeholder='Wpisz nazwę stanowiska...'
                value={jobOffer.jobTitle}
                onChange={onOfferInputChange}
              />
              <label htmlFor='experienceLevel' className='offers-form__label'>
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
                  value: '',
                }}
                onChange={(e) => {
                  setJobOffer({
                    ...jobOffer,
                    experienceLevelId: e.value,
                  });
                }}
              />
              <label htmlFor='employmentType' className='offers-form__label'>
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
                  value: '',
                }}
                onChange={(e) => {
                  setJobOffer({
                    ...jobOffer,
                    typeOfContractId: e.value,
                  });
                }}
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
                  value: '',
                }}
                onChange={(e) => {
                  setJobOffer({
                    ...jobOffer,
                    workingHoursID: e.value,
                  });
                }}
              />
              <p className='offers-form__p'>Widełki płacowe (B2B nett)</p>
              <label htmlFor='salaryFrom' className='offers-form__label inline'>
                Od:{' '}
              </label>
              <input
                className='offers-form__input'
                type='number'
                name='salaryFrom'
                id='salaryFrom'
                min={0}
                max={50000}
                value={jobOffer.salaryFrom}
                onChange={onOfferInputChange}
                required
              />

              <label htmlFor='salaryTo' className='offers-form__label inline'>
                Do:{' '}
              </label>
              <input
                className='offers-form__input'
                type='number'
                name='salaryTo'
                id='salaryTo'
                min={0}
                max={50000}
                value={jobOffer.salaryTo}
                onChange={onOfferInputChange}
              />

              <label htmlFor='responsibilities' className='offers-form__label'>
                Zakres obowiązków
              </label>
              <textarea
                className='offers-form__textarea'
                type='textarea'
                name='responsibilities'
                placeholder='Wpisz zakres obowiązków, rozdzielając średnikami...'
                value={jobOffer.responsibilities}
                onChange={onOfferInputChange}
              />
              <label htmlFor='requirements' className='offers-form__label'>
                Wymagania wobec kandydata
              </label>
              <textarea
                className='offers-form__textarea'
                type='textarea'
                name='requirements'
                placeholder='Wpisz wymagania wobec kandydata, rozdzielając średnikami...'
                value={jobOffer.requirements}
                onChange={onOfferInputChange}
              />

              <label
                className='offers-form__label inline'
                htmlFor='isRemoteRecruitment'
              >
                Rekrutacja zdalna
              </label>
              <input
                className='offers-form__checkbox'
                type='checkbox'
                name='isRemoteRecruitment'
                id='remoteRecruitment'
                onChange={(e) => {
                  setJobOffer({
                    ...jobOffer,
                    isRemoteRecruitment: e.target.checked,
                  });
                }}
              />

              <button className='offers-form__btn' type='submit'>
                Zapisz zmiany
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersForm;
