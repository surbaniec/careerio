import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <h1 className='hero__title'>
        Dzięki nam znajdziesz pracę Twoich marzeń!
      </h1>
      <p className='hero__text'>
        Przygotowaliśmy dla Ciebie <span>124 784</span> oferty pracy!
      </p>
      <button className='btn hero__btn'>Sprawdź</button>
    </section>
  );
};

export default Hero;
