import React, { useReducer } from 'react';
import LocalStorageUserContext from './localStorageUserContext';
import localStorageUserReducer from './localStorageUserReducer';
import {
  ADD_TO_FAVOURITES,
  ADD_TO_RECENTLY_VISITED,
  REMOVE_FROM_FAVOURITES,
} from '../types';
import { useEffect } from 'react';

const getLocalStorage = (name) => {
  let match = localStorage.getItem(name);

  if (match) {
    return JSON.parse(localStorage.getItem(name));
  } else {
    return [];
  }
};

export const LocalStorageUserState = ({ children }) => {
  const initialState = {
    favourites: getLocalStorage('favourites'),
    recentlyVisited: getLocalStorage('recentlyVisited'),
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

  // Add to recently visited
  const addToRecentlyVisited = (
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
      type: ADD_TO_RECENTLY_VISITED,
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
  // Remove from recently visited

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(state.favourites));
    window.dispatchEvent(new Event('storage'));
    localStorage.setItem(
      'recentlyVisited',
      JSON.stringify(state.recentlyVisited)
    );
    //eslint-disable-next-line
  }, [state.favourites, state.recentlyVisited]);

  return (
    <LocalStorageUserContext.Provider
      value={{
        ...state,
        addToFavourites,
        removeFromFavourites,
        addToRecentlyVisited,
      }}
    >
      {children}
    </LocalStorageUserContext.Provider>
  );
};

export default LocalStorageUserState;
