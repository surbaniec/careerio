import React from 'react';
import './Home.scss';
import Categories from '../../views/Categories/Categories';
// import JobSearch from '../../components/JobSearch/JobSearch';
import RecommendedJobs from '../../views/Jobs/RecommendedJobs/RecommendedJobs';
import YourActivity from '../../views/YourActivity/YourActivity';
import Advices from '../../views/Advices/Advices';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import CompaniesContext from '../../context/companies/companiesContext';
import JobOffersContext from '../../context/jobOffers/jobOffersContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const companiesContext = useContext(CompaniesContext);
  const jobOffersContext = useContext(JobOffersContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    companiesContext.getCompanies();
    jobOffersContext.getJobOffers();
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className='hero'>
        <h1 className='hero__title'>
          Dzięki nam znajdziesz pracę Twoich marzeń!
        </h1>
        <p className='hero__text'>
          Przygotowaliśmy dla Ciebie <span>124 784</span> oferty pracy!
        </p>
        <Link to='/wyszukiwarka' className='btn hero__btn'>
          Sprawdź
        </Link>
        {/* <JobSearch /> */}
      </section>
      <RecommendedJobs />
      <Categories />
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
      <YourActivity />
      <Advices />
    </>
  );
};

export default Home;
