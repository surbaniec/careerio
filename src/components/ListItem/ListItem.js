import React from 'react';
import './ListItem.scss';
import { IoMdCheckmark } from 'react-icons/io';

const ListItem = () => {
  return (
    <div className='listItem'>
      <div className='listItem__icon-wrapper'>
        <IoMdCheckmark
          style={{ color: '#fff', width: '15px', height: '15px' }}
        />
      </div>
      <div className='listItem__text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        earum explicabo vitae blanditiis distinctio esse eveniet
      </div>
    </div>
  );
};

export default ListItem;
