import {
  GET_JOB_OFFERS,
  GET_JOB_OFFER,
  ADD_JOB_OFFER,
  UPDATE_JOB_OFFER,
  DELETE_JOB_OFFER,
  JOB_OFFERS_ERROR,
  CLEAR_JOBS_ERRORS,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_JOB_OFFERS:
      return {
        ...state,
        jobOffers: action.payload,
        loading: false,
      };
    case JOB_OFFERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_JOB_OFFER:
      return {
        ...state,
        jobOffers: [action.payload, ...state.jobOffers],
        loading: false,
      };
    default:
      return state;
  }
};
