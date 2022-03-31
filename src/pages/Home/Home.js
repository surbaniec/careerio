import React from 'react';
import Categories from '../../components/Categories/Categories';
import Hero from '../../components/Hero/Hero';
import RecommendedJobs from '../../components/RecommendedJobs/RecommendedJobs';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Hero />
      <RecommendedJobs />
      <Categories />
    </>
  );
};

export default Home;
