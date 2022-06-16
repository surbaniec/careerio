import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.scss';
// import { register } from '../../actions/authActions';

const Login = (props, { isAuthenticated }) => {
  const { history } = props;

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }, [isAuthenticated, history]);

  // register form
  const [user, setUser] = useState({
    login: '',
    email: '',
    password: '',
    password2: '',
  });

  const { login, email, password, password2 } = user;

  // login form
  const [loggingUser, setLoggingUser] = useState({
    email: '',
    password: '',
  });

  // errors
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');

  const onRegisterInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerFormValidation = () => {
    setLoginError('');
    setPasswordError('');
    setEmailError('');
    setPasswordRepeatError('');

    if (login === '') {
      setLoginError('Proszę wprowadzić login');
      return false;
    }

    if (email === '') {
      setEmailError('Proszę wprowadzić adres e-mail');
      return false;
    }

    if (password === '') {
      setPasswordError('Proszę wprowadzić hasło');
      return false;
    }

    if (password && password !== password2) {
      setPasswordRepeatError('Podane hasła się różnią');
      return false;
    }

    if (login) {
      const loginValid = login.match(/^([A-Za-z0-9]){4,20}$/gm);

      if (loginValid) {
        setLoginError('');
      } else {
        setLoginError(
          'Login musi składać się z 4-20 znaków oraz nie może zawierać znaków specjalnych'
        );
        return false;
      }
    }

    if (email) {
      const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

      if (emailValid) {
        setEmailError('');
      } else {
        setEmailError('Podany adres e-mail jest niepoprawny');
        return false;
      }
    }

    if (password) {
      const passwordValid = password.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
      );
      if (passwordValid) {
        setPasswordError('');
      } else {
        setPasswordError(
          'Hasło musi składać się z 7-15 znaków zawierających przynajmniej jedną cyfrę i znak specjalny'
        );
        return false;
      }
    }
    return true;
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    const isValid = registerFormValidation();

    if (isValid) {
      console.log('rejestrowanie...');
      // register({
      //   login,
      //   email,
      //   password,
      // });
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
          <form className='form-wrapper' onSubmit={onRegisterSubmit}>
            <div className='input-wrapper'>
              <p>Login</p>
              <input
                className='login-name'
                type='text'
                placeholder='Wpisz login...'
                name='login'
                value={login}
                onChange={onRegisterInputChange}
              />
              {loginError && <small className='error'>{loginError}</small>}
            </div>

            <div className='input-wrapper'>
              <p>Adres email</p>
              <input
                className='login-name'
                type='text'
                placeholder='Wpisz email...'
                name='email'
                value={email}
                onChange={onRegisterInputChange}
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
                name='password'
                value={password}
                onChange={onRegisterInputChange}
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
                name='password2'
                value={password2}
                onChange={onRegisterInputChange}
              />
              {passwordRepeatError && (
                <small className='error'>{passwordRepeatError}</small>
              )}
            </div>

            <button className='register-submit' type='submit'>
              Zarejestruj się
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.isAuthenticated };
};

export default connect(mapStateToProps)(Login);
