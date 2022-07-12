import React, { useEffect, useState, useContext } from 'react';
import './Login.scss';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD } from '../../Routes/routes';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { register, error, isAuthenticated, loginUser } = authContext;
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(DASHBOARD);
    }

    if (error?.Email) {
      toast.error('Podany email jest już zajęty!');
    }

    if (error?.Login) {
      toast.error('Podany login jest już zajęty!');
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

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
    login: '',
    password: '',
  });

  const loggingLogin = loggingUser.login;
  const loggingPassword = loggingUser.password;

  const onRegisterInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerFormValidation = () => {
    if (password && password !== password2) {
      toast.error('Podane hasła się różnią!');
      return false;
    }

    if (login) {
      const loginValid = login.match(/^([A-Za-z0-9]){4,20}$/gm);

      if (!loginValid) {
        toast.error(
          'Login musi składać się z 4-20 znaków oraz nie może zawierać znaków specjalnych'
        );
        return false;
      }
    }

    if (email) {
      const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

      if (!emailValid) {
        toast.error('Podany adres e-mail jest niepoprawny');
        return false;
      }
    }

    if (password) {
      const passwordValid = password.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
      );
      if (!passwordValid) {
        toast.error(
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
      register({
        login,
        email,
        password,
      });
    }
  };

  const onLoginInputChange = (e) => {
    setLoggingUser({ ...loggingUser, [e.target.name]: e.target.value });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    const login = loggingLogin;
    const password = loggingPassword;
    loginUser({ login, password });
    if (authContext.error === 'Niepoprawny login lub hasło.') {
      toast.error('Niepoprawny login lub hasło!');
    }
  };

  return (
    <>
      <section className='hero'>
        <div>
          <Toaster
            toastOptions={{
              className: 'toaster',
            }}
          />
        </div>
        <h1 className='title'>Logowanie do panelu pracodawcy</h1>
      </section>
      <div className='logreg-box'>
        <div className='login-box'>
          <div className='login-title'>
            <h2>Dane logowania</h2>
          </div>
          <form className='form-wrapper' onSubmit={onLoginSubmit}>
            <p>Login</p>
            <input
              className='login-name'
              type='text'
              placeholder='Wpisz login...'
              name='login'
              value={loggingUser.login}
              onChange={onLoginInputChange}
              required
            />
            <p>Hasło</p>
            <input
              className='login-password'
              type='password'
              placeholder='Wpisz hasło...'
              name='password'
              value={loggingUser.password}
              onChange={onLoginInputChange}
              required
            />
            <button className='login-submit' type='submit'>
              Zaloguj
            </button>
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
                required
              />
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
                required
              />
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
                required
              />
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
                required
              />
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

export default Login;
