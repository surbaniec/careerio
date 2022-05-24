import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [email, setEmail] = useState('');

  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');

  const handleLoginInput = (e) => {
    setLogin(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (login === '') {
      setLoginError('Proszę wprowadzić login');
    }

    if (email === '') {
      setEmailError('Proszę wprowadzić adres e-mail');
    }

    if (password === '') {
      setPasswordError('Proszę wprowadzić hasło');
    }

    if (password && password !== passwordRepeat) {
      setPasswordRepeatError('Podane hasła się różnią');
    }

    if (login) {
      const loginValid = login.match(/^([A-Za-z0-9]){4,20}$/gm);
      loginValid
        ? setLoginError('')
        : setLoginError(
            'Login musi składać się z 4-20 znaków oraz nie może zawierać znaków specjalnych'
          );
    }

    if (email) {
      const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      emailValid
        ? setEmailError('')
        : setEmailError('Podany adres e-mail jest niepoprawny');
    }

    if (password) {
      const passwordValid = password.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
      );
      passwordValid
        ? setPasswordError('')
        : setPasswordError(
            'Hasło musi składać się z 7-15 znaków zawierających przynajmniej jedną cyfrę i znak specjalny'
          );
    }
  };

  return (
    <>
      <section className='hero'>
        <h1 className='title'>Logowanie do panelu pracodawcy</h1>
      </section>
      <div className='logreg-box'>
        <div className='login-box'>
          <div className='login-title'>
            <h2>Dane logowania</h2>
          </div>
          <form className='form-wrapper'>
            <p>Login</p>
            <input
              className='login-name'
              type='text'
              placeholder='Wpisz login...'
              required
            />
            <p>Hasło</p>
            <input
              className='login-password'
              type='password'
              placeholder='Wpisz hasło...'
              required
            />
            <Link to='/panel-pracodawcy' className='login-submit' type='submit'>
              Zaloguj
            </Link>
          </form>
        </div>

        <div className='register-box'>
          <div className='login-title'>
            <h2>Utwórz konto</h2>
          </div>
          <form className='form-wrapper'>
            <div className='input-wrapper'>
              <p>Login</p>
              <input
                className='login-name'
                type='text'
                placeholder='Wpisz login...'
                value={login}
                onChange={handleLoginInput}
              />
              {loginError && <small className='error'>{loginError}</small>}
            </div>

            <div className='input-wrapper'>
              <p>Adres email</p>
              <input
                className='login-name'
                type='text'
                placeholder='Wpisz email...'
                value={email}
                onChange={handleEmailInput}
              />
              {emailError && <small className='error'>{emailError}</small>}
            </div>

            <div className='input-wrapper'>
              {' '}
              <p>Hasło</p>
              <input
                className='login-password'
                type='password'
                placeholder='Wpisz hasło...'
                value={password}
                onChange={handlePasswordInput}
              />
              {passwordError && (
                <small className='error'>{passwordError}</small>
              )}
            </div>

            <div className='input-wrapper'>
              {' '}
              <p>Powtórz hasło</p>
              <input
                className='login-password'
                type='password'
                placeholder='Wpisz ponownie hasło...'
                onChange={handlePasswordRepeat}
              />
              {passwordRepeatError && (
                <small className='error'>{passwordRepeatError}</small>
              )}
            </div>

            <button
              className='register-submit'
              type='submit'
              onClick={handleRegister}
            >
              Zarejestruj się
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
