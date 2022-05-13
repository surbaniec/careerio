import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <>
      <section className='hero'>
        <h1 className='title'>
          Logowanie do panelu pracodawcy
        </h1>
      </section>
      <div className="logreg-box">
      <div className="login-box">
        <div className="login-title">
          <h2>Dane logowania</h2>
        </div>
        <form className="form-wrapper">
        <p>Login</p>
        <input
            className='login-name'
            type='text'
            placeholder='Wpisz login...'
          />
        <p>Hasło</p>
        <input
            className='login-password'
            type='password'
            placeholder='Wpisz hasło...'
          />
       <button className="login-submit" type='submit'>Zaloguj</button>
        </form>
      </div>

      <div className="register-box">
        <div className="login-title">
          <h2>Utwórz konto</h2>
        </div>
        <form className="form-wrapper">
        <p>Login</p>
        <input
            className='login-name'
            type='text'
            placeholder='Wpisz login...'
          />
          <p>Adres email</p>
        <input
            className='login-name'
            type='text'
            placeholder='Wpisz email...'
          />
        <p>Hasło</p>
        <input
            className='login-password'
            type='password'
            placeholder='Wpisz hasło...'
          />
          <p>Powtórz hasło</p>
        <input
            className='login-password'
            type='password'
            placeholder='Wpisz ponownie hasło...'
          />
       <button className="register-submit" type='submit'>Zarejestruj się</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;
