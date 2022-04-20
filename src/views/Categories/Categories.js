import React from 'react';
import Category from '../../components/Category/Category';
import './Categories.scss';
import { RiStackLine } from 'react-icons/ri';
import { FaChevronRight } from 'react-icons/fa';
import { categories } from '../../data';

const Categories = () => {
  return (
    <section className='categories'>
      <h2 className='categories__title'>Najczęściej wyszukiwane kategorie</h2>
      <div className='categories__wrapper'>
        {categories.map((category) => {
          return (
            <Category
              key={category.categoryId}
              categoryName={category.categoryName}
              categoryIcon={
                <RiStackLine
                  style={{
                    marginRight: '5px',
                    width: '20px',
                    height: 'auto',
                    color: '#575757',
                  }}
                />
              }
            />
          );
        })}
        <button className='categories__btn'>
          <h3>Wszystkie kategorie</h3>
          <FaChevronRight
            style={{ marginLeft: '5px', width: '15px', height: '15px' }}
          />
        </button>
      </div>
    </section>
  );
};

export default Categories;
