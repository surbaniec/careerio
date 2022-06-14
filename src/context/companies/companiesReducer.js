import {
  GET_COMPANIES,
  GET_COMPANY,
  ADD_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
  COMPANY_ERROR,
  CLEAR_COMPANIES_ERRORS,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'GET_COMPANIES':
      return {
        ...state,
        companies: action.payload,
        loading: false,
      };
    case 'COMPANIES_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
