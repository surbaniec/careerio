import React from 'react';
import './Category.scss';
import PropTypes from 'prop-types';

const Category = ({ categoryName, categoryIcon }) => {
  return (
    <button className='category'>
      {categoryIcon}
      <h3>{categoryName}</h3>
    </button>
  );
};

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryIcon: PropTypes.object,
};

export default Category;
