import {
  GET_COMPANY,
  GET_COMPANIES,
  ADD_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
  FETCH_COMPANIES_SUCCESS,
  SET_LOADING,
  COMPANY_ERROR,
} from '../actions/types';

const initialState = {
  companies: [],
  loading: true,
  error: null,
};

const company = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case COMPANY_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FETCH_COMPANIES_SUCCESS:
      return { ...state, companies: action.payload.companies, loading: false };
    default:
      return state;
  }
};

export default company;
