import React from 'react';
import Advices from '../../components/Advices/Advices';
import Categories from '../../components/Categories/Categories';
import Hero from '../../components/Hero/Hero';
import RecommendedJobs from '../../components/RecommendedJobs/RecommendedJobs';
import Webinar from '../../components/Webinar/Webinar';
import YourActivity from '../../components/YourActivity/YourActivity';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Hero />
      <RecommendedJobs />
      <Categories />
      <Webinar />
      <YourActivity />
      <Advices />
    </>
  );
};

export default Home;
