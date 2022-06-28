import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.scss';
import { IoMdCheckmark } from 'react-icons/io';

const ListItem = ({ text }) => {
  return (
    <div className='listItem'>
      <div className='listItem__icon-wrapper'>
        <IoMdCheckmark
          style={{ color: '#fff', width: '15px', height: '15px' }}
        />
      </div>
      <div className='listItem__text'>{text}</div>
    </div>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ListItem;
