import React, { useReducer } from 'react';
import axios from 'axios';
import CompaniesContext from './companiesContext';
import companiesReducer from './companiesReducer';
import {
  GET_COMPANIES,
  GET_COMPANY,
  ADD_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
  COMPANY_ERROR,
  CLEAR_COMPANIES_ERRORS,
} from '../types';

const CompaniesState = (props) => {
  const initialState = {
    companies: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(companiesReducer, initialState);

  // Get Companies
  const getCompanies = async () => {
    try {
      const res = await axios.get('https://careerio.azurewebsites.net/Company');
      dispatch({ type: GET_COMPANIES, payload: res.data });
    } catch (error) {
      dispatch({ type: COMPANY_ERROR, payload: error });
    }
  };

  // Get Company

  // Add Company

  // Update Company

  // Delete Company

  // Clear Errors

  return (
    <CompaniesContext.Provider
      value={{
        companies: state.companies,
        error: state.error,
        loading: state.loading,
        getCompanies,
      }}
    >
      {props.children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesState;
