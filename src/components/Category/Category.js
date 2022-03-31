import React from 'react';
import './Category.scss';
import { RiStackLine } from 'react-icons/ri';

const Category = () => {
  return (
    <div className='category'>
      <RiStackLine
        style={{ marginRight: '5px', width: '15px', height: '15px' }}
      />
      <h3>Full-stack developer</h3>
    </div>
  );
};

export default Category;
