import {
  GET_JOB_OFFER,
  GET_JOB_OFFERS,
  ADD_JOB_OFFER,
  UPDATE_JOB_OFFER,
  DELETE_JOB_OFFER,
  FETCH_JOB_OFFERS_SUCCESS,
} from '../actions/types';

const jobOffer = (state = [], action) => {
  switch (action.type) {
    case FETCH_JOB_OFFERS_SUCCESS:
      return action.payload.jobOffers;
    default:
      return state;
  }
};

export default jobOffer;
