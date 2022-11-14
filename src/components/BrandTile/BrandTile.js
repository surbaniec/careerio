import React from 'react';
import { Link } from 'react-router-dom';
import './BrandTile.scss';

const BrandTile = (company) => {
  const { id, imageUrl, name } = company;
  return (
    <Link to={`/profil-firmy/${id}`} className='brand__link'>
      <div className='brand'>
        <div className='brand__img-wrapper'>
          <img src={imageUrl} alt={name} className='brand__logo' />
        </div>
        <div className='brand__details'>
          <span className='brand__name'>{name}</span>
          <span className='brand__offers'>Oferty pracy: 20</span>
        </div>
      </div>
    </Link>
  );
};

export default BrandTile;
