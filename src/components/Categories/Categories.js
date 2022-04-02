import React from 'react';
import Category from '../Category/Category';
import './Categories.scss';
import { RiStackLine } from 'react-icons/ri';

const Categories = () => {
  return (
    <section className='categories'>
      <h2 className='categories__title'>Najczęściej wyszukiwane kategorie</h2>
      <div className='categories__wrapper'>
        <Category
          categoryName={'Full-stack developer'}
          categoryIcon={
            <RiStackLine
              style={{ marginRight: '5px', height: '20px', width: '20px' }}
            />
          }
        />
        <Category
          categoryName={'Full-stack developer'}
          categoryIcon={
            <RiStackLine
              style={{ marginRight: '5px', height: '20px', width: '20px' }}
            />
          }
        />
        <Category
          categoryName={'Full-stack developer'}
          categoryIcon={
            <RiStackLine
              style={{ marginRight: '5px', height: '20px', width: '20px' }}
            />
          }
        />
      </div>
    </section>
  );
};

export default Categories;
