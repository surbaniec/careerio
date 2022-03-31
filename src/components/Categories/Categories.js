import React from 'react';
import Category from '../Category/Category';
import './Categories.scss';

const Categories = () => {
  return (
    <section className='categories'>
      <h2 className='categories__title'>Najczęściej wyszukiwane kategorie</h2>
      <div className='categories__wrapper'>
        <Category />
        <Category />
        <Category />
      </div>
    </section>
  );
};

export default Categories;
