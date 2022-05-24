import axios from 'axios';
import {
  GET_JOB_OFFER,
  GET_JOB_OFFERS,
  ADD_JOB_OFFER,
  UPDATE_JOB_OFFER,
  DELETE_JOB_OFFER,
  FETCH_JOB_OFFERS_SUCCESS,
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
      const jobOffers = await axios(
        'https://careerio.azurewebsites.net/JobOffer'
      );
      dispatch(fetchJobOffersSuccess(jobOffers));
    } catch (e) {
      console.log(e);
    }
  };
};
