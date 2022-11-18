import React, { useReducer } from 'react';
import LocalStorageUserContext from './localStorageUserContext';
import localStorageUserReducer from './localStorageUserReducer';
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../types';
import { useEffect } from 'react';

const getLocalStorage = () => {
  let favourites = localStorage.getItem('favourites');

  if (favourites) {
    return JSON.parse(localStorage.getItem('favourites'));
  } else {
    return [];
  }
};

export const LocalStorageUserState = ({ children }) => {
  const initialState = {
    favourites: getLocalStorage(),
  };

  const [state, dispatch] = useReducer(localStorageUserReducer, initialState);

  // Add to favourites
  const addToFavourites = (
    jobOfferId,
    companyName,
    salaryFrom,
    salaryTo,
    province,
    city,
    logo,
    jobTitle
  ) => {
    dispatch({
      type: ADD_TO_FAVOURITES,
      payload: {
        jobOfferId,
        companyName,
        salaryFrom,
        salaryTo,
        province,
        city,
        logo,
        jobTitle,
      },
    });
  };
  // Remove from favourites
  const removeFromFavourites = (jobOfferId) => {
    dispatch({ type: REMOVE_FROM_FAVOURITES, payload: jobOfferId });
  };

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(state.favourites));
    window.dispatchEvent(new Event('storage'));
    //eslint-disable-next-line
  }, [state.favourites]);

  return (
    <LocalStorageUserContext.Provider
      value={{ ...state, addToFavourites, removeFromFavourites }}
    >
      {children}
    </LocalStorageUserContext.Provider>
  );
};

export default LocalStorageUserState;
