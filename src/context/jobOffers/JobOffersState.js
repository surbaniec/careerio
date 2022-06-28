import React, { useReducer } from 'react';
import axios from 'axios';
import JobOffersContext from './jobOffersContext';
import jobOffersReducer from './jobOffersReducer';
import {
  GET_JOB_OFFERS,
  GET_JOB_OFFER,
  ADD_JOB_OFFER,
  UPDATE_JOB_OFFER,
  DELETE_JOB_OFFER,
  JOB_OFFERS_ERROR,
  CLEAR_JOBS_ERRORS,
} from '../types';

const JobOffersState = (props) => {
  const initialState = {
    jobOffers: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(jobOffersReducer, initialState);

  // Get Job Offers
  const getJobOffers = async () => {
    try {
      const res = await axios.get(
        'https://careerio.azurewebsites.net/JobOffer'
      );
      dispatch({ type: GET_JOB_OFFERS, payload: res.data });
    } catch (error) {
      dispatch({ type: JOB_OFFERS_ERROR, payload: error });
    }
  };

  // Get Job Offer

  // Add Job Offer

  // Update Job Offer

  // Delete Job Offer

  // Clear Errors

  return (
    <JobOffersContext.Provider
      value={{
        jobOffers: state.jobOffers,
        error: state.error,
        loading: state.loading,
        getJobOffers,
      }}
    >
      {props.children}
    </JobOffersContext.Provider>
  );
};

export default JobOffersState;
