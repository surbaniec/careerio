import {
  GET_JOB_OFFERS,
  GET_COMPANY_JOB_OFFERS,
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
    case GET_COMPANY_JOB_OFFERS:
      return {
        ...state,
        currentJobOffers: action.payload,
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
    case UPDATE_JOB_OFFER:
      return {
        ...state,
        jobOffers: state.jobOffers.map((jobOffer) =>
          jobOffer.id === action.payload.id ? action.payload : jobOffer
        ),
        currentJobOffers: state.currentJobOffers.map((jobOffer) =>
          jobOffer.id === action.payload.id ? action.payload : jobOffer
        ),
        loading: false,
      };
    case DELETE_JOB_OFFER:
      return {
        ...state,
        jobOffers: state.jobOffers.filter(
          (jobOffer) => jobOffer.id !== action.payload
        ),
        currentJobOffers: state.currentJobOffers.filter(
          (jobOffer) => jobOffer.id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_JOBS_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
