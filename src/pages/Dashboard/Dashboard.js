import React from 'react';
import './Dashboard.scss';
import { Route, Routes } from 'react-router-dom';
import DashboardMenu from '../../layout/DashboardMenu/DashboardMenu';
import {
  DASHBOARD_ADD_OFFER,
  DASHBOARD_COMPANY,
  DASHBOARD_JOB_OFFERS,
} from '../../Routes/routes';
import EmployerOffers from '../EmployerOffers/EmployerOffers';
import EmployersPage from '../EmployersPage/EmployersPage';
import OffersForm from '../OffersForm/OffersForm';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <DashboardMenu />
      <Routes>
        <Route path={DASHBOARD_ADD_OFFER} element={<OffersForm />} />
        <Route path={DASHBOARD_JOB_OFFERS} element={<EmployerOffers />} />
        <Route path={DASHBOARD_COMPANY} element={<EmployersPage />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
