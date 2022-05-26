import axios from 'axios';
import {
  GET_COMPANY,
  GET_COMPANIES,
  ADD_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
  SET_LOADING,
  FETCH_COMPANIES_SUCCESS,
  COMPANY_ERROR,
} from './types';

//synchronous action creator
const fetchJobOffersSuccess = (companies) => ({
  type: FETCH_COMPANIES_SUCCESS,
  payload: { companies },
});

// asynchronous action creator
export const fetchCompanies = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const companies = await axios(
        'https://careerio.azurewebsites.net/Company'
      );
      const companiesData = await companies.data;
      dispatch(fetchJobOffersSuccess(companiesData));
    } catch (err) {
      dispatch({
        type: COMPANY_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
