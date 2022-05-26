import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className='not-found'>
      <img
        className='not-found__img'
        src='../../assets/404.jpg'
        alt='Page Not Found'
      />
      <h2 className='not-found__title'>Page not found</h2>
    </section>
  );
};

export default NotFound;
