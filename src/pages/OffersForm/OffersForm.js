import React, { useContext, useEffect } from 'react';
import './OffersForm.scss';
import AuthContext from '../../context/auth/authContext';

const OffersForm = () => {

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
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz poziom doświadczenia...'
                />
                <p>Rodzaj umowy</p>
                <input
                  className='login-name'
                  type='text'
                  placeholder='Wpisz rodzaj umowy...'
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
                <p>Benefity</p>
                <textarea
                  className='login-name'
                  type='textarea'
                  placeholder='Wpisz benefity, rozdzielając średnikami...'
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
