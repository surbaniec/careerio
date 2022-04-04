import React from 'react';
import Category from '../Category/Category';
import './Categories.scss';
import { RiStackLine } from 'react-icons/ri';
import { FaChevronRight } from 'react-icons/fa';

const Categories = () => {
  return (
    <section className='categories'>
      <h2 className='categories__title'>Najczęściej wyszukiwane kategorie</h2>
      <div className='categories__wrapper'>
        <Category
          categoryName={'Full-stack developer'}
          categoryIcon={
            <RiStackLine
              style={{
                marginRight: '5px',
                height: '20px',
                width: '20px',
                color: '#575757',
              }}
            />
          }
        />
        <Category
          categoryName={'Full-stack developer'}
          categoryIcon={
            <RiStackLine
              style={{
                marginRight: '5px',
                height: '20px',
                width: '20px',
                color: '#575757',
              }}
            />
          }
        />
        <Category
          categoryName={'Full-stack developer'}
          categoryIcon={
            <RiStackLine
              style={{
                marginRight: '5px',
                height: '20px',
                width: '20px',
                color: '#575757',
              }}
            />
          }
        />
        <Category
          categoryName={'Full-stack developer'}
          categoryIcon={
            <RiStackLine
              style={{
                marginRight: '5px',
                height: '20px',
                width: '20px',
                color: '#575757',
              }}
            />
          }
        />
        <button className='categories__btn'>
          <h3>Wszystkie kategorie</h3>
          <FaChevronRight
            style={{ marginLeft: '5px', height: 'auto', width: '15px' }}
          />
        </button>
      </div>
    </section>
  );
};

export default Categories;
