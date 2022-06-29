import React, { useContext, useEffect } from 'react';
import './EmployersPage.scss';
import AuthContext from '../../context/auth/authContext';

const EmployersPage = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className='top'></section>
      <div className='employers-page-wrapper'>
        <div className='left-wrap'>
          <div className='icon'>
            <p>Profil pracodawcy</p>
          </div>
          <div className='icon'>
            <p>Panel pracodawcy</p>
          </div>
          <div className='icon'>
            <p>Artykuły</p>
          </div>
          <div className='icon'>
            <p>Oferty pracy</p>
          </div>
          <div className='icon'>
            <p>Faktury</p>
          </div>
        </div>
        <div className='right-wrap'>
          <div className='logreg-box2'>
            <div className='login-box2'>
              <div className='login-title'>
                <h2>Dane podstawowe</h2>
              </div>
              <form className='form-wrapper'>
                <p>Nazwa firmy</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz nazwę firmy...'
                  maxLength={20}
                />
                <p>Adres WWW</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz adres www firmy...'
                  maxLength={20}
                />
                <p>Lokalizacja</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz lokalizację firmy...'
                  maxLength={30}
                />
                <p>Data założenia</p>
                <input
                  className='login-name'
                  type='date'
                  placeholder='Wpisz datę założenia firmy...'
                />
                <p>Wielkość firmy</p>
                <input
                  className='login-name'
                  type='number'
                  placeholder='Wpisz wielkość firmy...'
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
                <p>
                  Format:{' '}
                  <span className='light'>PNG, JPG, mniejsze niż 4 MB</span>
                </p>
                <button className='login-submit' type='submit'>
                  Dodaj
                </button>
              </form>
            </div>

            <div className='register-box2'>
              <div className='login-title'>
                <h2>Dane dodatkowe</h2>
              </div>
              <form className='form-wrapper'>
                <p>O firmie</p>
                <textarea
                  className='login-name'
                  type='textarea'
                  placeholder='Opisz swoją firmę...'
                />
                <p>Używane technologie</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz używane technologie firmy...'
                />
                <p>Benefity i udogodnienia</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz benefity firmy...'
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
