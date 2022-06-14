import axios from 'axios';
import {
  GET_JOB_OFFER,
  GET_JOB_OFFERS,
  ADD_JOB_OFFER,
  UPDATE_JOB_OFFER,
  DELETE_JOB_OFFER,
  FETCH_JOB_OFFERS_SUCCESS,
  SET_LOADING,
  JOB_OFFERS_ERROR,
} from './types';

//synchronous action creator
const fetchJobOffersSuccess = (jobOffers) => ({
  type: FETCH_JOB_OFFERS_SUCCESS,
  payload: { jobOffers },
});

// asynchronous action creator
export const fetchJobOffers = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const jobOffers = await axios(
        'https://careerio.azurewebsites.net/JobOffer'
      );
      const jobOffersData = await jobOffers.data;
      dispatch(fetchJobOffersSuccess(jobOffersData));
    } catch (err) {
      dispatch({
        type: JOB_OFFERS_ERROR,
        payload: err,
      });
    }
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
