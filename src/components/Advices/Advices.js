import React from 'react';
import Category from '../Category/Category';
import './Advices.scss';
import { FiBookmark } from 'react-icons/fi';
import Post from '../Post/Post';

const Advices = () => {
  return (
    <section className='advices'>
      <h2 className='advices__title'>Porady dla Ciebie</h2>
      <div className='advices__categories-wrapper'>
        <Category
          categoryName={'Rozmowa kwalifikacyjna'}
          categoryIcon={
            <FiBookmark
              style={{ height: 'auto', width: '15px', marginRight: '5px' }}
            />
          }
        />
        <Category
          categoryName={'Pierwsza praca studenta'}
          categoryIcon={
            <FiBookmark
              style={{ height: 'auto', width: '15px', marginRight: '5px' }}
            />
          }
        />
        <Category
          categoryName={'Życie zawodowe'}
          categoryIcon={
            <FiBookmark
              style={{ height: 'auto', width: '15px', marginRight: '5px' }}
            />
          }
        />
        <Category
          categoryName={'Kariera i rozwój'}
          categoryIcon={
            <FiBookmark
              style={{ height: 'auto', width: '15px', marginRight: '5px' }}
            />
          }
        />
      </div>
      <div className='advices__posts-wrapper'>
        <Post
          imgSrc={'../../assets/article-bg.jpg'}
          title={`Czeka Cię rozmowa o pracę? Rozmowa kwalifikacyjna w...`}
          text={`Rozmowa online jeszcze do niedawna była narzędziem rekrutacyjnym po które....`}
        />
        <Post
          imgSrc={'../../assets/article-bg.jpg'}
          title={`Czeka Cię rozmowa o pracę? Rozmowa kwalifikacyjna w...`}
          text={`Rozmowa online jeszcze do niedawna była narzędziem rekrutacyjnym po które....`}
        />
        <Post
          imgSrc={'../../assets/article-bg.jpg'}
          title={`Czeka Cię rozmowa o pracę? Rozmowa kwalifikacyjna w...`}
          text={`Rozmowa online jeszcze do niedawna była narzędziem rekrutacyjnym po które....`}
        />
        <Post
          imgSrc={'../../assets/article-bg.jpg'}
          title={`Czeka Cię rozmowa o pracę? Rozmowa kwalifikacyjna w...`}
          text={`Rozmowa online jeszcze do niedawna była narzędziem rekrutacyjnym po które....`}
        />
      </div>
    </section>
  );
};

export default Advices;
