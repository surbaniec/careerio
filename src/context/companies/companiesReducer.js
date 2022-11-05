import {
  GET_COMPANIES,
  GET_COMPANY,
  ADD_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
  COMPANY_ERROR,
  CLEAR_COMPANIES_ERRORS,
  SET_CURRENT_COMPANY,
  CLEAR_CURRENT_COMPANY,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
        loading: false,
      };
    case GET_COMPANY:
      return {
        ...state,
        currentCompany: action.payload,
        loading: false,
      };
    case COMPANY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_COMPANY:
      return {
        ...state,
        companies: [action.payload, ...state.companies],
        loading: false,
      };
    case UPDATE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter((company) =>
          company.id === action.payload.id ? action.payload : company
        ),
        loading: false,
      };
    case SET_CURRENT_COMPANY:
      return {
        ...state,
        currentCompany: action.payload,
      };
    case CLEAR_CURRENT_COMPANY:
      return {
        ...state,
        currentCompany: null,
      };
    case CLEAR_COMPANIES_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
