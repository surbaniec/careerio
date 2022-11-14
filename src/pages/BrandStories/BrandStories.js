import React, { useRef } from 'react';
import { useContext } from 'react';
import BrandTile from '../../components/BrandTile/BrandTile';
import './BrandStories.scss';
import CompaniesContext from '../../context/companies/companiesContext';
import { useEffect } from 'react';
import { useState } from 'react';

const BrandStories = () => {
  const companiesContext = useContext(CompaniesContext);
  const { companies, getCompanies } = companiesContext;

  const [brands, setBrands] = useState([]);
  const [brandsPage, setBrandsPage] = useState(1);

  const btn = useRef(null);

  useEffect(() => {
    getCompanies();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (companies) {
      loadBrands();
    }
    //eslint-disable-next-line
  }, [companies, brandsPage]);

  const loadBrands = () => {
    const brandsAmount = companies.length;
    const brandsPerPage = 9;

    if (brandsPage * brandsPerPage > brandsAmount + brandsPerPage) {
      btn.current.disabled = true;
      return;
    } else {
      let newBrands = companies.slice(0, brandsPage * brandsPerPage);
      setBrands(newBrands);
    }
  };

  return (
    <section className='brand-stories'>
      <div className='brand-stories__hero'>
        <div className='brand-stories__hero-info'>
          <h2 className='brand-stories__hero-title'>
            Stworzyliśmy dla Ciebie listę firm z branży IT.
          </h2>
          <p className='brand-stories__hero-text'>
            Poznaj firmy, które Cię interesują jeszcze lepiej! Możesz dowiedzieć
            się więcej o <strong>technologiach</strong> wykorzystywanych przez
            daną firmę oraz o panującej <strong>kulturze pracy</strong>.
          </p>
        </div>
        <img
          src='./assets/Campaign_launch_Monochromatic.svg'
          alt='job interview'
          className='brand-stories__hero-img'
        />
      </div>
      <p className='brand-stories__results-text'>
        Wszystkie firmy:{' '}
        <span className='brand-stories__results-count'>
          {companies && companies.length}
        </span>
      </p>
      <div className='brand-stories__results'>
        {brands &&
          brands.map((company, i) => {
            return <BrandTile key={i} {...company} />;
          })}
      </div>
      <button
        ref={btn}
        onClick={() => setBrandsPage(brandsPage + 1)}
        className='brand-stories__btn'
      >
        Załaduj więcej
      </button>
    </section>
  );
};

export default BrandStories;
