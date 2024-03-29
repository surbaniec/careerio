import React, { useReducer } from 'react';
import axios from 'axios';
import JobOffersContext from './jobOffersContext';
import jobOffersReducer from './jobOffersReducer';
import {
  GET_JOB_OFFERS,
  GET_COMPANY_JOB_OFFERS,
  GET_JOB_OFFER,
  ADD_JOB_OFFER,
  DELETE_JOB_OFFER,
  JOB_OFFERS_ERROR,
  CLEAR_JOBS_ERRORS,
} from '../types';
import toast from 'react-hot-toast';

const JobOffersState = (props) => {
  const initialState = {
    jobOffers: [],
    currentJobOffers: [],
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
      dispatch({ type: JOB_OFFERS_ERROR, payload: error.response.data });
    }
  };

  // Get Job Offers from specific company
  const getCompanyJobOffers = async (companyId) => {
    try {
      const res = await axios.get(
        `https://careerio.azurewebsites.net/JobOffer/companyId=${companyId}`
      );
      dispatch({ type: GET_COMPANY_JOB_OFFERS, payload: res.data });
    } catch (error) {
      dispatch({ type: JOB_OFFERS_ERROR, payload: error.response.data });
    }
  };

  // Add Job Offer
  const addJobOffer = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
      },
    };

    try {
      const res = await axios.post(
        'https://careerio.azurewebsites.net/JobOffer',
        formData,
        config
      );

      dispatch({ type: ADD_JOB_OFFER, payload: res.data });
      toast.success('Oferta pracy dodana pomyślnie!');
    } catch (error) {
      if (
        error.response.data ===
        'Brak firmy powiązanej z zalogowanym użytkownikiem'
      ) {
        toast.error('Aby dodać ofertę pracy stwórz profil firmy!');
      } else {
        toast.error('Ups.. coś poszło nie tak!');
      }
      dispatch({ type: JOB_OFFERS_ERROR, payload: error.response });
    }
  };

  // Delete Job Offer
  const deleteJobOffer = async (jobOfferId) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
      },
    };

    try {
      await axios.delete(
        `https://careerio.azurewebsites.net/JobOffer/${jobOfferId}`,
        config
      );
      dispatch({ type: DELETE_JOB_OFFER, payload: jobOfferId });
      toast.success('Usunięto ofertę pracy');
    } catch (error) {
      dispatch({ type: JOB_OFFERS_ERROR, payload: error.response.data });
      toast.error('Ups... coś poszło nie tak!');
    }
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_JOBS_ERRORS });

  return (
    <JobOffersContext.Provider
      value={{
        jobOffers: state.jobOffers,
        currentJobOffers: state.currentJobOffers,
        error: state.error,
        loading: state.loading,
        getJobOffers,
        getCompanyJobOffers,
        deleteJobOffer,
        addJobOffer,
        clearErrors,
      }}
    >
      {props.children}
    </JobOffersContext.Provider>
  );
};

export default JobOffersState;
