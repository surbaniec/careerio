import React from 'react';
import './Webinar.scss';

const Webinar = () => {
  return (
    <section className='webinar'>
      <div className='webinar__wrapper'>
        <h2 className='webinar__title'>Wypłyń na morze kariery!</h2>
        <p className='webinar__text'>
          Zapisz się na nasze spotkania online, które pomogą Ci wybrać kariere
          marzeń.
        </p>
        <button className='webinar__btn'>Sprawdź</button>
      </div>
    </section>
  );
};

export default Webinar;
