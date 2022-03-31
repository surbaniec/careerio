import React from 'react';
import Categories from '../../components/Categories/Categories';
import Hero from '../../components/Hero/Hero';
import RecommendedJobs from '../../components/RecommendedJobs/RecommendedJobs';
import Webinar from '../../components/Webinar/Webinar';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Hero />
      <RecommendedJobs />
      <Categories />
      <Webinar />
    </>
  );
};

export default Home;
