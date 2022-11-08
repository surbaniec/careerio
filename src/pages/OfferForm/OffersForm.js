import React, { useContext, useEffect, useState } from 'react';
import './OffersForm.scss';
import AuthContext from '../../context/auth/authContext';
import Select from 'react-select';
import CompaniesContext from '../../context/companies/companiesContext';
import JobOffersContext from '../../context/jobOffers/jobOffersContext';
import toast, { Toaster } from 'react-hot-toast';
import DashboardMenu from '../../layout/DashboardMenu/DashboardMenu';
import { MdDeleteOutline } from 'react-icons/md';

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
  const jobOffersContext = useContext(JobOffersContext);

  const [jobOffer, setJobOffer] = useState({
    experienceLevelId: 'Wybierz poziom doświadczenia',
    isRemoteRecruitment: false,
    jobTitle: '',
    requirements: [],
    responsibilities: [],
    salaryFrom: 0,
    salaryTo: 0,
    typeOfContractId: null,
    workingHoursID: null,
  });

  const [responsibility, setResponsibility] = useState('');
  const [requirement, setRequirement] = useState('');

  useEffect(() => {
    if (authContext.isAuthenticated === null && authContext.loading === true) {
      authContext.loadUser();
    }
    companiesContext.getCompanies();
    jobOffersContext.getJobOffers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (authContext.user && companiesContext.currentCompany === null) {
      companiesContext.getCompany(authContext.user.id);
    }
    // eslint-disable-next-line
  }, [authContext.user]);

  const handleAddValue = (e) => {
    e.preventDefault();

    if (e.target.dataset.name === 'responsibility') {
      if (!responsibility) {
        return;
      }
      const existingResponsibilities = jobOffer.responsibilities;
      existingResponsibilities.push(responsibility);
      setJobOffer({ ...jobOffer, responsibilities: existingResponsibilities });
      setResponsibility('');
      toast.success('Dodano pomyślnie!');
    }
    if (e.target.dataset.name === 'requirement') {
      if (!requirement) {
        return;
      }
      const existingRequirements = jobOffer.requirements;
      existingRequirements.push(requirement);
      setJobOffer({
        ...jobOffer,
        requirements: existingRequirements,
      });
      setRequirement('');
      toast.success('Dodano pomyślnie!');
    }
  };

  const handleDeleteValue = (e, value) => {
    e.preventDefault();

    if (e.target.dataset.name === 'responsibility') {
      const index = jobOffer.responsibilities.indexOf(value);
      if (index > -1) {
        jobOffer.responsibilities.splice(index, 1);
        setJobOffer({
          ...jobOffer,
        });
        toast.success('Usunięto pomyślnie!');
      }
    }
    if (e.target.dataset.name === 'requirement') {
      const index = jobOffer.requirements.indexOf(value);

      if (index > -1) {
        jobOffer.requirements.splice(index, 1);
        setJobOffer({
          ...jobOffer,
        });
        toast.success('Usunięto pomyślnie!');
      }
    }
  };

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
      jobOffersContext.addJobOffer({
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
      toast.error('Uzupełnij poprawnie wszystkie wymagane dane!');
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
                Nazwa stanowiska*
              </label>
              <input
                className='offers-form__input'
                type='text'
                name='jobTitle'
                placeholder='Wpisz nazwę stanowiska...'
                value={jobOffer.jobTitle}
                onChange={onOfferInputChange}
                required
                maxLength={30}
              />
              <label htmlFor='experienceLevel' className='offers-form__label'>
                Poziom doświadczenia*
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
                Rodzaj umowy*
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
                Wymiar czasu pracy*
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
              <p className='offers-form__p'>Widełki płacowe (PLN)</p>
              <label htmlFor='salaryFrom' className='offers-form__label inline'>
                Od:*
              </label>
              <input
                className='offers-form__input'
                type='number'
                name='salaryFrom'
                id='salaryFrom'
                min={0}
                max={100000}
                value={jobOffer.salaryFrom}
                onChange={onOfferInputChange}
                required
              />

              <label htmlFor='salaryTo' className='offers-form__label inline'>
                Do:*
              </label>
              <input
                className='offers-form__input'
                type='number'
                name='salaryTo'
                id='salaryTo'
                min={0}
                max={500000}
                value={jobOffer.salaryTo}
                onChange={onOfferInputChange}
                required
              />

              {/* <label htmlFor='responsibilities' className='offers-form__label'>
                Zakres obowiązków*
              </label>
              <textarea
                className='offers-form__textarea'
                type='textarea'
                name='responsibilities'
                placeholder='Wpisz zakres obowiązków, rozdzielając średnikami...'
                value={jobOffer.responsibilities}
                onChange={onOfferInputChange}
                required
              /> */}
              <label htmlFor='responsibilities' className='offers-form__label'>
                Zakres obowiązków*
              </label>
              <div className='offers-form__input-wrapper'>
                <input
                  className='offers-form__input'
                  type='text'
                  placeholder='Dodaj wymaganie...'
                  value={responsibility}
                  name='responsibilities'
                  onChange={(e) => setResponsibility(e.target.value)}
                />
                <button
                  className='offers-form__add-btn'
                  data-name='responsibility'
                  onClick={handleAddValue}
                >
                  Dodaj
                </button>
                <div className='offers-form__list-wrapper'>
                  <ul className='offers-form__list'>
                    {jobOffer.responsibilities &&
                      jobOffer.responsibilities.map((responsibility, i) => {
                        return (
                          <li className='offers-form__list-item' key={i}>
                            <span className='offers-form__list-value'>
                              {responsibility}
                            </span>
                            <button
                              className='offers-form__list-btn'
                              data-name='responsibility'
                              onClick={(e) =>
                                handleDeleteValue(e, responsibility)
                              }
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
              {/* <label htmlFor='requirements' className='offers-form__label'>
                Wymagania wobec kandydata*
              </label>
              <textarea
                className='offers-form__textarea'
                type='textarea'
                name='requirements'
                placeholder='Wpisz wymagania wobec kandydata, rozdzielając średnikami...'
                value={jobOffer.requirements}
                onChange={onOfferInputChange}
                required
              /> */}
              <label htmlFor='requirements' className='offers-form__label'>
                Wymagania wobec kandydata*
              </label>
              <div className='offers-form__input-wrapper'>
                <input
                  className='offers-form__input'
                  type='text'
                  placeholder='Dodaj wymaganie...'
                  value={requirement}
                  name='requirements'
                  onChange={(e) => setRequirement(e.target.value)}
                />
                <button
                  className='offers-form__add-btn'
                  data-name='requirement'
                  onClick={handleAddValue}
                >
                  Dodaj
                </button>
                <div className='offers-form__list-wrapper'>
                  <ul className='offers-form__list'>
                    {jobOffer.requirements &&
                      jobOffer.requirements.map((requirement, i) => {
                        return (
                          <li className='offers-form__list-item' key={i}>
                            <span className='offers-form__list-value'>
                              {requirement}
                            </span>
                            <button
                              className='offers-form__list-btn'
                              data-name='requirement'
                              onClick={(e) => handleDeleteValue(e, requirement)}
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
