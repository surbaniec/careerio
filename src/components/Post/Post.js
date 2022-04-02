import React from 'react';
import './Post.scss';

const Post = ({ imgSrc, title, text }) => {
  return (
    <div className='post'>
      <img className='post__img' src={imgSrc} alt='article background' />
      <div className='post__content'>
        <h2 className='post__title'>{title}</h2>
        <p className='post__text'>{text}</p>
      </div>
    </div>
  );
};

export default Post;
