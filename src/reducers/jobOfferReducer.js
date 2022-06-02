import {
  GET_JOB_OFFER,
  GET_JOB_OFFERS,
  ADD_JOB_OFFER,
  UPDATE_JOB_OFFER,
  DELETE_JOB_OFFER,
  FETCH_JOB_OFFERS_SUCCESS,
  SET_LOADING,
  JOB_OFFERS_ERROR,
} from '../actions/types';

const initialState = {
  jobOffers: [],
  loading: true,
  error: null,
};

const jobOffer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case JOB_OFFERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FETCH_JOB_OFFERS_SUCCESS:
      return { ...state, jobOffers: action.payload.jobOffers, loading: false };
    default:
      return state;
  }
};

export default jobOffer;
