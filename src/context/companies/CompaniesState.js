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
    currentCompany: null,
    loading: true,
    company: null,
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
  const getCompany = async (userId) => {
    try {
      const res = await axios.get(
        `https://careerio.azurewebsites.net/Company/userId=${userId}`
      );
      dispatch({ type: GET_COMPANY, payload: res.data });
    } catch (error) {
      dispatch({ type: COMPANY_ERROR, payload: error });
    }
  };

  // Add Company
  const addCompany = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
      },
    };

    try {
      const res = await axios.post(
        'https://careerio.azurewebsites.net/Company',
        formData,
        config
      );

      dispatch({ type: ADD_COMPANY, payload: res.data });
    } catch (error) {
      dispatch({ type: COMPANY_ERROR, payload: error });
    }
  };
  // Update Company
  const updateCompany = async (companyId, company) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
      },
    };

    try {
      console.log(companyId, company);
      const res = await axios.put(
        `https://careerio.azurewebsites.net/Company/${companyId}`,
        company,
        config
      );

      dispatch({ type: UPDATE_COMPANY, payload: res.data });
    } catch (error) {
      dispatch({ type: COMPANY_ERROR, payload: error });
    }
  };

  // Delete Company

  // Clear Errors

  return (
    <CompaniesContext.Provider
      value={{
        companies: state.companies,
        error: state.error,
        loading: state.loading,
        currentCompany: state.currentCompany,
        getCompanies,
        getCompany,
        addCompany,
        updateCompany,
      }}
    >
      {props.children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesState;
